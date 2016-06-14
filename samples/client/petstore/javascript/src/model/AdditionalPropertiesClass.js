(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.AdditionalPropertiesClass = factory(root.SwaggerPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AdditionalPropertiesClass model module.
   * @module model/AdditionalPropertiesClass
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AdditionalPropertiesClass</code>.
   * @alias module:model/AdditionalPropertiesClass
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AdditionalPropertiesClass</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdditionalPropertiesClass} obj Optional instance to populate.
   * @return {module:model/AdditionalPropertiesClass} The populated <code>AdditionalPropertiesClass</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('map_property')) {
        obj['map_property'] = ApiClient.convertToType(data['map_property'], {'String': 'String'});
      }
      if (data.hasOwnProperty('map_of_map_property')) {
        obj['map_of_map_property'] = ApiClient.convertToType(data['map_of_map_property'], {'String': {'String': 'String'}});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} map_property
   */
  exports.prototype['map_property'] = undefined;
  /**
   * @member {Object.<String, Object.<String, String>>} map_of_map_property
   */
  exports.prototype['map_of_map_property'] = undefined;




  return exports;
}));


