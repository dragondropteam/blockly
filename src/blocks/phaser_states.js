Blockly.Blocks['statemanager_add_state'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'KEY')
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_TO_MANAGER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_ADD_STATE_TOOLTIP);
    //TODO: This will need supporting documentation on or side illustrating how to create this class with blocks
    // this.setHelpUrl('')
  }
};

Blockly.Blocks['statemanager_start_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_START_STATE)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'TAG');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_get_current_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_restart_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_RESTART_STATE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_RESTART_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_RESTART_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_check_state'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.STATEMANAGER_CHECK_STATE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_CHECK_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_CHECK_STATE_HELP_URL);
  }
};