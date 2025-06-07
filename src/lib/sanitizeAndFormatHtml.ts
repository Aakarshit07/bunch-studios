import DOMPurify from 'dompurify';

export function sanitizeAndFormatHtml(raw: string): string {
  if (!raw) return '';

  // Normalize uppercase tags to lowercase
  const normalized = raw.replace(/<\/?([A-Z]+)([^>]*)>/g, (_, tag, attrs) => {
    return `<${tag.toLowerCase()}${attrs}>`;
  });

  // Convert double newlines to paragraph breaks and single newlines to <br>
  const formatted = normalized
    .trim()
    .split(/\n\s*\n/)
    .map(paragraph => `<p>${paragraph.trim().replace(/\n/g, '<br>')}</p>`)
    .join('');

  return DOMPurify.sanitize(formatted, { USE_PROFILES: { html: true } });
}
