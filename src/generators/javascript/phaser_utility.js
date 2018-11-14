/**
 * @namespace Debug
 */
//region DEBUG
/**
 * Enables stepping through the game loop one frame at a time. Must use game.step()
 * @method enable_step
 * @returns {}
 * <pre><code>
 * game.enableStep();
 * </code></pre>
 *  @memberOf Debug
 * @block
 */
Blockly.JavaScript['enable_step'] = function (block) {
  return `game.enableStep();\n`;
};
/**
 * Disables stepping through the game loop.
 * @method disable_step
 * @returns {}
 * <pre><code>
 * game.disableStep();
 * </code></pre>
 *  @memberOf Debug
 * @block
 */
Blockly.JavaScript['disable_step'] = function (block) {
  return `game.disableStep();\n`;
};
/**
 * Steps through the game loop one frame at a time.
 * @method step
 * @returns {}
 * <pre><code>
 * game.step();
 * </code></pre>
 *  @memberOf Debug
 * @block
 */
Blockly.JavaScript['step'] = function (block) {
  return `game.step();\n`;
};

/**
 * Renders a geometry object.
 * @method debug_geom
 * @param object object to render
 * @param colour colour to render the object with
 * @param filled {Boolean} whether or not to leave the object filled or stroked
 * @returns {}
 * <pre><code>
 * game.debug.geom(object, colour, filled);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.spriteInfo(object, x, y);
 * </code></pre>
 *  @memberOf Debug
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
};* </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.bodyInfo(object, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.body(object, colour, filled);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.camera(camera, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.cameraInfo(game.camera, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.inputInfo(x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.key(game.input.keyboard.addKey(Phaser.Keyboard.dropdown_key), x, y);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
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
 * <pre><code>
 * game.debug.rectangle(rect, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
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
 * <pre><code>
 * game.debug.soundInfo(sound, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.spriteCoords(sprite, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.spriteInfo(sprite, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
 * <pre><code>
 * game.debug.text(text, x, y, colour);
 * </code></pre>
 *  @memberOf Debug
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
/**
 * @namespace Math
 */
//region MATH
/**
 * Converts the given degrees to radians and returns the result.
 * @method math_deg_to_rad
 * @param degrees {Number} the number of degrees to convert to radians.
 * @returns {}
 * <pre><code>
 * game.math.degToRad(degrees)
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * game.math.radToDeg(radians)
 * </code></pre>
 *  @memberOf Math
 * @block
 */
Blockly.JavaScript['math_rad_to_deg'] = function (block) {
  const radians = Blockly.JavaScript.valueToCode(block, 'RADIANS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.math.radToDeg(${radians})`, Blockly.JavaScript.ORDER_NONE];
};
//endregion
/**
 * @namespace PhaserList
 */
//region PHASERLIST
/**
 * Finds the value in the list that is closest to the given value
 * @method list_find_closest
 * @param value {Number} the search value
 * @param array the list to search
 * @returns {}
 * <pre><code>
 * Phaser.ArrayUtils.findClosest(value, array)
 * </code></pre>
 *  @memberOf PhaserList
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
 * <pre><code>
 * Phaser.ArrayUtils.getRandomItem(array)
 * </code></pre>
 *  @memberOf PhaserList
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
 * <pre><code>
 * Phaser.ArrayUtils.numberArray(start, end)
 * </code></pre>
 *  @memberOf PhaserList
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
 * <pre><code>
 * Phaser.ArrayUtils.numberArrayStep(start, end, step)
 * </code></pre>
 *  @memberOf PhaserList
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
 * <pre><code>
 * Phaser.ArrayUtils.removeRandomItem(array)
 * </code></pre>
 *  @memberOf PhaserList
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
 * <pre><code>
 * Phaser.ArrayUtils.shuffle(array);
 * </code></pre>
 *  @memberOf PhaserList
 * @block
 */
Blockly.JavaScript['list_shuffle'] = function (block) {
  const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return `Phaser.ArrayUtils.shuffle(${array});\n`;
};
//endregion
/**
 * @namespace Random
 */
//region RANDOMISATION
/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
 *
 */
Blockly.JavaScript['create_random_generator'] = function (block) {
  return [`new Phaser.RandomDataGenerator([new Date().getTime()])`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * <pre><code>
 * game.rnd.angle()
 * </code></pre>
 *  @memberOf Random
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
 * <pre><code>
 * game.rnd.pick(array)
 * </code></pre>
 *  @memberOf Random
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
 * <pre><code>
 * game.rnd.weightedPick(array)
 * </code></pre>
 *  @memberOf Random
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
 * <pre><code>
 * game.rnd.real()
 * </code></pre>
 *  @memberOf Random
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
 * <pre><code>
 * game.rnd.realInRange(min, max)
 * </code></pre>
 *  @memberOf Random
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
 * <pre><code>
 * game.rnd.sign()
 * </code></pre>
 *  @memberOf Random
 * @block
 */
Blockly.JavaScript['random_sign'] = function (block) {
  return [`game.rnd.sign()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Randomly returns true or false.
 * @method random_boolean
 * @returns {}
 * <pre><code>
 * game.rnd.pick([true, false])
 * </code></pre>
 *  @memberOf Random
 * @block
 */
Blockly.JavaScript['random_boolean'] = function () {
  return ['game.rnd.pick([true, false])', Blockly.JavaScript.ORDER_NONE];
};
//endregion
//region EASING
/**
 * Returns the chosen easing method in the given direction.
 * @method phaser_easing
 * @param ease easing method to return
 * @param direction direction for the easing method to use
 * @returns {}
 * <pre><code>
 * Phasser.ease.direction
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * Phaser.Easing.Linear.None
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * game.add.tween(target).to(properties[if used], duration, ease, autostart, delay, repeat, yoyo)
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * game.add.tween(target).from(properties[if used], duration, ease, autostart, delay, repeat, yoyo)
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * tween.stop(complete);
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * tween.pause();
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * tween.resume();
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * tween.start();
 * </code></pre>
 *  @memberOf Math
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
 * <pre><code>
 * tween.yoyo(enable, delay, index);
 * </code></pre>
 *  @memberOf Math
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
