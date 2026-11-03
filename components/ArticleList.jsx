import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { Spinner } from '@zendeskgarden/react-loaders';
import {
  ResultList,
  ResultRow,
  ResultTitle,
  Excerpt,
  MetaLine,
  Metadata,
  EmptyText,
  LoadingWrap,
  PanelContent
} from '../styles/AppStyles';
import { formatDate, stripHtml } from '../utils/kbApi';

export function ArticleList({ articles, loading, showExcerpt, emptyMessage }) {
  if (loading) {
    return (
      <PanelContent>
        <LoadingWrap><Spinner size={24} aria-label="Loading articles" /></LoadingWrap>
      </PanelContent>
    );
  }
  if (!articles || articles.length === 0) {
    return (
      <PanelContent>
        <EmptyText>{emptyMessage || 'No articles found.'}</EmptyText>
      </PanelContent>
    );
  }
  return (
    <PanelContent>
      <ResultList>
        {articles.map(function(article, i) {
          var excerpt = stripHtml(article.snippet || '');
          var label = (article.label_names && article.label_names.length > 0) ? article.label_names[0] : null;
          return (
            <ResultRow key={article.id || i}>
              <ResultTitle
                href={article.html_url}
                target="_blank"
                rel="noopener noreferrer"
                isUnderlined={false}
              >
                {article.title}
              </ResultTitle>
              {showExcerpt && excerpt && (
                <Excerpt>{excerpt}</Excerpt>
              )}
              <MetaLine>
                <Metadata>{formatDate(article.updated_at)}</Metadata>
                {label && (
                  <Tag hue="grey" size="small" isRegular>{label}</Tag>
                )}
              </MetaLine>
            </ResultRow>
          );
        })}
      </ResultList>
    </PanelContent>
  );
}
