<%--
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
--%><%
%><%@include file="/libs/granite/ui/global.jsp" %><%
%><%@page session="false"
          import="org.apache.commons.lang.StringUtils,
                  com.adobe.granite.ui.components.AttrBuilder,
                  com.adobe.granite.ui.components.Config,
                  com.adobe.granite.ui.components.Field,
                  com.adobe.granite.ui.components.Tag" %><%--###
ColorPicker
===========

.. granite:servercomponent:: /apps/cqgems/customizingfield/components/colorpicker
   :supertype: /libs/granite/ui/components/foundation/form/field
   
   A field component to allow the user to pick a color.

   It extends :granite:servercomponent:`Field </libs/granite/ui/components/foundation/form/field>` component.

   It has the following content structure:

   .. gnd:gnd::

      [cqgems:ColorPicker] > granite:FormField
      
      /**
       * The name that identifies the field when submitting the form.
       */
      - name (String)
      
      /**
       * The value of the field.
       */
      - value (StringEL)
      
      /**
       * Indicates if the field is mandatory to be filled.
       */
      - required (Boolean)
      
      /**
       * The name of the validator to be applied. E.g. ``foundation.jcr.name``.
       * See :doc:`validation </jcr_root/libs/granite/ui/components/foundation/clientlibs/foundation/js/validation/index>` in Granite UI.
       */
      - validation (String) multiple
###--%><%

    Config cfg = cmp.getConfig();
    ValueMap vm = (ValueMap) request.getAttribute(Field.class.getName());
    String value = vm.get("value", String.class);

    Tag tag = cmp.consumeTag();
    AttrBuilder attrs = tag.getAttrs();
    cmp.populateCommonAttrs(attrs);
    
    attrs.addClass("coral-Textfield");
    attrs.addClass("granite-example-colorpicker");
    attrs.add("name", cfg.get("name", String.class));
    attrs.add("value", value);
    
    if (cfg.get("required", false)) {
        attrs.add("aria-required", true);
    }
    
    attrs.add("data-validation", StringUtils.join(cfg.get("validation", new String[0]), " "));
    
%><input <%= attrs.build() %>>