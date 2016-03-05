# ez-require
* When you are struggling with the stupidly deep directory requires, like this:
```
─ A
  └─ B
     └─ F.js
  └─ C
     └─ G
        └─ H.js
     └─ D.js
     └─ E.js
```
If you want to require F.js in H.js, usually you have to require like this:``` var f = require('../../B/F');```
Couting the directory level will kill you if you have a really deep path.

This tiny tool may solve your problem, somehow :)
