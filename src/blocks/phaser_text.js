
Blockly.Blocks['add_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('INITIAL_TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
    this.appendValueInput('FONT_SIZE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT_FONT_COLOUR)
      .appendField(new Blockly.FieldColour('#ff0000'), 'FILL');
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['add_text_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('INITIAL_TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
    this.appendValueInput('FONT_SIZE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

/**
 * @deprecated Use set_text_vi instead
 * @type {{init: Blockly.Blocks.set_text.init}}
 */
Blockly.Blocks['set_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_TEXT)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['set_text_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_TEXT_VI);
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_VI_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['create_bitmapFont'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_BITMAPFONT);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.appendValueInput('XML')
      .appendField(Blockly.Msg.CREATE_BITMAPFONT_XML)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TEXT_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_BITMAPFONT_HELP_URL);
  }
};