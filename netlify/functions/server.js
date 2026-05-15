import { createRequestHandler } from '@tanstack/start-server-core'
import { fetch as serverFetch } from 'cross-fetch'

export default async (event) => {
  const response = await serverFetch(event.rawUrl, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  })
  
  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers),
    body: await response.text(),
  }
}
