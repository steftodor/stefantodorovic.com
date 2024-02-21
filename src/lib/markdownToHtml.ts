import { remark } from 'remark';
import html from 'remark-html';
import slug from 'remark-slug'; // Import remark-slug

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug) // Use remark-slug to add IDs to headings
    .use(html, { sanitize: false }) // This configures remark-html to not sanitize HTML
    .process(markdown);
  return result.toString();
}
