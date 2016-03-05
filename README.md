# ez-require
* When you are struggling with the stupidly deep directory requires, like this:
```
─ A
  └─ B
  │  └─ F.js
  └─ C
     └─ G
     │  └─ H.js
     └─ D.js
     └─ E.js
```
If you want to require F.js in H.js, usually you have to require like this:``` var f = require('../../B/F');```
Counting the directory level will kill you if you have a really deep path.

This tiny tool may solve your problem, somehow :)

### Usage
* Global path: setup your global root directory, then you can require any modules under the foo.
```javascript
var ezReq = require('ez-require');
ezReq.setGlobalDir(__dirname);
var module = ezReq.globalRequire('/my-module'); //it will load the 'my-module' under __dirname.
```
Global directory could be only set once, if you set it multiple times, it only could be set to the last one.
* Local path: setup your local directory.
```javascript
var ezReq = require('ez-require');
ezReq.setLocalRoot('dir1', __dirname);
var module = ezReq.localRequire('dir1', '/my-module'); // it will load 'my-module' under __dirname here.
```
You can add unlimited local roots here, make sure each local root has a unique name though (first arg of ```setLocalRoot()```).
### License
* None
