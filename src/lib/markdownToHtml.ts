import { remark } from 'remark';
import html from 'remark-html';
import rehypeSlug from 'rehype-slug'


export default async function markdownToHtml(markdown: string) {
  const result = await remark()
  .use(rehypeSlug)
      .use(html, { sanitize: false }) // This configures remark-html to not sanitize HTML
    .process(markdown);
  return result.toString();
}
