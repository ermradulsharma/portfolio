/**
 * Transforms raw strings into URL-safe hypenated slugs ensuring data sanctity.
 * @param {string} text Input string to transform.
 * @returns {string} Sanitized lowercase URL segment.
 */
export const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};
