Blockly.JavaScript['set_tilemap_boolean_field'] = function (block) {
  const field = block.getFieldValue('PROPERTY');
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = block.getFieldValue('VALUE') == 'TRUE';
  return `${map}.${field} = ${value};\n`;
};

Blockly.JavaScript['set_tilemap_numeric_field'] =
  Blockly.JavaScript['set_tilemap_array_field'] =
    Blockly.JavaScript['set_tilemap_string_field'] = function (block) {
      const field = block.getFieldValue('PROPERTY');
      const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
      const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
      return `${map}.${field} = ${value};\n`;
    };

Blockly.JavaScript['get_tilemap_boolean_field'] =
  Blockly.JavaScript['get_tilemap_string_field'] =
    Blockly.JavaScript['get_tilemap_array_field'] =
      Blockly.JavaScript['get_tilemap_numeric_field'] = function (block) {
        const field = block.getFieldValue('PROPERTY');
        const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
        return [`${map}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
      };

Blockly.JavaScript['set_tilemap_layer_field'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${map}.layer = ${value};\n`;
};

Blockly.JavaScript['get_tilemap_layer_field'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`${map}.layer`, Blockly.JavaScript.ORDER_ATOMIC];
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

Blockly.JavaScript['add_tileset_image_simple'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_NONE);

  return `${map}.addTilesetImage(${tag});\n`;
};

Blockly.JavaScript['add_tileset_image_complex'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE);
  const map = Blockly.JavaScript.valueToCode(block, 'MAP', Blockly.JavaScript.ORDER_NONE);
  const height = Blockly.JavaScript.valueToCode(block, 'TILE_HEIGHT', Blockly.JavaScript.ORDER_NONE);
  const width = Blockly.JavaScript.valueToCode(block, 'TILE_WIDTH', Blockly.JavaScript.ORDER_NONE);
  const margin = Blockly.JavaScript.valueToCode(block, 'TILE_MARGIN', Blockly.JavaScript.ORDER_NONE);
  const spacing = Blockly.JavaScript.valueToCode(block, 'TILE_SPACING', Blockly.JavaScript.ORDER_NONE);
  const gid = Blockly.JavaScript.valueToCode(block, 'GID', Blockly.JavaScript.ORDER_NONE);

  return `${map}.addTilesetImage(${tag},${key},${width},${height},${margin},${spacing},${gid});\n`;
};

Blockly.JavaScript['tilemap_copy'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`${map}.copy(${x},${y},${width},${height},${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_create'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tile_width = Blockly.JavaScript.valueToCode(block, 'TILE_WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tile_height = Blockly.JavaScript.valueToCode(block, 'TILE_HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`${map}.create(${name},${width},${height},${tile_width},${tile_height},${group})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_create_blank_layer'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tile_width = Blockly.JavaScript.valueToCode(block, 'TILE_WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tile_height = Blockly.JavaScript.valueToCode(block, 'TILE_HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${map}.createBlankLayer(${name},${width},${height},${tile_width},${tile_height});\n`;
};

Blockly.JavaScript['tilemap_create_from_objects_simple'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const gid = Blockly.JavaScript.valueToCode(block, 'GID', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${map}.createFromObjects(${name},${gid},${key});\n`;
};

Blockly.JavaScript['tilemap_create_from_objects_complex'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const gid = Blockly.JavaScript.valueToCode(block, 'GID', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const sprite_class = Blockly.JavaScript.valueToCode(block, 'CLASS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const exists = block.getFieldValue('EXISTS') == 'TRUE';
  const cull = block.getFieldValue('CULL') == 'TRUE';
  const y = block.getFieldValue('Y') == 'TRUE';
  return `${map}.createFromObjects(${name},${gid},${key},${frame},${exists},${cull},${group},${sprite_class},${y});\n`;
};

Blockly.JavaScript['tilemap_create_from_tiles'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tiles = Blockly.JavaScript.valueToCode(block, 'TILES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const replacement = Blockly.JavaScript.valueToCode(block, 'REPLACEMENT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.createFromTiles(${tiles},${replacement},${key},${layer},${group})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_create_layer_simple'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.createLayer(${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_create_layer_complex'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.createLayer(${layer},${width},${height},${group})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_fill'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.fill(${index},${x},${y},${width},${height},${layer});\n`;
};

Blockly.JavaScript['tilemap_for_each'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const context = Blockly.JavaScript.valueToCode(block, 'CONTEXT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const callback = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.forEach(${callback},${context},${x},${y},${width},${height},${layer});\n`;
};

Blockly.JavaScript['tilemap_get_image_index'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.getImageIndex(${name})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_get_layer_index'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.getLayerIndex(${name})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_get_tile_simple'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.getTile(${x},${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_get_tile_complex'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const return_null = block.getFieldValue('VALUE') == 'TRUE';

  return [`${map}.getTile(${x},${y},${layer},${return_null})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_get_tile_direction'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const direction = block.getFieldValue('PROPERTY');

  return [`${map}.getTile${direction}(${layer},${x},${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_get_tilset_index'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.getTilesetIndex(${name})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_has_tile'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.hasTile(${x},${y},${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_paste'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tileblock = Blockly.JavaScript.valueToCode(block, 'TILEBLOCK', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.paste(${x},${y},${tileblock},${layer});\n`;
};

Blockly.JavaScript['tilemap_put_tile'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const tile = Blockly.JavaScript.valueToCode(block, 'TILE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.putTile(${tile},${x},${y},${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_random'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.random(${x},${y},${width},${height},${layer});\n`;
};

Blockly.JavaScript['tilemap_remove_all_layers'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.removeAllLayers();\n`;
};

Blockly.JavaScript['tilemap_remove_tile'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.removeTile(${x},${y},${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_replace_complex'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const dest = Blockly.JavaScript.valueToCode(block, 'DEST', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.replace(${source},${dest},${x},${y},${width},${height},${layer});\n`;
};

Blockly.JavaScript['tilemap_replace_simple'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const dest = Blockly.JavaScript.valueToCode(block, 'DEST', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.replace(${source},${dest});\n`;
};

Blockly.JavaScript['tilemap_search_tile_index_simple'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.searchTileIndex(${index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_search_tile_index_complex'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const skip = Blockly.JavaScript.valueToCode(block, 'SKIP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return [`${map}.searchTileIndex(${index},${skip},false,${layer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tilemap_set_collision'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const indexes = Blockly.JavaScript.valueToCode(block, 'INDEXES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  const recalculate = block.getFieldValue('RECALCULATE') == 'TRUE';

  return `${map}.setCollision(${indexes},${collide},${layer},${recalculate});\n`;
};

Blockly.JavaScript['tilemap_set_collision_between'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const stop = Blockly.JavaScript.valueToCode(block, 'STOP', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  const recalculate = block.getFieldValue('RECALCULATE') == 'TRUE';

  return `${map}.setCollisionBetween(${start},${stop},${collide},${layer},${recalculate});\n`;
};

Blockly.JavaScript['tilemap_set_collision_by_exclusion'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const indexes = Blockly.JavaScript.valueToCode(block, 'INDEXES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  const recalculate = block.getFieldValue('RECALCULATE') == 'TRUE';

  return `${map}.setCollisionByExclusion(${indexes},${collide},${layer},${recalculate});\n`;
};

Blockly.JavaScript['tilemap_set_layer'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.setLayer(${layer});\n`;
};

Blockly.JavaScript['tilemap_set_prevent_recalculate'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = block.getFieldValue('VALUE') == 'TRUE';

  return `${map}.setPreventRecalculate(${value});\n`;
};

Blockly.JavaScript['tilemap_set_tile_index_callback'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const indexes = Blockly.JavaScript.valueToCode(block, 'INDEXES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const context = Blockly.JavaScript.valueToCode(block, 'CONTEXT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

  return `${map}.setTileIndexCallback(${indexes},${functionName},${context},${layer});\n`;
};

Blockly.JavaScript['tilemap_set_tile_location_callback'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const context = Blockly.JavaScript.valueToCode(block, 'CONTEXT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

  return `${map}.setTileLocationCallback(${x},${y},${width},${height},${functionName},${context},${layer});\n`;
};

Blockly.JavaScript['tilemap_set_tile_size'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.setTileSize(${width},${height});\n`;
};

Blockly.JavaScript['tilemap_shuffle'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.shuffle(${x},${y},${width},${height},${layer});\n`;
};

Blockly.JavaScript['tilemap_swap'] = function (block) {
  const map = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const layer = Blockly.JavaScript.valueToCode(block, 'LAYER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';

  return `${map}.swap(${a},${b},${x},${y},${width},${height},${layer});\n`;
};