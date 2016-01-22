# Pomegrante Example Plugin

This is an example plugin module for the Pomegrante application framework.

#Exporting plugins.

<a name="module_pomegranate-example-plugin"></a>
## pomegranate-example-plugin : <code>Plugin</code> &#124; <code>Array.&lt;Plugin&gt;</code>
Exports plugins for the Pomegranate framework.

Pomegranate plugin modules can export a single plugin, or an array of plugins.
The syntax for the actual plugins are exactly the same in both cases,
except in the case of multiple plugins, export an array of valid plugins from your main module.

**See**

- [options](#module_Plugin.options) for more details.
- [metadata](#module_Plugin.metadata) for more details.
- [plugin](#module_Plugin.plugin) for more details.

**Example**  
Multiple

```javacript
// file index.js

module.exports = [
 require('./plugins/ServicePlugin'),
 require('./plugins/DynamicPlugin')
]

```

Single

```javascript
//file index.js

exports.options = {//...}
exports.metadata = {//...}
exports.plugin = {//...}

```

Or

```javascript
//file index.js

module.exports = {
 options: {//...},
 metadata: {//...},
 plugin: {//...}
}

```


# Detailed Plugin documentation

<a name="module_Plugin"></a>
## Plugin
Documentation for Pomegranate Plugins.


* [Plugin](#module_Plugin)
    * [.options](#module_Plugin.options)
        * [.workDir](#module_Plugin.options.workDir)
        * [.any](#module_Plugin.options.any)
    * [.metadata](#module_Plugin.metadata)
        * [.name](#module_Plugin.metadata.name)
        * [.layer](#module_Plugin.metadata.layer)
        * [.param](#module_Plugin.metadata.param)
        * [.type](#module_Plugin.metadata.type)
    * [.plugin](#module_Plugin.plugin)
        * [.load(inject, loaded)](#module_Plugin.plugin.load)
        * [.start(startFinished)](#module_Plugin.plugin.start)
        * [.stop(stopFinished)](#module_Plugin.plugin.stop)
    * [~inject(toInject, thisArg)](#module_Plugin..inject)
    * [~loaded(err, dependency)](#module_Plugin..loaded)
    * [~startFinished(err)](#module_Plugin..startFinished)
    * [~stopFinished(err)](#module_Plugin..stopFinished)

<a name="module_Plugin.options"></a>
### Plugin.options
The options object allows you to define default options for your plugin.
they will be available inside of the plugin hook functions on this.options.

options.workDir is a special property, Pomegranate uses it to create an absolute path
relative to the working directory Pomegranate is started from.

**Kind**: static property of <code>[Plugin](#module_Plugin)</code>  

* [.options](#module_Plugin.options)
    * [.workDir](#module_Plugin.options.workDir)
    * [.any](#module_Plugin.options.any)

<a name="module_Plugin.options.workDir"></a>
#### options.workDir
workDir is a special options property that is parsed by Pomegranate into an absolute path.
Use it if your plugin relies on additional files provided by the end user.

**Kind**: static property of <code>[options](#module_Plugin.options)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| workDir | <code>string</code> | Plugins working directory. |

<a name="module_Plugin.options.any"></a>
#### options.any
Any additional properties defined here will be exposed for outside configuration.
the initial values will be used as defaults if not configured.

**Kind**: static property of <code>[options](#module_Plugin.options)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| any | <code>\*</code> | additional configuration options you wish to expose to the user. |

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
This must be a valid Javascript identifier.

**Kind**: static property of <code>[metadata](#module_Plugin.metadata)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name used internally |

<a name="module_Plugin.metadata.layer"></a>
#### metadata.layer
Can be one of ['core', 'data', 'dependency', 'pre_router', 'router', 'post_router', 'server'].
For non public plugins, it can Optionally any other valid layer configured in Pomegranate.

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
    * [.start(startFinished)](#module_Plugin.plugin.start)
    * [.stop(stopFinished)](#module_Plugin.plugin.stop)

<a name="module_Plugin.plugin.load"></a>
#### plugin.load(inject, loaded)
Load - Called first in a plugins lifecycle.

**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  
**See**

- [inject](#module_Plugin..inject) for more info
- [loaded](#module_Plugin..loaded) for more info


| Param | Type | Description |
| --- | --- | --- |
| inject | <code>inject</code> | Access to MagnumDi inject function. |
| loaded | <code>loaded</code> | Callback to add dependencies to MagnumDI injector. |

<a name="module_Plugin.plugin.start"></a>
#### plugin.start(startFinished)
Start - Runs Plugin startup code

**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  
**See**: [startFinished](#module_Plugin..startFinished) for more info  

| Param | Type |
| --- | --- |
| startFinished | <code>startFinished</code> | 

<a name="module_Plugin.plugin.stop"></a>
#### plugin.stop(stopFinished)
Stop - Runs Plugin shutdown code.

**Kind**: static method of <code>[plugin](#module_Plugin.plugin)</code>  
**See**: [stopFinished](#module_Plugin..stopFinished) for more info.  

| Param | Type |
| --- | --- |
| stopFinished | <code>stopFinished</code> | 

<a name="module_Plugin..inject"></a>
### Plugin~inject(toInject, thisArg)
Passes a function through the MagnumDI injector, replacing named arguments
 with the stored objects that they represent.

**Kind**: inner method of <code>[Plugin](#module_Plugin)</code>  

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
<a name="module_Plugin..loaded"></a>
### Plugin~loaded(err, dependency)
Adds a single dependency to the injector.

**Kind**: inner method of <code>[Plugin](#module_Plugin)</code>  

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
### Plugin~startFinished(err)
**Kind**: inner method of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>error</code> | If an error was encountered during startup. |

**Example**  
Call with an Error to tell Pomegranate to abort.

```javascript
start: function(done) {
 // Startup code

 startFinished(new Error('Something went wrong during startup')
}

```

Otherwise call with null

```javascript
start: function(done) {
 // Startup code

 startFinished(null)
}
```
<a name="module_Plugin..stopFinished"></a>
### Plugin~stopFinished(err)
**Kind**: inner method of <code>[Plugin](#module_Plugin)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>error</code> | If an error was encountered during shutdown. |

**Example**  
Call with an Error to tell Pomegranate that this Plugins stop hook was aborted.

```javascript
stop: function(done) {
 // Shutdown code

 stopFinished(new Error('Something went wrong during shutdown')
}

```

Otherwise call with null

```javascript
stop: function(done) {
 // Shutdown code

 stopFinished(null)
}
```

