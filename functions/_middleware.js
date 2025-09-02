export async function onRequest(context) {
  const response = await context.next()
  
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('Content-Security-Policy', "frame-ancestors 'self' *.abhishek-regrets-nothing.dev")
  
  return response
}