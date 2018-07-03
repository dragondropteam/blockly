'use strict';
goog.provide('Blockly.C.arduino_string');

goog.require('Blockly.C');

Blockly.C['arduino_string_create'] = function (block) {
  const input = Blockly.C.valueToCode(block, 'INPUT', Blockly.C.ORDER_ATOMIC);
  return [`String(${input})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_create_base'] = function (block) {
  const input = Blockly.C.valueToCode(block, 'INPUT', Blockly.C.ORDER_ATOMIC);
  const base = Blockly.C.valueToCode(block, 'BASE', Blockly.C.ORDER_ATOMIC);
  return [`String(${input}, ${base})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_char_at'] = function (block) {
  const location = Blockly.C.valueToCode(block, 'LOCATION', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.charAt(${location})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_compare_to'] = function (block) {
  const lhs = Blockly.C.valueToCode(block, 'LHS', Blockly.C.ORDER_ATOMIC);
  const rhs = Blockly.C.valueToCode(block, 'RHS', Blockly.C.ORDER_ATOMIC);
  return [`${lhs}.compareTo(${rhs})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_concat'] = function (block) {
  const input = Blockly.C.valueToCode(block, 'INPUT', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return `${string}.concat(${input});\n`;
};

Blockly.C['arduino_string_ends_with'] = function (block) {
  const input = Blockly.C.valueToCode(block, 'INPUT', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.endsWith(${input})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_equals'] = function (block) {
  const lhs = Blockly.C.valueToCode(block, 'LHS', Blockly.C.ORDER_ATOMIC);
  const rhs = Blockly.C.valueToCode(block, 'RHS', Blockly.C.ORDER_ATOMIC);
  const ignoreCase = block.getFieldValue('CASE');
  if(ignoreCase){return [`${lhs}.equalsIgnoreCase(${rhs})`, Blockly.C.ORDER_ATOMIC];}
  return [`${lhs}.equals(${rhs})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_index_of'] = function (block) {
  const input = Blockly.C.valueToCode(block, 'INPUT', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  const position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
  return `${string}.indexOf(${input}, ${position});\n`;
};

Blockly.C['arduino_string_length'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.length()`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_remove'] = function (block) {
  const start = Blockly.C.valueToCode(block, 'START', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  const end = Blockly.C.valueToCode(block, 'END', Blockly.C.ORDER_ATOMIC);
  return `${string}.remove(${start}, ${end});\n`;
};

Blockly.C['arduino_string_replace'] = function (block) {
  const lhs = Blockly.C.valueToCode(block, 'LHS', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  const rhs = Blockly.C.valueToCode(block, 'RHS', Blockly.C.ORDER_ATOMIC);
  return `${string}.replace(${lhs}, ${rhs});\n`;
};

Blockly.C['arduino_string_starts_with'] = function (block) {
  const lhs = Blockly.C.valueToCode(block, 'LHS', Blockly.C.ORDER_ATOMIC);
  const rhs = Blockly.C.valueToCode(block, 'RHS', Blockly.C.ORDER_ATOMIC);
  return [`${lhs}.startsWith(${rhs})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_substring'] = function (block) {
  const start = Blockly.C.valueToCode(block, 'START', Blockly.C.ORDER_ATOMIC);
  const end = Blockly.C.valueToCode(block, 'END', Blockly.C.ORDER_ATOMIC);
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.substring(${start}, ${end})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_to_int'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.toInt()`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_to_float'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return [`${string}.toFloat()`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_string_to_lower'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return `${string}.toLowerCase();\n`;
};

Blockly.C['arduino_string_to_upper'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return `${string}.toUpperCase();\n`;
};

Blockly.C['arduino_string_trim'] = function (block) {
  const string = Blockly.C.valueToCode(block, 'STRING', Blockly.C.ORDER_ATOMIC);
  return `${string}.trim();\n`;
};