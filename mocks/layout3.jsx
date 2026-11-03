import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Accordion } from '@zendeskgarden/react-accordions';
import { Well } from '@zendeskgarden/react-notifications';
import { Anchor, Button } from '@zendeskgarden/react-buttons';
import { Tag } from '@zendeskgarden/react-tags';
import { OrderedList, SM } from '@zendeskgarden/react-typography';

const Sidebar = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 12px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  background: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
`;

const ContextLine = styled(SM)`
  display: block;
  margin: 0 0 12px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const PanelContent = styled.div`
  min-width: 0;
  padding: 4px 0 8px;
`;

const ProcessWell = styled(Well)`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
`;

const Steps = styled(OrderedList)`
  margin: 10px 0 0;
  padding-left: 22px;
`;

const Step = styled(OrderedList.Item)`
  margin: 0 0 7px;
  padding-left: 1px;
  &:last-child { margin-bottom: 0; }
`;

const ResultList = styled.div`
  width: 100%;
  min-width: 0;
`;

const ResultRow = styled.div`
  box-sizing: border-box;
  min-width: 0;
  padding: 9px 0;
  border-bottom: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
  &:last-child { border-bottom: 0; }
`;

const ResultTitle = styled(Anchor)`
  display: block;
  max-width: 100%;
  overflow-wrap: anywhere;
  line-height: 1.35;
`;

const Excerpt = styled(SM)`
  display: block;
  margin-top: 3px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
  line-height: 1.35;
`;

const MetaLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const Metadata = styled(SM)`
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const suggestions = [
  {
    title: 'Refund Policy Overview',
    href: '#refund-policy',
    excerpt: 'Review the 30-day return window and items excluded from refunds.'
  },
  {
    title: 'Processing Returns in Shopify',
    href: '#shopify-returns',
    excerpt: 'Create a return, record the reason, and issue the refund in Shopify.'
  },
  {
    title: 'Partial Refund Scenarios',
    href: '#partial-refunds',
    excerpt: 'Guidance for partial shipments, discounts, and damaged items.'
  },
  {
    title: 'Refund Email Templates',
    href: '#refund-email-templates',
    excerpt: 'Use approved customer updates for pending and completed refunds.'
  }
];

const related = [
  { title: 'Managing Chargeback Claims', href: '#chargeback-claims', meta: 'Payments · Updated 3 days ago' },
  { title: 'Fraud Prevention Checklist', href: '#fraud-prevention', meta: 'Risk · Updated last week' },
  { title: 'Escalation to Finance Team', href: '#finance-escalation', meta: 'Escalations · Updated 2 weeks ago' }
];

const App = () => (
  <Sidebar>
    <ContextLine>Suggestions matched to the ticket subject and description</ContextLine>
    <Accordion isCompact level={3} defaultExpandedSections={[0]}>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Best Process</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          <PanelContent>
            <ProcessWell isRecessed>
              <Tag hue="green" size="small">Auto-matched: Refund Request</Tag>
              <Steps size="small">
                <Step>Confirm order number and purchase date</Step>
                <Step>Check refund eligibility — within 30 days</Step>
                <Step>Apply macro: Refund Initiated</Step>
                <Step>Update ticket status to Pending</Step>
              </Steps>
            </ProcessWell>
          </PanelContent>
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Top Suggestions</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          <PanelContent>
            <ResultList>
              {suggestions.map(article => (
                <ResultRow key={article.href}>
                  <ResultTitle href={article.href} isUnderlined={false}>{article.title}</ResultTitle>
                  <Excerpt>{article.excerpt}</Excerpt>
                  <MetaLine>
                    <Metadata>Updated yesterday</Metadata>
                    <Tag hue="grey" size="small" isRegular>Returns</Tag>
                  </MetaLine>
                </ResultRow>
              ))}
            </ResultList>
          </PanelContent>
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Related Articles</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          <PanelContent>
            <ResultList>
              {related.map(article => (
                <ResultRow key={article.href}>
                  <ResultTitle href={article.href} isUnderlined={false}>{article.title}</ResultTitle>
                  <MetaLine><Metadata>{article.meta}</Metadata></MetaLine>
                </ResultRow>
              ))}
            </ResultList>
          </PanelContent>
        </Accordion.Panel>
      </Accordion.Section>
    </Accordion>
    <Footer>
      <Button size="small" isBasic>Search KB</Button>
    </Footer>
  </Sidebar>
);

export default App;
