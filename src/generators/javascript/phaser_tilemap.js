Blockly.JavaScript['set_tilemap_boolean_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = block.getFieldValue('VALUE') == 'TRUE';
  return `${map}.${field} = ${value};\n`;
};

Blockly.JavaScript['get_tilemap_boolean_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const map = Blockly.JavaScript.valueToCode(block, 'map', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`${map}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_direction_members'] = function (block) {
  const direction = block.getFieldValue('DIRECTION');

  return [`Phaser.Tilemap.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['load_tilemap'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
  const type = block.getFieldValue('TYPE');
  let type_code;
  if (type == 'json') {
    type_code = 'Phaser.Tilemap.TILED_JSON';
  }
  else {
    type_code = 'Phaser.Tilemap.CSV';
  }
  return `game.load.tilemap(${tag},${source}, null, ${type_code});\n`;
};

Blockly.JavaScript['add_tilemap_simple'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);

  return [`game.add.tilemap(${tag})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['add_tilemap_complex'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);

  return [`game.add.tilemap(${tag},${x},${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['create_tilemap_layer'] = function (block) {
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_NONE);
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_NONE);

  return [`${map}.createLayer(${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['add_tileset_image'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_NONE);

  return `${map}.addTilesetImage(${tag});\n`;
};