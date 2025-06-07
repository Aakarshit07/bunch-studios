'use client';

import { sanitizeAndFormatHtml } from './sanitizeAndFormatHtml';

type SafeHtmlRendererProps = {
  htmlContent: string;
};

export default function SafeHtmlRenderer({ htmlContent }: SafeHtmlRendererProps) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: sanitizeAndFormatHtml(htmlContent),
      }}
    />
  );
}
