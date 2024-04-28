import { parse } from 'node-html-parser'

export const decodeHtmlEntities = (html: string) => {
	if (!html) return ''
	const root = parse(html)
	return root.text
}
