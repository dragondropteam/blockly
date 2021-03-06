/**
 * @phaser
 * @namespace Sprite/Image
 */
//region SPRITE/IMAGE

/**
 * Create an image to be used in the game.
 * @method create_image
 * @param tag {String} the tag that defines the image
 * @param source {String} the file path of the image
 * @returns {}
 * <pre><code>
 * game.load.image(tag, source);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * game.load.atlasXML(tag, source, xml);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * game.add.sprite(x, y, tag, id);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * game.add.sprite(x, y, tag);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.animations.add(name, frames, fps, loop);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.animations.add(name, frames, fps, loop);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * game.load.spritesheet(tag, source, width, height);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.addChild(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.addChild(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.addChildAt(child, index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.addChildAt(child, index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.alignIn(container, Phaser.position, offset_x, offset_y);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.alignTo(container, Phaser.position, offset_x, offset_y);
 * </code></pre>
 * @memberOf Sprite/Image
 * @block
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.bringToTop();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.checkWorldBounds = bool;
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.contains(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.contains(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.crop(rectangle);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.crop();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.destroy(bool);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.getChildAt(index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.getChildAt(index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.getChildIndex(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.getChildIndex(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.loadTexture(tag);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.moveDown();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.moveUp();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.outOfBoundsFaint = boolean;
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.removeChild(child);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.removeChildAt(index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.removeChildren();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.resetFrame();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 *
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.sendToBack();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.setChildIndex(child, index);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.setFrame(frame);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.setScaleMinMax(minX, minY, maxX, maxY);
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * object.setScaleMinMax();
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 *
 * </code></pre>
 * @memberOf Sprite/Image
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
 * <pre><code>
 * parent.swapChildren(child, child2);
 * </code></pre>
 * @memberOf Sprite/Image
 * @block
 */
Blockly.JavaScript['swap_children'] = function (block) {
  const value_parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const value_child2 = Blockly.JavaScript.valueToCode(block, 'CHILD2', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_parent}.swapChildren(${value_child}, ${value_child2});\n`;
};

//endregion
/**
 * @phaser
 * @namespace Groups
 */
//region GROUPS
/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * <pre><code>
 *
 * </code></pre>
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
 * <pre><code>
 * group.create(x, y, tag);
 * </code></pre>
 * @memberOf Groups
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
 * Creates a container to hold multiple sprites. Assign to a variable for future use.
 * @method create_group
 * @returns {}
 * <pre><code>
 * game.add.group();
 * </code></pre>
 * @memberOf Groups
 * @block
 */
Blockly.JavaScript['create_group'] = function (block) {
  return [`game.add.group()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
 *
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.create(x, y, tag, frame);
 * </code></pre>
 * @memberOf Groups
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
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.add(object);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.remove(object, destroy);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.contains(child);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.count(state);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.destroy(handleChildren);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getAll();
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getAt(index);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getClosestTo(object);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 *
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getFirstMode();
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getRandom();
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.getRandomExists();
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * group.removeAll(deleteObjects);
 * </code></pre>
 * @memberOf Groups
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
 * <pre><code>
 * game.world.add(object);
 * </code></pre>
 * @memberOf Groups
 * @block
 */
Blockly.JavaScript['add_to_world'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.world.add(${object});\n`;
};
//endregion
/**
 * @phaser
 * @namespace Animation
 */
//region ANIMATION
/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * <pre><code>
 * object.animations.play(animation);
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
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
 * <pre><code>
 * object.animations.stop();
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
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
 * <pre><code>
 * object.frame = frameNumber;
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
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
 * </code></pre>
 * @memberOf Animation
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
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
 * object.animations.next(framecount);
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
 * object.animations.previous(framecount);
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
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
 * <pre><code>
 *
 */
Blockly.JavaScript['animation_update'] = function (block) {
  const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  return [`${variable_object}.animations.update()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
 * object.animations.validateFrames(frames, true)
 * </code></pre>
 * @memberOf Animation
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
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
 * object.animations.destroy();
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.animations.currentAnim.field = value;
 * </code></pre>
 * @memberOf Animation
 * @block
 */
/**
 * Assigns the chosen numeric field for the object.
 * @method set_animation_numeric_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * <pre><code>
 * object.animations.currentAnim.field = value;
 * </code></pre>
 * @memberOf Animation
 * @block
 */

/**
 * Assigns the chosen string field for the object.
 * @method set_animation_string_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * <pre><code>
 * object.animations.currentAnim.field = value;
 * </code></pre>
 * @memberOf Animation
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
 * <pre><code>
 * object.animations.currentAnim.field
 * </code></pre>
 * @memberOf Animation
 * @block
 */
/**
 * Returns the chosen numeric field value of the object.
 * @method get_animation_numeric_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * <pre><code>
 * object.animations.currentAnim.field
 * </code></pre>
 * @memberOf Animation
 * @block
 */
/**
 * Returns the chosen string field value of the object.
 * @method get_animation_string_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * <pre><code>
 * object.animations.currentAnim.field
 * </code></pre>
 * @memberOf Animation
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
/**
 * @phaser
 * @namespace PhaserText
 */
//region PHASERTEXT
/**
 * Creates a new text object and adds it to the game.
 * @method add_text_input
 * @param x {Number} the x coordinate to display the text at
 * @param y {Number} the y coordinate to display the text at
 * @param initial_text {String} the text to display
 * @param size {Number} the font size to display the text with
 * @param colour the colour to display the text with
 * @returns {}
 * <pre><code>
 * game.add.text(x, y, initial_text, {fontSize: `${size}px`, fill: 'colour'})
 * </code></pre>
 * @memberOf PhaserText
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.text = text_string;
 * </code></pre>
 * @memberOf PhaserText
 * @block
 */
Blockly.JavaScript['set_text_vi'] = function (block) {
  const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${variable_object}.text = ${value_text};\n`;
};
//endregion
/**
 * @phaser
 * @namespace Particles
 */
//region PARTICLES
/**
 * Creates a particle emitter at the given location, with a total number of max particles.
 * @method addemitter
 * @param x {Number} the x location of the emitter
 * @param y {Number} the y location of the emitter
 * @param maxparticles {Number} the total number of particles in the emitter
 * @returns {}
 * <pre><code>
 * game.add.emitter(x, y, maxparticles)
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
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
 * <pre><code>
 * emitter.makeParticles(keys, frames, quantity, collide, collideWorldBounds);
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
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
 * <pre><code>
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
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
 * emitter.setAlpha(min, max, rate);
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
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
 * <pre><code>
 * emitter.setScale(minx, maxx, miny, maxy, rate);
 * </code></pre>
 *  @memberOf Particles
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
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
 * emitter.minParticleSpeed.set(minx, miny); emitter.maxParticleSpeed.set(maxx, maxy);
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
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
 * <pre><code>
 * emitter.gravity = particle_gravity;
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * emitter.start(explode, lifespan, frequncy, quantity);
 * </code></pre>
 *  @memberOf Particles
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
 * <pre><code>
 *
 */
Blockly.JavaScript['set_emit_from'] = function (block) {
  const value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
  const dropdown_cord = block.getFieldValue('cord');
  const value_emit_loc = Blockly.JavaScript.valueToCode(block, 'emit_loc', Blockly.JavaScript.ORDER_ATOMIC);
  return `${value_object}.emit${dropdown_cord} = ${value_emit_loc};\n`;
};
//endregion EMITTERS
/**
 * @phaser
 * @namespace GameObject
 */
//region GAMEOBJECT

//region GAMEOBJECT.PROPERTIES
/*Blockly.JavaScript['set_game_object_point_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${field}.copyFrom(${point});\n`;
};* </code></pre>
 * @memberOf GameObject
 * @block
 */
/**
 * Assigns the chosen point field for the game object.
 * @method set_game_object_point_field
 * @param field the field to set
 * @param point point to set the field to
 * @param object object to set the field for
 * @returns {}
 * <pre><code>
 * object.field.copyFrom(point);
 * </code></pre>
 * @memberOf GameObject
 * @block
 */
Blockly.JavaScript['set_game_object_point_field'] = setPointField;

/**
 * Returns the chosen point field value of the game object.
 * @method get_physics_point_field
 * @param object object to get values from
 * @param field the field to get the value of
 * @returns {}
 * <pre><code>
 * object.field
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
 * object.field = value;
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * object.field
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * object.field = value;
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * object.field
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.faint();
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * object.destroy();
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * game.camera.follow(object);
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
 * game.camera.follow(object, Phaser.Camera.style);
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * game.camera.follow(object, style, lerpX, lerpY);
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 *
 */
Blockly.JavaScript['get_camera'] = function (block) {
  return [`game.camera`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.angle += value_angle;
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.reset(x, y);
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
 * object.revive();
 * </code></pre>
 * @memberOf GameObject
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
 * <pre><code>
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
 * <pre><code>
 * object.position.add(x, y);
 * </code></pre>
 * @memberOf GameObject
 * @block
 */
Blockly.JavaScript['move_by'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.position.add(${x}, ${y});\n`;
};
//endregion