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
        $(".granite-example-colorpicker2", e.target).spectrum({
            flat: true,
            showInput: true,
            allowEmpty: true,
            preferredFormat: "hex",
            showButtons: false,
            move: function(color) {
                var value;
                if (!color) {
                    value = "";
                } else {
                    value = color.toHexString();
                }
                
                this.value = value;
                
                var el = $(this);
                el.checkValidity();
                el.updateErrorUI();
            }
        });
    });
    

    // Check the validity of HEX format
    var hexRegex = /^#[0-9A-F]{6}$/i;
    
    var fieldErrorEl = $(document.createElement("span"))
        .addClass("coral-Form-fielderror coral-Icon coral-Icon--alert coral-Icon--sizeS")
        .attr({
            "data-init": "quicktip",
            "data-quicktip-type": "error"
        });
    var FIELD_ERROR_KEY = ".granite-example-colorpicker2.internal.field.error";
    
    $.validator.register({
        selector: ".granite-example-colorpicker2",
        validate: function(el) {
            if (!el.val()) {
                return;
            }
            
            if (!hexRegex.test(el.val())) {
                return Granite.I18n.get("Invalid HEX color format");
            }
        },
        show: function(el, message) {
            el.attr("aria-invalid", "true");

            var field = el.closest(".coral-Form-field");
            var info = field.nextAll(".coral-Form-fieldinfo");

            info.addClass("u-coral-screenReaderOnly");

            var error = el.data(FIELD_ERROR_KEY);

            if (error) {
                error.data("quicktipContent", message);

                if (!error.parent().length) {
                    error.insertAfter(field.nextAll(".sp-container.sp-flat"));
                }
                return;
            }

            var arrow = info.data("quicktipArrow");
            if (!arrow) {
                arrow = field.closest("form").hasClass("coral-Form--vertical") ? "right" : "top";
            }

            error = fieldErrorEl.clone()
                  .attr("data-quicktip-arrow", arrow)
                  .attr("data-quicktip-content", message)
                  .insertAfter(field.nextAll(".sp-container.sp-flat"));

            el.data(FIELD_ERROR_KEY, error);
          },
          clear: function(el) {
              el.removeAttr("aria-invalid");

              var field = el.closest(".coral-Form-field");

              var error = el.data(FIELD_ERROR_KEY);

              if (error) {
                  var tooltip = error.next(".coral-Tooltip").data("tooltip");
                  if (tooltip) {
                      tooltip.hide();
                  }
                  error.detach();
              }

              field.nextAll(".coral-Form-fieldinfo").removeClass("u-coral-screenReaderOnly");
          }
    });
})(Granite.$, Granite);
