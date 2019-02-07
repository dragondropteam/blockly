/**
 * @file Blocks for Arduino string library
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2018
 */

'use strict';
goog.provide('Blockly.Blocks.arduino_string');
goog.require('Blockly.Blocks');

Blockly.Blocks['arduino_string_create'] = {
  init: function () {
    this.appendValueInput('INPUT')
      .appendField(Blockly.Msg.ARDUINO_STRING_CREATE);
    this.setOutput(true, 'String');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_CREATE_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_create_base'] = {
  init: function () {
    this.appendValueInput('INPUT')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_STRING_CREATE_BASE_INPUT);
    this.appendValueInput('BASE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_STRING_CREATE_BASE);
    this.setOutput(true, 'String');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_CREATE_BASE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_CREATE_BASE_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_char_at'] = {
  init: function () {
    this.appendValueInput('LOCATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_STRING_CHAR_AT);
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.IN);
    this.setOutput(true, 'Number');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_CHAR_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_CHAR_AT_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_compare_to'] = {
  init: function () {
    this.appendValueInput('LHS')
      .setCheck('String')
      .appendField(Blockly.Msg.DOES);
    this.appendValueInput('RHS')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_COMPARE_TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_COMPARE_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_COMPARE_TO_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_concat'] = {
  init: function () {
    this.appendValueInput('INPUT')
      .appendField(Blockly.Msg.ARDUINO_STRING_CONCAT);
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_CONCAT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_CONCAT_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_ends_with'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.DOES);
    this.appendValueInput('INPUT')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_ENDS_WITH);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_ENDS_WITH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_ENDS_WITH_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_equals'] = {
  init: function () {
    this.appendValueInput('LHS')
      .setCheck('String')
      .appendField(Blockly.Msg.IS);
    this.appendValueInput('RHS')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_EQUALS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_EQUALS_CASE);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_EQUALS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_EQUALS_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_equals_ignore_case'] = {
  init: function () {
    this.appendValueInput('LHS')
      .setCheck('String')
      .appendField(Blockly.Msg.IS);
    this.appendValueInput('RHS')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_EQUALS_IGNORE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_EQUALS_IGNORE_CASE);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_EQUALS_IGNORE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_EQUALS_IGNORE_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_index_of'] = {
  init: function () {
    this.appendValueInput('INPUT')
      .appendField(Blockly.Msg.ARDUINO_STRING_INDEX_OF);
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.IN);
    this.appendValueInput('POSITION')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_STRING_INDEX_OF_LOCATION);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_INDEX_OF_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_INDEX_OF_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_length'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_LENGTH);
    this.setOutput(true, 'Number');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_LENGTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_LENGTH_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_remove'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_REMOVE);
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.BETWEEN);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.AND);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_INDEX_OF_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_INDEX_OF_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_replace'] = {
  init: function () {
    this.appendValueInput('LHS')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_REPLACE);
    this.appendValueInput('RHS')
      .setCheck('String')
      .appendField(Blockly.Msg.WITH);
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.IN);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_REPLACE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_REPLACE_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_starts_with'] = {
  init: function () {
    this.appendValueInput('LHS')
      .setCheck('String')
      .appendField(Blockly.Msg.DOES);
    this.appendValueInput('RHS')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_STARTS_WITH);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_STARTS_WITH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_STARTS_WITH_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_substring'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_SUBSTRING);
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.BETWEEN);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, 'String');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_SUBSTRING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_SUBSTRING_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_to_int'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.CONVERT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_TO_INT);
    this.setOutput(true, 'Number');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_TO_INT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_TO_INT_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_to_float'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.CONVERT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_TO_FLOAT);
    this.setOutput(true, 'Number');
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_TO_FLOAT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_TO_FLOAT_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_to_lower'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.CONVERT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_TO_LOWER);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_TO_LOWER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_TO_LOWER_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_to_upper'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.CONVERT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_STRING_TO_UPPER);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_TO_UPPER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_TO_UPPER_HELP_URL);
  }
};

Blockly.Blocks['arduino_string_trim'] = {
  init: function () {
    this.appendValueInput('STRING')
      .setCheck('String')
      .appendField(Blockly.Msg.ARDUINO_STRING_TRIM);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STRING_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ARDUINO_STRING_TRIM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_STRING_TRIM_HELP_URL);
  }
};

