import _fetch from './fetch'
import _validator from './validator'

var utils = {
  fetch: _fetch,
  validator: _validator
}

export const validator = _validator

export const fetch = _fetch

export default utils
