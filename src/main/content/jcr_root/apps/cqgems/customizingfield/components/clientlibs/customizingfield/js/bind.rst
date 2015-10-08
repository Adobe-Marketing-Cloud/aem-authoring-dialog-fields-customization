****************************
cqgems-customizingfield-bind
****************************

``cqgems-customizingfield-bind`` is a directive to set the value of a target element based on the value of a source element.


Markup
======

.cqgems-customizingfield-bind
-----------------------------

Indicates the element as the source of value.
Every time a ``change`` event is triggered at this element, the value of the element is set to the target element.

Selector Rule::

   .cqgems-customizingfield-bind


[data-cqgems-customizingfield-bind-target]
------------------------------------------

The selector to the target element.
It is assumed that the target element allows the value to be set using its ``value`` property.

Selector Rule::

   .cqgems-customizingfield-bind[data-cqgems-customizingfield-bind-target]
