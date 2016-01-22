/**
 * @file DynamicPlugin
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-example-plugin
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Adds multiple named dependencies to Pomegranate.
 * @module DynamicPlugin
 * @type {Plugin}
 */

exports.options = {
  workDir: './multiple'
}


exports.metadata = {
  name: 'ServicePlugin',
  layer: 'core',
  type: 'dynamic'
}

exports.plugin = {
  load: function(inject, loaded){

    var myDependencyArray = [
      {param: 'A', type: 'service', inject: {a: '1'}},
      {param: 'B', type: 'service', inject: {b: '2'}},
      {param: 'C', type: 'service', inject: {a: '3'}}
    ]
    loaded(null, myDependencyArray)

  },
  start: function(done){

  },
  stop: function(done){

  }

}