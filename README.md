React Ellipsis
==============

*[React](http://facebook.github.io/react) ellipsis component*

# Getting started

### Classic :

The "ready to use" [script file](https://raw.github.com/guillaumervls/react-ellipsis/master/dist/react-ellipsis.min.js)
is in the `dist` folder.

Then :
```html
<script src='react-ellipsis.min.js'></script>
<script>
  var Ellipsis = React.addons.Ellipsis;
</script>
```

### [Browserify](https://github.com/substack/node-browserify) :
̀
Install : `npm install react-ellipsis`

Then :
```javascript
Ellipsis = require('react-ellipsis')(React);
```

### Also works with AMD (e.g [RequireJS](http://requirejs.org))

In this case, it will depend on `react`.


# Use in JSX

```html
<Ellipsis component={React.DOM.div}> <!-- component defaults to <div> -->
  text
</Ellipsis>
```
Note that it is your responsiblity to size and style the `<Ellipsis>` component.


## (Re)build

```
npm install
grunt dist
```

## Run tests

```
npm install
grunt test

# or automatically re-run during development
grunt watch

# or run in the browser
grunt browserify:test
# now open test/react-ellipsis.test.html in your browser
```

### Licence

**The MIT License (MIT)**

*Copyright (c) 2013 guillaumervls*

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
