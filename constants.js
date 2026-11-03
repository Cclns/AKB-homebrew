export const PROCESS_RULES = [
  {
    keywords: ['refund', 'return', 'money back'],
    tags: ['refund', 'return'],
    label: 'Refund Request',
    hue: 'green',
    steps: [
      'Acknowledge the request and clarify which order or items are involved',
      'Verify the customer using the approved account-verification process',
      'Locate the order and confirm its status, purchase date, and payment method',
      'Review the current refund policy for the item, region, and purchase channel',
      'Check eligibility, deadlines, exclusions, and any return or inspection requirements',
      'Confirm the requested amount and calculate eligible item, tax, shipping, or partial-refund amounts',
      'Check whether the refund needs approval and obtain it before proceeding',
      'Process the approved refund in the authorized billing system',
      'Record the amount, reason, transaction reference, and any return-tracking details in the ticket',
      'Tell the customer what was refunded, where it will be returned, and the expected processing time',
      'Set a follow-up reminder or ticket status if the return or payment is still pending',
      'Confirm the case is documented and resolve it only when the next action is clear'
    ]
  },
  {
    keywords: ['billing', 'invoice', 'charge', 'payment', 'subscription'],
    tags: ['billing', 'payment', 'subscription'],
    label: 'Billing Issue',
    hue: 'blue',
    steps: [
      'Acknowledge the issue and identify the invoice, charge, subscription, or payment in question',
      'Verify the customer and the account using the approved verification process',
      'Confirm the account, billing period, currency, and payment method',
      'Compare the reported amount and date with the invoice and transaction history',
      'Check for duplicate charges, prorations, taxes, plan changes, credits, or pending authorizations',
      'Review applicable billing terms and confirm whether the charge is settled or still pending',
      'Ask for only the additional evidence needed, and never request full payment-card details',
      'Correct the account or transaction only within your authorization and approved procedures',
      'Route disputed, suspicious, or out-of-scope charges to the billing or risk team with evidence',
      'Document findings, actions, amounts, and any internal reference in the ticket',
      'Explain the result and any next steps or expected timing in clear terms',
      'Keep the ticket pending with a specific follow-up plan if another team or payment event is outstanding'
    ]
  },
  {
    keywords: ['bug', 'error', 'broken', 'not working', 'crash', 'fail'],
    tags: ['bug', 'technical', 'error'],
    label: 'Technical Issue',
    hue: 'red',
    steps: [
      'Acknowledge the impact and establish what the customer was trying to do',
      'Check for a known incident, service status notice, or existing problem ticket',
      'Ask for exact reproduction steps, expected behavior, and actual behavior',
      'Record when the issue began, how often it occurs, and whether it affects other users',
      'Collect relevant product version, browser or device, operating system, and error text',
      'Request screenshots or logs only when appropriate, and ask the customer to remove sensitive data',
      'Check account permissions, configuration, and recent changes that could explain the behavior',
      'Try the documented safe troubleshooting steps and record each result',
      'Avoid asking the customer to repeat steps that could delete data or disrupt their service',
      'Assess urgency and business impact using the support escalation criteria',
      'Escalate reproducible or high-impact issues with evidence, steps, and affected scope',
      'Tell the customer what is known, what is being investigated, and when the next update is due',
      'Track the investigation and send updates at the agreed cadence',
      'Confirm the fix or workaround with the customer and document the resolution'
    ]
  },
  {
    keywords: ['cancel', 'cancellation', 'downgrade', 'unsubscribe'],
    tags: ['cancellation', 'churn'],
    label: 'Cancellation Request',
    hue: 'yellow',
    steps: [
      'Acknowledge the request and confirm whether it concerns a subscription, order, or service',
      'Verify the customer and account using the approved process',
      'Clarify the requested cancellation date and whether the customer intends a full cancellation or plan change',
      'Ask for the reason only when useful, without delaying a clear cancellation request',
      'Review the current terms for notice periods, renewal dates, fees, and refund eligibility',
      'Explain any impact on access, stored data, connected services, or remaining commitments',
      'Offer relevant alternatives only when appropriate and without obstructing the requested action',
      'Confirm authorization and obtain any required account-owner approval',
      'Submit the cancellation or change through the authorized system',
      'Record the effective date, confirmation reference, and any remaining actions in the ticket',
      'Tell the customer what changes, when they take effect, and whether any action is still required',
      'Set a follow-up for any pending cancellation or final billing event, then close when complete'
    ]
  },
  {
    keywords: ['shipping', 'delivery', 'tracking', 'package', 'order', 'dispatch'],
    tags: ['shipping', 'delivery', 'order'],
    label: 'Shipping and Delivery',
    hue: 'green',
    steps: [
      'Acknowledge the concern and confirm the order and items involved',
      'Verify the customer and order using the approved process',
      'Confirm the delivery address on file without exposing unnecessary personal details',
      'Check fulfillment status, dispatch date, carrier, and tracking number',
      'Compare tracking events with the promised delivery window and current carrier updates',
      'Check for address issues, delivery attempts, customs holds, weather delays, or split shipments',
      'For a delivered-but-missing package, confirm the delivery location and follow the investigation policy',
      'Contact or escalate to the carrier or fulfillment team when the status is stalled or inconsistent',
      'Review eligibility for replacement, reshipment, or refund before promising an outcome',
      'Record tracking details, investigation references, and the next expected update in the ticket',
      'Give the customer a clear status and a realistic next-update time',
      'Follow up on the carrier or warehouse response and confirm the final outcome with the customer'
    ]
  },
  {
    keywords: ['password', 'login', 'access', 'locked', 'account', 'sign in'],
    tags: ['access', 'account', 'login'],
    label: 'Account Access',
    hue: 'blue',
    steps: [
      'Acknowledge the access problem and identify the affected account and sign-in method',
      'Verify the customer using the approved identity-verification process before account changes',
      'Clarify the exact error, when it began, and whether other authorized users are affected',
      'Check account status, lockout indicators, permissions, and any known service issues',
      'Confirm the customer is using the correct sign-in page, email address, and identity provider',
      'Use only approved recovery steps, such as a password reset or unlock workflow',
      'Never request or record the customer’s password, one-time code, or recovery secret',
      'For single sign-on or multi-factor issues, collect safe diagnostic details and route to the right team',
      'Escalate suspected account compromise immediately through the security process',
      'Document the checks and actions without including credentials or authentication codes',
      'Ask the customer to retry securely and confirm whether access is restored',
      'If unresolved, agree on the next action and update time before leaving the ticket pending'
    ]
  }
];

export const MAX_SUGGESTIONS = 4;
export const MAX_RELATED = 3;
export const TARGET_KB_CATEGORY = 'Agent Knowledge Base';
