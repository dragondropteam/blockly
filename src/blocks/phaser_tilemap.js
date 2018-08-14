const tilemap_load_options = [['format: json', 'json'], ['format: csv', 'csv']];

const tilemap_directions = [['east', 'EAST'], ['north', 'NORTH'], ['south', 'SOUTH'], ['west', 'WEST']];

const TILEMAP_NUMERIC_WRITABLE = ['titleWidth', 'version', 'currentLayer', 'format', 'height', 'heightInPixels', 'titleHeight', 'width', 'widthInPixels'];
const TILEMAP_NUMERIC_FIELDS = createDropDownField(TILEMAP_NUMERIC_WRITABLE, []);

const TILEMAP_BOOLEAN_WRITABLE = ['enableDebug'];
const TILEMAP_BOOLEAN_FIELDS = createDropDownField(TILEMAP_BOOLEAN_WRITABLE, []);

const TILEMAP_STRING_WRITABLE = ['key', 'orientation'];
const TILEMAP_STRING_FIELDS = createDropDownField(TILEMAP_STRING_WRITABLE, []);

const TILEMAP_ARRAY_WRITABLE = ['collideIndexes', 'collision', 'debugMap', 'imageCollections', 'images', 'layers', 'objects', 'tiles', 'tilesets'];
const TILEMAP_ARRAY_FIELDS = createDropDownField(TILEMAP_ARRAY_WRITABLE, []);

Blockly.Blocks['set_tilemap_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_BOOLEAN_FIELDS.writable), 'PROPERTY')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_tilemap_boolean_field')
};

Blockly.Blocks['get_tilemap_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_BOOLEAN_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_tilemap_boolean_field')
};

Blockly.Blocks['set_tilemap_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_NUMERIC_FIELDS.writable), 'PROPERTY')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_tilemap_numeric_field')
};

Blockly.Blocks['get_tilemap_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_NUMERIC_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_tilemap_numeric_field')
};

Blockly.Blocks['set_tilemap_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_STRING_FIELDS.writable), 'PROPERTY')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_tilemap_string_field')
};

Blockly.Blocks['get_tilemap_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_STRING_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_tilemap_string_field')
};

Blockly.Blocks['set_tilemap_array_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_ARRAY_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_ARRAY_FIELDS.writable), 'PROPERTY')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .setCheck('Array')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_tilemap_array_field')
};

Blockly.Blocks['get_tilemap_array_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ARRAY_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_ARRAY_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_tilemap_array_field')
};

Blockly.Blocks['set_tilemap_layer_field'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.PHASER_TILEMAP_SET_LAYER_FIELD);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_SET_LAYER_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_SET_LAYER_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('get_tilemap_layer_field')
};

Blockly.Blocks['get_tilemap_layer_field'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.PHASER_TILEMAP_GET_LAYER_FIELD);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_GET_LAYER_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_GET_LAYER_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_tilemap_layer_field')
};

Blockly.Blocks['tilemap_direction_members'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(tilemap_directions), 'DIRECTION');
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.PHASER_TILEMAP_DIRECTIONS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILEMAP_DIRECTIONS_HELP_URL);
  }
};

Blockly.Blocks['load_tilemap'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_LOAD_TILEMAP);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(tilemap_load_options), 'TYPE');
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.PHASER_LOAD_TILEMAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_LOAD_TILEMAP_HELP_URL);
  }
};

Blockly.Blocks['add_tilemap_simple'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_ADD_TILEMAP);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAGGED);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_ADD_TILEMAP_TOOLITP);
    this.setHelpUrl(Blockly.Msg.PHASER_ADD_TILEMAP_HELP_URL);
  }
};

Blockly.Blocks['add_tilemap_complex'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_ADD_TILEMAP);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_ADD_TILEMAP_TOOLITP);
    this.setHelpUrl(Blockly.Msg.PHASER_ADD_TILEMAP_HELP_URL);
  }
};

Blockly.Blocks['create_tilemap_layer'] = {
  init: function () {
    this.appendValueInput('LAYER')
      .setCheck('Number')
      .appendField(Blockly.Msg.PHASER_CREATE_TILEMAP_LAYER);
    this.appendValueInput('MAP')
      .appendField(Blockly.Msg.ON);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_CREATE_TILEMAP_LAYER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_CREATE_TILEMAP_LAYER_HELP_URL);
  }
};

Blockly.Blocks['add_tileset_image_simple'] = {
  init: function () {
    this.appendValueInput('MAP')
      .appendField(Blockly.Msg.PHASER_ADD_TILSET_IMAGE);
    this.appendValueInput('TAG')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['add_tileset_image_complex'] = {
  init: function () {
    this.appendValueInput('MAP')
      .appendField(Blockly.Msg.PHASER_ADD_TILSET_IMAGE);
    this.appendValueInput('TAG')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.KEY);
    this.appendValueInput('TILE_WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_WIDTH);
    this.appendValueInput('TILE_HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_HEIGHT);
    this.appendValueInput('TILE_MARGIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_MARGIN);
    this.appendValueInput('TILE_SPACING')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_SPACING);
    this.appendValueInput('GID')
      .setCheck('Number')
      .appendField(Blockly.Msg.GID);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['tilemap_copy'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_COPY);
    this.appendValueInput('LAYER')
      .appendField(Blockly.Msg.TILEMAP_COPY_LAYER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TILEMAP_COPY_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TILEMAP_COPY_BOUNDS);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_COPY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_COPY_HELP_URL);
  }
};

Blockly.Blocks['tilemap_create'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_CREATE);
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(Blockly.Msg.NAME);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.appendValueInput('TILE_WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_WIDTH);
    this.appendValueInput('TILE_HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_HEIGHT);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_CREATE_TOOLTUP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_CREATE_HELP_URL);
  }
};

Blockly.Blocks['tilemap_create_blank_layer'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_CREATE_BLANK_LAYER);
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(Blockly.Msg.NAME);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.appendValueInput('TILE_WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_WIDTH);
    this.appendValueInput('TILE_HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.TILE_HEIGHT);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_CREATE_TOOLTUP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_CREATE_HELP_URL);
  }
};

Blockly.Blocks['tilemap_create_from_objects_simple'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS);
    this.appendValueInput('GID')
      .appendField(Blockly.Msg.GID);
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS_NAME);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_CREATE_TOOLTUP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_CREATE_HELP_URL);
  }
};

Blockly.Blocks['tilemap_create_from_objects_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS);
    this.appendValueInput('GID')
      .appendField(Blockly.Msg.GID);
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS_NAME);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.FRAME);
    this.appendValueInput('CLASS')
      .appendField(Blockly.Msg.CLASS_DEFINITION_CLASS);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EXISTS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXISTS');
    this.appendDummyInput()
      .appendField(Blockly.Msg.CULL)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CULL');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TILEMAP_ADJUST_Y)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'Y');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_CREATE_TOOLTUP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_CREATE_HELP_URL);
  }
};

Blockly.Blocks['tilemap_create_from_tiles'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS);
    this.appendValueInput('GID')
      .appendField(Blockly.Msg.GID);
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('NAME')
      .setCheck('String')
      .appendField(Blockly.Msg.TILEMAP_CREATE_FROM_OBJECTS_NAME);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.FRAME);
    this.appendValueInput('CLASS')
      .appendField(Blockly.Msg.CLASS_DEFINITION_CLASS);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EXISTS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXISTS');
    this.appendDummyInput()
      .appendField(Blockly.Msg.CULL)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CULL');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TILEMAP_ADJUST_Y)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'Y');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.TILEMAP_CREATE_TOOLTUP);
    this.setHelpUrl(Blockly.Msg.TILEMAP_CREATE_HELP_URL);
  }
};