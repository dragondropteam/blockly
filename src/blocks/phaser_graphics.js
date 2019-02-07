/**
 * @file Blocks for Phaser graphics
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

//region GRAPHICS
Blockly.Blocks['create_graphics_object'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_GRAPHICS_OBJECT);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_GRAPHICS_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_GRAPHICS_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['draw_shapes_with_colour'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR);
    this.appendValueInput('colour')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING);
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.appendStatementInput('shape draw functions')
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_HELP_URL);
  }
};

Blockly.Blocks['draw_rectangle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAW_RECTANGLE);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WITH);
    this.appendValueInput('w')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('h')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAW_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAW_RECTANGLE_HELP_URL);
  }
};

Blockly.Blocks['draw_circle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAWCIRCLE);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('DIAMETER')
      .setCheck('Number')
      .appendField(Blockly.Msg.DRAWCIRCLE_DIAMETER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAWCIRCLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAWCIRCLE_HELP_URL);
  }
};

//endregion
