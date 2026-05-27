// Content negotiation: return /llms.md when Accept: text/markdown is requested.
// Passes through all other requests unchanged.
export default async (request, context) => {
  const url = new URL(request.url)

  // Only negotiate HTML routes — skip assets, static files, and llms.md itself
  if (/\.(js|css|png|jpg|jpeg|svg|ico|woff2?|ttf|eot|json|xml|txt|md|map|html)(\?.*)?$/.test(url.pathname)) {
    return context.next()
  }

  const accept = request.headers.get('Accept') || ''
  if (!accept.includes('text/markdown')) {
    return context.next()
  }

  try {
    const mdUrl = new URL('/llms.md', url.origin)
    const response = await fetch(mdUrl.toString())
    if (!response.ok) return context.next()

    const text = await response.text()
    return new Response(text, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'X-Markdown-Source': 'llms.md',
      },
    })
  } catch {
    return context.next()
  }
}
