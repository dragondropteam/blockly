Blockly.Blocks['add_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ADD_ANIMATION_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.NAME), 'NAME');
    this.appendValueInput('FRAMES')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH_FRAMES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISPLAYED_AT)
      .appendField(new Blockly.FieldNumber(60), 'FPS')
      .appendField(Blockly.Msg.FPS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADD_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_ANIMATION_VI_HELP_URL);
    this.setColour(PHASER_ANIMATION_COLOUR);
  }
};

Blockly.Blocks['play_animation_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PLAY_ANIMATION_VI);
    this.appendValueInput('ANIMATION');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.PLAY_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PLAY_ANIMATION_VI_HELP_URL);
    this.setInputsInline(true);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_next.init}}
 */
Blockly.Blocks['animation_next'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_NEXT)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_previous.init}}
 */
Blockly.Blocks['animation_previous'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_HELP_URL);
  }
};

Blockly.Blocks['animation_next_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_NEXT_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_VI_HELP_URL);
  }
};

Blockly.Blocks['animation_previous_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_VI_HELP_URL);
  }
};

Blockly.Blocks['refresh_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REFRESH_FRAME)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.REFRESH_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REFRESH_FRAME_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_update.init}}
 */
Blockly.Blocks['animation_update'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_UPDATE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_UPDATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_UPDATE_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.validate_frames.init}}
 */
Blockly.Blocks['validate_frames'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.VALIDATE_FRAMES)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'Object');
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_HELP_URL);
  }
};

Blockly.Blocks['validate_frames_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI);
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_destroy.init}}
 */
Blockly.Blocks['animation_destroy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_DESTROY)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_HELP_URL);
  }
};

Blockly.Blocks['animation_destroy_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ANIMATION_DESTROY_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_VI_HELP_URL);
  }
};

Blockly.Blocks['stop_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.STOP_ANIMATION_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_ANIMATION_VI_HELP_URL);
  }
};

Blockly.Blocks['set_frame_vi'] = {
  init: function () {
    this.appendValueInput('FRAME_NUMBER')
      .appendField(Blockly.Msg.SET_FRAME_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_FRAME_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_FRAME_VI_HELP_URL);
  }
};

// Revised field manipulation blocks for animations
// Note that these do not need to be translated because they will always have to appear as shown below.
const ANIMATION_BOOLEAN_WRITABLE = ['enableUpdate', 'isFinished', 'isPaused', 'isPlaying', 'isReversed', 'faintOnComplete', 'loop', 'paused', 'reversed'];
const ANIMATION_BOOLEAN_FIELDS = createDropDownField(ANIMATION_BOOLEAN_WRITABLE, []);

const ANIMATION_NUMERIC_WRITABLE = ['delay', 'frame', 'loopCount', 'speed'];
const ANIMATION_NUMERIC_READABLE = ['frameTotal'];
const ANIMATION_NUMERIC_FIELDS = createDropDownField(ANIMATION_NUMERIC_WRITABLE, ANIMATION_NUMERIC_READABLE);

const ANIMATION_STRING_WRITABLE = ['name'];
const ANIMATION_STRING_FIELDS = createDropDownField(ANIMATION_STRING_WRITABLE, []);

Blockly.Blocks['set_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_STRING_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_string_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createNumericGetterContextMenu('set_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_STRING_FIELD_HELP_URL);
  },
  customContextMenu: createStringGetterContextMenu('set_animation_string_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_property'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.ON_GAMEOBJECT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTANIM, 'currentAnim'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTFRAME, 'currentFrame'], [Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMEDATA, 'frameData'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMETOTAL, 'frameTotal'], [Blockly.Msg.GAME, 'game'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_ISLOADED, 'isLoaded'], [Blockly.Msg.NAME, 'name'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SPRITE, 'sprite'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.setOutput(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_PROPERTY_HELP_URL);
  }
};

Blockly.Blocks['set_animation_property'] = {
  init: function () {
    this.appendValueInput('NEWPROPERTY')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_animation_property_vi.init}}
 */
Blockly.Blocks['set_animation_property_vi'] = {
  init: function () {
    this.appendDummyInput('NEWPROPERTY')
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_get_animation.init}}
 */
Blockly.Blocks['animation_get_animation'] = {
  init: function () {
    this.appendValueInput('Sprite')
      .setCheck(null)
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION_NAME)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'NAME');
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL);
  }
};