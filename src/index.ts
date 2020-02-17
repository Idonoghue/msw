/* Types */
export {
  RequestHandler,
  RequestParams,
  ResponseResolver,
  RESTMethods,
} from './handlers/requestHandler'

export { composeMocks } from './composeMocks'
export { response } from './response'
export { context } from './context'

/* Response handlers */
export { default as rest } from './handlers/rest'
