import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import rehypePrettyCode from 'rehype-pretty-code';

/**
 * Render a Markdown string to sanitized HTML.
 * Uses remark -> rehype -> rehype-pretty-code -> rehype-sanitize -> stringify.
 *
 * This runs on the server (Astro) and returns a safe HTML string you can
 * pass to Astro's `set:html`.
 */
export async function renderMarkdownToHtml(markdown: string) {
  if (!markdown) return '';

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      // Use a shiki theme name or provide a theme object. "github-dark" is a good default.
      theme: 'github-dark',
      // Keep background if you want code blocks to include background color.
      keepBackground: false,
    })
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
