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
   * The main hook for your plugin, whatever is passed to the callback will be loaded into the injector.
   * @param {Function} inject The Magnum DI injector
   * @param {Function} loaded Callback function to return your plugins main object to the injector.
   */
  load: function(inject, loaded) {
    /*
     * "this" has a few interesting properties you can use.
     *  this.options contains the options (if any) for this plugin.
     *  this.Logger Is the global Logger in use by the app. Best to use this for any output
     *  to help respect your users wishes.
     */
    var self = this;
    //this.Logger.log(self);

    /*
     * We need to call our loaded function with an object when we are all done doing what we need it to do.
     */
    var myPluginObject = {
      name: 'Example',
      sayName: function(){
        self.Logger.log(myPluginObject.name)
      }
    };
    /*
     * Async is ok obviously, though there is a 2000ms timeout by default on all of the hooks
     * exposed.
     */
    setTimeout(function(){
      self.Logger.log('Output here should only include critical info.')
      loaded(null, myPluginObject)
    }, 1000)
  },
  /**
   * Startup hook, called when the application is done loading, any startup tasks for you plugin go here.
   * @param {Function} done
   */
  start: function(done) {
    done(null)
  },

  /**
   * Stop hook, called before the application is shut down. Cleanup tasks for your plugin go here.
   * @param {Function} done
   */
  stop: function(done) {
    done(null)
  }
};