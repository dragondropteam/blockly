const tilemap_load_options = [['format: json', 'json'], ['format: csv', 'csv']];

const tilemap_directions = [['east', 'EAST'], ['north', 'NORTH'], ['south', 'SOUTH'], ['west', 'WEST']];

const TILEMAP_NUMERIC_WRITABLE = ['titleWidth', 'version', 'currentLayer', 'format', 'height', 'heightInPixels', 'titleHeight', 'width', 'widthInPixels'];
const TILEMAP_NUMERIC_FIELDS = createDropDownField(TILEMAP_NUMERIC_WRITABLE, []);

const TILEMAP_BOOLEAN_WRITABLE = ['enableDebug'];
const TILEMAP_BOOLEAN_FIELDS = createDropDownField(TILEMAP_BOOLEAN_WRITABLE, []);

const TILEMAP_STRING_WRITABLE = ['key', 'orientation'];
const TILEMAP_STRING_FIELDS = [TILEMAP_STRING_WRITABLE, []];

const TILEMAP_ARRAY_WRITABLE = ['collideIndexes', 'collision', 'debugMap', 'imageCollections', 'images', 'layers', 'objects', 'tiles', 'tilesets'];
const TILEMAP_ARRAY_FIELDS = [TILEMAP_ARRAY_WRITABLE, []];

Blockly.Blocks['set_tilemap_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_BOOLEAN_FIELDS.writable), 'FIELD')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('MAP');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PHASER_TILKMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILKMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_tilemap_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_tilemap_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(TILEMAP_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('MAP')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.PHASER_TILKMAP_SET_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_TILKMAP_FIELD_HELP_URL);
    this.setColour(PHASER_TILEMAP_COLOUR);
  },
  customContextMenu: createPointGetterContextMenu('set_tilemap_boolean_field', {propertyTag: 'FIELD'})
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

Blockly.Blocks['add_tileset_image'] = {
  init: function () {
    this.appendValueInput('MAP')
      .appendField(Blockly.Msg.PHASER_ADD_TILSET_IMAGE);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAGGED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_TILEMAP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_ADD_TILSET_IMAGE_HELP_URL);
  }
};