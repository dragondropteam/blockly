/**
 * @author Luke Powell
 * @file Generates JavaScript for phaser blocks
 * @copyright DigiPen Institute of Technology 2016
 * @block
 */

//region MEMBER_FUNCTIONS
/**
 * Generic method to translate a block for a set_<object>_<type>_member block
 * @param block A block containing two value inputs OBJECT and VALUE representing the object the member is on and the value to set it to and a field ELEMENT to determine the member
 * @block
 */
function getMember (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const element = block.getFieldValue('ELEMENT');
  return [`${object}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
}

function getField (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
}

/**
 * Generic method to translate a block for a get_<object>_<type>_member block
 * @param block A block containing a value input OBJECT representing the object the member is on and a field ELEMENT to determine the member
 * @return {String}
 * @block
 */
function setMember (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const element = block.getFieldValue('ELEMENT');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${element} = ${value};\n`;
}

function setPointField (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field}.copyFrom(${point});\n`;
}

//endregion
//region STARTUP

/**
 * <img src="img/phaser_simple_init.jpg" width="250"> <br>
 * The main controller for the entire Phaser game. The functions run in order from top to bottom, with preload and create running once, and update running as a loop until the game ends.
 * [Check the game engine documentation for more details.]{@link http://dragondrop.digipen.edu/docs/Phaser.Timer.html}
 * @param width {Number} The width of the game world
 * @param height {Number} The height of the game world
 * @returns {} var game = new Phaser.Game([width], [height], Phaser.AUTO, '', {preload: preload, create: create, update: update});

 * @block
 */
Blockly.JavaScript['phaser_simple_init'] = function (block) {

  Blockly.JavaScript.addReservedWords('game, preload, create, update');

  const number_width = block.getFieldValue('WIDTH');
  const number_height = block.getFieldValue('HEIGHT');
  const statements_preload = Blockly.JavaScript.statementToCode(block, 'PRELOAD');
  const statements_create = Blockly.JavaScript.statementToCode(block, 'CREATE');
  const statements_update = Blockly.JavaScript.statementToCode(block, 'UPDATE');

  const phaser = `var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '', {preload: preload, create: create, update: update});\n\n`;
  const preload = `function preload() {\n${statements_preload}\n}\n\n`;
  const create = `function create() {\n  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n  this.scale.pageAlignHorizontally = true;\n  this.scale.pageAlignVertically = true;\n  this.scale.updateLayout( true );\n${statements_create}\n}\n\n`;
  const update = `function update() {\n${statements_update}\n}\n\n`;
  return phaser + preload + create + update;
};

/**The main controller for the entire Phaser game. Starts an instance of phaser without using preload, create, and update.
 * @method start_phaser_for_states
 * @param width {Number} The width of the game world
 * @param height {Number} The height of the game world
 * @returns {} var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '');
 * @block
 */
Blockly.JavaScript['start_phaser_for_states'] = function (block) {
  const number_width = block.getFieldValue('WIDTH');
  const number_height = block.getFieldValue('HEIGHT');
  return `var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '');\n`;
};

/**
 * Stretch the stuff
 * @method center_and_stretch
 * @returns {} game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 this.scale.pageAlignHorizontally = true;
 this.scale.pageAlignVertically = true;
 this.scale.updateLayout( true );

 * @block
 */
Blockly.JavaScript['center_and_stretch'] = function (block) {
  return 'game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n  this.scale.pageAlignHorizontally = true;\n  this.scale.pageAlignVertically = true;\n  this.scale.updateLayout( true );\n';
};
//endregion

//region STEPPING
/**
 * Enables stepping through the game loop one frame at a time. Must use game.step()
 * @method enable_step
 * @returns {} game.enableStep();
 * @block
 */
Blockly.JavaScript['enable_step'] = function (block) {
  return `game.enableStep();\n`;
};
/**
 * Disables stepping through the game loop.
 * @method disable_step
 * @returns {} game.disableStep();
 * @block
 */
Blockly.JavaScript['disable_step'] = function (block) {
  return `game.disableStep();\n`;
};
/**
 * Steps through the game loop one frame at a time.
 * @method step
 * @returns {} game.step();
 * @block
 */
Blockly.JavaScript['step'] = function (block) {
  return `game.step();\n`;
};

//endregion

//region DRAWPRIMITIVES
/**
 * Adds a graphics object to use to draw primitive shapes.
 * @method create_graphics_object
 * @param x {Number} x position of the new graphics object
 * @param y {Number} y position of the new graphics object
 * @returns {} game.add.graphics(x, y);
 * @block
 */
Blockly.JavaScript['create_graphics_object'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Change ORDER_NONE to the correct strength.
  return [`game.add.graphics(${value_x}, ${value_y})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Enables graphics filling for shapes.
 * @method draw_shapes_with_colour
 * @param colour the colour to fill the shapes with
 * @param graphics the graphics object to use
 * @returns {}
 * graphics.beginFill(toHexColor(colour));
 * (shapes to fill)
 * graphics.endFill();
 * @block
 */
Blockly.JavaScript['draw_shapes_with_colour'] = function (block) {
  let value_colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);
  const statements_shape_draw_functions = Blockly.JavaScript.statementToCode(block, 'shape draw functions');
  const toHexColorFunc = Blockly.JavaScript.provideFunction_(
    'toHexColor',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
    '(color) {',
      'return color.replace("#", "0x");',
      '}']);

  return `${variable_graphics_object_name}.beginFill(${toHexColorFunc}(${value_colour}));\n
${statements_shape_draw_functions}\n
${variable_graphics_object_name}.endFill();\n`;
};

/**
 * Draws a rectangle. Use inside of {@link draw_shapes_with_colour}
 * @method draw_rectangle
 * @param x {Number} x position of the rectangle
 * @param y {Number} y position of the rectangle
 * @param width {Number} the width of the rectangle
 * @param height {Number} the height of the rectangle
 * @returns {} graphicsVar.drawRect(x, y, width, height);
 * @block
 */
Blockly.JavaScript['draw_rectangle'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  const value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  const value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);

  return `${variable_graphics_object_name}.drawRect(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
};

/**
 * Draws a circle. Use inside of {@link draw_shapes_with_colour}
 * @method draw_circle
 * @param x {Number} x position of the rectangle
 * @param y {Number} y position of the rectangle
 * @param diameter {Number} the diameter of the rectangle
 * @returns {} graphicsVar.drawCircle(x, y, diameter);
 * @block
 */
Blockly.JavaScript['draw_circle'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  const value_diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);

  return `${variable_graphics_object_name}.drawCircle(${value_x}, ${value_y}, ${value_diameter});\n`;
};

//endregion

//region SPRITE/IMAGE

/**
 * Create an image to be used in the game.
 * @method create_image
 * @param tag {String} the tag that defines the image
 * @param source {String} the file path of the image
 * @returns {} game.load.image(tag, source);
 * @block
 */
Blockly.JavaScript['create_image'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);

  return `game.load.image(${tag}, ${source});\n`;
};

/**
 * Create an atlas image to be used in the game.
 * @method addspritewithatlas
 * @param tag {String} the tag that defines the image
 * @param source {String} the file path of the image
 * @param xml {String} the file path of the xml file
 * @returns {} game.load.atlasXML(tag, source, xml);
 * @block
 */
Blockly.JavaScript['addspritewithatlas'] = function (block) {
  const value_tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
  const value_text_source = Blockly.JavaScript.valueToCode(block, 'text_source', Blockly.JavaScript.ORDER_ATOMIC);
  const value_text_xmlsource = Blockly.JavaScript.valueToCode(block, 'text_xmlsource', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.load.atlasXML(${value_tag}, ${value_text_source}, ${value_text_xmlsource})\n`;
};

/**
 * Create a sprite based on an atlas image.
 * @method imagesubtextureatlas
 * @param x {Number} x position of the sprite
 * @param y {Number} y position of the sprite
 * @param tag {String} the tag of the image to use for the sprite
 * @param id {String} the id of the xml texture to use for the sprite
 * @returns {} game.add.sprite(x, y, tag, id);
 * @block
 */
Blockly.JavaScript['imagesubtextureatlas'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  const value_spritesource = Blockly.JavaScript.valueToCode(block, 'spritesource', Blockly.JavaScript.ORDER_ATOMIC);
  const value_xmlsubtexture = Blockly.JavaScript.valueToCode(block, 'xmlsubtexture', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.add.sprite(${value_x}, ${value_y}, ${value_spritesource}, ${value_xmlsubtexture} )`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Create a sprite based on an image.
 * @method add_image
 * @param x {Number} x position of the sprite
 * @param y {Number} y position of the sprite
 * @param tag {String} the tag of the image to use for the sprite
 * @returns {} game.add.sprite(x, y, tag);
 * @block
 */
Blockly.JavaScript['add_image'] = function (block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.add.sprite(${x_pos}, ${y_pos}, ${tag})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated Use add_animation_vi instead
 * Add an animation to a sprite object.
 * @method add_animation
 * @param object {Sprite} sprite to apply the animation to
 * @param name {String} name of the tag for the animation
 * @param frames array of numbers or strings that correspond to frames to add to the animation
 * @param fps {Number} the speed the animation should play
 * @param loop {Boolean} whether or not the animation should loop or play once
 * @returns {} object.animations.add(name, frames, fps, loop);
 * @block
 */
Blockly.JavaScript['add_animation'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  const text_name = block.getFieldValue('NAME');
  const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const number_fps = block.getFieldValue('FPS');
  const checkbox_loop = block.getFieldValue('LOOP') == 'TRUE';
  return `${variable_object}.animations.add('${text_name}', ${value_frames}, ${number_fps}, ${checkbox_loop});\n`;
};

/**
 * Add an animation to a sprite object.
 * @method add_animation
 * @param object {Sprite} sprite to apply the animation to
 * @param name {String} name of the tag for the animation
 * @param frames array of numbers or strings that correspond to frames to add to the animation
 * @param fps {Number} the speed the animation should play
 * @param loop {Boolean} whether or not the animation should loop or play once
 * @returns {} object.animations.add(name, frames, fps, loop);
 * @block
 */
// These blocks move towards using value input verus variable fields, this allows the students to for example loop through
// a list of objects they want an animation to start playing on
Blockly.JavaScript['add_animation_vi'] = function (block) {
  const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const text_name = block.getFieldValue('NAME');
  const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const number_fps = block.getFieldValue('FPS');
  const checkbox_loop = block.getFieldValue('LOOP') == 'TRUE';
  return `${variable_object}.animations.add('${text_name}', ${value_frames}, ${number_fps}, ${checkbox_loop});\n`;
};

/**
 * Create a sprite sheet from an image.
 * @method create_sprite_sheet
 * @param tag {String} the tag that defines the image
 * @param source {String} the file path of the image
 * @param width {Number} the width of each frame
 * @param height {Number} the height of each frame
 * @returns {} game.load.spritesheet(tag, source, width, height);
 * @block
 */
Blockly.JavaScript['create_sprite_sheet'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
  const number_frame_width = block.getFieldValue('FRAME_WIDTH');
  const number_frame_height = block.getFieldValue('FRAME_HEIGHT');
  return `game.load.spritesheet(${tag}, ${source}, ${number_frame_width}, ${number_frame_height});\n`;
};

/**
 * @deprecated
 * Adds a child to the given object.
 * @method add_child
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @returns {} object.addChild(child);
 * @block
 */
Blockly.JavaScript['add_child'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.addChild(${value_child});\n`;
};

/**
 * Adds a child to the given object.
 * @method add_child
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @returns {} object.addChild(child);
 * @block
 */
Blockly.JavaScript['add_child_vi'] = function (block) {
  const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.addChild(${value_child});\n`;
};

/**
 * @deprecated
 * Adds a child to the given object at the given index.
 * @method add_child_at
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @param index {Number} the index to add the child to
 * @returns {} object.addChildAt(child, index);
 * @block
 */
Blockly.JavaScript['add_child_at'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.addChildAt(${value_child}, ${value_index});\n`;
};

/**
 * Adds a child to the given object at the given index.
 * @method add_child_at
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @param index {Number} the index to add the child to
 * @returns {} object.addChildAt(child, index);
 * @block
 */
Blockly.JavaScript['add_child_at_vi'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${object}.addChildAt(${child}, ${index});\n`;
};

/**
 * Align an object inside of another object.
 * @method align_in
 * @param object object to align
 * @param container object to align to
 * @param position {Number} position to justify the alignment to
 * @param offset_x {Number} horizontal adjustment of the alignment
 * @param offset_y {Number} vertical adjustment of the alignment
 * @returns {} object.alignIn(container, Phaser.position, offset_x, offset_y);
 * @block
 */
Blockly.JavaScript['align_in'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const container = Blockly.JavaScript.valueToCode(block, 'CONTAINER', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_position = block.getFieldValue('POSITION');
  const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSETX', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSETY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.alignIn(${container}, Phaser.${dropdown_position}, ${offset_x}, ${offset_y});\n`;
};

/**
 * Align an object to the side of another object.
 * @method align_to
 * @param object object to align
 * @param container object to align to
 * @param position {Number} position to justify the alignment to
 * @param offset_x {Number} horizontal adjustment of the alignment
 * @param offset_y {Number} vertical adjustment of the alignment
 * @returns {} object.alignTo(container, Phaser.position, offset_x, offset_y);
 * @block
 * @block
 */
Blockly.JavaScript['align_to'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const container = Blockly.JavaScript.valueToCode(block, 'CONTAINER', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_position = block.getFieldValue('POSITION');
  const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSETX', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSETY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.alignTo(${container}, Phaser.${dropdown_position}, ${offset_x}, ${offset_y});\n`;
};

/**
 * Render an object on top of all other objects.
 * @method bring_to_top
 * @param object object to render
 * @returns {} object.bringToTop();
 * @block
 */
Blockly.JavaScript['bring_to_top'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.bringToTop();\n`;
};

/**
 * If true, the game checks every frame to see if an object is within the world bounds, and returns a boolean with the result.
 * @method check_world_bounds
 * @param object object to check
 * @param bool {Boolean} enables/disables checking world bounds
 * @returns {} object.checkWorldBounds = bool;
 * @block
 */
Blockly.JavaScript['check_world_bounds'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.checkWorldBounds = ${value_bool};\n`;
};

/**
 * @deprecated
 * Checks if an object contains the given child.
 * @method contains
 * @param object object to check
 * @param child child to check
 * @returns {} object.contains(child);
 * @block
 */
Blockly.JavaScript['contains'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.contains(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Checks if an object contains the given child.
 * @method contains
 * @param object object to check
 * @param child child to check
 * @returns {} object.contains(child);
 * @block
 */
Blockly.JavaScript['contains_vi'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.contains(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Crop the image of an object to the given rectangular bounds.
 * @method crop
 * @param object object whose image is getting cropped
 * @param rectangle {Phaser.Rectangle} the rectangle bounds and properites to use for the crop
 * @returns {} object.crop(rectangle);
 * @block
 */
Blockly.JavaScript['crop'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.crop(${value_rectangle});\n`;
};

/**
 * Clear the cropping on an object's image.
 * @method clear_cropping
 * @param object object whose image is cropped
 * @returns {} object.crop();
 * @block
 */
Blockly.JavaScript['clear_cropping'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.crop();\n`;
};

/**
 * Destroy the given sprite object.
 * @method destroy_sprite
 * @param object object to destroy
 * @param bool {Boolean} whether or not the sprite's children should also be destroyed
 * @returns {} object.destroy(bool);
 * @block
 */
Blockly.JavaScript['destroy_sprite'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.destroy(${value_bool});\n`;
};

/**
 * @deprecated
 * Get the child at the given index.
 * @method get_child_at
 * @param object object to retrieve the child from
 * @param index {Number} index the child is located at
 * @returns {} object.getChildAt(index);
 * @block
 */
Blockly.JavaScript['get_child_at'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_object}.getChildAt(${value_index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Get the child at the given index.
 * @method get_child_at
 * @param object object to get the child from
 * @param index {Number} index the child is located at
 * @returns {} object.getChildAt(index);
 * @block
 */
Blockly.JavaScript['get_child_at_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.getChildAt(${value_index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * Get the index of the given child.
 * @method get_child_index
 * @param object object to get the child from
 * @param child child to get the index from
 * @returns {} object.getChildIndex(child);
 * @block
 */
Blockly.JavaScript['get_child_index'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.getChildIndex(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Get the index of the given child.
 * @method get_child_index
 * @param object object to get the child from
 * @param child child to get the index from
 * @returns {} object.getChildIndex(child);
 * @block
 */
Blockly.JavaScript['get_child_index_vi'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.getChildIndex(${child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Changes the image of a sprite object.
 * @method load_texture
 * @param object object whose image is getting changed
 * @param tag {String} the tag of the texture to change the image to
 * @returns {} object.loadTexture(tag);
 * @block
 */
Blockly.JavaScript['load_texture'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_texture = Blockly.JavaScript.valueToCode(block, 'TEXTURE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.loadTexture(${value_texture});\n`;
};

/**
 * Moves the object down one layer in the display list.
 * @method move_down
 * @param object object to render
 * @returns {} object.moveDown();
 * @block
 */
Blockly.JavaScript['move_down'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.moveDown();\n`;
};

/**
 * Moves the object up one layer in the display list.
 * @method move_up
 * @param object object to render
 * @returns {} object.moveUp();
 * @block
 */
Blockly.JavaScript['move_up'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.moveUp();\n`;
};

/**
 * @deprecated
 * Checks to see if two objects overlap.
 * @method sprite_overlap
 * @block
 */
Blockly.JavaScript['sprite_overlap'] = function (block) {
  const value_sprite_a = Blockly.JavaScript.valueToCode(block, 'SPRITEA', Blockly.JavaScript.ORDER_ATOMIC);
  const value_sprite_b = Blockly.JavaScript.valueToCode(block, 'SPRITEB', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_sprite_a}.overlap(${value_sprite_b})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @method out_of_bounds_kill
 * @block
 */
Blockly.JavaScript['out_of_bounds_kill'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.outOfBoundsKill = ${value_bool};\n`;
};

/**
 * If true, the object gets deleted if it leaves the world bounds.
 * @method out_of_bounds_faint
 * @param object object that gets deleted
 * @param boolean {Boolean} sets the action to true or false
 * @returns {} object.outOfBoundsFaint = boolean;
 * @block
 */
Blockly.JavaScript['out_of_bounds_faint'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.outOfBoundsFaint = ${value_bool};\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['remove_child'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.removeChild(${value_child});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['remove_child_at'] = function (block) {
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.removeChildAt(${value_index});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['remove_children'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.removeChildren();\n`;
};

/**
 * Removes the given child from the object.
 * @method remove_child
 * @param object object to remove the child from
 * @param child child to remove from the object
 * @returns {} object.removeChild(child);
 * @block
 */
Blockly.JavaScript['remove_child_vi'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.removeChild(${child});\n`;
};

/**
 * Removes the child at the given index from the object.
 * @method remove_child_at
 * @param object object to remove the child from
 * @param index index of the child to remove from the object
 * @returns {} object.removeChildAt(index);
 * @block
 */
Blockly.JavaScript['remove_child_at_vi'] = function (block) {
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.removeChildAt(${value_index});\n`;
};

/**
 * Removes all children from the object.
 * @method remove_children
 * @params object object to remove children from
 * @returns {} object.removeChildren();
 * @block
 */
Blockly.JavaScript['remove_children_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.removeChildren();\n`;
};

/**
 * @deprecated
 * Resets the dimensions of the frame the Game Object uses for rendering.
 * @method reset_frame
 * @param object object to reset
 * @returns {} object.resetFrame();
 * @block
 */
Blockly.JavaScript['reset_frame'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.resetFrame();\n`;
};

/**
 * @deprecated
 * @method resize_frame
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['resize_frame'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.resetFrame(${value_parent}, ${value_width}, ${value_height});\n`;
};

/**
 * Render an object below all other objects.
 * @method send_to_back
 * @param object object to render
 * @returns {} object.sendToBack();
 * @block
 */
Blockly.JavaScript['send_to_back'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.sendToBack();\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['set_child_index'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_parent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PARENT'), Blockly.Variables.NAME_TYPE);
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_parent}.setChildIndex(${value_child}, ${value_index});\n`;
};

/**
 * Sets the position of the child in the object's list of children.
 * @method set_child_index
 * @param object object that contains the child
 * @param child child to change the position of
 * @param index {Number} index to set the child's position to
 * @returns {} object.setChildIndex(child, index);
 * @block
 */
Blockly.JavaScript['set_child_index_vi'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.setChildIndex(${child}, ${index});\n`;
};

/**
 * Sets the texture frame for the object to use for rendering.
 * @method set_sprite_frame
 * @param object object to set the frame for
 * @param frame frame to set the texture to
 * @returns {} object.setFrame(frame);
 * @block
 */
Blockly.JavaScript['set_sprite_frame'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.setFrame(${value_frame});\n`;
};

/**
 * Sets the limits for how the object will scale based on it's parent.
 * @method set_scale_min_max
 * @param object object to set the scale constraints for
 * @param minX {Number} the minimum horizontal scale the Game Object can scale down to
 * @param minY {Number} the minimum vertical scale the Game Object can scale down to
 * @param maxX {Number} the maximum horizontal scale the Game Object can scale down to
 * @param maxY {Number} the maximum vertical scale the Game Object can scale down to
 * @returns {} object.setScaleMinMax(minX, minY, maxX, maxY);
 * @block
 */
Blockly.JavaScript['set_scale_min_max'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const minX = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC);
  const minY = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC);
  const maxX = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC);
  const maxY = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.setScaleMinMax(${minX}, ${minY}, ${maxX}, ${maxY});\n`;
};

/**
 * Clears all scale constraints set on the object.
 * @method clear_scale_min_max
 * @param object object to clear scale constraints from
 * @returns {} object.setScaleMinMax();
 * @block
 */
Blockly.JavaScript['clear_scale_min_max'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.setScaleMinMax();\n`;
};

/**
 * @deprecated
 * @method
 * @param
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['set_texture'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_texture = Blockly.JavaScript.valueToCode(block, 'TEXTURE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.setTexture(${value_texture});\n`;
};

/**
 * Swaps the position of the two children in the object's list.
 * @method swap_children
 * @param parent parent of the children who are being swapped
 * @param child to be swapped with child2
 * @param child2 to be swapped with cihld
 * @returns {} parent.swapChildren(child, child2);
 * @block
 */
Blockly.JavaScript['swap_children'] = function (block) {
  const value_parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const value_child2 = Blockly.JavaScript.valueToCode(block, 'CHILD2', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_parent}.swapChildren(${value_child}, ${value_child2});\n`;
};

//endregion

//region GROUPS
/**
 * Creates a container to hold multiple sprites. Assign to a variable for future use.
 * @method create_group
 * @returns {} game.add.group();
 * @block
 */
Blockly.JavaScript['create_group'] = function (block) {
  return [`game.add.group()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * @block
 */
Blockly.JavaScript['create_object_in_group_with_frame'] = function (block) {
  const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const tag = block.getFieldValue('TAG');
  const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GROUP'), Blockly.Variables.NAME_TYPE);
  return [`${group}.create(${xPos}, ${yPos}, '${tag}, ${frame}')`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Creates a new object from the tag and adds it to the front of the group. Assign to a variable for future use.
 * @method create_object_in_group_with_frame
 * @param x {Number} the x position for the object to be displayed at
 * @param y {Number} the y position for the object to be displayed at
 * @param frame {Number} the frame of the sprite sheet to display at the start
 * @param tag {String} the sprite to display on the object
 * @param group the group to add the object to
 * @returns {} group.create(x, y, tag, frame);
 * @block
 */
Blockly.JavaScript['create_object_in_group_with_frame_vi'] = function (block) {
  const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.create(${xPos}, ${yPos}, ${tag}, ${frame})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {String}
 * @block
 */
Blockly.JavaScript['call_function_on_group'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const func_name = Blockly.JavaScript.valueToCode(block, 'FUNCTION', Blockly.JavaScript.ORDER_ATOMIC);

  return `${group}.forEachAlive(${func_name}, this);\n`;
};

/**
 * Adds the given object to the front of the group.
 * @method add_to_group
 * @param object object that gets added to the group
 * @param group group that the object is getting added to
 * @returns {} group.add(object);
 * @block
 */
Blockly.JavaScript['add_to_group'] = function (block) {
  const newItem = Blockly.JavaScript.valueToCode(block, 'NEW_ITEM', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return `${group}.add(${newItem});\n`;
};

/**
 * Removes the given object from the group, with the option to remove it from the game as well.
 * @method remove_from_group
 * @param object object that gets removed from the group
 * @param group group that the object is getting removed from
 * @param destroy {Boolean} option to remove the object from the game
 * @returns {} group.remove(object, destroy);
 * @block
 */
Blockly.JavaScript['remove_from_group'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const destroy = block.getFieldValue('DESTROY') == 'TRUE';
  return `${group}.remove(${child}, ${destroy});\n`;
};

/**
 * Figures out if the group contains the object, and returns true or false.
 * @method group_contains
 * @param group group to check
 * @param object object to check
 * @returns {} group.contains(child);
 * @block
 */
Blockly.JavaScript['group_contains'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.contains(${child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Figures out how many objects are alive or fainted in the group, and returns the number.
 * @method group_count_alive_dead
 * @param group group to check
 * @param state determines if you are checking alive or fainted.
 * @returns {} group.count(state);
 * @block
 */
Blockly.JavaScript['group_count_alive_dead'] = function (block) {
  const state = block.getFieldValue('STATE');
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.count${state}()`, Blockly.JavaScript.ORDER_NONE];
};
/**
 * Removes all objects and deletes the group, with the option to delete the objects as well.
 * @method destroy_group
 * @param group group to destroy
 * @param handleChildren option to delete all containing objects
 * @returns {} group.destroy(handleChildren);
 * @block
 */
Blockly.JavaScript['destroy_group'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const handleChildren = block.getFieldValue('HANDLE_CHILDREN') == 'TRUE';
  return `${group}.destroy(${handleChildren});\n`;
};

/**
 * Returns all objects in the group, to make changes or get information from them all at the same time.
 * @method group_get_all
 * @param group group to get all objects from
 * @returns {} group.getAll();
 * @block
 */
Blockly.JavaScript['group_get_all'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getAll()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns the object at the position of the given index in the group.
 * @method group_get_at
 * @param group group to get the object from
 * @param index {Number} position of the object in the group
 * @returns {} group.getAt(index);
 * @block
 */
Blockly.JavaScript['group_get_at'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getAt(${index})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns the object in the group physically closest to the given object, based on their x/y coordinates.
 * @method group_get_closest_to
 * @param group group to get the object from
 * @param object object to base the position from
 * @returns {} group.getClosestTo(object);
 * @block
 */
Blockly.JavaScript['group_get_closest_to'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getClosestTo(${object})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * @block
 */
Blockly.JavaScript['group_get_first_alive_dead'] = function (block) {
  const mode = block.getFieldValue('MODE');
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns the first object closest to the front of the group that is alive/fainted.
 * @method group_get_first_alive_dead
 * @param group group to get the object from
 * @param mode determines if you are checking for an alive or fainted object
 * @returns {} group.getFirstMode();
 * @block
 */
Blockly.JavaScript['group_get_first_alive_fainted'] = function (block) {
  const mode = block.getFieldValue('MODE');
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a randomly chosen object from the group.
 * @method group_get_random
 * @param group group to get the object from
 * @returns {} group.getRandom();
 * @block
 */
Blockly.JavaScript['group_get_random'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getRandom()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a randomly chosen object from the group that has exists set to true.
 * @method group_get_random_exists
 * @param group group to get the object from
 * @returns {} group.getRandomExists();
 * @block
 */
Blockly.JavaScript['group_get_random_exists'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getRandomExists()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Remove all members from the group, with the option to delete them as well.
 * @method group_remove_all
 * @param group group to remove the objects from
 * @param deleteObjects {Boolean} option to delete the objects after removing them from the group
 * @returns {} group.removeAll(deleteObjects);
 * @block
 */
Blockly.JavaScript['group_remove_all'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const deleteObjects = block.getFieldValue('DESTROY_CHILDREN') == 'TRUE';
  return `${group}.removeAll(${deleteObjects});\n`;
};

/**
 * Adds the object to the top of the World group.
 * @method add_to_world
 * @param object object to add to the group
 * @returns {} game.world.add(object);
 * @block
 */
Blockly.JavaScript['add_to_world'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.world.add(${object});\n`;
};
//endregion

//region PHYSICS

//region DYNAMICS
/**
 * Move the object to the given location at the given speed, taking no longer than the maximum given time. Speed will be adjusted so the object reaches the location within the given time.
 * @method physics_move_to_location
 * @param object object to move
 * @param x {Number} x position of the location to move to
 * @param y {Number} y position of the location to move to
 * @param speed {Number} the speed the object will move at
 * @param time {Number} maximum time for the object to reach the location
 * @returns {} game.physics.arcade.moveToXY(object, x, y, speed, time);
 * @block
 */
Blockly.JavaScript['physics_move_to_location'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToXY(${object}, ${x}, ${y}, ${speed}, ${time});\n`;
};

/**
 * Move the object to the mouse pointer at the given speed, taking no longer than the maximum given time. Speed will be adjusted so the object reaches the location within the given time.
 * @method physics_move_to_pointer
 * @param object object to move
 * @param pointer the mouse pointer to move to
 * @param speed {Number} the speed the object will move at
 * @param time {Number} maximum time for the object to reach the location
 * @returns {} game.physics.arcade.moveToPointer(object, speed, pointer, time);
 * @block
 */
Blockly.JavaScript['physics_move_to_pointer'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToPointer(${object}, ${speed}, ${pointer}, ${time});\n`;
};

/**
 * Accelerates the object to the given location at the given speed, with the maximum given velocity. The object will start at the given speed, and accelerate up to the maximum velocity towards the location.
 * @method physics_acclereate_to_location
 * @param object object to move
 * @param x {Number} x position of the location to move to
 * @param y {Number} y position of the location to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {} game.physics.arcade.accelerateToXY(object, x, y, speed, x_max, y_max);
 * @block
 */
Blockly.JavaScript['physics_accelerate_to_location'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X_LOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y_LOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToXY(${object}, ${x}, ${y}, ${speed}, ${x_max}, ${y_max});\n`;
};

/**
 * Accelerates the object to the mouse pointer at the given speed, with the maximum given velocity. The object will start at the given speed, and accelerate up to the maximum velocity towards the location.
 * @method physics_acclereate_to_pointer
 * @param object object to move
 * @param pointer the mouse pointer to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {} game.physics.arcade.accelerateToPointer(object, pointer, speed, x_max, y_max);
 * @block
 */
Blockly.JavaScript['physics_accelerate_to_pointer'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToPointer(${object}, ${pointer}, ${speed}, ${x_max}, ${y_max});\n`;
};

/**
 * Accelerates the object to the given object's location at the given speed, with the maximum given velocity. The object will start at the given speed, and accelerate up to the maximum velocity towards the location.
 * @method physics_acclereate_to_object
 * @param object object to move
 * @param target the target object to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {} game.physics.arcade.accelerateToObject(object, target, speed, x_max, y_max);
 * @block
 */
Blockly.JavaScript['physics_accelerate_to_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToObject(${object}, ${target}, ${speed}, ${x_max}, ${y_max});\n`;
};
//physics SET blocks
/**
 * Assign the chosen Boolean field for the game's physics.
 * @method set_physics_boolean_field
 * @param field the field to set
 * @param value {Boolean} value to set the field to
 * @returns {} game.physics.arcade.field = value;
 * @block
 */
Blockly.JavaScript['set_physics_boolean_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.${field} = ${value};\n`;
};

/**
 * Assigns the chosen point field for the game's physics.
 * @method set_physics_point_field
 * @param field the field to set
 * @param value value to set the field to
 * @returns {} game.physics.arcade.field.copyFrom(value);
 * @block
 */
Blockly.JavaScript['set_physics_point_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.${field}.copyFrom(${value});\n`;
};

//physics GET blocks
/**
 * Returns the chosen Boolean field value of the game's physics.
 * @method get_physics_boolean_field
 * @param field the field to get the value of
 * @returns {} game.physics.arcade.field
 * @block
 */
/**
 * Returns the chosen point field value of the game's physics.
 * @method get_physics_point_field
 * @param field the field to get the value of
 * @returns {} game.physics.arcade.field
 * @block
 */
Blockly.JavaScript['get_physics_boolean_field']
  = Blockly.JavaScript['get_physics_point_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  return [`game.physics.arcade.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion

//region COLLISION
/**
 * Enables/disables objects with physics enabled to collide with the world in the given direction.
 * @method check_collision
 * @param direction direction to set the property for
 * @param collide {Boolean} sets collision in the direction to true or false
 * @returns {} game.physics.arcade.checkCollision.direction = collide;
 * @block
 */
Blockly.JavaScript['check_collision'] = function (block) {
  var direction = block.getFieldValue('DIRECTION');
  var collide = block.getFieldValue('COLLIDE') == 'TRUE';

  return `game.physics.arcade.checkCollision.${direction} = ${collide};\n`;
};

/**
 * Returns a list of objects from the given group that are currently underneath the mouse pointer.
 * @method get_objects_under_pointer
 * @param pointer mouse pointer to check
 * @param group group to check
 * @returns {} game.physics.arcade.getObectsUnderPointer(pointer, group);
 * @block
 */
Blockly.JavaScript['get_objects_under_pointer'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.getObjectsUnderPointer(${pointer}, ${group})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['collide_with_arrow_function'] = function (block) {
  const objectA = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
  const objectB = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');// TODO: Assemble JavaScript into code variable.
  return `game.physics.arcade.collide(${objectA}, ${objectB}, (${objectA}, ${objectB}) => {
        ${statements_callback}
    });\n`;
};

/**
 * Returns a list of objects from the group that are at the x/y location.
 * @method get_objects_at_location
 * @param group group to check
 * @param x {Number} x location to check
 * @param y {Number} y location to check
 * @returns {} game.physics.arcade.getObjectsAtLocation(x, y, group);
 * @block
 */
Blockly.JavaScript['get_objects_at_location'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.getObjectsAtLocation(${x}, ${y}, ${group})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a list of objects from the group that are at the x/y location, calling the given function on the ones that are there.
 * @method collision_get_objects_at_location_function
 * @param group group to check
 * @param x {Number} x location to check
 * @param y {Number} y location to check
 * @param functionName function to call
 * @returns {} game.physics.arcade.getObjectsAtLocation(x, y, group, functionName);
 * @block
 */
Blockly.JavaScript['collision_get_objects_at_location_function'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

  return `game.physics.arcade.getObjectsAtLocation(${x}, ${y}, ${group}, ${functionName});\n`;
};

/**
 * Returns a Boolean if the two objects are intersecting. Checks for intersection of the object's bodies.
 * @method physics_intersects
 * @param lhs object to check
 * @param rhs object to check
 * @returns {} game.physics.arcade.intersects(lhs, rhs);
 * @block
 */
Blockly.JavaScript['physics_intersects'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.intersects(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//endregion

//region PHYSICS_STARTUP
/**
 * @deprecated
 * @method
 * @returns {}
 * @block
 */
Blockly.JavaScript['start_physics'] = function (block) {
  const dropdown_system = block.getFieldValue('SYSTEM');
  return `game.physics.startSystem(Phaser.Physics.${dropdown_system});\n`;
};

/**
 * Enables the Phaser Arcade phyiscs to be used in the game.
 * @method start_arcade_physics
 * @returns {} game.physics.startSystem(Phaser.Physics.ARCADE);
 * @block
 */
Blockly.JavaScript['start_arcade_physics'] = function () {
  return 'game.physics.startSystem(Phaser.Physics.ARCADE);\n';
};

/**
 * @deprecated
 * Enables a physics body for all objects in the group. This allows the objects to collide with things and use other physics functionality.
 * @method enable_body_group
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['enable_body_group'] = function (block) {
  const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  return `${group}.enableBody = true;\n`;
};

/**
 * Enables physics body for all objects in the group. This allows the objects to collide with other physics bodies and use other physics functionality.
 * @method enable_body_group
 * @param group group to enable physics on
 * @returns {} group.enableBody = true;
 * @block
 */
Blockly.JavaScript['enable_body_group_vi'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${group}.enableBody = true;\n`;
};

/**
 * @deprecated
 * Adds a physics body to the object. This allows the object to collide with other physics bodies and use other physics functionality.
 * @method enable_arcade_phy
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['enable_arcade_physics_for_object'] = function (block) {
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  return `game.physics.arcade.enable(${object});\n`;
};

/**
 * Adds a physics body to the object. This allows the object to collide with other physics bodies and use other physics functionality.
 * @method enable_arcade_physics_for_object_vi
 * @param object object to enable physics on
 * @returns {} game.physics.arcade.enable(object);
 * @block
 */
Blockly.JavaScript['enable_arcade_physics_for_object_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.enable(${object});\n`;
};
//endregion

//region UTIL
/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['physics_closest'] = function (block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.closest(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['physics_farthest'] = function (block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.farthest(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the distance between the two objects, based on their x/y coordinates.
 * @method physics_distance_between
 * @param source object to check from
 * @param target object to check to
 * @returns {} game.physics.arcade.distanceBetween(source, target);
 * @block
 */
Blockly.JavaScript['physics_distance_between'] = function (block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceBetween(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the distance between an object and the mouse pointer.
 * @method physics_distance_to_pointer
 * @param source object to check from
 * @param pointer mouse pointer to check to
 * @returns {} game.physics.arcade.distanceToPointer(source, pointer);
 * @block
 */
Blockly.JavaScript['physics_distance_to_pointer'] = function (block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceToPointer(${source}, ${pointer})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the distance between an object and an x/y location in the game.
 * @method physics_distance_to_location
 * @param object object to check from
 * @param x {Number} x location to check
 * @param y {Number} y location to check
 * @returns {} game.physics.aracde.distanceToXY(object, x, y);
 * @block
 */
Blockly.JavaScript['physics_distance_to_location'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceToXY(${object}, ${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion

//region BODY
/**
 * Renders a visual for the physics body of the object. Will appear as a semi transparent filled green rectangle.
 * @method debug_body
 * @param object object to render the body for
 * @returns {} game.debug.body(object);
 * @block
 */
Blockly.JavaScript['debug_body'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.body(${object});\n`;
};

/**
 * Sets the object's acceleration, velocity, and speed to 0.
 * @method stop_body
 * @param object object to set values for
 * @returns {} object.body.stop();
 * @block
 */
Blockly.JavaScript['stop_body'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.body.stop();\n`;
};

/**
 * @deprecated
 * Assigns the chosen point field for the object.
 * @method set_body_field_point
 * @param field the field to set
 * @param value value to set the field to
 * @returns {} game.physics.arcade.field.copyFrom(value);
 * @block
 */
Blockly.JavaScript['set_body_field_point'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const element = block.getFieldValue('ELEMENT');
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${object}.body.${field}.${element} = ${value};\n`;
};

/**
 * Assigns the chosen point field element for the object.
 * @method set_body_field_point_vi
 * @param field the field to set
 * @param element choose to assign the x or y element of the point
 * @object object to assign values for
 * @param value value to set the field to
 * @returns {} object.body.field.element = value;
 * @block
 */
Blockly.JavaScript['set_body_field_point_vi'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const element = block.getFieldValue('ELEMENT');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${object}.body.${field}.${element} = ${value};\n`;
};

/**
 * Assigns the chosen point field for the object.
 * @method set_body_field_point_class_vi
 * @param field the field to set
 * @param object object to assign values for
 * @param point point to set the field to
 * @returns {} object.body.field = point;
 * @block
 */
Blockly.JavaScript['set_body_field_point_class_vi'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC) || 'new Point()';
  return `${object}.body.${field} = ${point};\n`;
};

/**
 * Returns the chosen point field value of the object.
 * @method get_body_field_point_class
 * @param field the field to get the value of
 * @param object object to get values from
 * @returns {} object.body.field
 * @block
 */
Blockly.JavaScript['get_body_field_point_class'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`${object}.body.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['set_body_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const field = block.getFieldValue('ELEMENT');
  const boolean = block.getFieldValue('VALUE') == 'TRUE';
  return `${object}.body.${field} = ${boolean};\n`;
};

/**
 * Assigns the chosen boolean field for the object.
 * @method set_body_boolean_field_vi
 * @param field the field to set
 * @param object object to assign values for
 * @param boolean value to set the field to
 * @returns {} object.body.field = point;
 * @block
 */
Blockly.JavaScript['set_body_boolean_field_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const element = block.getFieldValue('ELEMENT');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.body.${element} = ${value};\n`;
};

/**
 * Returns the chosen boolean field value of the object.
 * @method get_body_boolean_field
 * @param element the value to get
 * @param object object to get values from
 * @returns {} object.body.element
 * @block
 */
Blockly.JavaScript['get_body_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const element = block.getFieldValue('ELEMENT');
  return [`${object}.body.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Assigns the chosen numeric field for the object.
 * @method set_body_numeric_field
 * @param element the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {} object.body.element = value;
 * @block
 */
Blockly.JavaScript['set_body_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const element = block.getFieldValue('ELEMENT');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${object}.body.${element} = ${value};\n`;
};

/**
 * Returns the chosen numeric field value of the object.
 * @method get_body_numeric_field
 * @param element the value to get
 * @param object object to get values from
 * @returns {} object.body.element
 * @block
 */
Blockly.JavaScript['get_body_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const element = block.getFieldValue('ELEMENT');
  return [`${object}.body.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Sets the width and height of the physics body for an object.
 * @method body_set_size
 * @param object object to set the body of
 * @param width {Number} width to set the body to
 * @param height {Number} height to set the body to
 * @returns {} object.body.setSize(width, height);
 * @block
 */
Blockly.JavaScript['body_set_size'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.body.setSize(${width}, ${height});\n`;
};

/**
 * Sets the width and height of the physics body for an object, with an offset position. Offset is based on the anchor of the object.
 * @method body_set_size
 * @param object object to set the body of
 * @param width {Number} width to set the body to
 * @param height {Number} height to set the body to
 * @param offset_x {Number} the amount to move the physics body by in the x direction, based on the object's position and anchor
 * @param offset_y {Number} the amount to move the physics body by in the y direction, based on the object's position and anchor
 * @returns {} object.body.setSize(width, height, offset_x, offset_y);
 * @block
 */
Blockly.JavaScript['body_set_size_complex'] = function (block) {
  const body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSET_X', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSET_Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${body}.body.setSize(${width}, ${height}, ${offset_x}, ${offset_y});\n`;
};


//endregion

/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * @block
 */
Blockly.JavaScript['create_object_in_group'] = function (block) {
  const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const tag = block.getFieldValue('TAG');
  const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GROUP'), Blockly.Variables.NAME_TYPE);
  return [`${group}.create(${xPos}, ${yPos}, '${tag}')`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Creates an object at a position with the given tag, and adds it to the front of the group.
 * @method create_object_in_group_vi
 * @param x {Number} the x coordinate to display the new object at, relative to the position of the group
 * @param y {Number} the y coordinate to display the new object at, relative to the position of the group
 * @param tag {String} the tag of the image to assign to the object
 * @returns {} group.create(x, y, tag);
 * @block
 */
Blockly.JavaScript['create_object_in_group_vi'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.create(${x}, ${y}, ${tag})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['collide'] = function (block) {
  const variable_lhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LHS'), Blockly.Variables.NAME_TYPE);
  const variable_rhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RHS'), Blockly.Variables.NAME_TYPE);
  return `game.physics.arcade.collide(${variable_lhs}, ${variable_rhs});\n`;
};

/**
 * Checks if two objects are colliding, and separates them if they are.
 * @method collide_vi
 * @param object1 first object to check
 * @param object2 second object to check
 * @returns {} game.physics.arcade.collide(object1, object2);
 * @block
 */
Blockly.JavaScript['collide_vi'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.collide(${object1}, ${object2});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['set_immovable'] = function (block) {
  const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const immovable = block.getFieldValue('IMMOVABLE') == 'TRUE';
  return `${body}.body.immovable = ${immovable};\n`;
};

/**
 * @deprecated
 * @param block
 * @block
 */
Blockly.JavaScript['is_body_touching'] = function (block) {
  const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const direction = block.getFieldValue('DIRECTION');
  return [`${body}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns true if something is touching the object in the specified direction.
 * @method is_body_touching_vi
 * @param object object to check
 * @param direction direction to check
 * @returns {} object.body.touching.direction
 * @block
 */
Blockly.JavaScript['is_body_touching_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const direction = block.getFieldValue('DIRECTION');
  return [`${object}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {String}
 * @block
 */
Blockly.JavaScript['collide_with_world_bounds'] = function (block) {
  const variable_body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  return `${variable_body}.body.collideWorldBounds = ${collide};\n`;
};

/**
 * Enables/disables collision between an object and the bounds of the world.
 * @method collide_with_world_bounds_vi
 * @param object object to set collision for
 * @param collide {Boolean} enables/disables the collision
 * @returns {} object.body.collideWorldBounds = collide;
 * @block
 */
Blockly.JavaScript['collide_with_world_bounds_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  return `${object}.body.collideWorldBounds = ${collide};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['check_overlap'] = function (block) {
  const lhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LHS'), Blockly.Variables.NAME_TYPE);
  const rhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RHS'), Blockly.Variables.NAME_TYPE);
  const functionName = block.getFieldValue('NAME');
  return `game.physics.arcade.overlap(${lhs}, ${rhs}, ${functionName}, null, this);\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['check_overlap_vi'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  const functionName = block.getFieldValue('NAME');
  return `game.physics.arcade.overlap(${lhs}, ${rhs}, ${functionName}, null, this);\n`;
};

/**
 * Checks if two objects overlap, and calls the function if they are. No physics is applied.
 * @method check_overlap_vi_procedure_field
 * @param object1 first object to check
 * @param object2 second object to check
 * @param functionName function to call if the objects are overlapping
 * @returns {} game.physics.arcade.overlap(object1, object2, functionName);
 * @block
 */
Blockly.JavaScript['check_overlap_vi_procedure_field'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  return `game.physics.arcade.overlap(${object1}, ${object2}, ${functionName}, null, this);\n`;
};

/**
 * Returns true/false if two objects are overlapping.
 * @method overlap_boolean
 * @param object1 first object to check
 * @param object2 second object to check
 * @returns {} game.physics.arcade.overlap(object1, object2)
 * @block
 */
Blockly.JavaScript['overlap_boolean'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.overlap(${object1}, ${object2})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Checks if two objects are colliding, separates them if they are, and calls the function.
 * @method collide_function_field
 * @param object1 first object to check
 * @param object2 second object to check
 * @param functionName function to call if the objects are colliding
 * @returns {} game.physics.arcade.collide(object1, object2, functionName);
 * @block
 */
Blockly.JavaScript['collide_function_field'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  return `game.physics.arcade.collide(${object1}, ${object2}, ${functionName});\n`;
};

/**
 * Checks if two objects are colliding, separates them if they are, and returns true/false.
 * @method collide_boolean
 * @param object1 first object to check
 * @param object2 second object to check
 * @returns {} game.physics.arcade.collide(object1, object2)
 * @block
 */
Blockly.JavaScript['collide_boolean'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.collide(${object1}, ${object2})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/*Blockly.JavaScript['move_to_pointer'] = function (block) {
    const value_gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToPointer(${value_gameobject}, ${value_speed}, ${pointer});\n`;
};* @block
 */

/*Blockly.JavaScript['move_to_pointer_extended'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${gameobject}, ${speed}, game.input.mousePointer, ${maximumTime});\n`;
};* @block
 */

/**
 * Moves the first object to the second object at the given speed. Speed will be adjusted to reach the destination object within the given maximum time. If the destination object moves, the target location will not change.
 * @method move_to_object
 * @param object object to move
 * @param destinationObject object to move to
 * @param speed {Number} speed for the object to move at
 * @param maximumTime {Number} maximum amount of time to take to move
 * @returns {} game.physics.arcade.moveToObject(object, destinationObject, speed, maximumTime);
 * @block
 */
Blockly.JavaScript['move_to_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const destinationObject = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.moveToObject(${object}, ${destinationObject}, ${speed}, ${maximumTime});\n`;
};

/**
 * Calculates, the acceleration based on rotation, and returns a point that contains the acceleration x value and the acceleration y value.
 * @method acceleration_from_rotation
 * @param rotation {Number} the angle in radians
 * @param speed {Number} the speed the object will move
 * @returns {} game.physics.arcade.accelerationFromRotation(rotation, speed)
 * @block
 */
Blockly.JavaScript['acceleration_from_rotation'] = function (block) {
  const rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.accelerationFromRotation(${rotation}, ${speed})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region ANIMATION
/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['play_animation'] = function (block) {
  const animation = Blockly.JavaScript.valueToCode(block, 'ANIMATION', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.animations.play(${animation});\n`;
};

/**
 * Plays an existing animation based on the given tag.
 * @method play_animation_vi
 * @param animation {String} the name of the animation to play
 * @param object object to play the animation on
 * @returns {} object.animations.play(animation);
 * @block
 */
Blockly.JavaScript['play_animation_vi'] = function (block) {
  const animation = Blockly.JavaScript.valueToCode(block, 'ANIMATION', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${object}.animations.play(${animation});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['stop_animation'] = function (block) {
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.animations.stop();\n`;
};

/**
 * Stops the current animation on the object.
 * @method stop_animation_vi
 * @param object object to stop the animations on
 * @returns {} object.animations.stop();
 * @block
 */
Blockly.JavaScript['stop_animation_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.animations.stop();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['set_frame'] = function (block) {
  const frameNumber = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.frame = ${frameNumber};\n`;
};

/**
 * Sets the frame for the current animation on the object.
 * @method set_frame_vi
 * @param object object to set the animation frame for
 * @param frameNumber {Number} frame to set the animation to
 * @returns {} object.frame = frameNumber;
 * @block
 */
Blockly.JavaScript['set_frame_vi'] = function (block) {
  const frameNumber = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.frame = ${frameNumber};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['animation_get_animation'] = function (block) {
  const value_sprite = Blockly.JavaScript.valueToCode(block, 'Sprite', Blockly.JavaScript.ORDER_ATOMIC);
  const text_name = block.getFieldValue('NAME');
  return [`${value_sprite}.animations.getAnimation("${text_name}")`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @return {}
 * @block
 */
Blockly.JavaScript['animation_next'] = function (block) {
  const number_framecount = block.getFieldValue('FRAMECOUNT');
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.animations.next(${number_framecount});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {}
 * @block
 */
Blockly.JavaScript['animation_previous'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const number_framecount = block.getFieldValue('FRAMECOUNT');
  return `${variable_object}.animations.previous(${number_framecount});\n`;
};

/**
 * Increases the animation by the given number of frames.
 * @method animation_next_vi
 * @param framecount {Number} number of frames to advance
 * @param objet object with the animation to change
 * @returns {} object.animations.next(framecount);
 * @block
 */
Blockly.JavaScript['animation_next_vi'] = function (block) {
  const framecount = Blockly.JavaScript.valueToCode(block, 'FRAMECOUNT', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.animations.next(${framecount});\n`;
};

/**
 * Moves the animation backwards by the given number of frames.
 * @method animation_next_vi
 * @param framecount {Number} number of frames to move back
 * @param objet object with the animation to change
 * @returns {} object.animations.previous(framecount);
 * @block
 */
Blockly.JavaScript['animation_previous_vi'] = function (block) {
  const framecount = Blockly.JavaScript.valueToCode(block, 'FRAMECOUNT', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.animations.previous(${framecount});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['refresh_frame'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.animations.refreshFrame();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['animation_update'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.animations.update()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @block
 */
Blockly.JavaScript['validate_frames'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Object'), Blockly.Variables.NAME_TYPE);
  const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_object}.animations.validateFrames(${value_frames}, true)`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Checks if the given frames are valid and exist in the object's animation.
 * @method validate_frames_vi
 * @param object object to check the animation of
 * @param frames {Array} frames to check
 * @returns {} object.animations.validateFrames(frames, true)
 * @block
 */
Blockly.JavaScript['validate_frames_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.animations.validateFrames(${frames}, true)`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['animation_destroy'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.animations.destroy();\n`;
};

/**
 * Destroy all animations on an object.
 * @method animation_destroy_vi
 * @param object object to destroy the animations of
 * @returns {} object.animations.destroy();
 * @block
 */
Blockly.JavaScript['animation_destroy_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.animations.destroy();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['get_animation_property'] = function (block) {
  const value_sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_field = block.getFieldValue('FIELD');
  return [`${value_sprite}.animations.${dropdown_field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['set_animation_property'] = function (block) {
  const dropdown_field = block.getFieldValue('FIELD');
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_newproperty = Blockly.JavaScript.valueToCode(block, 'NEWPROPERTY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.animations.${dropdown_field} = ${value_newproperty};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 */
Blockly.JavaScript['set_animation_property_vi'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const newProperty = block.getFieldValue('VALUE') == 'TRUE';
  return `${object}.animations.${field} = ${newProperty};\n`;
};


// Animation SET blocks
/**
 * Assigns the chosen boolean field for the object.
 * @method set_animation_boolean_field_vi
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {} object.animations.currentAnim.field = value;
 * @block
 */
/**
 * Assigns the chosen numeric field for the object.
 * @method set_animation_numeric_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {} object.animations.currentAnim.field = value;
 * @block
 */

/**
 * Assigns the chosen string field for the object.
 * @method set_animation_string_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {} object.animations.currentAnim.field = value;
 * @block
 */
Blockly.JavaScript['set_animation_boolean_field_vi']
  = Blockly.JavaScript['set_animation_numeric_field']
  = Blockly.JavaScript['set_animation_string_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.animations.currentAnim.${field} = ${value};\n`;
};

// Animation GET blocks

/**
* Returns the chosen boolean field value of the object.
* @method get_animation_boolean_field_vi
* @param field the value to get
* @param object object to get values from
* @returns {} object.animations.currentAnim.field
* @block
*/
/**
 * Returns the chosen numeric field value of the object.
 * @method get_animation_numeric_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {} object.animations.currentAnim.field
 * @block
 */
/**
 * Returns the chosen string field value of the object.
 * @method get_animation_string_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {} object.animations.currentAnim.field
 * @block
 */
Blockly.JavaScript['get_animation_boolean_field_vi']
  = Blockly.JavaScript['get_animation_numeric_field']
  = Blockly.JavaScript['get_animation_string_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.animations.currentAnim.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

//endregion

//region INPUT

//region MOUSE
/**
 * Returns the specified coordinate value of the mouse position.
 * @method get_current_mouse_position
 * @param direction which coordinate of the mouse position to get
 * @returns {} game.input.direction
 * @block
 */
Blockly.JavaScript['get_current_mouse_position'] = function (block) {
  const direction = block.getFieldValue('DIRECTION');
  return [`game.input.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the mouse position as a point that contains the x/y values of the coordinates.
 * @method get_mouse_position_point
 * @returns {} New Phaser.Point(game.input.x, game.input.y)
 * @block
 */
Blockly.JavaScript['get_mouse_position_point'] = function (block) {
  return [`new Phaser.Point(game.input.x, game.input.y)`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the specified mouse button is currently being clicked.
 * @method is_mouse_button_clicked
 * @returns {} game.input.mousePointer.button.isDown
 * @block
 */
Blockly.JavaScript['is_mouse_button_clicked'] = function (block) {
  return [`game.input.mousePointer.${block.getFieldValue('BUTTON')}.isDown`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the active game pointer.
 * @method get_active_pointer
 * @returns {} game.input.activePointer
 * @block
 */
Blockly.JavaScript['get_active_pointer'] = function (block) {
  return [`game.input.activePointer`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region Keyboard
Blockly.JavaScript['create_cursor_keys'] = function (block) {
  return ['game.input.keyboard.createCursorKeys()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['is_key_down'] = function (block) {
  const dropdown_key = block.getFieldValue('KEY');
  return [`game.input.keyboard.isDown(Phaser.Keyboard.${dropdown_key})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add_key'] = function (block) {
  const dropdown_key = block.getFieldValue('KEYCODE');
  return [`game.input.keyboard.addKey(Phaser.Keyboard.${dropdown_key})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_key_boolean_field']
  = Blockly.JavaScript['get_key_numeric_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_just_pressed'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justPressed()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_just_released'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justReleased()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_reset'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const hard = block.getFieldValue('HARD') == 'TRUE';
  return `${key}.reset(${hard});\n`;
};

Blockly.JavaScript['key_up_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.upDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_down_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.downDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region INPUT_HANDLER
Blockly.JavaScript['input_handler_enable'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.inputEnabled = true;\n`;
};

Blockly.JavaScript['set_input_handler_boolean_field']
  = Blockly.JavaScript['set_input_handler_numeric_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const newProperty = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.${field} = ${newProperty};\n`;
};

Blockly.JavaScript['set_input_handler_point_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const newProperty = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.${field}.copyFrom(${newProperty});\n`;
};

Blockly.JavaScript['get_input_handler_boolean_field']
  = Blockly.JavaScript['get_input_handler_numeric_field']
  = Blockly.JavaScript['get_input_handler_point_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.input.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_bounds_rect_set'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.boundsRect = ${rect};\n`;
};

Blockly.JavaScript['input_handler_enable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag();\n`;
};

Blockly.JavaScript['input_handler_enable_drag_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const center = block.getFieldValue('CENTER') === 'TRUE';
  const top = block.getFieldValue('ALPHA') === 'TRUE';
  const pixel = block.getFieldValue('PIXEL') === 'TRUE';
  const alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag(${center}, ${top}, ${pixel}, ${alpha});\n`;
};

Blockly.JavaScript['input_handler_check_pointer_down'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerDown(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_check_pointer_over'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerOver(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_disable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableDrag();\n`;
};

Blockly.JavaScript['input_handler_enable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.input.enableSnap(${x}, ${y});\n`;
};

Blockly.JavaScript['input_handler_enable_snap_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const drag = block.getFieldValue('DRAG') === 'TRUE';
  const release = block.getFieldValue('RELEASE') === 'TRUE';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSET_X', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSET_Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.input.enableSnap(${x}, ${y}, ${drag}, ${release}, ${offset_x}, ${offset_y});\n`;
};

Blockly.JavaScript['input_handler_disable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableSnap();\n`;
};

Blockly.JavaScript['input_handler_check_pixel'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPixel(${x}, ${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_is_pixel_perfect'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.isPixelPerfect()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justPressed(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justReleased(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_over_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.overDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOver()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOver(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_down_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.downDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_up'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerUp()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_down'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerUp()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_start'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const priority = Blockly.JavaScript.valueToCode(block, 'PRIORITY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.start(${priority});\n`;
};

Blockly.JavaScript['input_handler_stop'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.stop();\n`;
};

Blockly.JavaScript['input_handler_just_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOut(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOut()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_x'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerX()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_y'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerY()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_position'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const position = `new Phaser.Point(${object}.input.pointerX(), ${object}.input.pointerY())`;
  return [`${position}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_reset'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.reset();\n`;
};

Blockly.JavaScript['input_handler_destroy'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.destroy();\n`;
};

Blockly.JavaScript['input_handler_pointer_dragged'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerDragged()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_set_drag_lock'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const horizontal = block.getFieldValue('HORIZONTAL') === 'TRUE';
  const vertical = block.getFieldValue('VERTICAL') === 'TRUE';
  return `${object}.input.setDragLock(${horizontal}, ${vertical});\n`;
};
//endregion
//endregion

//region WORLD
Blockly.JavaScript['get_world_property'] = function (block) {
  const dropdown_name = block.getFieldValue('NAME');
  return [`game.world.${dropdown_name}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_world_bounds'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_w = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const value_h = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.world.setBounds(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
};

Blockly.JavaScript['create_point'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`new Phaser.Point(${value_x}, ${value_y})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_scale'] = function (block) {
  const xScale = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
  const yScale = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.scale.setTo(${xScale}, ${yScale});\n`;
};

Blockly.JavaScript['set_scale_vi'] = function (block) {
  const xScale = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
  const yScale = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.scale.setTo(${xScale}, ${yScale});\n`;
};

Blockly.JavaScript['set_pos'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.${param_name} = ${val};\n`;
};

Blockly.JavaScript['set_velocity'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.${param_name} = ${val};\n`;
};

Blockly.JavaScript['get_param'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);

  return [`${object}.${param_name}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_world_reference'] = function (block) {
  return [`game.world`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_game_pause'] = function (block) {
  var paused = Blockly.JavaScript.valueToCode(block, 'PAUSED', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.paused = ${paused};\n`;
};

Blockly.JavaScript['get_game_pause'] = function (block) {
  return [`game.paused`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region GAMEOBJECT

//region GAMEOBJECT.PROPERTIES
/*Blockly.JavaScript['set_game_object_point_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${field}.copyFrom(${point});\n`;
};* @block
 */
Blockly.JavaScript['set_game_object_point_field'] = setPointField;

Blockly.JavaScript['get_game_object_point_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_game_object_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const boolean = block.getFieldValue('BOOLEAN') == 'TRUE';
  return `${object}.${field} = ${boolean};\n`;
};

Blockly.JavaScript['set_game_object_boolean_field_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const boolean = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field} = ${boolean};\n`;
};

Blockly.JavaScript['get_game_object_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_game_object_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field} = ${value};\n`;
};

Blockly.JavaScript['get_game_object_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

Blockly.JavaScript['set_object_anchor'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE);
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.anchor.setTo(${value_x_pos}, ${value_y_pos});\n`;
};

Blockly.JavaScript['kill_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.kill();\n`;
};

Blockly.JavaScript['faint_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.faint();\n`;
};

Blockly.JavaScript['destroy_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.destroy();\n`;
};

Blockly.JavaScript['object_inCamera'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.inCamera`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['camera_follow'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  return `game.camera.follow(${variable_object}, undefined, 0.5, 0.5);\n`;

};

Blockly.JavaScript['camera_follow_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.follow(${object});\n`;
};

Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.follow(${object});\n`;
};

Blockly.JavaScript['camera_follow_vi_styled'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const style = block.getFieldValue('STYLE');
  return `game.camera.follow(${object}, Phaser.Camera.${style});\n`;
};

Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const lerpX = Blockly.JavaScript.valueToCode(block, 'LERP_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const lerpY = Blockly.JavaScript.valueToCode(block, 'LERP_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const style = block.getFieldValue('STYLE');
  return `game.camera.follow(${object}, ${style}, ${lerpX}, ${lerpY});\n`;
};

Blockly.JavaScript['get_camera'] = function (block) {
  return [`game.camera`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['object_set_to'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_setx = Blockly.JavaScript.valueToCode(block, 'setx', Blockly.JavaScript.ORDER_ATOMIC);
  const value_sety = Blockly.JavaScript.valueToCode(block, 'sety', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.setTo(${value_setx}, ${value_sety});\n`;
};

// Blockly.JavaScript['send_to_back'] = function (block) {
//     const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
//     return `game.world.sendToBack(${variable_object});\n`;
// };

Blockly.JavaScript['add_text_input'] = function (block) {
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.add.text(${value_x_pos}, ${value_y_pos}, ${value_initial_text}, { fontSize: \`\${${size}}px\`, fill: ${colour}})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add_text'] = function (block) {
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  const colour_fill = block.getFieldValue('FILL');
  return [`game.add.text(${value_x_pos}, ${value_y_pos}, ${value_initial_text}, { fontSize: \`\${${size}}px\`, fill: '${colour_fill}'})`, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['set_text'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.text = ${value_text};\n`;
};

Blockly.JavaScript['set_text_vi'] = function (block) {
  const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.text = ${value_text};\n`;
};

Blockly.JavaScript['get_bounds'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.getBounds()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_rotation'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.angle`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotate'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.angle += ${value_angle};\n`;
};

Blockly.JavaScript['set_rotation'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.angle = ${value_angle};\n`;
};

Blockly.JavaScript['get_local_bounds'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.getLocalBounds()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['reset'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.reset(${value_x_pos}, ${value_y_pos});\n`;
};

Blockly.JavaScript['revive'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.revive();\n`;
};
Blockly.JavaScript['create_bitmapFont'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
  const xml = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_NONE);

  return `game.load.bitmapFont(${tag}, ${source}, ${xml});\n`;
};

Blockly.JavaScript['move_by'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.position.add(${x}, ${y});\n`;
};
//endregion
//region DRAW CIRCLE
Blockly.JavaScript['drawcircle'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const value_diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
//endregion

//region GET_OBJECT_WIDTH
//TODO: TO COMPLETE
Blockly.JavaScript['get_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return [`${variable_name}.width`, Blockly.JavaScript.ORDER_NONE];
};
//endregion
//region SET_OBJECT_WIDTH
Blockly.JavaScript['set_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const value_name = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_name} = ${value_name}`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region PARTICLE_EMITTER
Blockly.JavaScript['addemitter'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const value_maxparticles = Blockly.JavaScript.valueToCode(block, 'maxParticles', Blockly.JavaScript.ORDER_ATOMIC) || '1';

  return [`game.add.emitter(${value_x}, ${value_y}, ${value_maxparticles})`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emitters_make_particles'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const text_tag = block.getFieldValue('TAG');
  return `${variable_emitter}.makeParticles('${text_tag}');\n`;
};

Blockly.JavaScript['emitter_make_particles'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const keys = Blockly.JavaScript.valueToCode(block, 'KEYS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  const collideWorldBounds = block.getFieldValue('COLLIDEWORLDBOUNDS') == 'TRUE';
  return `${emitter}.makeParticles(${keys}, ${frames}, ${quantity}, ${collide}, ${collideWorldBounds});\n`;
};

Blockly.JavaScript['emitters_set_rotation'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const x_rotation = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y_rotation = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${variable_emitter}.setRotation(${x_rotation}, ${y_rotation});\n`;
};

Blockly.JavaScript['emitters_set_rotation_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${emitter}.setRotation(${min}, ${max});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['emitters_set_alpha'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.setAlpha(${value_min}, ${value_max}, ${value_rate});\n`;
};

Blockly.JavaScript['emitters_set_alpha_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  const rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${emitter}.setAlpha(${min}, ${max}, ${rate});\n`;
};

Blockly.JavaScript['emitters_set_scale'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.setScale(${value_minx}, ${value_maxx}, ${value_miny}, ${value_maxy}, ${value_rate});\n`;
};

Blockly.JavaScript['emitters_set_scale_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
  const minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${emitter}.setScale(${minx}, ${maxx}, ${miny}, ${maxy}, ${rate});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {String}
 * @block
 */
Blockly.JavaScript['emitters_set_speed'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;

  const setMin = `${variable_emitter}.minParticleSpeed.set(${value_minx}, ${value_miny});\n`;
  const setMax = `${variable_emitter}.maxParticleSpeed.set(${value_maxx}, ${value_maxy});\n`;
  return setMin + setMax;
};

Blockly.JavaScript['emitters_set_speed_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
  const minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;

  const setMin = `${emitter}.minParticleSpeed.set(${minx}, ${miny});\n`;
  const setMax = `${emitter}.maxParticleSpeed.set(${maxx}, ${maxy});\n`;

  return setMin + setMax;
};

Blockly.JavaScript['emitters_set_gravity'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${variable_emitter}.gravity = ${value_gravity};\n`;
};

Blockly.JavaScript['emitters_set_gravity_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${emitter}.gravity = ${gravity};\n`;
};

Blockly.JavaScript['emitters_set_width'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${variable_emitter}.width = ${value_width};\n`;
};

Blockly.JavaScript['emitters_start'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const bool_explode = Blockly.JavaScript.valueToCode(block, 'EXPLODE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.start(${bool_explode}, ${value_lifespan}, ${value_frequency}, ${value_quantity});\n`;
};

Blockly.JavaScript['emitters_start_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const explode = block.getFieldValue('EXPLODE') == 'TRUE';
  const lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || '250';
  const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${emitter}.start(${explode}, ${lifespan}, ${frequency}, ${quantity});\n`;
};

Blockly.JavaScript['set_emit_from'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_cord = block.getFieldValue('cord');
  const value_emit_loc = Blockly.JavaScript.valueToCode(block, 'emit_loc', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.emit${dropdown_cord} = ${value_emit_loc};\n`;
};
//endregion EMITTERS

//region DEBUG
Blockly.JavaScript['debug_geom'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const filled = block.getFieldValue('FILLED') == 'TRUE';

  return `game.debug.geom(${object}, ${colour}, ${filled});\n`;
};

Blockly.JavaScript['debug_sprite'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_x = Blockly.JavaScript.valueToCode(block, 'X_VAL', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y_VAL', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${object}, ${value_x}, ${value_y});\n`;
};

/*Blockly.JavaScript['debug_body_info'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.bodyInfo(${object},${0},${20});\n`;
};* @block
 */
Blockly.JavaScript['debug_body_info'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.bodyInfo(${object}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_body_render'] = function (block) {
  const body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const filled = block.getFieldValue('FILLED') == 'TRUE';

  return `game.debug.body(${body}, ${colour}, ${filled});\n`;
};

Blockly.JavaScript['debug_camera'] = function (block) {
  const camera = Blockly.JavaScript.valueToCode(block, 'CAMERA', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.camera(${camera},${colour});\n`;
};

Blockly.JavaScript['debug_camera_info'] = function (block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.cameraInfo(${`game.camera`}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_input_info'] = function (block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.inputInfo(${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_key'] = function (block) {
  const dropdown_key = block.getFieldValue('KEY');
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.key(game.input.keyboard.addKey(Phaser.Keyboard.${dropdown_key}), ${x_pos}, ${y_pos});\n`;//, ${colour});\n`;
};

Blockly.JavaScript['debug_physics_group'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const check_exists = block.getFieldValue('CHECK_EXISTS') == 'TRUE';
  //return `${group}.destroy(${check_exists});\n`;
  return `game.debug.physicsGroup(${group});\n`;//, ${"'#73ff5c'"}, ${true}, ${check_exists});\n`;
};

Blockly.JavaScript['debug_rectangle'] = function (block) {
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.rectangle(${rect},${colour});\n`;
};

Blockly.JavaScript['debug_sound'] = function (block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.sound(${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sound_info'] = function (block) {
  const sound = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.soundInfo(${sound}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sprite_coords'] = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteCoords(${sprite}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sprite_info'] = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${sprite}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_text'] = function (block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.text(${text}, ${x_pos}, ${y_pos}, ${colour});\n`;
};
//endregion

//region STATES
Blockly.JavaScript['statemanager_add_state'] = function (block) {
  const value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  const text_key = block.getFieldValue('KEY');

  return `game.state.add('${text_key}', ${value_name});\n`;
};

Blockly.JavaScript['statemanager_start_state'] = function (block) {
  const tag = block.getFieldValue('TAG');

  return `game.state.start('${tag}');\n`;
};

Blockly.JavaScript['statemanager_get_current_state'] = function (block) {
  return [`game.state.getCurrentState()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['statemanager_restart_state'] = function (block) {
  return `game.state.restart();\n`;
};

Blockly.JavaScript['statemanager_check_state'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.state.checkState(${key})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region GEOMETRY
//region RECTANGLE
Blockly.JavaScript['rectangle_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Rectangle(${x}, ${y}, ${width}, ${height})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_intersects'] = function (block) {
  const rectA = Blockly.JavaScript.valueToCode(block, 'RECT_A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const rectB = Blockly.JavaScript.valueToCode(block, 'RECT_B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Rectangle.intersects(${rectA}, ${rectB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_get_numeric_field']
  = Blockly.JavaScript['rectangle_get_point_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_set_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return `${object}.${field} = ${value};\n`;
};

Blockly.JavaScript['rectangle_set_point_field'] = setPointField;

Blockly.JavaScript['rectangle_contains_point'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.containsPoint(${rectangle}, ${point})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_contains'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.contains(${rectangle}, ${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_contains_rect'] = function (block) {
  const rectangle_a = Blockly.JavaScript.valueToCode(block, 'RECTANGLE_A', Blockly.JavaScript.ORDER_ATOMIC);
  const rectangle_b = Blockly.JavaScript.valueToCode(block, 'RECTANGLE_B', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.containsRect(${rectangle_a}, ${rectangle_b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_clone'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
//  return [`Phaser.Rectangle.clone(${rectangle})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return [`${rectangle}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['rectangle_random'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${rectangle}.random()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
//region POINT
Blockly.JavaScript['point_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Point(${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['point_get_element'] = function (block) {
  const element = block.getFieldValue('ELEMENT');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['point_set_element'] = function (block) {
  const element = block.getFieldValue('ELEMENT');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.${element} = ${value};\n`;
};

Blockly.JavaScript['point_set_magnitude'] = function (block) {
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setMagnitude(${value});\n`;
};

Blockly.JavaScript['points_add'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.add(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_subtract'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.subtract(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_angle_between'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.angle(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_distance'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.distance(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_divide'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.divide(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_equals'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.equals(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_interpolate'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  const f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.interpolate(${lhs}, ${rhs}, ${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_multiply'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.multiply(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_negate'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.negative(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_normalize'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.normalize(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_perpendicular'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.perp(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_centroid'] = function (block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.centroid(${array})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_clamp'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clamp(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clamp_x'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampX(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clamp_y'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampY(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clone'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_copy_from'] = function (block) {
  var source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  var target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  return `${target}.copyFrom(${source});\n`;
};

Blockly.JavaScript['points_cross'] = function (block) {
  var lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${lhs}.cross(${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_dot'] = function (block) {
  var lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${lhs}.dot(${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_add_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.add(${x}, ${y});\n`;
};

Blockly.JavaScript['points_subtract_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.subtract(${x}, ${y});\n`;
};

Blockly.JavaScript['points_divide_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.divide(${x}, ${y});\n`;
};

Blockly.JavaScript['points_multiply_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.multiply(${x}, ${y});\n`;
};

Blockly.JavaScript['points_ceil'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.ceil();\n`;
};

Blockly.JavaScript['points_floor'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.floor();\n`;
};

Blockly.JavaScript['points_get_magnitude'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitude()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_get_magnitude_squared'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitudeSq()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_invert'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.invert();\n`;
};

Blockly.JavaScript['points_is_zero'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.isZero()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_limit'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.limit(${max});\n`;
};

Blockly.JavaScript['points_set_to_polar'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setToPolar(${degrees}, ${radius}, true);\n`;
};
//endregion
//region CIRCLE
Blockly.JavaScript['circle_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Circle(${x}, ${y}, ${diameter})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_get_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_set_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return `${object}.${field} = ${value};\n`;
};

Blockly.JavaScript['circle_intersects'] = function (block) {
  const circle_a = Blockly.JavaScript.valueToCode(block, 'CIRCLE_A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const circle_b = Blockly.JavaScript.valueToCode(block, 'CIRCLE_B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Circle.intersects(${circle_a}, ${circle_b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_intersects_rectangle'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Circle.intersectsRectangle(${circle}, ${rectangle})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_clone'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_contains'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.contains(${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_random'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.random()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_circumference'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.circumference()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['circle_circumference_point'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.circumferencePoint(${degrees}, true)`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
//endregion

//region SOUND
Blockly.JavaScript['load_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.load.audio(${tag}, ${source});\n`;
};

Blockly.JavaScript['play_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const looping = block.getFieldValue('LOOPING') == 'TRUE';
  return `game.sound.play(${tag}, ${volume}, ${looping});\n`;
};

Blockly.JavaScript['add_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const looping = block.getFieldValue('LOOPING') == 'TRUE';
  return [`game.add.audio(${tag}, ${volume}, ${looping})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remove_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.sound.removeByKey(${tag});\n`;
};

Blockly.JavaScript['stop_pause_resume_sounds'] = function (block) {
  const option = block.getFieldValue('OPTION');
  return `game.sound.${option}All();\n`;
};

Blockly.JavaScript['set_sound_boolean_member'] = Blockly.JavaScript['set_sound_numeric_member'] = setMember;
Blockly.JavaScript['get_sound_boolean_member'] = Blockly.JavaScript['get_sound_numeric_member'] = Blockly.JavaScript['get_sound_string_member'] = getMember;

Blockly.JavaScript['sound_fade_in'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const loop = block.getFieldValue('LOOP') == 'TRUE';
  return `${object}.fadeIn(${duration}, ${loop});\n`;
};

Blockly.JavaScript['sound_fade_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${object}.fadeOut(${duration});\n`;
};

Blockly.JavaScript['sound_fade_to'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.fadeTo(${duration}, ${volume});\n`;
};

Blockly.JavaScript['sound_loop_full'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.loopFull(${volume});\n`;
};

Blockly.JavaScript['sound_stop'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${object}.stop();\n`;
};

Blockly.JavaScript['sound_pause'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${object}.pause();\n`;
};

Blockly.JavaScript['sound_resume'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${object}.resume();\n`;
};

Blockly.JavaScript['sound_play'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const loop = block.getFieldValue('LOOP') == 'TRUE';
  const restart = block.getFieldValue('RESTART') == 'TRUE';

  return `${object}.play('', ${position}, ${volume}, ${loop}, ${restart});\n`;
};

Blockly.JavaScript['sound_restart'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const loop = block.getFieldValue('LOOP') == 'TRUE';

  return `${object}.play('', ${position}, ${volume}, ${loop});\n`;
};
//endregion

//region CAMERA
Blockly.JavaScript['game_camera'] = function () {
  return ['game.camera', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['camera_fade'] = function (block) {
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  const toHexColorFunc = Blockly.JavaScript.provideFunction_(
    'toHexColor',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
    '(color) {',
      'return color.replace("#", "0x");',
      '}']);

  return `game.camera.fade(${toHexColorFunc}(${colour}), ${time}, true);\n`;
};

Blockly.JavaScript['camera_flash'] = function (block) {
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  const toHexColorFunc = Blockly.JavaScript.provideFunction_(
    'toHexColor',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
    '(color) {',
      'return color.replace("#", "0x");',
      '}']);

  return `game.camera.flash(${toHexColorFunc}(${colour}), ${time}, true);\n`;
};

Blockly.JavaScript['camera_focus_on'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.focusOn(${object});\n`;
};

Blockly.JavaScript['camera_focus_on_xy'] = function (block) {
  const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
  const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.focusOnXY(${posX}, ${posY});\n`;
};

Blockly.JavaScript['camera_reset'] = function (block) {
  return `game.camera.reset();\n`;
};

Blockly.JavaScript['camera_reset_fx'] = function (block) {
  return `game.camera.resetFX();\n`;
};

Blockly.JavaScript['camera_set_bounds_to_world'] = function (block) {
  return `game.camera.setBoundsToWorld();\n`;
};

Blockly.JavaScript['camera_set_position'] = function (block) {
  const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
  const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.setPosition(${posX}, ${posY});\n`;
};

Blockly.JavaScript['camera_set_size'] = function (block) {
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.setSize(${width}, ${height});\n`;
};

Blockly.JavaScript['camera_shake'] = function (block) {
  const intensity = Blockly.JavaScript.valueToCode(block, 'INTENSITY', Blockly.JavaScript.ORDER_ATOMIC);
  const direction = block.getFieldValue('DIRECTION');
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.shake(${intensity}, ${duration}, true, Phaser.Camera.${direction});\n`;
};

Blockly.JavaScript['camera_unfollow'] = function (block) {
  return `game.camera.unfollow();\n`;
};
//endregion

//region LIST.METHODS
Blockly.JavaScript['list_find_closest'] = function (block) {
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.findClosest(${value}, ${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_get_random'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.getRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_list'] = function (block) {
  const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
  const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.numberArray(${start}, ${end})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_list_step'] = function (block) {
  const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
  const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
  const step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.numberArrayStep(${start}, ${end}, ${step})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_remove_random_item'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.removeRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_shuffle'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return `Phaser.ArrayUtils.shuffle(${array});\n`;
};
//endregion

//region RANDOMISATION
Blockly.JavaScript['create_random_generator'] = function (block) {
  return [`new Phaser.RandomDataGenerator([new Date().getTime()])`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_random_generator_seeded'] = function (block) {
  const seed = Blockly.JavaScript.valueToCode(block, 'SEED', Blockly.JavaScript.ORDER_ATOMIC);
  return [`new Phaser.RandomDataGenerator(${seed})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_angle'] = function (block) {
  return [`game.rnd.angle()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_pick'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.pick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_pick_weighted'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.weightedPick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_real'] = function (block) {
  return [`game.rnd.real()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_real_in_range'] = function (block) {
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.realInRange(${min}, ${max})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_sign'] = function (block) {
  return [`game.rnd.sign()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_boolean'] = function () {
  return ['game.rnd.pick([true, false])', Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region MATH
Blockly.JavaScript['math_deg_to_rad'] = function (block) {
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.math.degToRad(${degrees})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['math_rad_to_deg'] = function (block) {
  const radians = Blockly.JavaScript.valueToCode(block, 'RADIANS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.math.radToDeg(${radians})`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region TIME
Blockly.JavaScript['get_time_numeric_member'] = function (block) {
  const property = block.getFieldValue('PROPERTY');
  return [`game.time.${property}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_time_numeric_member'] = function (block) {
  const property = block.getFieldValue('PROPERTY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.time.${property} = ${value};\n`;
};

Blockly.JavaScript['delta_time_seconds'] = function (block) {
  return [`game.time.physicsElapsed`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['delta_time_milliseconds'] = function (block) {
  return [`game.time.physicsElapsedMS`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TIMER
Blockly.JavaScript['get_timer_numeric_member'] =
Blockly.JavaScript['get_timer_boolean_member'] =
  function (block) {
  const property = block.getFieldValue('PROPERTY');
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${timer}.${property}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_timer_numeric_member'] =
Blockly.JavaScript['set_timer_boolean_member'] =
  function (block) {
  const property = block.getFieldValue('PROPERTY');
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.${property} = ${value};\n`;
};

Blockly.JavaScript['create_timer'] = function (block) {
  const autoDestroy = block.getFieldValue('AUTO_DESTROY') === 'TRUE';
  return [`game.time.create(${autoDestroy})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_constants'] = function (block) {
  const constant = block.getFieldValue('VALUE');
  return [`${constant}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['start_timer'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.start(${delay});\n`;
};

Blockly.JavaScript['timer_add_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.add(${delay}, ${callback});\n`;
};

Blockly.JavaScript['timer_add_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.add(${delay}, ${callback}, undefined, ${code});\n`;
};

Blockly.JavaScript['timer_loop_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  return `${timer}.loop(${delay}, ${callback});\n`;
};

Blockly.JavaScript['timer_loop_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.loop(${delay}, ${callback}, ${code});\n`;
};

Blockly.JavaScript['timer_repeat_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const repeatCount = Blockly.JavaScript.valueToCode(block, 'REPEAT_COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.repeat(${delay}, ${repeatCount}, ${callback});\n`;
};

Blockly.JavaScript['timer_repeat_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const repeatCount = Blockly.JavaScript.valueToCode(block, 'REPEAT_COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.repeat(${delay}, ${repeatCount}, ${callback}, ${code});\n`;
};

Blockly.JavaScript['timer_destroy'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.destroy();\n`;
};

Blockly.JavaScript['timer_pause'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.pause();\n`;
};

Blockly.JavaScript['timer_resume'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.resume();\n`;
};

Blockly.JavaScript['timer_stop'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const clearEvents = block.getFieldValue('CLEAR_EVENTS') === 'TRUE';
  return `${timer}.stop(${clearEvents});\n`;
};

Blockly.JavaScript['timer_duration'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${timer}.duration`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['timer_set_on_complete_callback'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.onComplete.add(${callback});\n`;
};
//endregion

//region EASING
Blockly.JavaScript['phaser_easing'] = function (block) {
  const ease = block.getFieldValue('EASING');
  const direction = block.getFieldValue('DIRECTION');
  return [`Phaser.${ease}.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['phaser_easing_linear'] = function (block) {
  const ease = block.getFieldValue('EASING');
  return [`Phaser.Easing.Linear.None`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TWEEN
Blockly.JavaScript['phaser_game_add_tween_to'] = Blockly.JavaScript['phaser_game_add_tween_from'] = function (block) {
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  const ease = Blockly.JavaScript.valueToCode(block, 'EASE', Blockly.JavaScript.ORDER_ATOMIC);
  const autostart = block.getFieldValue('AUTOSTART') === 'TRUE';
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
  const repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
  const yoyo = block.getFieldValue('YOYO') === 'TRUE';
  let objectProperties = '';
  for (let i = 0; i < block.properties_.length; ++i) {
    objectProperties += `${block.properties_[i]}: ${Blockly.JavaScript.valueToCode(block, 'PROP' + i, Blockly.JavaScript.ORDER_COMMA)},`;
  }
  return [`game.add.tween(${target}).to({${objectProperties}}, ${duration}, ${ease}, ${autostart}, ${delay}, ${repeat}, ${yoyo})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['phaser_stop_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  const complete = block.getFieldValue('COMPLETE') === 'TRUE';
  return `${tween}.stop(${complete});\n`;
};

Blockly.JavaScript['phaser_pause_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_resume_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_start_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_yoyo_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  const enable = block.getFieldValue('ENABLE') === 'TRUE';
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.yoyo(${enable}, ${delay}, ${index});\n`;
};
//endregion

//region POINTER
Blockly.JavaScript['pointer_get_device_buttons_field'] = getField;
//endregion

//region DEVICE_BUTTON
Blockly.JavaScript['device_button_get_boolean_field'] = Blockly.JavaScript['device_button_get_numeric_field'] = getField;

Blockly.JavaScript['device_button_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justReleased()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['device_button_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justPressed()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['device_button_just_released_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justReleased(${duration})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['device_button_just_pressed_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justPressed(${duration})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion

//region HELPER_FUNCTIONS
function timerComplexHelper (block) {
  let code = '';

  for (let i = 0; i < block.itemCount_; i++) {
    code += Blockly.JavaScript.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_ATOMIC) || '';
    if (i < block.itemCount_ - 1) {
      code += ' , ';
    }
  }
  return code;
}

