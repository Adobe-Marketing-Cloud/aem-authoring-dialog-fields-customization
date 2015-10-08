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
    
    $(document).on("foundation-contentloaded", function(e) {
        $(".granite-example-colorpicker", e.target).each(function() {
            $(this)
                .ColorPicker({
                    onSubmit: function(hsb, hex, rgb, element) {
                        var el = $(element);
                        
                        el.val("#" + hex);
                        el.ColorPickerHide();
                        
                        el.trigger("change");
                    },
                    onBeforeShow: function() {
                        $(this).ColorPickerSetColor(this.value);
                    }
                })
                .on("input", function() {
                    $(this).ColorPickerSetColor(this.value);
                });
        });
    });

    // Check the validity of HEX format
    var hexRegex = /^#[0-9A-F]{6}$/i;
    
    $.validator.register({
        selector: ".granite-example-colorpicker",
        validate: function(el) {
            if (!el.val()) {
                return;
            }
            
            if (!hexRegex.test(el.val())) {
                return Granite.I18n.get("Invalid HEX color format");
            }
        }
    });
})(Granite.$, Granite);
