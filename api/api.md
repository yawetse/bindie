<a name="bindie"></a>
#class: bindie
**Members**

* [class: bindie](#bindie)
  * [new bindie(el, options)](#new_bindie)
  * [bindie._addBinder(options)](#bindie#_addBinder)
  * [bindie._update(options)](#bindie#_update)
  * [bindie._render(options)](#bindie#_render)

<a name="new_bindie"></a>
##new bindie(el, options)
A module that represents a bindie object, a componentTab is a page composition tool.

**Params**

- el `object` - element of tab container  
- options `object` - configuration options  

**Author**: Yaw Joseph Etse  
**License**: MIT  
**Copyright**: Copyright (c) 2014 Typesettin. All rights reserved.  
<a name="bindie#_addBinder"></a>
##bindie._addBinder(options)
adds a data property binding to an html element selector

**Params**

- options `object` - prop,elementSelector,binderType, binderValue, listenerEventArray  

<a name="bindie#_update"></a>
##bindie._update(options)
this will update your binded elements ui, once your bindie object is updated with new data

**Params**

- options `object` - data  

<a name="bindie#_render"></a>
##bindie._render(options)
render element template with new data

**Params**

- options `object` - template, data  

**Returns**: `string` - rendered html fragment  
