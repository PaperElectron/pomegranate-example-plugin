## Modules

<dl>
<dt><a href="#module_pomegranate-example-plugin">pomegranate-example-plugin</a> : <code>Array.&lt;Plugin&gt;</code></dt>
<dd><p>Exports multiple plugins for the Pomegranate framework.</p>
</dd>
<dt><a href="#module_DynamicPlugin">DynamicPlugin</a> : <code>Plugin</code></dt>
<dd><p>Adds multiple named dependencies to Pomegranate.</p>
</dd>
<dt><a href="#module_Plugin">Plugin</a></dt>
<dd><p>Documentation for Pomegranate Plugins.</p>
</dd>
<dt><a href="#module_ServicePlugin">ServicePlugin</a> : <code>Plugin</code></dt>
<dd><p>Adds a single named dependency to Pomegranate.</p>
</dd>
</dl>

<a name="module_pomegranate-example-plugin"></a>
## pomegranate-example-plugin : <code>Array.&lt;Plugin&gt;</code>
Exports multiple plugins for the Pomegranate framework.

<a name="module_DynamicPlugin"></a>
## DynamicPlugin : <code>Plugin</code>
Adds multiple named dependencies to Pomegranate.

<a name="module_Plugin"></a>
## Plugin
Documentation for Pomegranate Plugins.


* [Plugin](#module_Plugin)
    * [.options](#module_Plugin.options)
        * [.workDir](#module_Plugin.options.workDir)
    * [.metadata](#module_Plugin.metadata)
        * [.name](#module_Plugin.metadata.name)
        * [.layer](#module_Plugin.metadata.layer)
        * [.param](#module_Plugin.metadata.param)
        * [.type](#module_Plugin.metadata.type)
    * [.plugin](#module_Plugin.plugin)
        * [.load(inject, loaded)](#module_Plugin.plugin.load)
        * [.start(done)](#module_Plugin.plugin.start)
        * [.stop(done)](#module_Plugin.plugin.stop)
    * [~injectDeps](#module_Plugin..injectDeps) : <code>function</code>
    * [~loadFinished](#module_Plugin..loadFinished) : <code>function</code>
    * [~startFinished](#module_Plugin..startFinished) : <code>function</code>
    * [~stopFinished](#module_Plugin..stopFinished) : <code>function</code>

<a name="module_Plugin.options"></a>
### Plugin.options
The options object allows you to define default options for your plugin.
they will be available inside of the plugin hook functions on this.options.

options.workDir is a special property, Pomegranate uses it to create an absolute path
relative to the working directory Pomegranate is started from.

**Kind**: static property of <code>[Plugin](#module_Plugin)</code>  
<a name="module_Plugin.options.workDir"></a>
#### options.workDir
**Kind**: static property of <code>[options](#module_Plugin.options)</code>  
**Properties**

| Name | Type |
| --- | --- |
| workDir | <code>string</code> | 

<a name="module_Plugin.metadata"></a>
### Plugin.metadata
Metadata

Describes your plugin to Pomegranate.

**Kind**: static property of <code>[Plugin](#module_Plugin)</code>  

* [.metadata](#module_Plugin.metadata)
    * [.name](#module_Plugin.metadata.name)
    * [.layer](#module_Plugin.metadata.layer)
    * [.param](#module_Plugin.metadata.param)
    * [.type](#module_Plugin.metadata.type)

<a name="module_Plugin.metadata.name"></a>
#### metadata.name
Used to identify a plugin when part of a group, as well as internally by Pomegranate.

**Kind**: static property of <code>[metadata](#module_Plugin.metadata)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name used internally |

<a name="module_Plugin.metadata.layer"></a>
#### metadata.layer
Can be one of ['core', 'data', 'dependency', 'pre_router', 'router', 'post_router', 'server'].

Optionally any other valid layer configured in Pomegranate.

**Kind**: static property of <code>[metadata](#module_Plugin.metadata)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> | The Pomegranate layer this plugin will load on. |

<a name="module_Plugin.metadata.param"></a>
#### metadata.param
The parameter name that this plugin will be added to the injector as.

if metadata.type = 'Dynamic', this is not needed.

**Kind**: static property of <code>[metadata](#module_Plugin.metadata)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| param | <code>string</code> | Name to add to injector. |

<a name="module_Plugin.metadata.type"></a>
#### metadata.type
Can be one of ['factory', 'service', 'instance', 'merge', 'dynamic', 'none']

if set to Dynamic, metadata.param is not needed.

**Kind**: static property of <code>[metadata](#module_Plugin.metadata)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of injector to add the dependency as |

<a name="module_Plugin.plugin"></a>
### Plugin.plugin
Plugin hook functions run during the lifecycle of the plugin.

**Kind**: static property of <code>[Plugin](#module_Plugin)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| load | <code>function</code> | Called to load your plugins dependencies, or execute code. |
| start | <code>function</code> | Called to start a plugin. |
| stop | <code>function</code> | Called to stop a plugin. |


* [.plugin](#module_Plugin.plugin)
    * [.load(inject, loaded)](#module_Plugin.plugin.load)
    * [.start(done)](#module_Plugin.plugin.start)
    * [.stop(done)](#module_Plugin.plugin.stop)

<a name="module_Plugin.plugin.load"></a>
#### plugin.load(inject, loaded)
Load - Called first in a plugins lifecycle.

**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| inject | <code>injectDeps</code> | Access to MagnumDi inject function. |
| loaded | <code>loadFinished</code> | Callback to add dependencies to MagnumDi injector. |

<a name="module_Plugin.plugin.start"></a>
#### plugin.start(done)
**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  

| Param | Type |
| --- | --- |
| done | <code>startFinished</code> | 

<a name="module_Plugin.plugin.stop"></a>
#### plugin.stop(done)
**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  

| Param | Type |
| --- | --- |
| done | <code>stopFinished</code> | 

<a name="module_Plugin..injectDeps"></a>
### Plugin~injectDeps : <code>function</code>
**Kind**: inner typedef of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| toInject | <code>function</code> | Function that requires access to loaded dependencies. |
| thisArg | <code>Object</code> | The context to bind to this inside of toInject |

**Example**  
Basic Injector usage.

If your plugin needs access to a dependency added in a prior layer
Simply ask for it by name in the parameter list of the function passed to `injector`

```javascript
//Given loaded dependencies 'A = {a: 1}', 'B = {b: 2}' and 'C = {c: 3}'
var total = inject(function(A, B, C){
   return A.a + B.b + C.c
})

// total === 6

```
<a name="module_Plugin..loadFinished"></a>
### Plugin~loadFinished : <code>function</code>
Adds a single dependency to the injector.

**Kind**: inner typedef of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>error</code> | If an error was encountered during loading. |
| dependency | <code>Object</code> &#124; <code>function</code> &#124; <code>Array.&lt;Object&gt;</code> | Pass the dependency to load here. |

**Example**  
Adding Objects to the frameworks dependency injector.

```javascript
//Providing the loadFinished callback with a dependency.

var myObjDependency = {greeting: 'Hello world, from MyObj'};
loaded(null, myObjDependency)

```
<a name="module_Plugin..startFinished"></a>
### Plugin~startFinished : <code>function</code>
**Kind**: inner typedef of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>error</code> | If an error was encountered during startup. |

**Example**  
Call with an Error to tell Pomegranate to abort.

```javascript

// Plugin Startup code...

done(new Error('Something went wrong starting this plugin.))

```

Otherwise call with null

```javascript

// Plugin Startup code...

done(null)

```
<a name="module_Plugin..stopFinished"></a>
### Plugin~stopFinished : <code>function</code>
**Kind**: inner typedef of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>error</code> | If an error was encountered during shutdown. |

**Example**  
Call with an Error to tell Pomegranate to abort.

```javascript

// Plugin Shutdown code...

done(new Error('Something went wrong stopping this plugin.))

```

Otherwise call with null

```javascript

// Plugin Shutdown code...

done(null)

```
<a name="module_ServicePlugin"></a>
## ServicePlugin : <code>Plugin</code>
Adds a single named dependency to Pomegranate.

