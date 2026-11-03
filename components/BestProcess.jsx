import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { SM } from '@zendeskgarden/react-typography';
import { ProcessWell, Steps, Step, PanelContent, EmptyText } from '../styles/AppStyles';

export function BestProcess({ rule }) {
  if (!rule) {
    return (
      <PanelContent>
        <EmptyText>No process matched. Add tags or update the ticket subject to get a suggestion.</EmptyText>
      </PanelContent>
    );
  }
  return (
    <PanelContent>
      <ProcessWell isRecessed>
        <Tag hue={rule.hue} size="small">Auto-matched: {rule.label}</Tag>
        <Steps size="small">
          {rule.steps.map(function(step, i) {
            return <Step key={i}>{step}</Step>;
          })}
        </Steps>
      </ProcessWell>
    </PanelContent>
  );
}
