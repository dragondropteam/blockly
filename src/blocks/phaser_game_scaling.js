/**
 * @file Blocks for Phaser scaling
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2018
 */

Blockly.Blocks['center_and_stretch'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CENTER_AND_STRETCH);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_GENERAL_COLOUR);
    this.setTooltip(Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CENTER_AND_STRETCH_HELP_URL);
  }
};