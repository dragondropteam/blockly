/**
 * @phaser
 * @namespace Startup
 */
//region STARTUP

/**
 * <img src="img/phaser_simple_init.jpg" width="250"> <br>
 * The main controller for the entire Phaser game. The functions run in order from top to bottom, with preload and create running once, and update running as a loop until the game ends.
 * [Check the game engine documentation for more details.]{@link http://dragondrop.digipen.edu/docs/Phaser.Timer.html}
 * @param width {Number} The width of the game world
 * @param height {Number} The height of the game world
 * @returns {}
 * <pre><code>
 * var game = new Phaser.Game([width], [height], Phaser.AUTO, '', {preload: preload, create: create, update: update});
 * </code></pre>
 *  @memberOf Startup
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
 * <pre><code>
 * var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '');
 * </code></pre>
 *  @memberOf Startup
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
 * <pre><code>
 * game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 this.scale.pageAlignHorizontally = true;
 this.scale.pageAlignVertically = true;
 this.scale.updateLayout( true );
 * </code></pre>
 *  @memberOf Startup
 * @block
 */
Blockly.JavaScript['center_and_stretch'] = function (block) {
  return 'game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n  this.scale.pageAlignHorizontally = true;\n  this.scale.pageAlignVertically = true;\n  this.scale.updateLayout( true );\n';
};
//endregion
/**
 * @phaser
 * @namespace World
 */
//region WORLD
/**
 * Returns the property of the object.
 * @method get_world_property
 * @param property property to get values from
 * @returns {}
 * <pre><code>
 * game.world.property
 * </code></pre>
 *  @memberOf World
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
 * <pre><code>
 * game.world.setBounds(x, y, w, h);
 * </code></pre>
 *  @memberOf World
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * object.scale.setTo(x, y);
 * </code></pre>
 *  @memberOf World
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * game.paused = paused;
 * </code></pre>
 *  @memberOf World
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
 * <pre><code>
 * game.paused
 * </code></pre>
 *  @memberOf World
 * @block
 */
Blockly.JavaScript['get_game_pause'] = function (block) {
  return [`game.paused`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion
/**
 * @phaser
 * @namespace States
 */
//region STATES
/**
 * Adds a state to the game with the given name and key.
 * @method statemanager_add_state
 * @param name {String} name of the new state
 * @param key tag to use for the state
 * @returns {}
 * <pre><code>
 * game.state.add(key, name);
 * </code></pre>
 *  @memberOf States
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
 * <pre><code>
 * game.start.state(tag);
 * </code></pre>
 *  @memberOf States
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
 * <pre><code>
 * game.state.getCurrentState()
 * </code></pre>
 *  @memberOf States
 * @block
 */
Blockly.JavaScript['statemanager_get_current_state'] = function (block) {
  return [`game.state.getCurrentState()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Restarts the current state.
 * @method statemanager_restart_state
 * @returns {}
 * <pre><code>
 * game.state.restart();
 * </code></pre>
 *  @memberOf States
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
 * <pre><code>
 * game.state.checkState(key)
 * </code></pre>
 *  @memberOf States
 * @block
 */
Blockly.JavaScript['statemanager_check_state'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.state.checkState(${key})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion
/**
 * @phaser
 * @namespace Time
 */
//region TIME

/**
 * Returns the chosen numeric field value of the game timer.
 * @method get_time_numeric_member
 * @param field the value to get
 * @returns {}
 * <pre><code>
 * game.time.field
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * game.time.field = value;
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * game.time.physicsElapsed
 * </code></pre>
 *  @memberOf Time
 * @block
 */
Blockly.JavaScript['delta_time_seconds'] = function (block) {
  return [`game.time.physicsElapsed`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * Returns the physics update delta in milliseconds.
 * @method delta_time_milliseconds
 * @returns {}
 * <pre><code>
 * game.time.physicsElapsedMS
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.field
 * </code></pre>
 *  @memberOf Time
 * @block
 */
/**
 * Returns the chosen boolean field value of the timer.
 * @method get_timer_boolean_member
 * @param field the value to get
 * @param timer timer to get the values from
 * @returns {}
 * <pre><code>
 * timer.field
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.field = value;
 * </code></pre>
 *  @memberOf Time
 * @block
 */
/**
 * Assigns the chosen numeric field for the timer.
 * @method set_timer_numeric_member
 * @param field the value to set
 * @param timer timer to assign values for
 * @param value value to set the field to
 * @returns {}
 * <pre><code>
 * timer.field = value;
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * game.time.create(autoDestroy)
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * constant
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.start(delay);
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
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
 * <pre><code>
 * timer.add(delay, callback, undefined, arguments[if any]);
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
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
 * <pre><code>
 * timer.add(delay, callback, arguments[if any]);
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
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
 * <pre><code>
 * timer.add(delay, repeatCount, callback, arguments[if any]);
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.destroy();
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.pause();
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.resume();
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
 * timer.stop(clearEvents);
 * </code></pre>
 *  @memberOf Time
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
 * <pre><code>
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
 * <pre><code>
 * timer.onComplete.add(callback);
 * </code></pre>
 *  @memberOf Time
 * @block
 */
Blockly.JavaScript['timer_set_on_complete_callback'] = function (block) {
  const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
  const callback = block.getFieldValue('CALLBACK');
  return `${timer}.onComplete.add(${callback});\n`;
};
//endregion