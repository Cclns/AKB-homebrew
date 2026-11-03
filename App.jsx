import React, { useState, useEffect, useCallback } from 'react';
import { Accordion } from '@zendeskgarden/react-accordions';
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Input } from '@zendeskgarden/react-forms';
import {
  Sidebar,
  ContextLine,
  SearchRow,
  SearchFieldWrap,
  ErrorText
} from './styles/AppStyles';
import { BestProcess } from './components/BestProcess';
import { ArticleList } from './components/ArticleList';
import { searchArticles, stripHtml } from './utils/kbApi';
import { matchProcess } from './utils/processUtils';
import { MAX_SUGGESTIONS, MAX_RELATED } from './constants';

function selectCustomerMessage(conversation, isNewTicket) {
  var messages = (Array.isArray(conversation) ? conversation : []).filter(function(entry) {
    var content = entry && entry.message && entry.message.content;
    return entry && entry.author && entry.author.role === 'end-user' && content && content.trim();
  });
  if (!messages.length) return '';

  var selected = messages[0];
  if (!isNewTicket) {
    messages.forEach(function(entry) {
      if (new Date(entry.timestamp).getTime() > new Date(selected.timestamp).getTime()) {
        selected = entry;
      }
    });
  }
  return stripHtml(selected.message.content).trim();
}

function truncateText(text, limit) {
  return text.length > limit ? text.slice(0, limit) + '\u2026' : text;
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [related, setRelated] = useState([]);
  const [processRule, setProcessRule] = useState(null);
  const [expandedSections, setExpandedSections] = useState([0]);
  const [searchInput, setSearchInput] = useState('');
  const [contextLabel, setContextLabel] = useState('Suggestions matched to the customer message');

  const runSearch = useCallback(async function(query) {
    setLoading(true);
    setError(null);
    try {
      var articles = await searchArticles(query);
      setSuggestions(articles.slice(0, MAX_SUGGESTIONS));
      setRelated(articles.slice(MAX_SUGGESTIONS, MAX_SUGGESTIONS + MAX_RELATED));
    } catch (err) {
      setError('Could not load KB articles: ' + JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(function() {
    async function init() {
      try {
        var results = await Promise.all([
          window.zafClient.get('ticket.conversation'),
          window.zafClient.get('ticket.tags'),
          window.zafClient.get('ticket.isNew')
        ]);
        var customerMessage = selectCustomerMessage(
          results[0]['ticket.conversation'],
          results[2]['ticket.isNew']
        );
        var tags = results[1]['ticket.tags'] || [];
        setProcessRule(matchProcess(customerMessage, tags));
        if (customerMessage) {
          setContextLabel('Suggestions matched to: \u201c' + truncateText(customerMessage, 45) + '\u201d');
          await runSearch(customerMessage);
        } else {
          setLoading(false);
          setContextLabel('No customer message available for suggestions');
        }
      } catch (err) {
        setError('Could not load ticket data: ' + JSON.stringify(err));
        setLoading(false);
      }
    }
    init();
  }, [runSearch]);

  function handleSearch() {
    if (!searchInput.trim()) return;
    setContextLabel('Results for: \u201c' + truncateText(searchInput.trim(), 45) + '\u201d');
    runSearch(searchInput.trim());
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSearch();
  }

  function handleSectionChange(index) {
    setExpandedSections(function(prev) {
      return prev.includes(index)
        ? prev.filter(function(i) { return i !== index; })
        : prev.concat([index]);
    });
  }

  return (
    <Sidebar>
      <SearchRow>
        <SearchFieldWrap>
          <Field>
            <Field.Label isHidden>Search KB</Field.Label>
            <Input
              isCompact
              value={searchInput}
              onChange={function(e) { setSearchInput(e.target.value); }}
              onKeyDown={handleKeyDown}
              placeholder="Search knowledge base..."
            />
          </Field>
        </SearchFieldWrap>
        <Button size="small" isPrimary onClick={handleSearch}>Go</Button>
      </SearchRow>
      <ContextLine>{contextLabel}</ContextLine>
      {error && <ErrorText>{error}</ErrorText>}
      <Accordion
        isCompact
        isExpandable
        level={3}
        expandedSections={expandedSections}
        onChange={handleSectionChange}
      >
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Best Process</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            <BestProcess rule={processRule} />
          </Accordion.Panel>
        </Accordion.Section>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Top Suggestions</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            <ArticleList
              articles={suggestions}
              loading={loading}
              showExcerpt
              emptyMessage="No matching articles found."
            />
          </Accordion.Panel>
        </Accordion.Section>
        <Accordion.Section>
          <Accordion.Header>
            <Accordion.Label>Related Articles</Accordion.Label>
          </Accordion.Header>
          <Accordion.Panel>
            <ArticleList
              articles={related}
              loading={loading}
              emptyMessage="No related articles found."
            />
          </Accordion.Panel>
        </Accordion.Section>
      </Accordion>
    </Sidebar>
  );
};

export default App;
