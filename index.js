/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var request = require('request');

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
    request('https://www.reddit.com/r/node.json', function(err, res, body){
      loaded(err, body)
    })
  },
  start: function(done) {
    done(null)
  },
  stop: function(done) {
    done(null)
  }
};