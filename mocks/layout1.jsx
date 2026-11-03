import React from 'react';
import { Anchor, Button } from '@zendeskgarden/react-buttons';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Tag } from '@zendeskgarden/react-tags';
import { MD, SM, UnorderedList } from '@zendeskgarden/react-typography';
import { Well } from '@zendeskgarden/react-notifications';
import { getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const Surface = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  background: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
`;

const ProcessWell = styled(Well)`
  padding: 12px;
  margin: 0;
  border: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
  border-radius: 4px;
  background: ${p => getColor({ theme: p.theme, variable: 'background.raised' })};
`;

const ProcessHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  margin-bottom: 8px;
`;

const ProcessTitle = styled(MD)`
  min-width: 0;
  font-weight: 600;
`;

const Steps = styled(UnorderedList)`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    margin: 0;
    padding: 4px 0 4px 20px;
    line-height: 1.35;
  }

  li::before {
    content: '□';
    position: absolute;
    left: 0;
    top: 4px;
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 16px 0;
  background: ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
`;

const SectionHeading = styled(MD)`
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
`;

const ArticleList = styled.div`
  width: 100%;
`;

const ArticleRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};

  &:last-child {
    border-bottom: 0;
  }
`;

const ArticleCopy = styled.div`
  flex: 1;
  min-width: 0;
`;

const ArticleLink = styled(Anchor)`
  display: block;
  line-height: 1.3;
  text-decoration: none;
`;

const ArticleExcerpt = styled(SM)`
  display: block;
  margin-top: 2px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  line-height: 1.3;
`;

const ArticleMeta = styled(SM)`
  display: block;
  margin-top: 2px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const CategoryTag = styled(Tag)`
  flex: 0 0 auto;
  margin-top: 1px;
`;

const SearchArea = styled.div`
  margin-top: 12px;
`;

const SearchLabel = styled(SM)`
  display: block;
  margin-bottom: 4px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const articles = [
  {
    title: 'How to Reset a Customer Password',
    excerpt: 'Verify the requester before issuing a secure reset link.',
    category: 'Security',
    id: 'password-reset'
  },
  {
    title: 'SSO Troubleshooting Guide',
    excerpt: 'Check identity provider settings and recent sign-in errors.',
    category: 'SSO',
    id: 'sso-troubleshooting'
  },
  {
    title: 'MFA Setup for End Users',
    excerpt: 'Help customers enroll a device and recover access.',
    category: 'MFA',
    id: 'mfa-setup'
  },
  {
    title: 'Account Recovery Options',
    excerpt: 'Review approved recovery paths when email access is lost.',
    category: 'Security',
    id: 'account-recovery'
  }
];

const App = () => (
  <Surface>
    <ProcessWell>
      <ProcessHeading>
        <ProcessTitle>Password Reset — Best Process</ProcessTitle>
        <Tag hue="green" size="small">Pinned</Tag>
      </ProcessHeading>
      <Steps size="small">
        <UnorderedList.Item>Verify requester identity via phone</UnorderedList.Item>
        <UnorderedList.Item>Confirm account email matches</UnorderedList.Item>
        <UnorderedList.Item>Send reset link via secure channel</UnorderedList.Item>
        <UnorderedList.Item>Log action in internal notes</UnorderedList.Item>
      </Steps>
    </ProcessWell>

    <Divider />

    <section aria-label="Suggested articles">
      <SectionHeading>Suggested Articles</SectionHeading>
      <ArticleList>
        {articles.map(article => (
          <ArticleRow key={article.id}>
            <ArticleCopy>
              <ArticleLink href={`#${article.id}`} isUnderlined={false}>
                {article.title}
              </ArticleLink>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ArticleMeta>Updated 2 days ago · Help Center</ArticleMeta>
            </ArticleCopy>
            <CategoryTag hue="grey" size="small" isRegular>{article.category}</CategoryTag>
          </ArticleRow>
        ))}
      </ArticleList>
    </section>

    <SearchArea>
      <Field>
        <Field.Label isRegular>
          <SearchLabel>Search knowledge base</SearchLabel>
        </Field.Label>
        <Input isCompact placeholder="Search articles or keywords" />
      </Field>
      <ActionRow>
        <Button size="small" isBasic>Search KB</Button>
      </ActionRow>
    </SearchArea>
  </Surface>
);

export default App;
