/*
  ADOBE CONFIDENTIAL

  Copyright 2015 Adobe Systems Incorporated
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any.  The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and may be covered by U.S. and Foreign Patents,
  patents in process, and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
*/
(function($, Granite) {
    "use strict";
    
    function hexToRgb(hex) {
        return [
            parseInt(hex[1] + hex[2], 16),
            parseInt(hex[3] + hex[4], 16),
            parseInt(hex[5] + hex[6], 16)
        ];
    }
    
    $.validator.register({
        selector: "[data-validation~='cqgems.customizingfield.color.grayscale']",
        validate: function(el) {
            var value = el.val();
            
            if (!value) {
                return;
            }
            
            var rgb = hexToRgb(value);
            
            if (rgb[0] !== rgb[1] || rgb[1] !== rgb[2]) {
                return Granite.I18n.get("The color needs to be grayscale, where R, G, B components have the same values.");
            }
        }
    });
})(Granite.$, Granite);
