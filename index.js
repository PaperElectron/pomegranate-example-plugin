/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Provides Controllers for the Pomegranate framework.
 * @module pomegranate-example-plugin
 */

module.exports = {

  /**
   *
   * @param {Function} inject The Magnum DI injector
   * @param {Function} loaded Callback function to return your plugins main object to the injector.
   */
  load: function(inject, loaded) {

  },
  start: function(done) {
    done(null)
  },
  stop: function(done) {
    done(null)
  }
};