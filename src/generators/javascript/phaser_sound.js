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
