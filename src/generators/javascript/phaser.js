/**
 * @author Luke Powell
 * @author Aeon Williams
 * @file Generates JavaScript for phaser blocks
 * @copyright DigiPen Institute of Technology 2016
 * ```
 * @block
 */

//region MEMBER_FUNCTIONS
/**
 * @ignore
 * Generic method to translate a block for a set_<object>_<type>_member block
 * @param block A block containing two value inputs OBJECT and VALUE representing the object the member is on and the value to set it to and a field ELEMENT to determine the member
 * ```
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
 * @ignore
 * Generic method to translate a block for a get_<object>_<type>_member block
 * @param block A block containing a value input OBJECT representing the object the member is on and a field ELEMENT to determine the member
 * @return {String}
 * ```
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
 * @returns {}
 * ```javascript
 * var game = new Phaser.Game([width], [height], Phaser.AUTO, '', {preload: preload, create: create, update: update});

 * ```
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
 * @returns {}
 * ```javascript
 * var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '');
 * ```
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
 * @returns {}
 * ```javascript
 *
 * ```javascript
 * game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 this.scale.pageAlignHorizontally = true;
 this.scale.pageAlignVertically = true;
 this.scale.updateLayout( true );
 ```
 * ```
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
 * @returns {}
 * ```javascript
 *
 * ```javascript
 * game.enableStep();
 * ```
 * @block
 */
Blockly.JavaScript['enable_step'] = function (block) {
  return `game.enableStep();\n`;
};
/**
 * Disables stepping through the game loop.
 * @method disable_step
 * @returns {}
 * ```javascript
 * game.disableStep();
 * ```
 * @block
 */
Blockly.JavaScript['disable_step'] = function (block) {
  return `game.disableStep();\n`;
};
/**
 * Steps through the game loop one frame at a time.
 * @method step
 * @returns {}
 * ```javascript
 * game.step();
 * ```
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
 * @returns {}
 * ```javascript
 * game.add.graphics(x, y);
 * ```
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
 * ```javascript
 *
 * graphics.beginFill(toHexColor(colour));
 * (shapes to fill)
 * graphics.endFill();
 * ```
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
 * @returns {}
 * ```javascript
 * graphicsVar.drawRect(x, y, width, height);
 * ```
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
 * @returns {}
 * ```javascript
 * graphicsVar.drawCircle(x, y, diameter);
 * ```
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
 * @returns {}
 * ```javascript
 * game.load.image(tag, source);
 * ```
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
 * @returns {}
 * ```javascript
 * game.load.atlasXML(tag, source, xml);
 * ```
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
 * @returns {}
 * ```javascript
 * game.add.sprite(x, y, tag, id);
 * ```
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
 * @returns {}
 * ```javascript
 * game.add.sprite(x, y, tag);
 * ```
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
 * @returns {}
 * ```javascript
 * object.animations.add(name, frames, fps, loop);
 * ```
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
 * @ignore
 * @method add_animation_vi
 * @param object {Sprite} sprite to apply the animation to
 * @param name {String} name of the tag for the animation
 * @param frames array of numbers or strings that correspond to frames to add to the animation
 * @param fps {Number} the speed the animation should play
 * @param loop {Boolean} whether or not the animation should loop or play once
 * @returns {}
 * ```javascript
 * object.animations.add(name, frames, fps, loop);
 * ```
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
 * @returns {}
 * ```javascript
 * game.load.spritesheet(tag, source, width, height);
 * ```
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
 * @returns {}
 * ```javascript
 * object.addChild(child);
 * ```
 * @block
 */
Blockly.JavaScript['add_child'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.addChild(${value_child});\n`;
};

/**
 * Adds a child to the given object.
 * @method add_child_vi
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @returns {}
 * ```javascript
 * object.addChild(child);
 * ```
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
 * @returns {}
 * ```javascript
 * object.addChildAt(child, index);
 * ```
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
 * @method add_child_at_vi
 * @param object the object to add a child to
 * @param child the child to add to the object
 * @param index {Number} the index to add the child to
 * @returns {}
 * ```javascript
 * object.addChildAt(child, index);
 * ```
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
 * @returns {}
 * ```javascript
 * object.alignIn(container, Phaser.position, offset_x, offset_y);
 * ```
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
 * @returns {}
 * ```javascript
 * object.alignTo(container, Phaser.position, offset_x, offset_y);
 * ```
 * @block
 * ```
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
 * @returns {}
 * ```javascript
 * object.bringToTop();
 * ```
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
 * @returns {}
 * ```javascript
 * object.checkWorldBounds = bool;
 * ```
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
 * @returns {}
 * ```javascript
 * object.contains(child);
 * ```
 * @block
 */
Blockly.JavaScript['contains'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.contains(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Checks if an object contains the given child.
 * @method contains_vi
 * @param object object to check
 * @param child child to check
 * @returns {}
 * ```javascript
 * object.contains(child);
 * ```
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
 * @returns {}
 * ```javascript
 * object.crop(rectangle);
 * ```
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
 * @returns {}
 * ```javascript
 * object.crop();
 * ```
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
 * @returns {}
 * ```javascript
 * object.destroy(bool);
 * ```
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
 * @returns {}
 * ```javascript
 * object.getChildAt(index);
 * ```
 * @block
 */
Blockly.JavaScript['get_child_at'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_object}.getChildAt(${value_index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Get the child at the given index.
 * @method get_child_at_vi
 * @param object object to get the child from
 * @param index {Number} index the child is located at
 * @returns {}
 * ```javascript
 * object.getChildAt(index);
 * ```
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
 * @returns {}
 * ```javascript
 * object.getChildIndex(child);
 * ```
 * @block
 */
Blockly.JavaScript['get_child_index'] = function (block) {
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.getChildIndex(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Get the index of the given child.
 * @method get_child_index_vi
 * @param object object to get the child from
 * @param child child to get the index from
 * @returns {}
 * ```javascript
 * object.getChildIndex(child);
 * ```
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
 * @returns {}
 * ```javascript
 * object.loadTexture(tag);
 * ```
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
 * @returns {}
 * ```javascript
 * object.moveDown();
 * ```
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
 * @returns {}
 * ```javascript
 * object.moveUp();
 * ```
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
 * ```
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
 * ```
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
 * @returns {}
 * ```javascript
 * object.outOfBoundsFaint = boolean;
 * ```
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
 * ```
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
 * ```
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
 * ```
 * @block
 */
Blockly.JavaScript['remove_children'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.removeChildren();\n`;
};

/**
 * Removes the given child from the object.
 * @method remove_child_vi
 * @param object object to remove the child from
 * @param child child to remove from the object
 * @returns {}
 * ```javascript
 * object.removeChild(child);
 * ```
 * @block
 */
Blockly.JavaScript['remove_child_vi'] = function (block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.removeChild(${child});\n`;
};

/**
 * Removes the child at the given index from the object.
 * @method remove_child_at_vi
 * @param object object to remove the child from
 * @param index index of the child to remove from the object
 * @returns {}
 * ```javascript
 * object.removeChildAt(index);
 * ```
 * @block
 */
Blockly.JavaScript['remove_child_at_vi'] = function (block) {
  const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.removeChildAt(${value_index});\n`;
};

/**
 * Removes all children from the object.
 * @method remove_children_vi
 * @params object object to remove children from
 * @returns {}
 * ```javascript
 * object.removeChildren();
 * ```
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
 * @returns {}
 * ```javascript
 * object.resetFrame();
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * object.sendToBack();
 * ```
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
 * ```
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
 * @method set_child_index_vi
 * @param object object that contains the child
 * @param child child to change the position of
 * @param index {Number} index to set the child's position to
 * @returns {}
 * ```javascript
 * object.setChildIndex(child, index);
 * ```
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
 * @returns {}
 * ```javascript
 * object.setFrame(frame);
 * ```
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
 * @returns {}
 * ```javascript
 * object.setScaleMinMax(minX, minY, maxX, maxY);
 * ```
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
 * @returns {}
 * ```javascript
 * object.setScaleMinMax();
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * parent.swapChildren(child, child2);
 * ```
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
 * @returns {}
 * ```javascript
 * game.add.group();
 * ```
 * @block
 */
Blockly.JavaScript['create_group'] = function (block) {
  return [`game.add.group()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 * ```
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
 * @method create_object_in_group_with_frame_vi
 * @param x {Number} the x position for the object to be displayed at
 * @param y {Number} the y position for the object to be displayed at
 * @param frame {Number} the frame of the sprite sheet to display at the start
 * @param tag {String} the sprite to display on the object
 * @param group the group to add the object to
 * @returns {}
 * ```javascript
 * group.create(x, y, tag, frame);
 * ```
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
 * ```
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
 * @returns {}
 * ```javascript
 * group.add(object);
 * ```
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
 * @returns {}
 * ```javascript
 * group.remove(object, destroy);
 * ```
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
 * @returns {}
 * ```javascript
 * group.contains(child);
 * ```
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
 * @returns {}
 * ```javascript
 * group.count(state);
 * ```
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
 * @returns {}
 * ```javascript
 * group.destroy(handleChildren);
 * ```
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
 * @returns {}
 * ```javascript
 * group.getAll();
 * ```
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
 * @returns {}
 * ```javascript
 * group.getAt(index);
 * ```
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
 * @returns {}
 * ```javascript
 * group.getClosestTo(object);
 * ```
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
 * ```javascript
 *
 * ```
 * @block
 */
Blockly.JavaScript['group_get_first_alive_dead'] = function (block) {
  const mode = block.getFieldValue('MODE');
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns the first object closest to the front of the group that is alive/fainted.
 * @method group_get_first_alive_fainted
 * @param group group to get the object from
 * @param mode determines if you are checking for an alive or fainted object
 * @returns {}
 * ```javascript
 * group.getFirstMode();
 * ```
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
 * @returns {}
 * ```javascript
 * group.getRandom();
 * ```
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
 * @returns {}
 * ```javascript
 * group.getRandomExists();
 * ```
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
 * @returns {}
 * ```javascript
 * group.removeAll(deleteObjects);
 * ```
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
 * @returns {}
 * ```javascript
 * game.world.add(object);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.moveToXY(object, x, y, speed, time);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.moveToPointer(object, speed, pointer, time);
 * ```
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
 * @method physics_accelerate_to_location
 * @param object object to move
 * @param x {Number} x position of the location to move to
 * @param y {Number} y position of the location to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {}
 * ```javascript
 * game.physics.arcade.accelerateToXY(object, x, y, speed, x_max, y_max);
 * ```
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
 * @method physics_accelerate_to_pointer
 * @param object object to move
 * @param pointer the mouse pointer to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {}
 * ```javascript
 * game.physics.arcade.accelerateToPointer(object, pointer, speed, x_max, y_max);
 * ```
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
 * @method physics_accelerate_to_object
 * @param object object to move
 * @param target the target object to move to
 * @param speed {Number} the speed the object will move at
 * @param x_max {Number} the maximum velocity in the x direction the object can reach
 * @param y_max {Number} the maximum velocity in the y direction the object can reach
 * @returns {}
 * ```javascript
 * game.physics.arcade.accelerateToObject(object, target, speed, x_max, y_max);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.field = value;
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.field.copyFrom(value);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.field
 * ```
 * @block
 */
/**
 * Returns the chosen point field value of the game's physics.
 * @method get_physics_point_field
 * @param field the field to get the value of
 * @returns {}
 * ```javascript
 * game.physics.arcade.field
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.checkCollision.direction = collide;
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.getObectsUnderPointer(pointer, group);
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.getObjectsAtLocation(x, y, group);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.getObjectsAtLocation(x, y, group, functionName);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.intersects(lhs, rhs);
 * ```
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
 * ```javascript
 *
 * ```
 * @block
 */
Blockly.JavaScript['start_physics'] = function (block) {
  const dropdown_system = block.getFieldValue('SYSTEM');
  return `game.physics.startSystem(Phaser.Physics.${dropdown_system});\n`;
};

/**
 * Enables the Phaser Arcade phyiscs to be used in the game.
 * @method start_arcade_physics
 * @returns {}
 * ```javascript
 * game.physics.startSystem(Phaser.Physics.ARCADE);
 * ```
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
 * ```javascript
 *
 * ```
 * @block
 */
Blockly.JavaScript['enable_body_group'] = function (block) {
  const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
  return `${group}.enableBody = true;\n`;
};

/**
 * Enables physics body for all objects in the group. This allows the objects to collide with other physics bodies and use other physics functionality.
 * @method enable_body_group_vi
 * @param group group to enable physics on
 * @returns {}
 * ```javascript
 * group.enableBody = true;
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.enable(object);
 * ```
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
 * ```javascript
 *
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.distanceBetween(source, target);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.distanceToPointer(source, pointer);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.aracde.distanceToXY(object, x, y);
 * ```
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
 * @returns {}
 * ```javascript
 * game.debug.body(object);
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.stop();
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.field.copyFrom(value);
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.field.element = value;
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.field = point;
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.field
 * ```
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * object.body.field = point;
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.element
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.element = value;
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.element
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.setSize(width, height);
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.setSize(width, height, offset_x, offset_y);
 * ```
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
 * ```javascript
 *
 * ```
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
 * @returns {}
 * ```javascript
 * group.create(x, y, tag);
 * ```
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.collide(object1, object2);
 * ```
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
 * ```javascript
 *
 */
Blockly.JavaScript['set_immovable'] = function (block) {
  const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const immovable = block.getFieldValue('IMMOVABLE') == 'TRUE';
  return `${body}.body.immovable = ${immovable};\n`;
};

/**
 * @deprecated
 * @param block
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.touching.direction
 * ```
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
 * ```
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
 * @returns {}
 * ```javascript
 * object.body.collideWorldBounds = collide;
 * ```
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
 * ```javascript
 *
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.overlap(object1, object2, functionName);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.overlap(object1, object2)
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.collide(object1, object2, functionName);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.collide(object1, object2)
 * ```
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
};* ```
 * @block
 */

/*Blockly.JavaScript['move_to_pointer_extended'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${gameobject}, ${speed}, game.input.mousePointer, ${maximumTime});\n`;
};* ```
 * @block
 */

/**
 * Moves the first object to the second object at the given speed. Speed will be adjusted to reach the destination object within the given maximum time. If the destination object moves, the target location will not change.
 * @method move_to_object
 * @param object object to move
 * @param destinationObject object to move to
 * @param speed {Number} speed for the object to move at
 * @param maximumTime {Number} maximum amount of time to take to move
 * @returns {}
 * ```javascript
 * game.physics.arcade.moveToObject(object, destinationObject, speed, maximumTime);
 * ```
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
 * @returns {}
 * ```javascript
 * game.physics.arcade.accelerationFromRotation(rotation, speed)
 * ```
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * object.animations.play(animation);
 * ```
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
 * ```javascript
 *
 */
Blockly.JavaScript['stop_animation'] = function (block) {
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.animations.stop();\n`;
};

/**
 * Stops the current animation on the object.
 * @method stop_animation_vi
 * @param object object to stop the animations on
 * @returns {}
 * ```javascript
 * object.animations.stop();
 * ```
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * object.frame = frameNumber;
 * ```
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
 * ```javascript
 *
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
 * ```
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
 * ```
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
 * @returns {}
 * ```javascript
 * object.animations.next(framecount);
 * ```
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
 * @returns {}
 * ```javascript
 * object.animations.previous(framecount);
 * ```
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
 * ```javascript
 *
 */
Blockly.JavaScript['refresh_frame'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${variable_object}.animations.refreshFrame();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['animation_update'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.animations.update()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * ```
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
 * @returns {}
 * ```javascript
 * object.animations.validateFrames(frames, true)
 * ```
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
 * ```
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
 * @returns {}
 * ```javascript
 * object.animations.destroy();
 * ```
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
 * ```javascript
 *
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
 * ```javascript
 *
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
 * ```javascript
 *
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
 * @returns {}
 * ```javascript
 * object.animations.currentAnim.field = value;
 * ```
 * @block
 */
/**
 * Assigns the chosen numeric field for the object.
 * @method set_animation_numeric_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.animations.currentAnim.field = value;
 * ```
 * @block
 */

/**
 * Assigns the chosen string field for the object.
 * @method set_animation_string_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.animations.currentAnim.field = value;
 * ```
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
* @returns {}
 * ```javascript
 * object.animations.currentAnim.field
* ```
 * @block
*/
/**
 * Returns the chosen numeric field value of the object.
 * @method get_animation_numeric_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * ```javascript
 * object.animations.currentAnim.field
 * ```
 * @block
 */
/**
 * Returns the chosen string field value of the object.
 * @method get_animation_string_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * ```javascript
 * object.animations.currentAnim.field
 * ```
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
 * @returns {}
 * ```javascript
 * game.input.direction
 * ```
 * @block
 */
Blockly.JavaScript['get_current_mouse_position'] = function (block) {
  const direction = block.getFieldValue('DIRECTION');
  return [`game.input.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the mouse position as a point that contains the x/y values of the coordinates.
 * @method get_mouse_position_point
 * @returns {}
 * ```javascript
 * New Phaser.Point(game.input.x, game.input.y)
 * ```
 * @block
 */
Blockly.JavaScript['get_mouse_position_point'] = function (block) {
  return [`new Phaser.Point(game.input.x, game.input.y)`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the specified mouse button is currently being clicked.
 * @method is_mouse_button_clicked
 * @returns {}
 * ```javascript
 * game.input.mousePointer.button.isDown
 * ```
 * @block
 */
Blockly.JavaScript['is_mouse_button_clicked'] = function (block) {
  return [`game.input.mousePointer.${block.getFieldValue('BUTTON')}.isDown`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the active game pointer.
 * @method get_active_pointer
 * @returns {}
 * ```javascript
 * game.input.activePointer
 * ```
 * @block
 */
Blockly.JavaScript['get_active_pointer'] = function (block) {
  return [`game.input.activePointer`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region Keyboard
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['create_cursor_keys'] = function (block) {
  return ['game.input.keyboard.createCursorKeys()', Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns true/false about whether or not the given key is currently being pressed down.
 * @method is_key_down
 * @param key key to check
 * @returns {}
 * ```javascript
 * game.input.keyboard.isDown(Phaser.Keyboard.key)
 * ```
 * @block
 */
Blockly.JavaScript['is_key_down'] = function (block) {
  const key = block.getFieldValue('KEY');
  return [`game.input.keyboard.isDown(Phaser.Keyboard.${key})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Creates a Phaser key object.
 * @method add_key
 * @param key keycode of the key to create
 * @returns {}
 * ```javascript
 * game.input.keyboard.addKey(Phaser.Keyboard.key)
 * ```
 * @block
 */
Blockly.JavaScript['add_key'] = function (block) {
  const key = block.getFieldValue('KEYCODE');
  return [`game.input.keyboard.addKey(Phaser.Keyboard.${key})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the chosen boolean field value of the key.
 * @method get_key_boolean_field
 * @param field the value to get
 * @param key key to get values from
 * @returns {}
 * ```javascript
 * key.field
 * ```
 * @block
 */
/**
 * Returns the chosen numeric field value of the key.
 * @method get_key_numeric_field
 * @param field the value to get
 * @param key key to get values from
 * @returns {}
 * ```javascript
 * key.field
 * ```
 * @block
 */
Blockly.JavaScript['get_key_boolean_field']
  = Blockly.JavaScript['get_key_numeric_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the given key was pressed down this update tick.
 * @method key_just_pressed
 * @param key key to check
 * @returns {}
 * ```javascript
 * key.justPressed()
 * ```
 * @block
 */
Blockly.JavaScript['key_just_pressed'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justPressed()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the given key was released down this update tick.
 * @method key_just_released
 * @param key key to check
 * @returns {}
 * ```javascript
 * key.justReleased()
 * ```
 * @block
 */
Blockly.JavaScript['key_just_released'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justReleased()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Resets the state of the key. Hard reset removes any callback methods associated with it.
 * @method key_reset
 * @param key key to reset
 * @param hard {Boolean} whether or not to hard reset the key
 * @returns {}
 * ```javascript
 * key.reset(hard)
 * ```
 * @block
 */
Blockly.JavaScript['key_reset'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const hard = block.getFieldValue('HARD') == 'TRUE';
  return `${key}.reset(${hard});\n`;
};

/**
 * Returns true/false if the given key was released within the given amount of time.
 * @method key_up_duration
 * @param key key to check
 * @param duration {Number} duration within which the key is considered as just released
 * @returns {}
 * ```javascript
 * key.upDuration(duration);
 * ```
 * @block
 */
Blockly.JavaScript['key_up_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.upDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the given key was pressed within the given amount of time.
 * @method key_up_duration
 * @param key key to check
 * @param duration {Number} duration within which the key is considered as just pressed
 * @returns {}
 * ```javascript
 * key.downDuration(duration);
 * ```
 * @block
 */
Blockly.JavaScript['key_down_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.downDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region INPUT_HANDLER
/**
 * Enables an object to use input handler methods and events.
 * @method input_handler_enable
 * @param object object to enable the input handler on
 * @returns {}
 * ```javascript
 * object.inputEnabled = true;
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_enable'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.inputEnabled = true;\n`;
};

/**
 * Assigns the chosen boolean field for the object.
 * @method set_input_handler_boolean_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.input.field = value;
 * ```
 * @block
 */
/**
 * Assigns the chosen numeric field for the object.
 * @method set_input_handler_numeric_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.input.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_input_handler_boolean_field']
  = Blockly.JavaScript['set_input_handler_numeric_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.${field} = ${value};\n`;
};

/**
 * Assigns the chosen point field for the object.
 * @method set_input_handler_point_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.input.field.copyFrom(value);
 * ```
 * @block
 */
Blockly.JavaScript['set_input_handler_point_field'] = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.${field}.copyFrom(${value});\n`;
};

/**
 * Returns the chosen boolean field value of the object.
 * @method get_input_handler_boolean_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * ```javascript
 * object.input.field
 * ```
 * @block
 */
/**
 * Returns the chosen numeric field value of the object.
 * @method get_input_handler_numeric_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * ```javascript
 * object.input.field
 * ```
 * @block
 */
/**
 * Returns the chosen point field value of the object.
 * @method get_input_handler_point_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * ```javascript
 * object.input.field
 * ```
 * @block
 */
Blockly.JavaScript['get_input_handler_boolean_field']
  = Blockly.JavaScript['get_input_handler_numeric_field']
  = Blockly.JavaScript['get_input_handler_point_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.input.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Sets the boundary of where the sprite is restricted while being dragged.
 * @method input_handler_bounds_rect_set
 * @param object object to set the boundary for
 * @param rect rectangle that defines the boundary
 * @returns {}
 * ```javascript
 * object.input.boundsRect = rect;
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_bounds_rect_set'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.boundsRect = ${rect};\n`;
};

/**
 * Allows the object to be clicked and dragged by the mouse.
 * @method input_handler_enable_drag
 * @param object object to enable dragging on
 * @returns {}
 * ```javascript
 * object.input.enableDrag();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_enable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag();\n`;
};

/**
 * Allows the object to be clicked and dragged by the mouse, with customizable options.
 * @method input_handler_enable_drag_complex
 * @param object object to enable dragging on
 * @param center {Boolean} If false the Sprite will drag from where you click it minus the dragOffset. If true it will center itself to the tip of the mouse pointer
 * @param top {Boolean} If true the object will be displayed on top of everything else
 * @param pixel {Boolean} If true it will use a pixel perfect test to see if you clicked the object. False uses the bounding box
 * @param alpha {Boolean} If pixel perfect is true, this specifies the alpha level needed for collision to be processed
 * @returns {}
 * ```javascript
 * object.input.enableDrag(center, top, pixel, alpha);
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_enable_drag_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const center = block.getFieldValue('CENTER') === 'TRUE';
  const top = block.getFieldValue('ALPHA') === 'TRUE';
  const pixel = block.getFieldValue('PIXEL') === 'TRUE';
  const alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag(${center}, ${top}, ${pixel}, ${alpha});\n`;
};

/**
 * Returns true/false if the pointer is currently clicking on the object.
 * @method input_handler_check_pointer_down
 * @param pointer pointer to check
 * @param object object to check
 * @returns {}
 * ```javascript
 * input.checkPointerDown(pointer)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_check_pointer_down'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerDown(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the pointer is on top of the object.
 * @method input_handler_check_pointer_over
 * @param pointer pointer to check
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.checkPointerOver(pointer)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_check_pointer_over'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerOver(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Stops the object from being dragged. If it is currently being dragged, it will be stopped immediately.
 * @method input_handler_disable_drag
 * @param object object to disable drag on
 * @returns {}
 * ```javascript
 * object.input.disableDrag();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_disable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableDrag();\n`;
};

/**
 * Make the object snap to the given x/y grid when being dragged or released.
 * @method input_handler_enable_snap
 * @param object object to snap
 * @param x {Number} the width of the grid to snap to
 * @param y {Number} the height of the grid to snap to
 * @returns {}
 * ```javascript
 * object.input.enableSnap(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_enable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.input.enableSnap(${x}, ${y});\n`;
};

/**
 * Make the object snap to the given x/y grid when being dragged or released, with customizable options.
 * @method input_handler_enable_snap_complex
 * @param object object to snap
 * @param x {Number} the width of the grid to snap to
 * @param y {Number} the height of the grid to snap to
 * @param drag {Boolean} makes the object snap to the grid while being dragged
 * @param release {Boolean} makes the object snap to the grid when released
 * @param offset_x {Number} offsets the top left starting point of the grid
 * @param offset_y {Number} offsets the top left starting point of the grid
 * @returns {}
 * ```javascript
 * object.input.enableSnap(x, y, drag, release, offset_x, offset_y);
 * ```
 * @block
 */
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

/**
 * Stops the object from snapping to a grid while being dragged and released.
 * @method input_handler_disable_snap
 * @param object object to disable snap for
 * @returns {}
 * ```javascript
 * object.input.disableSnap();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_disable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableSnap();\n`;
};

/**
 * Returns true/false if the alpha value at the given location is greater than or equal to the object's pixelPerfectAlpha value.
 * @method input_handler_check_pixel
 * @param x {Number} x coordinate to check
 * @param y {Number} y coordinate to check
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.checkPixel(x, y)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_check_pixel'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPixel(${x}, ${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the object is using pixel perfect checking.
 * @method input_handler_is_pixel_perfect
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.isPixelPerfect()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_is_pixel_perfect'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.isPixelPerfect()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the object was clicked on within the given time.
 * @method input_handler_just_pressed
 * @param object object to check
 * @param time {Number} the duration to check
 * @returns {}
 * ```javascript
 * object.input.justPressed(0, time)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justPressed(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the object was released on within the given time.
 * @method input_handler_just_released
 * @param object object to check
 * @param time {Number} the duration to check
 * @returns {}
 * ```javascript
 * object.input.justReleased(0, time)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justReleased(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the number of milliseconds the mouse has been hovering over the object.
 * @method input_handler_over_duration
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.overDuration()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_over_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.overDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['input_handler_pointer_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOver()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the mouse has entered the object's bounds within the given time.
 * @method input_handler_just_over
 * @param object object to check
 * @param time {Number} time to check
 * @returns {}
 * ```javascript
 * object.input.justOver(0, time)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_just_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOver(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the number of milliseconds the mouse has been clicking on the object.
 * @method input_handler_down_duration
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.downDuration()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_down_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.downDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the pointer is up.
 * @method input_handler_pointer_up
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerUp()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_up'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerUp()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the pointer is down.
 * @method input_handler_pointer_down
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerDown()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_down'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerDown()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Starts the Input Handler. This is automatically called if input is enabled on an object. Higher priority objects take click priority when objects are stacked on top of each other.
 * @method input_handler_start
 * @param object object to start input handler for
 * @param priority {Number} the priority of the object
 * @returns {}
 * ```javascript
 * object.input.start(priority);
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_start'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const priority = Blockly.JavaScript.valueToCode(block, 'PRIORITY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.start(${priority});\n`;
};

/**
 * Stops the Input Handler from running on the object.
 * @method input_handler_stop
 * @param object object to affect
 * @returns {}
 * ```javascript
 * object.input.stop();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_stop'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.stop();\n`;
};

/**
 * Returns true/false if the pointer left the object's bounds within the given duration.
 * @method input_handler_just_out
 * @param object object to check
 * @param time {Number} duration to check
 * @returns {}
 * ```javascript
 * object.input.justOut(0, time)
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_just_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOut(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the pointer is outside of the object's bounds.
 * @method input_handler_pointer_out
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerOut()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOut()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the x coordinate of the pointer, relative to the top-left of anchor of the object.
 * @method input_handler_pointer_x
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerX()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_x'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerX()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the y coordinate of the pointer, relative to the top-left of anchor of the object.
 * @method input_handler_pointer_y
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerY()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_y'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerY()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns a point containing the x & y coordinates of the pointer, relative to the top-left of the anchor of the object.
 * @method input_handler_pointer_position
 * @param object object to check
 * @returns {}
 * ```javascript
 * new Phaser.Point(object.input.pointerX(), object.input.pointerY())
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_position'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const position = `new Phaser.Point(${object}.input.pointerX(), ${object}.input.pointerY())`;
  return [`${position}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Resets the input handler for the object, and disables it.
 * @method input_handler_reset
 * @param object object to reset the input handler for
 * @returns {}
 * ```javascript
 * object.input.reset();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_reset'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.reset();\n`;
};

/**
 * Destroys the input handler for the object.
 * @method input_handler_destroy
 * @param object object to destroy the handler for
 * @returns {}
 * ```javascript
 * object.input.destroy();
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_destroy'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.destroy();\n`;
};

/**
 * Returns true/false if the object is currently being dragged.
 * @method input_handler_pointer_dragged
 * @param object object to check
 * @returns {}
 * ```javascript
 * object.input.pointerDragged()
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_pointer_dragged'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerDragged()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Locks dragging for the object in certain directions.
 * @method input_handler_set_drag_lock
 * @param object object to lock dragging for
 * @param horizontal {Boolean} enables/disables the object from being dragged horizontally
 * @param vertical {Boolean} enables/disables the object from being dragged vertically
 * @returns {}
 * ```javascript
 * object.input.setDragLock(horizontal, vertical);
 * ```
 * @block
 */
Blockly.JavaScript['input_handler_set_drag_lock'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const horizontal = block.getFieldValue('HORIZONTAL') === 'TRUE';
  const vertical = block.getFieldValue('VERTICAL') === 'TRUE';
  return `${object}.input.setDragLock(${horizontal}, ${vertical});\n`;
};
//endregion
//endregion

//region WORLD
/**
 * Returns the property of the object.
 * @method get_world_property
 * @param property property to get values from
 * @returns {}
 * ```javascript
 * game.world.property
 * ```
 * @block
 */
Blockly.JavaScript['get_world_property'] = function (block) {
  const property = block.getFieldValue('NAME');
  return [`game.world.${property}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Sets the top-left coordinates and size/physical bounds of the game world.
 * @method set_world_bounds
 * @param x {Number} the x coordinate of the top-left corner of the world
 * @param y {Number} the y coordinate of the top-left corner of the world
 * @param w {Number} the width of the game world
 * @param h {Number} the height of the game world
 * @returns {}
 * ```javascript
 * game.world.setBounds(x, y, w, h);
 * ```
 * @block
 */
Blockly.JavaScript['set_world_bounds'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const w = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const h = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.world.setBounds(${x}, ${y}, ${w}, ${h});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['create_point'] = function (block) {
  const value_x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`new Phaser.Point(${value_x}, ${value_y})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_scale'] = function (block) {
  const xScale = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
  const yScale = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return `${object}.scale.setTo(${xScale}, ${yScale});\n`;
};

/**
 * Sets the scale of the object.
 * @method set_scale_vi
 * @param x {Number} amount to scale the object in the x direction
 * @param y {Number} amount to scale the object in the y direction
 * @param object object to scale
 * @returns {}
 * ```javascript
 * object.scale.setTo(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['set_scale_vi'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.scale.setTo(${x}, ${y});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_pos'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.${param_name} = ${val};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_velocity'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.${param_name} = ${val};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_param'] = function (block) {
  const param_name = block.getFieldValue('PARAM');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);

  return [`${object}.${param_name}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_world_reference'] = function (block) {
  return [`game.world`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Pauses/unpauses the game.
 * @method set_game_pause
 * @param paused {Boolean} sets the game paused to true or false
 * @returns {}
 * ```javascript
 * game.paused = paused;
 * ```
 * @block
 */
Blockly.JavaScript['set_game_pause'] = function (block) {
  var paused = Blockly.JavaScript.valueToCode(block, 'PAUSED', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.paused = ${paused};\n`;
};

/**
 * Returns whether or not the game is paused.
 * @method get_game_pause
 * @returns {}
 * ```javascript
 * game.paused
 * ```
 * @block
 */
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
};* ```
 * @block
 */
/**
 * Assigns the chosen point field for the game object.
 * @method set_game_object_point_field
 * @param field the field to set
 * @param point point to set the field to
 * @param object object to set the field for
 * @returns {}
 * ```javascript
 * object.field.copyFrom(point);
 * ```
 * @block
 */
Blockly.JavaScript['set_game_object_point_field'] = setPointField;

/**
 * Returns the chosen point field value of the game object.
 * @method get_physics_point_field
 * @param object object to get values from
 * @param field the field to get the value of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['get_game_object_point_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_game_object_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const value = block.getFieldValue('BOOLEAN') == 'TRUE';
  return `${object}.${field} = ${value};\n`;
};

/**
 * Assigns the chosen boolean field for the game object.
 * @method set_game_object_boolean_field_vi
 * @param object object to set the field for
 * @param field the field to set
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_game_object_boolean_field_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const boolean = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field} = ${boolean};\n`;
};

/**
 * Returns the chosen boolean field value for the game object.
 * @method get_game_object_boolean_field
 * @param object object to get values from
 * @param field the field to get the value of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['get_game_object_boolean_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Assigns the chosen numeric value for the game object.
 * @method set_game_object_numeric_field
 * @param object object to set the field for
 * @param field the field to set
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_game_object_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field} = ${value};\n`;
};

/**
 * Returns the chosen point numeric value for the game object.
 * @method get_game_object_numeric_field
 * @param object object to get the values from
 * @param field the field to get the value of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['get_game_object_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_object_anchor'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE);
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.anchor.setTo(${value_x_pos}, ${value_y_pos});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['kill_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.kill();\n`;
};

/**
 * Sets the values of game object alive, exists, and visible to false. Does not actually destroy the object or free it from memory.
 * @method faint_object
 * @param object object to faint
 * @returns {}
 * ```javascript
 * object.faint();
 * ```
 * @block
 */
Blockly.JavaScript['faint_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.faint();\n`;
};

/**
 * Deletes everything about the game object.
 * @method destroy_object
 * @param object object to destroy
 * @returns {}
 * ```javascript
 * object.destroy();
 * ```
 * @block
 */
Blockly.JavaScript['destroy_object'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.destroy();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['object_inCamera'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.inCamera`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['camera_follow'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  return `game.camera.follow(${variable_object}, undefined, 0.5, 0.5);\n`;

};

/**
 * Makes the game camera follow the object.
 * @method camera_follow_vi
 * @param object object for the camera to follow
 * @returns {}
 * ```javascript
 * game.camera.follow(object);
 * ```
 * @block
 */
Blockly.JavaScript['camera_follow_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.follow(${object});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.follow(${object});\n`;
};

/**
 * Makes the game camera follow the object, with a specific style of following.
 * @method camera_follow_vi_styled
 * @param object object for the camera to follow
 * @param style the style of the camera following
 * @returns {}
 * ```javascript
 * game.camera.follow(object, Phaser.Camera.style);
 * ```
 * @block
 */
Blockly.JavaScript['camera_follow_vi_styled'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const style = block.getFieldValue('STYLE');
  return `game.camera.follow(${object}, Phaser.Camera.${style});\n`;
};

/**
 * Makes the game camera follow the object, with a specific style of following. Lerp designates how much linear interpolation to use when horizontally tracking the object. The closer the values is to 1, the faster the camera will track.
 * @method camera_follow_vi_complex
 * @param object object for the camera to follow
 * @param lerpX {Number} linear interpolation in the x direction
 * @param lerpY {Number} linear interpolation in the y direction
 * @param style the style of the camera following
 * @returns {}
 * ```javascript
 * game.camera.follow(object, style, lerpX, lerpY);
 * ```
 * @block
 */
Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const lerpX = Blockly.JavaScript.valueToCode(block, 'LERP_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const lerpY = Blockly.JavaScript.valueToCode(block, 'LERP_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const style = block.getFieldValue('STYLE');
  return `game.camera.follow(${object}, ${style}, ${lerpX}, ${lerpY});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_camera'] = function (block) {
  return [`game.camera`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
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

/**
 * Creates a new text object and adds it to the game.
 * @method add_text_input
 * @param x {Number} the x coordinate to display the text at
 * @param y {Number} the y coordinate to display the text at
 * @param initial_text {String} the text to display
 * @param size {Number} the font size to display the text with
 * @param colour the colour to display the text with
 * @returns {}
 * ```javascript
 * game.add.text(x, y, initial_text, {fontSize: `${size}px`, fill: 'colour'})
 * ```
 * @block
 */
Blockly.JavaScript['add_text_input'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.add.text(${x}, ${y}, ${initial_text}, { fontSize: \`\${${size}}px\`, fill: ${colour}})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['add_text'] = function (block) {
  const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const value_initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  const colour_fill = block.getFieldValue('FILL');
  return [`game.add.text(${value_x_pos}, ${value_y_pos}, ${value_initial_text}, { fontSize: \`\${${size}}px\`, fill: '${colour_fill}'})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_text'] = function (block) {
  const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  const text_string = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.text = ${text_string};\n`;
};

/**
 * Sets the text to display on the text object.
 * @method set_text_vi
 * @param object text object to set the text for
 * @param text_string {String} text to display on the object
 * @returns {}
 * ```javascript
 * object.text = text_string;
 * ```
 * @block
 */
Blockly.JavaScript['set_text_vi'] = function (block) {
  const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.text = ${value_text};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_bounds'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.getBounds()`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_rotation'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.angle`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Rotates the object by the number of degrees. 0 to 180 rotates clockwise, 0 to -180 rotates counterclockwise.
 * @method rotate
 * @param object object to rotate
 * @param value_angle {Number} number of degrees to rotate by
 * @returns {}
 * ```javascript
 * object.angle += value_angle;
 * ```
 * @block
 */
Blockly.JavaScript['rotate'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.angle += ${value_angle};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_rotation'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.angle = ${value_angle};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_local_bounds'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${value_object}.getLocalBounds()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Moves the game object to the given coordinates, and sets properties fresh, exists, visible, and renderable to true.
 * @method reset
 * @param object object to reset
 * @param x {Number} x position to move the object to
 * @param y {Number} y position to move the object to
 * @returns {}
 * ```javascript
 * object.reset(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['reset'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.reset(${x}, ${y});\n`;
};

/**
 * Brings a fainted object back to "life". Sets alive, exists, and visible to true.
 * @method revive
 * @param object object to revive
 * @returns {}
 * ```javascript
 * object.revive();
 * ```
 * @block
 */
Blockly.JavaScript['revive'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.revive();\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['create_bitmapFont'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
  const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
  const xml = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_NONE);

  return `game.load.bitmapFont(${tag}, ${source}, ${xml});\n`;
};

/**
 * Move the position of the object by the given amount, relative to the object's current position.
 * @method move_by
 * @param object object to move
 * @param x {Number} number of pixels in the x direction to move
 * @param y {Number} number of pixels in the y direction to move
 * @returns {}
 * ```javascript
 * object.position.add(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['move_by'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.position.add(${x}, ${y});\n`;
};
//endregion
//region DRAW CIRCLE
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
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
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return [`${variable_name}.width`, Blockly.JavaScript.ORDER_NONE];
};
//endregion
//region SET_OBJECT_WIDTH
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const value_name = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_name} = ${value_name}`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region PARTICLE_EMITTER
/**
 * Creates a particle emitter at the given location, with a total number of max particles.
 * @method addemitter
 * @param x {Number} the x location of the emitter
 * @param y {Number} the y location of the emitter
 * @param maxparticles {Number} the total number of particles in the emitter
 * @returns {}
 * ```javascript
 * game.add.emitter(x, y, maxparticles)
 * ```
 * @block
 */
Blockly.JavaScript['addemitter'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const maxparticles = Blockly.JavaScript.valueToCode(block, 'maxParticles', Blockly.JavaScript.ORDER_ATOMIC) || '1';

  return [`game.add.emitter(${x}, ${y}, ${maxparticles})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_make_particles'] = function (block) {
  const emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const tag = block.getFieldValue('TAG');
  return `${emitter}.makeParticles('${tag}');\n`;
};

/**
 * Generates new particles to be used by the emitter.
 * @method emitters_make_particles
 * @param emitter emitter to make new particles for
 * @param keys {String} the sprite/texture to use for the particles
 * @param frames {Number} the frames the sprites will use
 * @param quantity {Number} the number of particles to generate
 * @param collide {Boolean} whether or not the particles should collide with physics bodies
 * @param collideWorldBounds {Boolean} whether or not the particles should collide with the world bounds
 * @returns {}
 * ```javascript
 * emitter.makeParticles(keys, frames, quantity, collide, collideWorldBounds);
 * ```
 * @block
 */
Blockly.JavaScript['emitter_make_particles'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const keys = Blockly.JavaScript.valueToCode(block, 'KEYS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const collide = block.getFieldValue('COLLIDE') == 'TRUE';
  const collideWorldBounds = block.getFieldValue('COLLIDEWORLDBOUNDS') == 'TRUE';
  return `${emitter}.makeParticles(${keys}, ${frames}, ${quantity}, ${collide}, ${collideWorldBounds});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_set_rotation'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const x_rotation = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y_rotation = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${variable_emitter}.setRotation(${x_rotation}, ${y_rotation});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_set_rotation_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${emitter}.setRotation(${min}, ${max});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {}
 * ```
 * @block
 */
Blockly.JavaScript['emitters_set_alpha'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.setAlpha(${value_min}, ${value_max}, ${value_rate});\n`;
};

/**
 * Sets the alpha constraints and variations for the particles on the emitter.
 * @method emitters_set_alpha_vi
 * @param emitter emitter to change the particles of
 * @param min {Number} the minimum value the alpha of the particles can reach
 * @param max {Number} the maximum value the alpha of the particles can reach
 * @param rate {Number} the rate the particles will change between min and max
 * @returns {}
 * ```javascript
 * emitter.setAlpha(min, max, rate);
 * ```
 * @block
 */
Blockly.JavaScript['emitters_set_alpha_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '1';
  const rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${emitter}.setAlpha(${min}, ${max}, ${rate});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_set_scale'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.setScale(${value_minx}, ${value_maxx}, ${value_miny}, ${value_maxy}, ${value_rate});\n`;
};

/**
 * Sets the scale constraints and variations for the particles on the emitter.
 * @method emitters_set_scale_vi
 * @param emitter emitter to change the particles of
 * @param minx {Number} the minimum x value the scale the particles can reach
 * @param maxx {Number} the maximum x value the scale the particles can reach
 * @param miny {Number} the minimum y value the scale the particles can reach
 * @param maxy {Number} the maximum y value the scale the particles can reach
 * @param rate {Number} the rate the particles will change between min and max
 * @returns {}
 * ```javascript
 * emitter.setScale(minx, maxx, miny, maxy, rate);
 * ```
 * @block
 */
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
 * @return {}
 * ```
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

/**
 * Sets the maximum and minimum speeds of the particles released from the emitter.
 * @method emitters_set_speed_vi
 * @param emitter emitter to set the speed of the particles for
 * @param minx {Number} the minimum speed for the particles to move in the x direction
 * @param maxx {Number} the maximum speed for the particles to move in the x direction
 * @param miny {Number} the minimum speed for the particles to move in the y direction
 * @param maxy {Number} the maximum speed for the particles to move in the y direction
 * @returns {}
 * ```javascript
 * emitter.minParticleSpeed.set(minx, miny); emitter.maxParticleSpeed.set(maxx, maxy);
 * ```
 * @block
 */
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

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_set_gravity'] = function (block) {
  const emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${emitter}.gravity = ${gravity};\n`;
};

/**
 * Sets the gravity each particle has when launched from the emitter.
 * @method emitters_set_gravity
 * @param emitter emitter to set the gravity of the particles for
 * @param particle_gravity {Number} the gravity each particle will have
 * @returns {}
 * ```javascript
 * emitter.gravity = particle_gravity;
 * ```
 * @block
 */
Blockly.JavaScript['emitters_set_gravity_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${emitter}.gravity = ${gravity};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_set_width'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return `${variable_emitter}.width = ${value_width};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['emitters_start'] = function (block) {
  const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
  const bool_explode = Blockly.JavaScript.valueToCode(block, 'EXPLODE', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  const value_quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || null;
  return `${variable_emitter}.start(${bool_explode}, ${value_lifespan}, ${value_frequency}, ${value_quantity});\n`;
};

/**
 * Tell the emitter to start emitting particles.
 * @method emitters_start_vi
 * @param emitter emitter to start emitting particles from
 * @param explode {Boolean} whether the particles should burst out at once (true), or at the frequency given (false)
 * @param lifespan {Number} how long each particle lives once emitted
 * @param frequency {Number} the interval between the release of each particle
 * @param quantity {Number} how many particles to emit before turning off
 * @returns {}
 * ```javascript
 * emitter.start(explode, lifespan, frequncy, quantity);
 * ```
 * @block
 */
Blockly.JavaScript['emitters_start_vi'] = function (block) {
  const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const explode = block.getFieldValue('EXPLODE') == 'TRUE';
  const lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || '250';
  const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${emitter}.start(${explode}, ${lifespan}, ${frequency}, ${quantity});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_emit_from'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_cord = block.getFieldValue('cord');
  const value_emit_loc = Blockly.JavaScript.valueToCode(block, 'emit_loc', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.emit${dropdown_cord} = ${value_emit_loc};\n`;
};
//endregion EMITTERS

//region DEBUG
/**
 * Renders a geometry object.
 * @method debug_geom
 * @param object object to render
 * @param colour colour to render the object with
 * @param filled {Boolean} whether or not to leave the object filled or stroked
 * @returns {}
 * ```javascript
 * game.debug.geom(object, colour, filled);
 * ```
 * @block
 */
Blockly.JavaScript['debug_geom'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const filled = block.getFieldValue('FILLED') == 'TRUE';

  return `game.debug.geom(${object}, ${colour}, ${filled});\n`;
};

/**
 * Display all information about the sprite object and it's properties.
 * @method debug_sprite
 * @param object object to display information about
 * @param x {Number} x coordiante to display the information at
 * @param y {Number} y coordinate to display the information at
 * @returns {}
 * ```javascript
 * game.debug.spriteInfo(object, x, y);
 * ```
 * @block
 */
Blockly.JavaScript['debug_sprite'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X_VAL', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y_VAL', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${object}, ${x}, ${y});\n`;
};

/*Blockly.JavaScript['debug_body_info'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.bodyInfo(${object},${0},${20});\n`;
};* ```
 * @block
 */
/**
 *
 * @method Display all information about the object's physics body.
 * @param object object to display body information of
 * @param x {Number} x coordiante to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.bodyInfo(object, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_body_info'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.bodyInfo(${object}, ${x}, ${y}, ${colour});\n`;
};

/**
 * Makes the physics body for the object visible.
 * @method debug_body_render
 * @param object object to display the body of
 * @param colour colour to display the body with
 * @param filled {Boolean} whether or not the body should display as stroked or filled
 * @returns {}
 * ```javascript
 * game.debug.body(object, colour, filled);
 * ```
 * @block
 */
Blockly.JavaScript['debug_body_render'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  const filled = block.getFieldValue('FILLED') == 'TRUE';

  return `game.debug.body(${object}, ${colour}, ${filled});\n`;
};

/**
 * Makes the game camera target and deadzone visible.
 * @method debug_camera
 * @param camera camera to display properties of
 * @param colour colour to display the properties with
 * @returns {}
 * ```javascript
 * game.debug.camera(camera, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_camera'] = function (block) {
  const camera = Blockly.JavaScript.valueToCode(block, 'CAMERA', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.camera(${camera},${colour});\n`;
};

/**
 * Displays information about the camera at the given location.
 * @method debug_camera_info
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.cameraInfo(game.camera, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_camera_info'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.cameraInfo(${`game.camera`}, ${x}, ${y}, ${colour});\n`;
};

/**
 * Display information about the mouse at the given location.
 * @method debug_input_info
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.inputInfo(x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_input_info'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.inputInfo(${x}, ${y}, ${colour});\n`;
};

/**
 * Display information about the key at the given location.
 * @method debug_key
 * @param dropdown_key key to display information of
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.key(game.input.keyboard.addKey(Phaser.Keyboard.dropdown_key), x, y);
 * ```
 * @block
 */
Blockly.JavaScript['debug_key'] = function (block) {
  const dropdown_key = block.getFieldValue('KEY');
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.key(game.input.keyboard.addKey(Phaser.Keyboard.${dropdown_key}), ${x}, ${y});\n`;//, ${colour});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['debug_physics_group'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const check_exists = block.getFieldValue('CHECK_EXISTS') == 'TRUE';
  //return `${group}.destroy(${check_exists});\n`;
  return `game.debug.physicsGroup(${group});\n`;//, ${"'#73ff5c'"}, ${true}, ${check_exists});\n`;
};

/**
 * Display a rectangle with the given properties.
 * @method debug_rectangle
 * @param rect rectangle to display
 * @param colour colour to display the rectangle with
 * @returns {}
 * ```javascript
 * game.debug.rectangle(rect, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_rectangle'] = function (block) {
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.rectangle(${rect},${colour});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['debug_sound'] = function (block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.sound(${x_pos}, ${y_pos}, ${colour});\n`;
};

/**
 * Display information about the sound at the given location.
 * @method debug_sound_info
 * @param sound sound to display information of
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.soundInfo(sound, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_sound_info'] = function (block) {
  const sound = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.soundInfo(${sound}, ${x}, ${y}, ${colour});\n`;
};

/**
 * Display the sprite object's coordinates at the given location.
 * @method debug_sprite_coords
 * @param sprite sprite to display the coordinates of
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @parm colour colour to display the coordinates with
 * @returns {}
 * ```javascript
 * game.debug.spriteCoords(sprite, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_sprite_coords'] = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteCoords(${sprite}, ${x}, ${y}, ${colour});\n`;
};

/**
 * Display information about the sprite object at the given location.
 * @method debug_sprite_info
 * @param sprite sprite to display information of
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @parm colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.spriteInfo(sprite, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_sprite_info'] = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${sprite}, ${x}, ${y}, ${colour});\n`;
};

/**
 * Display the text at the given location.
 * @method debug_text
 * @param text text to display
 * @param x {Number} x coordinate to display the information at
 * @param y {Number} y coordinate to display the information at
 * @param colour colour to display the information with
 * @returns {}
 * ```javascript
 * game.debug.text(text, x, y, colour);
 * ```
 * @block
 */
Blockly.JavaScript['debug_text'] = function (block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.text(${text}, ${x}, ${y}, ${colour});\n`;
};
//endregion

//region STATES
/**
 * Adds a state to the game with the given name and key.
 * @method statemanager_add_state
 * @param name {String} name of the new state
 * @param key tag to use for the state
 * @returns {}
 * ```javascript
 * game.state.add(key, name);
 * ```
 * @block
 */
Blockly.JavaScript['statemanager_add_state'] = function (block) {
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  const key = block.getFieldValue('KEY');

  return `game.state.add('${key}', ${name});\n`;
};

/**
 * Start the state with the given tag.
 * @method statemanager_start_state
 * @param tag tag of the state to start
 * @returns {}
 * ```javascript
 * game.start.state(tag);
 * ```
 * @block
 */
Blockly.JavaScript['statemanager_start_state'] = function (block) {
  const tag = block.getFieldValue('TAG');

  return `game.state.start('${tag}');\n`;
};

/**
 * Returns the state that is currently running.
 * @method statemanager_get_current_state
 * @returns {}
 * ```javascript
 * game.state.getCurrentState()
 * ```
 * @block
 */
Blockly.JavaScript['statemanager_get_current_state'] = function (block) {
  return [`game.state.getCurrentState()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Restarts the current state.
 * @method statemanager_restart_state
 * @returns {}
 * ```javascript
 * game.state.restart();
 * ```
 * @block
 */
Blockly.JavaScript['statemanager_restart_state'] = function (block) {
  return `game.state.restart();\n`;
};

/**
 * Returns true or false if the state with the given tag is valid.
 * @method statemanager_check_state
 * @param key {String} tag of the state to check
 * @returns {}
 * ```javascript
 * game.state.checkState(key)
 * ```
 * @block
 */
Blockly.JavaScript['statemanager_check_state'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.state.checkState(${key})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region GEOMETRY
//region RECTANGLE
/**
 * Creates a rectangle with the given properties.
 * @method rectangle_create
 * @param x {Number} x coordinate for the new rectangle
 * @param y {Number} y coordinate for the new rectangle
 * @param width {Number} width of the rectangle
 * @param height {Number} height of the rectangle
 * @returns {}
 * ```javascript
 * new Phaser.Rectangle(x, y, width, height)
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Rectangle(${x}, ${y}, ${width}, ${height})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the two rectangles intersect.
 * @method rectangle_intersects
 * @param rectA first rectangle to check
 * @param rectB second rectangle to check
 * @returns {}
 * ```javascript
 * Phaser.Rectangle.intersects(rectA, rectB)
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_intersects'] = function (block) {
  const rectA = Blockly.JavaScript.valueToCode(block, 'RECT_A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const rectB = Blockly.JavaScript.valueToCode(block, 'RECT_B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Rectangle.intersects(${rectA}, ${rectB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the chosen numeric field value of the rectangle.
 * @method rectangle_get_numeric_field
 * @param object object to get values from
 * @param field the field to get values of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
/**
 * Returns the chosen point field value of the rectangle.
 * @method rectangle_get_point_field
 * @param object object to get values from
 * @param field the field to get values of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_get_numeric_field']
  = Blockly.JavaScript['rectangle_get_point_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Assign the chosen numeric field of the rectangle.
 * @method rectangle_set_numeric_field
 * @param object object to set the value for
 * @param field the field to set
 * @param value {Number} value to set the field to
 * @returns {}
 * ```javascript
 * object.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_set_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return `${object}.${field} = ${value};\n`;
};

/**
 * Assign the chosen point field of the rectangle.
 * @method rectangle_set_point_field
 * @param object object to set the point for
 * @param field the field to set
 * @param point point to set the field to
 * @returns {}
 * ```javascript
 * object.field.copyFrom(point);
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_set_point_field'] = setPointField;

/**
 * Returns true/false if the rectangle contains the point.
 * @method rectangle_contains_point
 * @param rectangle rectangle to check
 * @param point point to check
 * @returns {}
 * ```javascript
 * Phaser.Rectangle.containsPoint(rectangle, point)
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_contains_point'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.containsPoint(${rectangle}, ${point})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the rectangle contains the given coordinates.
 * @method rectangle_contains
 * @param rectangle rectangle to check
 * @param x {Number} x coordinate to check
 * @param y {Number} y coordinate to check
 * @returns {}
 * ```javascript
 * Phaser.Rectangle.contains(rectangle, x, y)
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_contains'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.contains(${rectangle}, ${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
/**
 * Returns true/false if one rectangle is fulling contained within another.
 * @method rectangle_contains_rect
 * @param rectangle_a the first rectangle to check
 * @param rectangle_b the second rectangle to check
 * @returns {}
 * ```javascript
 * Phaser.Rectangle.containsRect(rectangle_a, rectangle_b)
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_contains_rect'] = function (block) {
  const rectangle_a = Blockly.JavaScript.valueToCode(block, 'RECTANGLE_A', Blockly.JavaScript.ORDER_ATOMIC);
  const rectangle_b = Blockly.JavaScript.valueToCode(block, 'RECTANGLE_B', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Rectangle.containsRect(${rectangle_a}, ${rectangle_b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a new rectangle with the same x, y, width, and height properties of the original.
 * @method rectangle_clone
 * @param rectangle rectangle to clone
 * @returns {}
 * ```javascript
 * rectangle.clone()
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_clone'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
//  return [`Phaser.Rectangle.clone(${rectangle})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return [`${rectangle}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a random x/y coordinate point from the rectangle.
 * @method rectangle_random
 * @param rectangle rectangle to get values from
 * @returns {}
 * ```javascript
 * rectangle.random()
 * ```
 * @block
 */
Blockly.JavaScript['rectangle_random'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${rectangle}.random()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
//region POINT
/**
 * Returns a point from the given x/y values.
 * @method point_create
 * @param x {Number} x value for the point
 * @param y {Number} y value for the point
 * @returns {}
 * ```javascript
 * new Phaser.Point(x, y)
 * ```
 * @block
 */
Blockly.JavaScript['point_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Point(${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the x or y value of the point.
 * @method point_get_element
 * @param element which value to return
 * @param point point to get the value from
 * @returns {}
 * ```javascript
 * point.element
 * ```
 * @block
 */
Blockly.JavaScript['point_get_element'] = function (block) {
  const element = block.getFieldValue('ELEMENT');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Assigns the x or y value of the point to a number.
 * @method point_set_element
 * @param element which value to set
 * @param point point to set the value for
 * @param value {Number} value to set the element to
 * @returns {}
 * ```javascript
 * point.element = value;
 * ```
 * @block
 */
Blockly.JavaScript['point_set_element'] = function (block) {
  const element = block.getFieldValue('ELEMENT');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.${element} = ${value};\n`;
};

/**
 * Sets the magnitude of the point to a number.
 * @method point_set_magnitude
 * @param point point to set the magnitude for
 * @param value {Number} value to set the magnitude to
 * @returns {}
 * ```javascript
 * point.setMagnitude(value);
 * ```
 * @block
 */
Blockly.JavaScript['point_set_magnitude'] = function (block) {
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setMagnitude(${value});\n`;
};

/**
 * Adds the coordinates of two points and returns a new point with the result.
 * @method points_add
 * @param pointA first point to add
 * @param pointB second point to add
 * @returns {}
 * ```javascript
 * Phaser.Point.add(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_add'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.add(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Subtracts the coordinates of two points and returns a new point with the result.
 * @method points_subtract
 * @param pointA first point to subtract
 * @param pointB second point to subtract
 * @returns {}
 * ```javascript
 * Phaser.Point.subtract(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_subtract'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.subtract(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Calculates the angle between two points and returns the result.
 * @method points_angle_between
 * @param pointA first angle to calculate
 * @param pointB second angle to calculate
 * @returns {}
 * ```javascript
 * Phaser.Point.angle(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_angle_between'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.angle(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Calculates the distance between two points and returns the result.
 * @method points_distance
 * @param pointA first angle to calculate
 * @param pointB second angle to calculate
 * @returns {}
 * ```javascript
 * Phaser.Point.distance(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_distance'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.distance(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Divides the coordinates of two points and returns a new point with the result.
 * @method points_divide
 * @param pointA first point to divide
 * @param pointB second point to divide
 * @returns {}
 * ```javascript
 * Phaser.Point.divide(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_divide'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.divide(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if one point has the same x/y values as another.
 * @method points_equals
 * @param pointA first point to check
 * @param pointB second point to check
 * @returns {}
 * ```javascript
 * Phaser.Point.equals(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_equals'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.equals(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Interpolates the two points based on the percent value between 0 and 1.
 * @method points_interpolate
 * @param pointA first point
 * @param pointB second point
 * @param f {Number} the level of interpolation between the two points
 * @returns {}
 * ```javascript
 * Phaser.Point.interpolate(pointA, pointB, f)
 * ```
 * @block
 */
Blockly.JavaScript['points_interpolate'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  const f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.interpolate(${pointA}, ${pointB}, ${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Multiplies the coordinates of two points and returns a new point with the result.
 * @method points_multiply
 * @param pointA first point to multiply
 * @param pointB second point to multiply
 * @returns {}
 * ```javascript
 * Phaser.Point.multiply(pointA, pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_multiply'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.multiply(${pointA}, ${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Creates a new point with negative values of the original point.
 * @method points_negate
 * @param pointA point to get the values from
 * @returns {}
 * ```javascript
 * Phaser.Point.negative(pointA)
 * ```
 * @block
 */
Blockly.JavaScript['points_negate'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.negative(${pointA})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a new point of the normalized values of the original.
 * @method points_normalize
 * @param pointA point to normalize
 * @returns {}
 * ```javascript
 * Phaser.Point.normalize(pointA)
 * ```
 * @block
 */
Blockly.JavaScript['points_normalize'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.normalize(${pointA})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a new point with the perpendicular vector to the original point.
 * @method points_perpendicular
 * @param pointA point to get the vector from
 * @returns {}
 * ```javascript
 * Phaser.Point.perp(pointA)
 * ```
 * @block
 */
Blockly.JavaScript['points_perpendicular'] = function (block) {
  const pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.perp(${pointA})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a new point with the centroid of the list of points.
 * @method points_centroid
 * @param array {Array} list of points to calculate the centroid from
 * @returns {}
 * ```javascript
 * Phaser.Point.centroid(array)
 * ```
 * @block
 */
Blockly.JavaScript['points_centroid'] = function (block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.centroid(${array})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Clamps the point object values to be between the given minimum and maximum.
 * @method points_clamp
 * @param point point to clamp
 * @param min {Number} the minimum value to clamp the point to
 * @param max {Number} the maximum value to clamp the point to
 * @returns {}
 * ```javascript
 * point.clamp(min, max);
 * ```
 * @block
 */
Blockly.JavaScript['points_clamp'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clamp(${min}, ${max});\n`;
};

/**
 * Clamp the point object x value to be between the given minimum and maximum.
 * @method points_clamp_x
 * @param point point to clamp
 * @param min {Number} the minimum value to clamp the value to
 * @param max {Number} the maximum value to lcmap the value to
 * @returns {}
 * ```javascript
 * point.clampX(min, max);
 * ```
 * @block
 */
Blockly.JavaScript['points_clamp_x'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampX(${min}, ${max});\n`;
};

/**
 * Clamp the point object y value to be between the given minimum and maximum.
 * @method points_clamp_y
 * @param point point to clamp
 * @param min {Number} the minimum value to clamp the value to
 * @param max {Number} the maximum value to lcmap the value to
 * @returns {}
 * ```javascript
 * point.clampY(min, max);
 * ```
 * @block
 */
Blockly.JavaScript['points_clamp_y'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampY(${min}, ${max});\n`;
};

/**
 * Returns a new point with the same properties as the original point.
 * @method points_clone
 * @param point point to clone
 * @returns {}
 * ```javascript
 * point.clone()
 * ```
 * @block
 */
Blockly.JavaScript['points_clone'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Copies values from one point to another, overwriting the original values.
 * @method points_copy_from
 * @param source point to get the values from
 * @param target point to copy the values to
 * @returns {}
 * ```javascript
 * target.copyFrom(source);
 * ```
 * @block
 */
Blockly.JavaScript['points_copy_from'] = function (block) {
  var source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  var target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  return `${target}.copyFrom(${source});\n`;
};

/**
 * Calculates the cross product of two points and returns the result.
 * @method points_cross
 * @param pointA left-hand side
 * @param pointB right-hand side
 * @returns {}
 * ```javascript
 * pointA.cross(pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_cross'] = function (block) {
  var pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${pointA}.cross(${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Calculates the dot product of two points and returns the result.
 * @method points_dot
 * @param pointA left-hand side
 * @param pointB right-hand side
 * @returns {}
 * ```javascript
 * pointA.dot(pointB)
 * ```
 * @block
 */
Blockly.JavaScript['points_dot'] = function (block) {
  var pointA = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var pointB = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${pointA}.dot(${pointB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Adds the given x and y values to the point.
 * @method points_add_member
 * @param point point to add values to
 * @param x {Number} x value to add to the point
 * @param y {Number} y value to add to the point
 * @returns {}
 * ```javascript
 * point.add(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['points_add_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.add(${x}, ${y});\n`;
};

/**
 * Subtracts the given x and y values from the point.
 * @method points_subtract_member
 * @param point point to subtract values from
 * @param x {Number} x value to subtract from the point
 * @param y {Number} y value to subtract from the point
 * @returns {}
 * ```javascript
 * point.subtract(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['points_subtract_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.subtract(${x}, ${y});\n`;
};

/**
 * Divides the point values by the given x and y values.
 * @method points_divide_member
 * @param point point to divide
 * @param x {Number} x value to divide the point by
 * @param y {Number} y value to divide the point by
 * @returns {}
 * ```javascript
 * point.divide(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['points_divide_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.divide(${x}, ${y});\n`;
};

/**
 * Multiplies the point values by the given x and y values.
 * @method points_multiply_member
 * @param point point to multiply
 * @param x {Number} x value to multiply the point by
 * @param y {Number} y value to multiply the point by
 * @returns {}
 * ```javascript
 * point.multiply(x, y);
 * ```
 * @block
 */
Blockly.JavaScript['points_multiply_member'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.multiply(${x}, ${y});\n`;
};

/**
 * Applies Math.ceil() to the x and y values of the point.
 * @method points_ceil
 * @param point point to change the values of
 * @returns {}
 * ```javascript
 * point.ceil();
 * ```
 * @block
 */
Blockly.JavaScript['points_ceil'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.ceil();\n`;
};

/**
 * Applies Math.floor() to the x and y values of the point.
 * @method points_floor
 * @param point point to change the values of
 * @returns {}
 * ```javascript
 * point.floor();
 * ```
 * @block
 */
Blockly.JavaScript['points_floor'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.floor();\n`;
};

/**
 * Returns the length of the point object.
 * @method points_get_magnitude
 * @param point point to get the magnitude of
 * @returns {}
 * ```javascript
 * point.getMagnitude()
 * ```
 * @block
 */
Blockly.JavaScript['points_get_magnitude'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitude()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the length squared of the point object.
 * @method points_get_magnitude_squared
 * @param point point to get the magnitude squared of
 * @returns {}
 * ```javascript
 * point.getMagnitudeSq()
 * ```
 * @block
 */
Blockly.JavaScript['points_get_magnitude_squared'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitudeSq()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Inverts the x and y values of the point.
 * @method points_invert
 * @param point point to invert
 * @returns {}
 * ```javascript
 * point.invert();
 * ```
 * @block
 */
Blockly.JavaScript['points_invert'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.invert();\n`;
};

/**
 * Returns true/false if the point has the values 0,0.
 * @method points_is_zero
 * @param point point to check
 * @returns {}
 * ```javascript
 * point.isZero()
 * ```
 * @block
 */
Blockly.JavaScript['points_is_zero'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.isZero()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Alters the point so it's magnitude is no more than the given maximum value.
 * @method points_limit
 * @param point point to change
 * @param max {Number} the value to set the maximum to
 * @returns {}
 * ```javascript
 * point.limit(max);
 * ```
 * @block
 */
Blockly.JavaScript['points_limit'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.limit(${max});\n`;
};

/**
 * Sets the x and y values of hte point based on the given polar coordinate.
 * @method points_set_to_polar
 * @param point point to change the values of
 * @param degrees {Number} degrees of the polar coordinate
 * @param radius {Number} radius of the polar coordinate
 * @returns {}
 * ```javascript
 * point.setToPolar(degrees, radius, true);
 * ```
 * @block
 */
Blockly.JavaScript['points_set_to_polar'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setToPolar(${degrees}, ${radius}, true);\n`;
};
//endregion
//region CIRCLE
/**
 * Returns a circle with the given properties.
 * @method circle_create
 * @param x {Number} x coordinate to create the circle at
 * @param y {Number} y coordinate to create the circle at
 * @param diameter {Number} diameter of the circle
 * @returns {}
 * ```javascript
 * new Phaser.Circle(x, y, diameter)
 * ```
 * @block
 */
Blockly.JavaScript['circle_create'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  return [`new Phaser.Circle(${x}, ${y}, ${diameter})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the chosen numeric field value of the circle.
 * @method circle_get_numeric_field
 * @param object object to get values from
 * @param field the field to get values of
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['circle_get_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Assign the chosen numeric field of the circle.
 * @method circle_set_numeric_field
 * @param object object to set the value for
 * @param field the field to set
 * @param value {Number} value to set the field to
 * @returns {}
 * ```javascript
 * object.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['circle_set_numeric_field'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return `${object}.${field} = ${value};\n`;
};

/**
 * Returns true/false if the two circle objects intersect, determined by the radius distances between the two.
 * @method circle_intersects
 * @param circle_a first circle to check
 * @param circle_b second circle to check
 * @returns {}
 * ```javascript
 * Phaser.Circle.intersects(circle_a, circle_b)
 * ```
 * @block
 */
Blockly.JavaScript['circle_intersects'] = function (block) {
  const circle_a = Blockly.JavaScript.valueToCode(block, 'CIRCLE_A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const circle_b = Blockly.JavaScript.valueToCode(block, 'CIRCLE_B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Circle.intersects(${circle_a}, ${circle_b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the circle and rectangle objects intersect.
 * @method circle_intersects_rectangle
 * @param circle circle to check
 * @param rectangle rectangle to check
 * @returns {}
 * ```javascript
 * Phaser.Circle.intersectsRectangle(circle, rectangle)
 * ```
 * @block
 */
Blockly.JavaScript['circle_intersects_rectangle'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Circle.intersectsRectangle(${circle}, ${rectangle})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a new circle object with the same properties as the original.
 * @method circle_clone
 * @param circle circle to clone
 * @returns {}
 * ```javascript
 * circle.clone()
 * ```
 * @block
 */
Blockly.JavaScript['circle_clone'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the given x/y coordinate can be found within the circle.
 * @method circle_contains
 * @param circle circle to check
 * @param x {Number} the x value to check
 * @param y {Number} the y value to check
 * @returns {}
 * ```javascript
 * circle.contains(x, y)
 * ```
 * @block
 */
Blockly.JavaScript['circle_contains'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.contains(${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a point containing random values of x and y found within the circle.
 * @method cirlce_random
 * @param circle circle to get values from
 * @returns {}
 * ```javascript
 * circle.random()
 * ```
 * @block
 */
Blockly.JavaScript['circle_random'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.random()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns the circumference of the circle.
 * @method circle_circumference
 * @param circle circle to get circumference of
 * @returns {}
 * ```javascript
 * circle.circumference()
 * ```
 * @block
 */
Blockly.JavaScript['circle_circumference'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.circumference()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns a point containing the coordinates of the point on the circumference of the circle based on the given angle.
 * @method circle_circumference_point
 * @param circle circle to get values from
 * @param degrees {Number} angle to get the point at
 * @returns {}
 * ```javascript
 * circle_circumference_point
 * ```
 * @block
 */
Blockly.JavaScript['circle_circumference_point'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.circumferencePoint(${degrees}, true)`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
//endregion

//region SOUND
/**
 * Creates a sound with the given tag by loading it into the audio queue.
 * @method load_sound
 * @param tag {String} tag to name the sound
 * @param source {String} file path of the sound
 * @returns {}
 * ```javascript
 * game.load.audio(tag, source);
 * ```
 * @block
 */
Blockly.JavaScript['load_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.load.audio(${tag}, ${source});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['play_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const looping = block.getFieldValue('LOOPING') == 'TRUE';
  return `game.sound.play(${tag}, ${volume}, ${looping});\n`;
};

/**
 * Returns a new sound object.
 * @method add_sound
 * @param tag {String} the tag of the sound to add
 * @param volume {Number} volume to play the sound at
 * @param looping {Boolean} whether or not to loop the sound when it's played
 * @returns {}
 * ```javascript
 * game.add.audio(tag, volume, looping)
 * ```
 * @block
 */
Blockly.JavaScript['add_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const looping = block.getFieldValue('LOOPING') == 'TRUE';
  return [`game.add.audio(${tag}, ${volume}, ${looping})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['remove_sound'] = function (block) {
  const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.sound.removeByKey(${tag});\n`;
};

/**
 * Stop, pause, or remove all sounds in the game.
 * @method stop_pause_resume_sounds
 * @param option which option to do
 * @returns {}
 * ```javascript
 * game.sound.optionAll();
 * ```
 * @block
 */
Blockly.JavaScript['stop_pause_resume_sounds'] = function (block) {
  const option = block.getFieldValue('OPTION');
  return `game.sound.${option}All();\n`;
};

/**
 * Assigns the chosen boolean field for the sound.
 * @method set_sound_boolean_member
 * @param element the field to set
 * @param object sound to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.element = value;
 * ```
 * @block
 */
/**
 * Assigns the chosen numeric field for the sound.
 * @method set_sound_numeric_member
 * @param element the field to set
 * @param object sound to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * object.element = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_sound_boolean_member'] = Blockly.JavaScript['set_sound_numeric_member'] = setMember;

/**
 * Returns the chosen boolean field value of the sound.
 * @method get_sound_boolean_member
 * @param object object to get values from
 * @param element the element to get values of
 * @returns {}
 * ```javascript
 * object.element
 * ```
 * @block
 */
/**
 * Returns the chosen numeric field value of the sound.
 * @method get_sound_numeric_member
 * @param object object to get values from
 * @param element the element to get values of
 * @returns {}
 * ```javascript
 * object.element
 * ```
 * @block
 */
/**
 * Returns the chosen string field value of the sound.
 * @method get_sound_string_member
 * @param object object to get values from
 * @param element the element to get values of
 * @returns {}
 * ```javascript
 * object.element
 * ```
 * @block
 */
Blockly.JavaScript['get_sound_boolean_member'] = Blockly.JavaScript['get_sound_numeric_member'] = Blockly.JavaScript['get_sound_string_member'] = getMember;

/**
 * Starts playing the sound at a volume of 0, and reaches the maximum volume for the sound over the given time, with the option to loop.
 * @method sound_fade_in
 * @param sound_object sound to play
 * @param duration {Number} the time it takes for the sound to reach maximum volume
 * @param loop {Boolean} whether or not the sound should loop
 * @returns {}
 * ```javascript
 * sound_object.fadeIn(duration, loop);
 * ```
 * @block
 */
Blockly.JavaScript['sound_fade_in'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const loop = block.getFieldValue('LOOP') == 'TRUE';
  return `${sound_object}.fadeIn(${duration}, ${loop});\n`;
};

/**
 * Makes the sound go from it's current volume to a volume of 0 over the given time.
 * @method sound_fade_out
 * @param sound_object sound to stop
 * @param duration {Number} the time it takes for the sound to reach 0
 * @returns {}
 * ```javascript
 * sound_object.fadeOut(duration);
 * ```
 * @block
 */
Blockly.JavaScript['sound_fade_out'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return `${sound_object}.fadeOut(${duration});\n`;
};

/**
 * Makes the sound go from it's current volume to the given volume over the given time.
 * @method sound_fade_to
 * @param sound_object sound to change
 * @param duration {Number} the time it takes for the sound to reach the new volume
 * @param volume {Number} the volume to change the sound to
 * @returns {}
 * ```javascript
 * sound_object.fadeTo(duration, volume);
 * ```
 * @block
 */
Blockly.JavaScript['sound_fade_to'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  return `${sound_object}.fadeTo(${duration}, ${volume});\n`;
};

/**
 * Loops the entire sound at the given volume.
 * @method sound_loop_full
 * @param sound_object sound to loop
 * @param volume {Number} volume to play the sound at
 * @returns {}
 * ```javascript
 * sound_object.loopFull(volume);
 * ```
 * @block
 */
Blockly.JavaScript['sound_loop_full'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  return `${sound_object}.loopFull(${volume});\n`;
};

/**
 * Stop the sound playing.
 * @method sound_stop
 * @param sound_object sound to stop
 * @returns {}
 * ```javascript
 * sound_object.stop();
 * ```
 * @block
 */
Blockly.JavaScript['sound_stop'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${sound_object}.stop();\n`;
};

/**
 * Pause the sound.
 * @method sound_pause
 * @param sound_object sound to pause
 * @returns {}
 * ```javascript
 * sound_object.pause();
 * ```
 * @block
 */
Blockly.JavaScript['sound_pause'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${sound_object}.pause();\n`;
};

/**
 * Resume the sound.
 * @method sound_resume
 * @param sound_object sound to resume
 * @returns {}
 * ```javascript
 * sound_object.resume();
 * ```
 * @block
 */
Blockly.JavaScript['sound_resume'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return `${sound_object}.resume();\n`;
};

/**
 * Play the sound with the given properties.
 * @method sound_play
 * @param sound_object sound to play
 * @param position {Number} position to play the sound from
 * @param volume {Number} volume to play the sound at
 * @param loop {Boolean} whether or not the sound should loop
 * @param restart {Boolean} option to force the sound to restart from the beginning
 * @returns {}
 * ```javascript
 * sound_object.play('', position, volume, loop, restart);
 * ```
 * @block
 */
Blockly.JavaScript['sound_play'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const loop = block.getFieldValue('LOOP') == 'TRUE';
  const restart = block.getFieldValue('RESTART') == 'TRUE';

  return `${sound_object}.play('', ${position}, ${volume}, ${loop}, ${restart});\n`;
};

/**
 * Restarts the sound with the given properties.
 * @method sound_restart
 * @param sound_object sound to restart
 * @param position {Number} the starting position to play the sound from
 * @param volume {Number} the volume to play the sound at
 * @param loop {Boolean} whether or not the sound should loop
 * @returns {}
 * ```javascript
 * sound_object.play('', position, volume loop);
 * ```
 * @block
 */
Blockly.JavaScript['sound_restart'] = function (block) {
  const sound_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
  const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  const loop = block.getFieldValue('LOOP') == 'TRUE';

  return `${sound_object}.play('', ${position}, ${volume}, ${loop});\n`;
};
//endregion

//region CAMERA
/**
 * Returns the game camera.
 * @method game_camera
 * @returns {}
 * ```javascript
 * game.camera
 * ```
 * @block
 */
Blockly.JavaScript['game_camera'] = function () {
  return ['game.camera', Blockly.JavaScript.ORDER_NONE];
};

/**
 * Fades the screen to the colour over the given amount of time.
 * @method camera_fade
 * @param colour colour to fade the screen to
 * @param time {Number} how long to take to fade
 * @returns {}
 * ```javascript
 * function toHexColor(color) { return color.replace("#", "0x"); } game.camera.fade(toHexColorFunc(colour), time, true);
 * ```
 * @block
 */
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

/**
 * Fills the game with the colour specified, then fades the colour away over the given amount of time.
 * @method camera_flash
 * @param colour colour to show
 * @param time {Number} how long to take to fade the colour away
 * @returns {}
 * ```javascript
 * function toHexColor(color) { return color.replace("#", "0x"); } game.camera.flash(toHexColorFunc(colour), time, true);
 * ```
 * @block
 */
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

/**
 * Focus the camera on the given object.
 * @method camera_focus_on
 * @param object object to focus on
 * @returns {}
 * ```javascript
 * game.camera.focusOn(object);
 * ```
 * @block
 */
Blockly.JavaScript['camera_focus_on'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.focusOn(${object});\n`;
};

/**
 * Focus the camera on the given location.
 * @method camera_focus_on_xy
 * @param posX {Number} x position to focus on
 * @param posY {Number} y position to focus on
 * @returns {}
 * ```javascript
 * game.camera.focusOnXY(posX, posY);
 * ```
 * @block
 */
Blockly.JavaScript['camera_focus_on_xy'] = function (block) {
  const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
  const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.focusOnXY(${posX}, ${posY});\n`;
};

/**
 * Resets the camera by making it focus back to 0,0 and unfollowing all objects. Also resets any camera effects.
 * @method camera_reset
 * @returns {}
 * ```javascript
 * game.camera.reset();
 * ```
 * @block
 */
Blockly.JavaScript['camera_reset'] = function (block) {
  return `game.camera.reset();\n`;
};

/**
 * Resets any active camera effects.
 * @method camera_reset_fx
 * @return {} game.camera.resetFX();
 * ```
 * @block
 */
Blockly.JavaScript['camera_reset_fx'] = function (block) {
  return `game.camera.resetFX();\n`;
};

/**
 * Updates the camera bounds to match the game world bounds.
 * @method camera_set_bounds_to_world
 * @returns {}
 * ```javascript
 * game.camera.setBoundsToWorld();
 * ```
 * @block
 */
Blockly.JavaScript['camera_set_bounds_to_world'] = function (block) {
  return `game.camera.setBoundsToWorld();\n`;
};

/**
 * Sets the game camera position.
 * @method camera_set_position
 * @param posX {Number} x position for the camera
 * @param posY {Number} y position for the camera
 * @returns {}
 * ```javascript
 * game.camera.setPosition(posX, posY);
 * ```
 * @block
 */
Blockly.JavaScript['camera_set_position'] = function (block) {
  const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
  const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.setPosition(${posX}, ${posY});\n`;
};

/**
 * Sets the size of the camera viewing rectangle.
 * @method camera_set_size
 * @param width {Number} the width of the camera view port
 * @param height {Number} the height of the camera view port
 * @returns {}
 * ```javascript
 * game.camera.setSize(width, height);
 * ```
 * @block
 */
Blockly.JavaScript['camera_set_size'] = function (block) {
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.setSize(${width}, ${height});\n`;
};

/**
 * Creates a camera shake effect by moving the camera randomly at the given intensity for the given amount of time.
 * @method camera_shake
 * @param intensity {Number} how much the camera should move while shaking
 * @param direction which direction the camera should shake
 * @param duration {Number} how long the camera should shake
 * @returns {}
 * ```javascript
 * game.camera.shake(intensity, duration, true, Phaser.Camera.direction);
 * ```
 * @block
 */
Blockly.JavaScript['camera_shake'] = function (block) {
  const intensity = Blockly.JavaScript.valueToCode(block, 'INTENSITY', Blockly.JavaScript.ORDER_ATOMIC);
  const direction = block.getFieldValue('DIRECTION');
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.camera.shake(${intensity}, ${duration}, true, Phaser.Camera.${direction});\n`;
};

/**
 * Stops the camera from following all objects.
 * @method camera_unfollow
 * @returns {}
 * ```javascript
 * game.camera.unfollow();
 * ```
 * @block
 */
Blockly.JavaScript['camera_unfollow'] = function (block) {
  return `game.camera.unfollow();\n`;
};
//endregion

//region LIST.METHODS
/**
 * Finds the value in the list that is closest to the given value
 * @method list_find_closest
 * @param value {Number} the search value
 * @param array the list to search
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.findClosest(value, array)
 * ```
 * @block
 */
Blockly.JavaScript['list_find_closest'] = function (block) {
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.findClosest(${value}, ${array})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a randomly selected item from the given list.
 * @method list_get_random
 * @param array list to get the value from
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.getRandomItem(array)
 * ```
 * @block
 */
Blockly.JavaScript['list_get_random'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.getRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Creates and returns a list with every number between the given parameters.
 * @method number_list
 * @param start {Number} the minimum value the list starts with
 * @param end {Number} the maximum value the list contains
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.numberArray(start, end)
 * ```
 * @block
 */
Blockly.JavaScript['number_list'] = function (block) {
  const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
  const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.numberArray(${start}, ${end})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Creates and returns a list starting with the min value, stepping by the given value, and stopping at the max value.
 * @method number_list_step
 * @param start {Number} the minimum value the list starts with
 * @param end {Number} the maximum value the list starts with
 * @param step {Number} the value to incremement/decrement by
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.numberArrayStep(start, end, step)
 * ```
 * @block
 */
Blockly.JavaScript['number_list_step'] = function (block) {
  const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
  const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
  const step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.numberArrayStep(${start}, ${end}, ${step})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random item and removes it from the list.
 * @method list_remove_random_item
 * @param array list to get the item from
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.removeRandomItem(array)
 * ```
 * @block
 */
Blockly.JavaScript['list_remove_random_item'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.ArrayUtils.removeRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Shuffles the contents of the list by changing the positions of all items.
 * @method list_shuffle
 * @param array list to shuffle
 * @returns {}
 * ```javascript
 * Phaser.ArrayUtils.shuffle(array);
 * ```
 * @block
 */
Blockly.JavaScript['list_shuffle'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return `Phaser.ArrayUtils.shuffle(${array});\n`;
};
//endregion

//region RANDOMISATION
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['create_random_generator'] = function (block) {
  return [`new Phaser.RandomDataGenerator([new Date().getTime()])`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['create_random_generator_seeded'] = function (block) {
  const seed = Blockly.JavaScript.valueToCode(block, 'SEED', Blockly.JavaScript.ORDER_ATOMIC);
  return [`new Phaser.RandomDataGenerator(${seed})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random angle between -180 and 180.
 * @method random_angle
 * @returns {}
 * ```javascript
 * game.rnd.angle()
 * ```
 * @block
 */
Blockly.JavaScript['random_angle'] = function (block) {
  return [`game.rnd.angle()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random item from the list.
 * @method random_pick
 * @param array list to pick from
 * @returns {}
 * ```javascript
 * game.rnd.pick(array)
 * ```
 * @block
 */
Blockly.JavaScript['random_pick'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.pick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random item from the list, favoring items at the beginning.
 * @method random_pick_weighted
 * @param array list to pick from
 * @returns {}
 * ```javascript
 * game.rnd.weightedPick(array)
 * ```
 * @block
 */
Blockly.JavaScript['random_pick_weighted'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.weightedPick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random real number between 0 and 2^32.
 * @method random_real
 * @returns {}
 * ```javascript
 * game.rnd.real()
 * ```
 * @block
 */
Blockly.JavaScript['random_real'] = function (block) {
  return [`game.rnd.real()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random number between the given range, inclusive.
 * @method random_real_in_range
 * @param min {Number} the minimum value in the range
 * @param max {Number} the maximum value in the range
 * @returns {}
 * ```javascript
 * game.rnd.realInRange(min, max)
 * ```
 * @block
 */
Blockly.JavaScript['random_real_in_range'] = function (block) {
  const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.rnd.realInRange(${min}, ${max})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Returns a random sign to be used with multiplication. Returns -1 or +1.
 * @method random_sign
 * @returns {}
 * ```javascript
 * game.rnd.sign()
 * ```
 * @block
 */
Blockly.JavaScript['random_sign'] = function (block) {
  return [`game.rnd.sign()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Randomly returns true or false.
 * @method random_boolean
 * @returns {}
 * ```javascript
 * game.rnd.pick([true, false])
 * ```
 * @block
 */
Blockly.JavaScript['random_boolean'] = function () {
  return ['game.rnd.pick([true, false])', Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region MATH
/**
 * Converts the given degrees to radians and returns the result.
 * @method math_deg_to_rad
 * @param degrees {Number} the number of degrees to convert to radians.
 * @returns {}
 * ```javascript
 * game.math.degToRad(degrees)
 * ```
 * @block
 */
Blockly.JavaScript['math_deg_to_rad'] = function (block) {
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.math.degToRad(${degrees})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Converts the given radians to degrees and returns the result.
 * @method math_rad_to_deg
 * @param radians {Number} the number of radians to convert to degrees
 * @returns {}
 * ```javascript
 * game.math.radToDeg(radians)
 * ```
 * @block
 */
Blockly.JavaScript['math_rad_to_deg'] = function (block) {
  const radians = Blockly.JavaScript.valueToCode(block, 'RADIANS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.math.radToDeg(${radians})`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region TIME

/**
 * Returns the chosen numeric field value of the game timer.
 * @method get_time_numeric_member
 * @param field the value to get
 * @returns {}
 * ```javascript
 * game.time.field
 * ```
 * @block
 */
Blockly.JavaScript['get_time_numeric_member'] = function (block) {
  const field = block.getFieldValue('PROPERTY');
  return [`game.time.${field}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Assigns the chosen numeric field for the game timer.
 * @method set_time_numeric_member
 * @param field the value to set
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * game.time.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_time_numeric_member'] = function (block) {
  const field = block.getFieldValue('PROPERTY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.time.${field} = ${value};\n`;
};

/**
 * Returns the physics update delta in seconds.
 * @method delta_time_seconds
 * @returns {}
 * ```javascript
 * game.time.physicsElapsed
 * ```
 * @block
 */
Blockly.JavaScript['delta_time_seconds'] = function (block) {
  return [`game.time.physicsElapsed`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the physics update delta in milliseconds.
 * @method delta_time_milliseconds
 * @returns {}
 * ```javascript
 * game.time.physicsElapsedMS
 * ```
 * @block
 */
Blockly.JavaScript['delta_time_milliseconds'] = function (block) {
  return [`game.time.physicsElapsedMS`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TIMER
/**
 * Returns the chosen numeric field value of the timer.
 * @method get_timer_numeric_member
 * @param field the value to get
 * @param timer timer to get the values from
 * @returns {}
 * ```javascript
 * timer.field
 * ```
 * @block
 */
/**
 * Returns the chosen boolean field value of the timer.
 * @method get_timer_boolean_member
 * @param field the value to get
 * @param timer timer to get the values from
 * @returns {}
 * ```javascript
 * timer.field
 * ```
 * @block
 */
Blockly.JavaScript['get_timer_numeric_member'] =
Blockly.JavaScript['get_timer_boolean_member'] =
  function (block) {
  const field = block.getFieldValue('PROPERTY');
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${timer}.${field}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Assigns the chosen boolean field for the timer.
 * @method set_timer_boolean_member
 * @param field the value to set
 * @param timer timer to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * timer.field = value;
 * ```
 * @block
 */
/**
 * Assigns the chosen numeric field for the timer.
 * @method set_timer_numeric_member
 * @param field the value to set
 * @param timer timer to assign values for
 * @param value value to set the field to
 * @returns {}
 * ```javascript
 * timer.field = value;
 * ```
 * @block
 */
Blockly.JavaScript['set_timer_numeric_member'] =
Blockly.JavaScript['set_timer_boolean_member'] =
  function (block) {
  const field = block.getFieldValue('PROPERTY');
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.${field} = ${value};\n`;
};

/**
 * Creates and returns a new timer.
 * @method create_timer
 * @param autoDestroy {Boolean} whether or not the timer should automatically destroy when it's done
 * @returns {}
 * ```javascript
 * game.time.create(autoDestroy)
 * ```
 * @block
 */
Blockly.JavaScript['create_timer'] = function (block) {
  const autoDestroy = block.getFieldValue('AUTO_DESTROY') === 'TRUE';
  return [`game.time.create(${autoDestroy})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the chosen constant time value.
 * @method time_constants
 * @param constant which time value to return
 * @returns {}
 * ```javascript
 * constant
 * ```
 * @block
 */
Blockly.JavaScript['time_constants'] = function (block) {
  const constant = block.getFieldValue('VALUE');
  return [`${constant}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Start the chosen timer after the given amount of time.
 * @method start_timer
 * @param delay {Number} how long to wait before starting the timer
 * @param timer timer to start
 * @returns {}
 * ```javascript
 * timer.start(delay);
 * ```
 * @block
 */
Blockly.JavaScript['start_timer'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.start(${delay});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['timer_add_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.add(${delay}, ${callback});\n`;
};
/**
 * Adds an event to the timer, to be called after the given amount of time, once the timer has started running. The delay applies only after the timer has started.
 * @method timer_add_event_complex
 * @param delay {Number} the number of milliseconds before the timer function is called
 * @param callback the function to call
 * @param timer timer to add the function call event to
 * @param arguments (optional) arguments to use in the function that gets called
 * @returns {}
 * ```javascript
 * timer.add(delay, callback, undefined, arguments[if any]);
 * ```
 * @block
 */
Blockly.JavaScript['timer_add_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.add(${delay}, ${callback}, undefined, ${code});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['timer_loop_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  return `${timer}.loop(${delay}, ${callback});\n`;
};

/**
 * Adds an event to the timer, to be called continuously after the given amount of time, once the timer has started running. The delay applies only after the timer has started.
 * @method timer_loop_event_complex
 * @param delay {Number} the number of milliseconds before the timer function is called
 * @param callback the function to call
 * @param timer timer to add the function call event to
 * @param arguments (optional) arguments to use in the function that gets called
 * @returns {}
 * ```javascript
 * timer.add(delay, callback, arguments[if any]);
 * ```
 * @block
 */
Blockly.JavaScript['timer_loop_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.loop(${delay}, ${callback}, ${code});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['timer_repeat_event'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const repeatCount = Blockly.JavaScript.valueToCode(block, 'REPEAT_COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.repeat(${delay}, ${repeatCount}, ${callback});\n`;
};

/**
 * Adds an event to the timer, to be called continuously after the given amount of time for the given number of times, once the timer has started running. The delay applies only after the timer has started.
 * @method timer_loop_event_complex
 * @param delay {Number} the number of milliseconds before the timer function is called
 * @param repeatCount {Number} the number of times to call the event
 * @param callback the function to call
 * @param timer timer to add the function call event to
 * @param arguments (optional) arguments to use in the function that gets called
 * @returns {}
 * ```javascript
 * timer.add(delay, repeatCount, callback, arguments[if any]);
 * ```
 * @block
 */
Blockly.JavaScript['timer_repeat_event_complex'] = function (block) {
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const repeatCount = Blockly.JavaScript.valueToCode(block, 'REPEAT_COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');

  let code = timerComplexHelper(block);

  return `${timer}.repeat(${delay}, ${repeatCount}, ${callback}, ${code});\n`;
};

/**
 * Destroy the timer and stops any future related events from happening.
 * @method timer_destroy
 * @param timer timer to destroy
 * @returns {}
 * ```javascript
 * timer.destroy();
 * ```
 * @block
 */
Blockly.JavaScript['timer_destroy'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.destroy();\n`;
};

/**
 * Pause the timer and all future related events.
 * @method timer_pause
 * @param timer timer to pause
 * @returns {}
 * ```javascript
 * timer.pause();
 * ```
 * @block
 */
Blockly.JavaScript['timer_pause'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.pause();\n`;
};

/**
 * Resumes the timer and all future related events.
 * @method timer_resume
 * @param timer timer to resume
 * @returns {}
 * ```javascript
 * timer.resume();
 * ```
 * @block
 */
Blockly.JavaScript['timer_resume'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return `${timer}.resume();\n`;
};

/**
 * Stops the timer, with the option to clear the related events.
 * @method timer_stop
 * @param timer timer to stop
 * @param clearEvents {Boolean} option to keep or remove events related to the timer
 * @returns {}
 * ```javascript
 * timer.stop(clearEvents);
 * ```
 * @block
 */
Blockly.JavaScript['timer_stop'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const clearEvents = block.getFieldValue('CLEAR_EVENTS') === 'TRUE';
  return `${timer}.stop(${clearEvents});\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['timer_duration'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${timer}.duration`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Call the given function once the timer has completed and has no other events to call.
 * @method timer_set_on_complete_callback
 * @param timer timer to use
 * @param callback function to call
 * @returns {}
 * ```javascript
 * timer.onComplete.add(callback);
 * ```
 * @block
 */
Blockly.JavaScript['timer_set_on_complete_callback'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.onComplete.add(${callback});\n`;
};
//endregion

//region EASING
/**
 * Returns the chosen easing method in the given direction.
 * @method phaser_easing
 * @param ease easing method to return
 * @param direction direction for the easing method to use
 * @returns {}
 * ```javascript
 * Phasser.ease.direction
 * ```
 * @block
 */
Blockly.JavaScript['phaser_easing'] = function (block) {
  const ease = block.getFieldValue('EASING');
  const direction = block.getFieldValue('DIRECTION');
  return [`Phaser.${ease}.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the linear easing method.
 * @method phaser_easing_linear
 * @returns {}
 * ```javascript
 * Phaser.Easing.Linear.None
 * ```
 * @block
 */
Blockly.JavaScript['phaser_easing_linear'] = function (block) {
  return [`Phaser.Easing.Linear.None`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TWEEN
/**
 * Creates and returns a tween with the given properties. It will start at the current value and tween to the destination value.
 * @method phaser_game_add_tween_to
 * @param target the object to add the tween to
 * @param duration {Number} duration of the tween
 * @param ease the easing function to use on the tween
 * @param autostart {Boolean} option to automatically start the tween instead of manually calling tween.start()
 * @param delay {Number} delay before the tween will start, in milliseconds
 * @param repeat {Number} how many times the tween should repeat. Set to -1 to run forever
 * @param yoyo {Boolean} option for the tween to reverse itself and play backwards
 * @param properties (optional) optional properties to add to the tween
 * @returns {}
 * ```javascript
 * game.add.tween(target).to(properties[if used], duration, ease, autostart, delay, repeat, yoyo)
 * ```
 * @block
 */
Blockly.JavaScript['phaser_game_add_tween_to'] = function (block) {
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

/**
 * Creates and returns a tween with the given properties. It will set the target to the destination value and tween to it's current value.
 * @method phaser_game_add_tween_from
 * @param target the object to add the tween to
 * @param duration {Number} duration of the tween
 * @param ease the easing function to use on the tween
 * @param autostart {Boolean} option to automatically start the tween instead of manually calling tween.start()
 * @param delay {Number} delay before the tween will start, in milliseconds
 * @param repeat {Number} how many times the tween should repeat. Set to -1 to run forever
 * @param yoyo {Boolean} option for the tween to reverse itself and play backwards
 * @param properties (optional) optional properties to add to the tween
 * @returns {}
 * ```javascript
 * game.add.tween(target).from(properties[if used], duration, ease, autostart, delay, repeat, yoyo)
 * ```
 * @block
 */
Blockly.JavaScript['phaser_game_add_tween_from'] = function (block) {
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
  return [`game.add.tween(${target}).from({${objectProperties}}, ${duration}, ${ease}, ${autostart}, ${delay}, ${repeat}, ${yoyo})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Stop the chosen tween.
 * @method phaser_stop_tween
 * @param tween tween to stop
 * @param complete {Boolean} if true, dispatches the onComplete signal
 * @returns {}
 * ```javascript
 * tween.stop(complete);
 * ```
 * @block
 */
Blockly.JavaScript['phaser_stop_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  const complete = block.getFieldValue('COMPLETE') === 'TRUE';
  return `${tween}.stop(${complete});\n`;
};

/**
 * Pauses the chosen tween.
 * @method phaser.pause.tween
 * @param tween tween to pause
 * @returns {}
 * ```javascript
 * tween.pause();
 * ```
 * @block
 */
Blockly.JavaScript['phaser_pause_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.pause();\n`;
};

/**
 * Resumes the chosen tween.
 * @method phaser_resume_tween
 * @param tween tween to resume
 * @returns {}
 * ```javascript
 * tween.resume();
 * ```
 * @block
 */
Blockly.JavaScript['phaser_resume_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.resume();\n`;
};

/**
 * Start the chosen tween object.
 * @method phaser_start_tween
 * @param tween tween to start
 * @returns {}
 * ```javascript
 * tween.start();
 * ```
 * @block
 */
Blockly.JavaScript['phaser_start_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.start();\n`;
};

/**
 * Make the chosen tween run through the starting values and then play back in reverse.
 * @method phaser_yoyo_tween
 * @param tween tween to yoyo
 * @param enable {Boolean} enable/disable yoyoing on the tween
 * @param delay {Number} the amount of time to wait until the yoyo will start
 * @param index {Number} choose the object index on the tween to apply this to
 * @returns {}
 * ```javascript
 * tween.yoyo(enable, delay, index);
 * ```
 * @block
 */
Blockly.JavaScript['phaser_yoyo_tween'] = function (block) {
  const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
  const enable = block.getFieldValue('ENABLE') === 'TRUE';
  const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${tween}.yoyo(${enable}, ${delay}, ${index});\n`;
};
//endregion

//region POINTER
/**
 * Returns the chosen button from the mouse.
 * @method pointer_get_device_buttons_field
 * @param object pointer to get the buttons from
 * @param field which button to return
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['pointer_get_device_buttons_field'] = getField;
//endregion

//region DEVICE_BUTTON
/**
 * Returns the chosen boolean field value of the chosen button on the pointer.
 * @method device_button_get_boolean_field
 * @param object button to get the values from
 * @param field the value to get
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
/**
 * Returns the chosen numeric field value of the chosen button on the pointer.
 * @method device_button_get_numeric_field
 * @param object button to get the values from
 * @param field the value to get
 * @returns {}
 * ```javascript
 * object.field
 * ```
 * @block
 */
Blockly.JavaScript['device_button_get_boolean_field'] = Blockly.JavaScript['device_button_get_numeric_field'] = getField;

/**
 * Returns true/false if the chosen button on the pointer was released within the last 250 milliseconds.
 * @method device_button_just_released
 * @param object button to check
 * @returns {}
 * ```javascript
 * object.justReleased()
 * ```
 * @block
 */
Blockly.JavaScript['device_button_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justReleased()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the chosen button on the pointer was pressed within the last 250 milliseconds.
 * @method device_button_just_pressed
 * @param object button to check
 * @returns {}
 * ```javascript
 * object.justPressed()
 * ```
 * @block
 */
Blockly.JavaScript['device_button_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justPressed()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the chosen button on the pointer was released within the given amount of time.
 * @method device_button_just_released_complex
 * @param object button to check
 * @param duration {Number} the duration to check
 * @returns {}
 * ```javascript
 * object.justReleased(duration)
 * ```
 * @block
 */
Blockly.JavaScript['device_button_just_released_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justReleased(${duration})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * Returns true/false if the chosen button on the pointer was pressed within the given amount of time.
 * @method device_button_just_pressed_complex
 * @param object button to check
 * @param duration {Number} the duration to check
 * @returns {}
 * ```javascript
 * object.justPressed(duration)
 * ```
 * @block
 */
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

