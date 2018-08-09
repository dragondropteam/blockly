//region MOUSE
Blockly.Blocks['get_current_mouse_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_CURRENT_MOUSE_POSITION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_WORLDX, 'worldX'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_WORLDY, 'worldY']]), 'DIRECTION');
    this.setColour(PHASER_MOUSE_INPUT);
    this.setTooltip(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_HELP_URL);
    this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['get_mouse_position_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_POSITION_POINT);
    this.setColour(PHASER_MOUSE_INPUT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.MOUSE_POSITION_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOUSE_POSITION_POINT_HELP_URL);
  }
};

Blockly.Blocks['is_mouse_button_clicked'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT, 'leftButton'], [Blockly.Msg.RIGHT, 'rightButton'], [Blockly.Msg.MIDDLE, 'middleButton']]), 'BUTTON')
      .appendField(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED);
    this.setOutput(true, 'Boolean');
    this.setHelpUrl(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_HELP_URL);
    this.setTooltip(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_TOOLTIP);
    this.setColour(PHASER_MOUSE_INPUT);
  }
};

Blockly.Blocks['get_active_pointer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ACTIVE_POINTER);
    this.setOutput(true, null);
    this.setColour(PHASER_POINTER_INPUT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ACTIVE_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ACTIVE_POINTER_HELP_URL);
  }
};
//endregion

//region KEYBOARD
const KEY_BOOLEAN_READABLE = ['altKey', 'ctrlKey', 'enabled', 'isDown', 'justDown', 'justUp', 'shiftKey'];
const KEY_BOOLEAN_WRITABLE = [];
const KEY_BOOLEAN_FIELDS = createDropDownField(KEY_BOOLEAN_WRITABLE, KEY_BOOLEAN_READABLE);

const KEY_NUMERIC_READABLE = ['duration', 'repeats', 'timeUp', 'timeDown'];
const KEY_NUMERIC_WRITABLE = [];
const KEY_NUMERIC_FIELDS = createDropDownField(KEY_NUMERIC_WRITABLE, KEY_NUMERIC_READABLE);

Blockly.Blocks['create_cursor_keys'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_CURSOR_KEYS);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_CURSOR_KEYS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_CURSOR_KEYS_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['is_key_down'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEY')
      .appendField(Blockly.Msg.KEY)
      .appendField(Blockly.Msg.IS_KEY_DOWN);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.IS_KEY_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_KEY_DOWN_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['add_key'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_KEY)
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEYCODE');
    this.setOutput(true, 'Number');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.ADD_KEY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_KEY_HELP_URL);
  }
};

Blockly.Blocks['get_key_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(KEY_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('KEY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.GET_KEY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.KEY_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['get_key_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(KEY_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('KEY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.GET_KEY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.KEY_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['key_just_pressed'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_JUST_PRESSED);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_JUST_PRESSED_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_just_released'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_JUST_RELEASED);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_JUST_RELEASED_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_reset'] = {
  init: function () {
    this.appendValueInput('KEY')
      .appendField(Blockly.Msg.RESET)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'HARD')
      .appendField(Blockly.Msg.HARD);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.KEY_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_RESET_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_up_duration'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_UP_DURATION);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_UP_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_UP_DURATION_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_down_duration'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_DOWN_DURATION);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_DOWN_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_DOWN_DURATION_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};
//endregion

//region INPUT_HANDLER
const INPUT_HANDLER_BOOLEAN_WRITABLE = ['allowHorizontalDrag', 'allowVerticalDrag', 'bringToTop', 'dragFromCenter', 'draggable', 'dragStopBlocksInputUp', 'enabled', 'isDragged', 'pixelPerfectClick', 'pixelPerfectOver', 'snapOnDrag', 'snapOnRelease'];
const INPUT_HANDLER_BOOLEAN_READABLE = [];
const INPUT_HANDLER_BOOLEAN_FIELDS = createDropDownField(INPUT_HANDLER_BOOLEAN_WRITABLE, INPUT_HANDLER_BOOLEAN_READABLE);

const INPUT_HANDLER_NUMERIC_WRITABLE = ['pixelPerfectAlpha', 'priorityId', 'snapOffsetX', 'snapOffsetY', 'snapX', 'snapY', 'dragDistanceThreshold', 'dragTimeThreshold'];
const INPUT_HANDLER_NUMERIC_READABLE = [];
const INPUT_HANDLER_NUMERIC_FIELDS = createDropDownField(INPUT_HANDLER_NUMERIC_WRITABLE, INPUT_HANDLER_NUMERIC_READABLE);

const INPUT_HANDLER_POINT_WRITABLE = ['downPoint', 'drafOffset', 'dragStartPoint', 'snapOffset', 'snapPoint'];
const INPUT_HANDLER_POINT_READABLE = [];
const INPUT_HANDLER_POINT_FIELDS = createDropDownField(INPUT_HANDLER_POINT_WRITABLE, INPUT_HANDLER_POINT_READABLE);

Blockly.Blocks['input_handler_enable'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_HELP_URL);
  }
};

Blockly.Blocks['set_input_handler_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_input_handler_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_input_handler_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_input_handler_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_input_handler_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_POINT_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_input_handler_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_POINT_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['input_handler_bounds_rect_set'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT);
    this.appendValueInput('RECT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_drag'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_drag_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_CENTER)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CENTER');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_TOP)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'TOP');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_PIXEL)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'PIXEL');
    this.appendValueInput('ALPHA')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_ALPHA);
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pointer_down'] = {
  init: function () {
    this.appendValueInput('POINTER');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pointer_over'] = {
  init: function () {
    this.appendValueInput('POINTER');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_disable_drag'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_snap'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SNAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_snap_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SNAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_DRAG)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'DRAG');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_RELEASE)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'RELEASE');
    this.appendValueInput('OFFSET_X')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_OFFSET_X);
    this.appendValueInput('OFFSET_Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_OFFSET_Y);
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_HELP_URL);
  }
};

Blockly.Blocks['input_handler_disable_snap'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pixel'] = {
  init: function () {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_MIDDLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_END);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_HELP_URL);
  }
};

Blockly.Blocks['input_handler_is_pixel_perfect'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_pressed'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_released'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_over_duration'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_OVER_DURATION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_OVER_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_OVER_DURATION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_over'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_POINTER_OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_POINTER_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_POINTER_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_over'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_OVER);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.WITHIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_down_duration'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_up'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_UP);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_UP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_UP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_down'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN_HELP_URL);
  }
};

Blockly.Blocks['input_handler_start'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_START);
    this.appendValueInput('PRIORITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_START_PRIORITY);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_START_HELP_URL);
  }
};

Blockly.Blocks['input_handler_stop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_STOP);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_STOP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_OUT);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.WITHIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_OUT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_POINTER_OUT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_POINTER_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_POINTER_OUT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_x'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_X);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_X_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_X_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_y'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_Y);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_Y_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_Y_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_position'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_reset'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_RESET);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_RESET_HELP_URL);
  }
};

Blockly.Blocks['input_handler_destroy'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DESTROY);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DESTROY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DESTROY_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_dragged'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_set_drag_lock'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ALLOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK)
      .appendField(Blockly.Msg.HORIZONTAL)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'HORIZONTAL')
      .appendField(Blockly.Msg.VERTICAL)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VERTICAL');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK_HELP_URL);
  }
};
//endregion

//region POINTER
const POINTER_DEVICE_BUTTONS = ['leftButton', 'rightButton', 'middleButton', 'backButton'];
const POINTER_DEVICE_BUTTONS_DROPDOWN = createDropDownField([], POINTER_DEVICE_BUTTONS);

Blockly.Blocks['pointer_get_device_buttons_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_DEVICE_BUTTON_FIELD)
      .appendField(new Blockly.FieldDropdown(POINTER_DEVICE_BUTTONS_DROPDOWN.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'DeviceButton');
    this.setColour(PHASER_POINTER_INPUT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_POINTER_FIELD_VI_TOOLTIP.replace('%1', 'device button'));
    this.setHelpUrl(Blockly.Msg.GET_POINTER_FIELD_VI_HELP_URL);
  }
};
//endregion

//region DEVICE_BUTTON
//http://dragondrop.digipen.edu/docs/Phaser.DeviceButton.html
const DEVICE_BUTTON_BOOLEAN_FIELDS_RO = ['isDown', 'isUp', 'ctrlKey', 'altKey', 'shiftKey'];
const DEVICE_BUTTON_NUMERIC_FIELDS_RO = ['buttonCode', 'duration', 'repeats', 'timeDown', 'timeUp', 'value'];

const DEVICE_BUTTON_BOOLEAN_FIELDS = createDropDownField([], DEVICE_BUTTON_BOOLEAN_FIELDS_RO);
const DEVICE_BUTTON_NUMERIC_FIELDS = createDropDownField([], DEVICE_BUTTON_NUMERIC_FIELDS_RO);

Blockly.Blocks['device_button_get_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(DEVICE_BUTTON_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_TOOLTIP.replace('%1', 'boolean'));
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['device_button_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(DEVICE_BUTTON_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_TOOLTIP.replace('%1', 'numeric'));
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['device_button_just_pressed'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.JUST_PRESSED);
    this.setOutput('true', 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.DEVICE_BUTTON_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_JUST_PRESSED_HELP_URL);
  }
};

Blockly.Blocks['device_button_just_released'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.JUST_RELEASED);
    this.setOutput('true', 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.DEVICE_BUTTON_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_JUST_RELEASED_HELP_URL);
  }
};
//endregion