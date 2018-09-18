/**
 * @file Blocks for Arduino stepper library.
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */


'use strict';
goog.provide('Blockly.Blocks.arduino_stepper');

goog.require('Blockly.Blocks');

Blockly.Blocks['stepper'] = {
  init: function () {
    this.appendValueInput('STEPS')
      .setCheck('Number')
      .appendField(Blockly.Msg.STEPPER_CREATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.STEPS)
      .appendField(Blockly.Msg.ON);
    this.appendValueInput('PIN1')
      .setCheck('Number')
      .appendField(Blockly.Msg.PIN);
    this.appendValueInput('PIN2')
      .setCheck('Number')
      .appendField(Blockly.Msg.PIN);
    this.appendValueInput('PIN3')
      .setCheck('Number')
      .appendField(Blockly.Msg.PIN);
    this.appendValueInput('PIN4')
      .setCheck('Number')
      .appendField(Blockly.Msg.PIN);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(ARDUINO_STEPPER_COLOUR);
    this.setTooltip(Blockly.Msg.STEPPER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEPPER_HELP_URL);
  }
};

Blockly.Blocks['stepper_set_speed'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.STEPPER_SET_SPEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(ARDUINO_STEPPER_COLOUR);
    this.setTooltip(Blockly.Msg.STEPPER_SET_SPEED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEPPER_SET_SPEED_HELP_URL);
  }
};

Blockly.Blocks['stepper_steps'] = {
  init: function () {
    this.appendValueInput('STEPS')
      .setCheck('Number')
      .appendField(Blockly.Msg.STEPPER_STEPS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.STEPS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(ARDUINO_STEPPER_COLOUR);
    this.setTooltip(Blockly.Msg.STEPPER_STEPS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEPPER_STEPS_HELP_URL);
  }
};