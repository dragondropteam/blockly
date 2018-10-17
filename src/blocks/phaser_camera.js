//region PHASER_CAMERA

//region CAMERA.METHODS

Blockly.Blocks['game_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAME_CAMERA);
    this.setOutput(true);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.GAME_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_CAMERA_URL);
  }
};

Blockly.Blocks['camera_follow_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FOLLOW_STYLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FOLLOW_LOCKON, 'Phaser.Camera.FOLLOW_LOCKON'],
        [Blockly.Msg.FOLLOW_PLATFORMER, 'Phaser.Camera.FOLLOW_PLATFORMER'],
        [Blockly.Msg.FOLLOW_TOPDOWN, 'Phaser.Camera.FOLLOW_TOPDOWN'],
        [Blockly.Msg.FOLLOW_TOPDOWN_TIGHT, 'Phaser.Camera.FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.appendValueInput('LERP_X')
      .appendField(Blockly.Msg.LERP_X)
      .setCheck('Number');
    this.appendValueInput('LERP_Y')
      .appendField(Blockly.Msg.LERP_Y)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_fade'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FADE);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FADE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FADE_HELP_URL);
  }
};

Blockly.Blocks['camera_flash'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FLASH);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_FLASH_FADE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FLASH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FLASH_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on_xy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_XY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_XY_HELP_URL);
  }
};

Blockly.Blocks['camera_reset'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_HELP_URL);
  }
};

Blockly.Blocks['camera_reset_fx'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET_FX);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_FX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_FX_HELP_URL);
  }
};

Blockly.Blocks['camera_set_bounds_to_world'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_HELP_URL);
  }
};

Blockly.Blocks['camera_set_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_POSITION);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_POSITION_HELP_URL);
  }
};

Blockly.Blocks['camera_set_size'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_SIZE);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_SIZE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_SIZE_HELP_URL);
  }
};

Blockly.Blocks['camera_shake'] = {
  init: function () {
    this.appendValueInput('INTENSITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_SHAKE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SHAKE_INTENSITY);
    this.appendValueInput('DURATION')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_BOTH, 'SHAKE_BOTH'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_VERTICAL, 'SHAKE_VERTICAL'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_HORIZONTAL, 'SHAKE_HORIZONTAL']]), 'DIRECTION')
      .appendField(Blockly.Msg.FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SHAKE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SHAKE_HELP_URL);
  }
};

Blockly.Blocks['camera_unfollow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_UNFOLLOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_UNFOLLOW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_UNFOLLOW_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_styled'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_SELECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LOCKON, 'FOLLOW_LOCKON'], [Blockly.Msg.PLATFORMER, 'FOLLOW_PLATFORMER'], [Blockly.Msg.TOPDOWN, 'FOLLOW_TOPDOWN'], [Blockly.Msg.TOPDOWN_TIGHT, 'FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_HELP_URL);
  }
};
//endregion

//endregion
