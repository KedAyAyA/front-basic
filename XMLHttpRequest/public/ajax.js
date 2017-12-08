function ajax ({ url, data, method, header, callback, withCredentials, xflag }) {
  let xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)
  xhr.withCredentials = withCredentials || false
  if (xflag) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(xhr.response)
    }
  }
  xhr.send(data)
}

function jsonp ({ url, callback }) {
  let body = document.querySelector('body')
  let script = document.createElement('script')
  script.src = url + '?callback=' + callback
  body.appendChild(script)
}