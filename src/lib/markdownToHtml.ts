import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // This configures remark-html to not sanitize HTML
    .process(markdown);
  return result.toString();
}
