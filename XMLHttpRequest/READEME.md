# some test for cross domain by jsonp and iframe

open 2 terminals & run those script
``` shell
cd XMLhttpRequest
node server1.js
node server2.js
```
+ http://localhost:10888/server1/base.html - normal request & jsonp

+ http://localhost:10888/server1/postMessage.html - iframe to cross domain & get cookie

+ http://localhost:10888/server1/corscookie.html - cookie settings