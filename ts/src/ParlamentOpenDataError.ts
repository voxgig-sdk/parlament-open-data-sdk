
import { Context } from './Context'


class ParlamentOpenDataError extends Error {

  isParlamentOpenDataError = true

  sdk = 'ParlamentOpenData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ParlamentOpenDataError
}

