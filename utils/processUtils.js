import { PROCESS_RULES } from '../constants';

export function matchProcess(subject, tags) {
  var text = (subject || '').toLowerCase();
  var ticketTags = (tags || []).map(function(t) { return t.toLowerCase(); });

  for (var i = 0; i < PROCESS_RULES.length; i++) {
    var rule = PROCESS_RULES[i];
    var keywordMatch = rule.keywords.some(function(kw) { return text.includes(kw); });
    var tagMatch = rule.tags.some(function(t) { return ticketTags.includes(t); });
    if (keywordMatch || tagMatch) return rule;
  }
  return null;
}
