const addParamsToUrl = (url, params = {}) => {
  let _url = url
  Object.keys(params).forEach(function(key) {
    if (_url.indexOf('?') === -1) {
      _url += `?${key}=${params[key]}`
    } else {
      _url += `&${key}=${params[key]}`
    }
  })
  return _url
}

export default {
  addParamsToUrl
}