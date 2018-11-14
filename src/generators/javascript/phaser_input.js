/**
 * @namespace Keyboard
 */
//region KEYBOARD
/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * <pre><code>
 * game.input.keyboard.isDown(Phaser.Keyboard.key)
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * game.input.keyboard.addKey(Phaser.Keyboard.key)
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.field
 * </code></pre>
 *  @memberOf Keyboard
 * @block
 */
/**
 * Returns the chosen numeric field value of the key.
 * @method get_key_numeric_field
 * @param field the value to get
 * @param key key to get values from
 * @returns {}
 * <pre><code>
 * key.field
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.justPressed()
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.justReleased()
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.reset(hard)
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.upDuration(duration);
 * </code></pre>
 *  @memberOf Keyboard
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
 * <pre><code>
 * key.downDuration(duration);
 * </code></pre>
 *  @memberOf Keyboard
 * @block
 */
Blockly.JavaScript['key_down_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.downDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion
/**
 * @namespace Mouse
 */
//region MOUSE
/**
 * Returns the specified coordinate value of the mouse position.
 * @method get_current_mouse_position
 * @param direction which coordinate of the mouse position to get
 * @returns {}
 * <pre><code>
 * game.input.direction
 * </code></pre>
 *  @memberOf Mouse
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
 * <pre><code>
 * New Phaser.Point(game.input.x, game.input.y)
 * </code></pre>
 *  @memberOf Mouse
 * @block
 */
Blockly.JavaScript['get_mouse_position_point'] = function (block) {
  return [`new Phaser.Point(game.input.x, game.input.y)`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns true/false if the specified mouse button is currently being clicked.
 * @method is_mouse_button_clicked
 * @returns {}
 * <pre><code>
 * game.input.mousePointer.button.isDown
 * </code></pre>
 *  @memberOf Mouse
 * @block
 */
Blockly.JavaScript['is_mouse_button_clicked'] = function (block) {
  return [`game.input.mousePointer.${block.getFieldValue('BUTTON')}.isDown`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the active game pointer.
 * @method get_active_pointer
 * @returns {}
 * <pre><code>
 * game.input.activePointer
 * </code></pre>
 *  @memberOf Mouse
 * @block
 */
Blockly.JavaScript['get_active_pointer'] = function (block) {
  return [`game.input.activePointer`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion
/**
 * @namespace InputHandler
 */
//region INPUT_HANDLER
/**
 * Enables an object to use input handler methods and events.
 * @method input_handler_enable
 * @param object object to enable the input handler on
 * @returns {}
 * <pre><code>
 * object.inputEnabled = true;
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.field = value;
 * </code></pre>
 *  @memberOf InputHandler
 * @block
 */
/**
 * Assigns the chosen numeric field for the object.
 * @method set_input_handler_numeric_field
 * @param field the value to set
 * @param object object to assign values for
 * @param value value to set the field to
 * @returns {}
 * <pre><code>
 * object.input.field = value;
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.field.copyFrom(value);
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.field
 * </code></pre>
 *  @memberOf InputHandler
 * @block
 */
/**
 * Returns the chosen numeric field value of the object.
 * @method get_input_handler_numeric_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * <pre><code>
 * object.input.field
 * </code></pre>
 *  @memberOf InputHandler
 * @block
 */
/**
 * Returns the chosen point field value of the object.
 * @method get_input_handler_point_field
 * @param field the value to get
 * @param object object to get values from
 * @returns {}
 * <pre><code>
 * object.input.field
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.boundsRect = rect;
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.enableDrag();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.enableDrag(center, top, pixel, alpha);
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * input.checkPointerDown(pointer)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.checkPointerOver(pointer)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.disableDrag();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.enableSnap(x, y);
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.enableSnap(x, y, drag, release, offset_x, offset_y);
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.disableSnap();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.checkPixel(x, y)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.isPixelPerfect()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.justPressed(0, time)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.justReleased(0, time)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.overDuration()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
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
 * <pre><code>
 * object.input.justOver(0, time)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.downDuration()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerUp()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerDown()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.start(priority);
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.stop();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.justOut(0, time)
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerOut()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerX()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerY()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * new Phaser.Point(object.input.pointerX(), object.input.pointerY())
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.reset();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.destroy();
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.pointerDragged()
 * </code></pre>
 *  @memberOf InputHandler
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
 * <pre><code>
 * object.input.setDragLock(horizontal, vertical);
 * </code></pre>
 *  @memberOf InputHandler
 * @block
 */
Blockly.JavaScript['input_handler_set_drag_lock'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const horizontal = block.getFieldValue('HORIZONTAL') === 'TRUE';
  const vertical = block.getFieldValue('VERTICAL') === 'TRUE';
  return `${object}.input.setDragLock(${horizontal}, ${vertical});\n`;
};
//endregion
/**
 * @namespace Pointer
 */
//region POINTER
/**
 * Returns the chosen button from the mouse.
 * @method pointer_get_device_buttons_field
 * @param object pointer to get the buttons from
 * @param field which button to return
 * @returns {}
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf Pointer
 * @block
 */
Blockly.JavaScript['pointer_get_device_buttons_field'] = getField;
//endregion
/**
 * @namespace DeviceButton
 */
//region DEVICE_BUTTON
/**
 * Returns the chosen boolean field value of the chosen button on the pointer.
 * @method device_button_get_boolean_field
 * @param object button to get the values from
 * @param field the value to get
 * @returns {}
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf DeviceButton
 * @block
 */
/**
 * Returns the chosen numeric field value of the chosen button on the pointer.
 * @method device_button_get_numeric_field
 * @param object button to get the values from
 * @param field the value to get
 * @returns {}
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf DeviceButton
 * @block
 */
Blockly.JavaScript['device_button_get_boolean_field'] = Blockly.JavaScript['device_button_get_numeric_field'] = getField;

/**
 * Returns true/false if the chosen button on the pointer was released within the last 250 milliseconds.
 * @method device_button_just_released
 * @param object button to check
 * @returns {}
 * <pre><code>
 * object.justReleased()
 * </code></pre>
 *  @memberOf DeviceButton
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
 * <pre><code>
 * object.justPressed()
 * </code></pre>
 *  @memberOf DeviceButton
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
 * <pre><code>
 * object.justReleased(duration)
 * </code></pre>
 *  @memberOf DeviceButton
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
 * <pre><code>
 * object.justPressed(duration)
 * </code></pre>
 *  @memberOf DeviceButton
 * @block
 */
Blockly.JavaScript['device_button_just_pressed_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justPressed(${duration})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
