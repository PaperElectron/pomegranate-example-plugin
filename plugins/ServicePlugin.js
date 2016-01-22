/**
 * @file ServicePlugin
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Adds a single named dependency to Pomegranate.
 * @module ServicePlugin
 * @type {Plugin}
 */

exports.options = {
  workDir: './single'
}


exports.metadata = {
  name: 'ServicePlugin',
  layer: 'core',
  param: 'MyObj',
  type: 'service'
}


exports.plugin = {
  load: function(inject, loaded){

    var myObjDependency = {greeting: 'Hello world, from MyObj'};
    loaded(null, myObjDependency)

  },
  start: function(done){

  },
  stop: function(done){

  }

}


