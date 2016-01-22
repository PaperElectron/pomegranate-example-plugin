/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Exports plugins for the Pomegranate framework.
 *
 * Pomegranate plugin modules can export a single plugin, or an array of plugins.
 * The syntax for the actual plugins are exactly the same in both cases,
 * except in the case of multiple plugins, export an array of valid plugins from your main module.
 *
 * @module pomegranate-example-plugin
 * @type {(Plugin|Plugin[])}
 *
 * @see {@link module:Plugin.options} for more details.
 * @see {@link module:Plugin.metadata} for more details.
 * @see {@link module:Plugin.plugin} for more details.
 *
 * @example
 *
 * Multiple
 *
 * ```javacript
 * // file index.js
 *
 * module.exports = [
 *  require('./plugins/ServicePlugin'),
 *  require('./plugins/DynamicPlugin')
 * ]
 *
 * ```
 *
 * Single
 *
 * ```javascript
 * //file index.js
 *
 * exports.options = {//...}
 * exports.metadata = {//...}
 * exports.plugin = {//...}
 *
 * ```
 *
 * Or
 *
 * ```javascript
 * //file index.js
 *
 * module.exports = {
 *  options: {//...},
 *  metadata: {//...},
 *  plugin: {//...}
 * }
 *
 * ```
 *
 */

module.exports = [
  require('./plugins/ServicePlugin'),
  require('./plugins/DynamicPlugin')
];