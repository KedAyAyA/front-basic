function cookie () {
  function read (name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
  }

  function write ({ name, value, expires, path, domain, secure }) {
    var cookie = [];
    cookie.push(name + '=' + encodeURIComponent(value));

    if (typeof expires === 'number') {
      cookie.push('expires=' + new Date(expires).toGMTString());
    }

    if (typeof path === 'string') {
      cookie.push('path=' + path);
    }

    if (typeof domain === 'string') {
      cookie.push('domain=' + domain);
    }

    if (secure === true) {
      cookie.push('secure');
    }

    document.cookie = cookie.join('; ');
  }

  function remove (name) {
    write({
      name: name,
      value: '',
      expires: Date.now() - 86400000
    });
  }

  return {
    read: read,
    write: write,
    remove: remove
  }
}