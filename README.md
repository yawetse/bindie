# bindie

** CommonJS/Browserified simple data view binding, without magic **

Bindie maps UI elements to a bindie object. This is a quick and simple vanilla JS way to data bind element. 

When paired with ajax forms (check out  [formie](http://npmjs.org/package/formie)), provides a comprehensive data-binding ui framework without the baggage of a full framework.</p>

 [API Documenation](https://yawetse.github.io/bindie/doc/html/index.html)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install bindie
```

Binde is a browserified/commonjs javascript module.

## Usage

*JavaScript*
```javascript
var Bindie = require('bindie'),
	myBindie;

var updateBindieData = function(){
  bindie1.update({
    data: {
      field1: "field1 data, probably from database",
      field2: {
        field2html: "<h2>field2</h2><p>by default this uses EJS, you can use whatever template language you want</p>"
      }
    }
  });
};

//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	var tabelement = document.getElementById('tabs');
	myBindie = new Bindie();
  myBindie.addBinder({
    prop: 'field1',
    elementSelector: '#field1',
    binderType: 'value'
  });
  myBindie.addBinder({
    prop: 'field2',
    elementSelector: '#field2',
    binderType: 'template',
    binderTemplate: document.querySelector('#field2-template').innerHTML
  });
	//expose your nav component to the window global namespace
	window.myBindie = myBindie;
  updateBindieData();
});
```

*HTML*
```html
<html>
	<head>
  	<title>Your Page</title>
  	<script src='[path/to/browserify/bundle].js'></script>
	</head>
	<body>
    <section>
      <label for="field1">Field 1</label>
      <input type="text" value="" name="field1" id="field1" />
    </section>
    <section>
      <label for="field2">Field 2</label>
      <div id="field2"></div>
    </section>

    <script id="field2-template" type="text/template">
      <div>
          {{- field2html }}
      </div>
    </script>
	</body>
</html>
```

##API

```javascript
//bind UI elements to JSON from AJAX response
myBindie.update({
  data:responsefromajax
}); 

//bind UI elements to JSON from AJAX response
myBindie.addBinder({
  elementSelector:responsefromajax,
  binderType: 'value' || 'innerHTML' || 'template',
  binderTemplate: document.querySelector('#templatehtml').innerHTML
}); 

//events
myBindie.on('addedBinder',callback); // callback(binder)
myBindie.on('renderedBinder',callback); // callback(data)
myBindie.on('updatedBindie',callback); // callback(data)
```
##Development
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt watch
```
$ grunt watch
```
##For generating documentation
```
$ grunt doc
$ jsdoc2md lib/**/*.js index.js > doc/api.md
```

##Notes
* The Tab Module uses Node's event Emitter for event handling.
* The Template Generator uses EJS, but you can generate your own mark up