//region DEBUG
Blockly.Blocks['debug_geom'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DEBUG_GEOM);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FILLED)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'FILLED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_GEOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_GEOM_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['enable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['disable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DISABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DISABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_sprite'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DEBUG_SPRITE);
    this.appendValueInput('X_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.DEBUG_SPRITE_AT_X);
    this.appendValueInput('Y_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_HELP_URL);
  }
};

Blockly.Blocks['debug_body_info'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_BODY_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_camera'] = {
  init: function () {
    this.appendValueInput('CAMERA')
      .appendField(Blockly.Msg.DEBUG_CAMERA);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_camera_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_CAMERA_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_input_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_INPUT_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_INPUT_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_INPUT_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_key'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_KEY)
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEY')
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_KEY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_KEY_HELP_URL);
  }
};

Blockly.Blocks['debug_physics_group'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_PHSYICS_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_PHYSICS_GROUP_CHECK)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CHECK_EXISTS');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_PHYSICS_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_PHYSICS_GROUP_HELP_URL);
  }
};

Blockly.Blocks['debug_rectangle'] = {
  init: function () {
    this.appendValueInput('RECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_RECTANGLE);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_RECTANGLE_HELP_URL);
  }
};

Blockly.Blocks['debug_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_SOUND);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_HELP_URL);
  }
};

Blockly.Blocks['debug_sound_info'] = {
  init: function () {
    this.appendValueInput('SOUND')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SOUND_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_coords'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_COORDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_COORDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_COORDS_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_info'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_text'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.DEBUG_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_TEXT_HELP_URL);
  }
};
//endregion

//region ARRAYUTILS
Blockly.Blocks['list_find_closest'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST_NUMBER);
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL);
  }
};

Blockly.Blocks['list_get_random'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_GET_RANDOM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_GET_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_GET_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['number_list'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_HELP_URL);
  }
};

Blockly.Blocks['number_list_step'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP_AMOUNT);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_STEP_HELP_URL);
  }
};

Blockly.Blocks['list_remove_random_item'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL);
  }
};

Blockly.Blocks['list_shuffle'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_SHUFFLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_SHUFFLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_SHUFFLE_HELP_URL);
  }
};
//endregion