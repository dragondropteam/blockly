/**
 * @namespace Camera
 */
//region CAMERA
/**
 * Returns the game camera.
 * @method game_camera
 * @returns {}
 * ```javascript
 * game.camera
 * ```
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
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
 *  @memberOf Camera
 * @block
 */
Blockly.JavaScript['camera_unfollow'] = function (block) {
  return `game.camera.unfollow();\n`;
};
//endregion