import { TARGET_KB_CATEGORY } from '../constants';

export async function searchArticles(query) {
  if (!query || !query.trim()) return [];
  const categoryResponse = await window.zafClient.request({
    url: '/api/v2/help_center/categories',
    type: 'GET'
  });
  const categories = categoryResponse.categories || [];
  const targetCategory = categories.find(function(category) {
    return category.name === TARGET_KB_CATEGORY;
  });
  if (!targetCategory || !targetCategory.id) {
    throw new Error('Help Center category not found or has no ID: ' + TARGET_KB_CATEGORY);
  }
  const response = await window.zafClient.request({
    url: '/api/v2/help_center/articles/search',
    type: 'GET',
    data: {
      query: query.trim(),
      category: targetCategory.id,
      per_page: 10
    }
  });
  return Array.isArray(response.results) ? response.results : [];
}

export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Updated today';
    if (diffDays === 1) return 'Updated yesterday';
    if (diffDays < 7) return 'Updated ' + diffDays + ' days ago';
    if (diffDays < 14) return 'Updated last week';
    if (diffDays < 30) return 'Updated ' + Math.floor(diffDays / 7) + ' weeks ago';
    if (diffDays < 60) return 'Updated last month';
    return 'Updated ' + Math.floor(diffDays / 30) + ' months ago';
  } catch (e) {
    return '';
  }
}
