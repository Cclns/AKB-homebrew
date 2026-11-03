import React from 'react';
import styled from 'styled-components';
import { Tabs } from '@zendeskgarden/react-tabs';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Anchor, Button } from '@zendeskgarden/react-buttons';
import { Tag } from '@zendeskgarden/react-tags';
import { Well } from '@zendeskgarden/react-notifications';
import { MD, SM } from '@zendeskgarden/react-typography';
import { OrderedList } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

const Sidebar = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  background: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
  overflow-wrap: anywhere;

  *, *::before, *::after { box-sizing: border-box; }
`;

const ContentPanel = styled.div`
  padding-top: 12px;
  min-width: 0;
`;

const SearchField = styled(Field)`
  margin: 0 0 12px;
  min-width: 0;
`;

const SearchInput = styled(Input)`
  width: 100%;
  max-width: 100%;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Article = styled.div`
  padding: 10px 0 11px;
  border-bottom: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
  min-width: 0;

  &:first-child { padding-top: 2px; }
  &:last-child { border-bottom: 0; }
`;

const ArticleHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

const ArticleLink = styled(Anchor)`
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const CategoryTag = styled(Tag)`
  flex: 0 0 auto;
`;

const ArticleMeta = styled(SM)`
  display: block;
  margin-top: 3px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const Excerpt = styled(SM)`
  display: block;
  margin-top: 4px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  line-height: 1.35;
`;

const ProcessWell = styled(Well)`
  padding: 12px;
`;

const ProcessTitle = styled(Well.Title)`
  margin: 0;
`;

const StepList = styled(OrderedList)`
  margin: 10px 0 0;
  padding-left: 23px;

  li {
    padding-left: 3px;
    margin: 0 0 9px;
    line-height: 1.4;
  }

  li:last-child { margin-bottom: 0; }
`;

const ProcessAction = styled.div`
  margin-top: 16px;
`;

const articles = [
  {
    title: 'Handling Billing Dispute Tickets',
    href: '#handling-billing-disputes',
    meta: '3h ago · Billing',
    category: 'Billing',
    excerpt: 'Verify the charge and confirm the customer’s dispute reason before replying.'
  },
  {
    title: 'Refund Policy — Agent Guide',
    href: '#refund-policy-agent-guide',
    meta: '1 day ago · Payments',
    category: 'Payments',
    excerpt: 'Review eligibility, processing times, and the correct refund path.'
  },
  {
    title: 'Escalation Matrix 2024',
    href: '#escalation-matrix',
    meta: 'Yesterday · Escalations',
    category: 'Escalations',
    excerpt: 'Find the right team and escalation threshold for complex billing cases.'
  },
  {
    title: 'Using Macros for Common Replies',
    href: '#using-macros',
    meta: '5 days ago · Productivity',
    category: 'Productivity',
    excerpt: 'Choose an approved macro and personalize it with the ticket details.'
  }
];

const App = () => (
  <Sidebar>
    <Tabs defaultSelectedItem="suggested">
      <Tabs.TabList aria-label="Knowledge base views">
        <Tabs.Tab item="suggested">Suggested (4)</Tabs.Tab>
        <Tabs.Tab item="process">Best Process</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel item="suggested">
        <ContentPanel>
          <SearchField>
            <Field.Label isHidden>Search knowledge base</Field.Label>
            <SearchInput isCompact placeholder="Search KB…" />
          </SearchField>
          <ArticleList>
            {articles.map(article => (
              <Article key={article.href}>
                <ArticleHeading>
                  <ArticleLink href={article.href} title={article.title}>
                    <MD isBold>{article.title}</MD>
                  </ArticleLink>
                  <CategoryTag hue="blue" size="small" isRegular>{article.category}</CategoryTag>
                </ArticleHeading>
                <ArticleMeta>{article.meta}</ArticleMeta>
                <Excerpt>{article.excerpt}</Excerpt>
              </Article>
            ))}
          </ArticleList>
        </ContentPanel>
      </Tabs.TabPanel>

      <Tabs.TabPanel item="process">
        <ContentPanel>
          <ProcessWell isRecessed>
            <ProcessTitle>
              <MD isBold>Billing Dispute — Best Process</MD>
            </ProcessTitle>
            <StepList>
              <OrderedList.Item>Review transaction history in CRM</OrderedList.Item>
              <OrderedList.Item>Check dispute window — must be within 60 days</OrderedList.Item>
              <OrderedList.Item>Apply macro: Billing Dispute Acknowledged</OrderedList.Item>
              <OrderedList.Item>Escalate to Finance if &gt;$500</OrderedList.Item>
              <OrderedList.Item>Set ticket to Pending and notify requester</OrderedList.Item>
            </StepList>
          </ProcessWell>
          <ProcessAction>
            <Button isPrimary isStretched size="small">Push to Reply</Button>
          </ProcessAction>
        </ContentPanel>
      </Tabs.TabPanel>
    </Tabs>
  </Sidebar>
);

export default App;
