window.zafClient = {
  get: function(path) {
    return new Promise(function(resolve) {
      if (path === 'ticket.conversation') {
        resolve({
          'ticket.conversation': [
            {
              attachments: [],
              author: { id: 552, avatar: '', name: 'Taylor Morgan', role: 'end-user' },
              channel: { name: 'web' },
              message: {
                content: 'I was charged twice for my order and need help getting one payment refunded.',
                contentType: 'text/plain'
              },
              timestamp: '2025-08-10T14:32:00Z'
            },
            {
              attachments: [],
              author: { id: 552, avatar: '', name: 'Taylor Morgan', role: 'end-user' },
              channel: { name: 'web' },
              message: {
                content: 'I also checked my bank app and both charges have posted.',
                contentType: 'text/plain'
              },
              timestamp: '2025-08-10T15:10:00Z'
            }
          ]
        });
      } else if (path === 'ticket.tags') {
        resolve({ 'ticket.tags': ['refund', 'billing'] });
      } else if (path === 'ticket.isNew') {
        resolve({ 'ticket.isNew': true });
      } else {
        resolve({});
      }
    });
  },
  metadata: function() {
    return new Promise(function(resolve) {
      resolve({ appId: 1, name: 'KB Guide', settings: {} });
    });
  },
  set: function(path, value) {
    return new Promise(function(resolve) { resolve('x'); });
  },
  request: function(options) {
    return new Promise(function(resolve) {
      if (options.url && options.url.indexOf('/api/v2/help_center/categories') > -1) {
        resolve({ categories: [{ id: 42, name: 'Agent Knowledge Base', locale: 'en-us', description: '', position: 1 }] });
      } else if (options.url && options.url.indexOf('help_center/articles/search') > -1) {
        resolve({
          results: [
            { id: 1, title: 'Refund Policy Overview', html_url: 'https://example.zendesk.com/hc/en-us/articles/1', snippet: 'Review the <em>30-day</em> return window and items excluded from refunds.', updated_at: new Date(Date.now() - 86400000).toISOString(), label_names: ['Returns', 'Policies'] },
            { id: 2, title: 'How to Process a Refund', html_url: 'https://example.zendesk.com/hc/en-us/articles/2', snippet: 'Step-by-step guide for processing customer <em>refunds</em> in the admin portal.', updated_at: new Date(Date.now() - 2 * 86400000).toISOString(), label_names: ['Returns'] },
            { id: 3, title: 'Partial Refund Scenarios', html_url: 'https://example.zendesk.com/hc/en-us/articles/3', snippet: 'Guidance for partial shipments, discounts, and damaged items.', updated_at: new Date(Date.now() - 7 * 86400000).toISOString(), label_names: ['Refunds'] },
            { id: 4, title: 'Refund Email Templates', html_url: 'https://example.zendesk.com/hc/en-us/articles/4', snippet: 'Approved customer update templates for pending and completed refunds.', updated_at: new Date(Date.now() - 10 * 86400000).toISOString(), label_names: ['Templates'] },
            { id: 5, title: 'Managing Chargeback Claims', html_url: 'https://example.zendesk.com/hc/en-us/articles/5', snippet: 'How to handle chargeback disputes and escalations.', updated_at: new Date(Date.now() - 3 * 86400000).toISOString(), label_names: ['Payments'] },
            { id: 6, title: 'Fraud Prevention Checklist', html_url: 'https://example.zendesk.com/hc/en-us/articles/6', snippet: 'Steps for identifying and preventing payment fraud.', updated_at: new Date(Date.now() - 7 * 86400000).toISOString(), label_names: ['Risk'] },
            { id: 7, title: 'Escalation to Finance Team', html_url: 'https://example.zendesk.com/hc/en-us/articles/7', snippet: 'When and how to escalate billing issues to the finance team.', updated_at: new Date(Date.now() - 14 * 86400000).toISOString(), label_names: ['Escalations'] }
          ]
        });
      } else {
        resolve({ results: [] });
      }
    });
  },
  invoke: function(action, options) {
    if (action === 'resize') return Promise.resolve();
    return new Promise(function(resolve) { resolve('x'); });
  }
};
