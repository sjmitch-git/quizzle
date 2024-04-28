import { parse } from 'node-html-parser';

export const decodeHtmlEntities = (html: string) => {
  const root = parse(html);
  return root.text;
};