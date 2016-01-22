/**
 * @file Plugin
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Documentation for Pomegranate Plugins.
 * @module Plugin
 */

/**
 *
 * The options object allows you to define default options for your plugin.
 * they will be available inside of the plugin hook functions on this.options.
 *
 * options.workDir is a special property, Pomegranate uses it to create an absolute path
 * relative to the working directory Pomegranate is started from.
 */
exports.options = {
  /**
   * workDir is a special options property that is parsed by Pomegranate into an absolute path.
   * Use it if your plugin relies on additional files provided by the end user.
   *
   *  @property {string} workDir Plugins working directory.
   */
  workDir: '',

  /**
   * Any additional properties defined here will be exposed for outside configuration.
   * the initial values will be used as defaults if not configured.
   *
   * @property {*} any additional configuration options you wish to expose to the user.
   */
  any: '*'
}

/**
 * Metadata
 *
 * Describes your plugin to Pomegranate.
 *
 */
exports.metadata = {
  /**
   * Used to identify a plugin when part of a group, as well as internally by Pomegranate.
   * This must be a valid Javascript identifier.
   * @property {string} name - Name used internally
   *
   */
  name: '',

  /**
   * Can be one of ['core', 'data', 'dependency', 'pre_router', 'router', 'post_router', 'server'].
   * For non public plugins, it can Optionally any other valid layer configured in Pomegranate.
   *
   * @property {string} layer - The Pomegranate layer this plugin will load on.
   */
  layer: '',

  /**
   * The parameter name that this plugin will be added to the injector as.
   *
   * if metadata.type = 'Dynamic', this is not needed.
   *
   * @property {string} [param] Name to add to injector.
   */
  param: '',

  /**
   * Can be one of ['factory', 'service', 'instance', 'merge', 'dynamic', 'none']
   *
   * if set to Dynamic, metadata.param is not needed.
   * @property {string} [type] - The type of injector to add the dependency as
   */

  type: ''
}

/**
 * Plugin hook functions run during the lifecycle of the plugin.
 * @property {function} load - Called to load your plugins dependencies, or execute code.
 * @property {function} start - Called to start a plugin.
 * @property {function} stop - Called to stop a plugin.
 *
 */
exports.plugin = {

  /**
   * Load - Called first in a plugins lifecycle.
   * @param {inject} inject - Access to MagnumDi inject function.
   * @param {loaded} loaded - Callback to add dependencies to MagnumDI injector.
   * @see {@link module:Plugin~inject} for more info
   * @see {@link module:Plugin~loaded} for more info
   */
  load: function(inject, loaded){

    /**
     *  Passes a function through the MagnumDI injector, replacing named arguments
     *  with the stored objects that they represent.
     *
     * @function inject
     * @param {Function} toInject - Function that requires access to loaded dependencies.
     * @param {Object} thisArg - The context to bind to this inside of toInject
     * @example
     *
     * Basic Injector usage.
     *
     * If your plugin needs access to a dependency added in a prior layer
     * Simply ask for it by name in the parameter list of the function passed to `injector`
     *
     * ```javascript
     * //Given loaded dependencies 'A = {a: 1}', 'B = {b: 2}' and 'C = {c: 3}'
     * var total = inject(function(A, B, C){
     *    return A.a + B.b + C.c
     * })
     *
     * // total === 6
     *
     * ```
     */

    /**
     * Adds a single dependency to the injector.
     *
     * @function loaded
     * @param {error} err - If an error was encountered during loading.
     * @param {Object|Function|Object[]} dependency - Pass the dependency to load here.
     * @example
     *
     * Adding Objects to the frameworks dependency injector.
     *
     * ```javascript
     * //Providing the loadFinished callback with a dependency.
     *
     * var myObjDependency = {greeting: 'Hello world, from MyObj'};
     * loaded(null, myObjDependency)
     *
     * ```
     */
  },
  /**
   * Start - Runs Plugin startup code
   * @param {startFinished} startFinished
   * @see {@link module:Plugin~startFinished} for more info
   */
  start: function(startFinished){

    /**
     * @function startFinished
     * @param {error} err - If an error was encountered during startup.
     *
     * @example
     *
     * Call with an Error to tell Pomegranate to abort.
     *
     * ```javascript
     * start: function(done) {
     *  // Startup code
     *
     *  startFinished(new Error('Something went wrong during startup')
     * }
     *
     * ```
     *
     * Otherwise call with null
     *
     * ```javascript
     * start: function(done) {
     *  // Startup code
     *
     *  startFinished(null)
     * }
     * ```
     */
  },
  /**
   * Stop - Runs Plugin shutdown code.
   * @param {stopFinished} stopFinished
   * @see {@link module:Plugin~stopFinished} for more info.
   */
  stop: function(stopFinished){

    /**
     * @function stopFinished
     * @param {error} err - If an error was encountered during shutdown.
     *
     * @example
     *
     * Call with an Error to tell Pomegranate that this Plugins stop hook was aborted.
     *
     * ```javascript
     * stop: function(done) {
     *  // Shutdown code
     *
     *  stopFinished(new Error('Something went wrong during shutdown')
     * }
     *
     * ```
     *
     * Otherwise call with null
     *
     * ```javascript
     * stop: function(done) {
     *  // Shutdown code
     *
     *  stopFinished(null)
     * }
     * ```
     */
  }

}