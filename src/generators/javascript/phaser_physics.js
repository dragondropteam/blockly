//region PHYSICS
/**
 * @namespace Setup
 */
//region SETUP
/**
 * @deprecated
 * @method
 * @returns {}
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Setup
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
 * <pre><code>
 * game.physics.startSystem(Phaser.Physics.ARCADE);
 * </code></pre>
 *  @memberOf Setup
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
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Setup
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
 * <pre><code>
 * group.enableBody = true;
 * </code></pre>
 *  @memberOf Setup
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
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Setup
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
 * <pre><code>
 * game.physics.arcade.enable(object);
 * </code></pre>
 *  @memberOf Setup
 * @block
 */
Blockly.JavaScript['enable_arcade_physics_for_object_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.enable(${object});\n`;
};
//endregion
/**
 * @namespace Body
 */
//region BODY
/**
 * Renders a visual for the physics body of the object. Will appear as a semi transparent filled green rectangle.
 * @method debug_body
 * @param object object to render the body for
 * @returns {}
 * <pre><code>
 * game.debug.body(object);
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.stop();
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * game.physics.arcade.field.copyFrom(value);
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.field.element = value;
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.field = point;
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.field
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
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
 * <pre><code>
 * object.body.field = point;
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.element
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.element = value;
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.element
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.setSize(width, height);
 * </code></pre>
 *  @memberOf Body
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
 * <pre><code>
 * object.body.setSize(width, height, offset_x, offset_y);
 * </code></pre>
 *  @memberOf Body
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
 * @namespace Util
 */
//region UTIL
/**
 * @deprecated
 * @method
 * @param
 * @returns {}
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Util
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
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Util
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
 * <pre><code>
 * game.physics.arcade.distanceBetween(source, target);
 * </code></pre>
 *  @memberOf Util
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
 * <pre><code>
 * game.physics.arcade.distanceToPointer(source, pointer);
 * </code></pre>
 *  @memberOf Util
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
 * <pre><code>
 * game.physics.aracde.distanceToXY(object, x, y);
 * </code></pre>
 *  @memberOf Util
 * @block
 */
Blockly.JavaScript['physics_distance_to_location'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceToXY(${object}, ${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
/**
 * @namespace Dynamics
 */
//region DYNAMICS
/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
 *
 */
Blockly.JavaScript['set_immovable'] = function (block) {
  const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const immovable = block.getFieldValue('IMMOVABLE') == 'TRUE';
  return `${body}.body.immovable = ${immovable};\n`;
};

/**
 * Moves the first object to the second object at the given speed. Speed will be adjusted to reach the destination object within the given maximum time. If the destination object moves, the target location will not change.
 * @method move_to_object
 * @param object object to move
 * @param destinationObject object to move to
 * @param speed {Number} speed for the object to move at
 * @param maximumTime {Number} maximum amount of time to take to move
 * @returns {}
 * <pre><code>
 * game.physics.arcade.moveToObject(object, destinationObject, speed, maximumTime);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.accelerationFromRotation(rotation, speed)
 * </code></pre>
 *  @memberOf Dynamics
 * @block
 */
Blockly.JavaScript['acceleration_from_rotation'] = function (block) {
  const rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.accelerationFromRotation(${rotation}, ${speed})`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Move the object to the given location at the given speed, taking no longer than the maximum given time. Speed will be adjusted so the object reaches the location within the given time.
 * @method physics_move_to_location
 * @param object object to move
 * @param x {Number} x position of the location to move to
 * @param y {Number} y position of the location to move to
 * @param speed {Number} the speed the object will move at
 * @param time {Number} maximum time for the object to reach the location
 * @returns {}
 * <pre><code>
 * game.physics.arcade.moveToXY(object, x, y, speed, time);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.moveToPointer(object, speed, pointer, time);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.accelerateToXY(object, x, y, speed, x_max, y_max);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.accelerateToPointer(object, pointer, speed, x_max, y_max);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.accelerateToObject(object, target, speed, x_max, y_max);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.field = value;
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.field.copyFrom(value);
 * </code></pre>
 *  @memberOf Dynamics
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
 * <pre><code>
 * game.physics.arcade.field
 * </code></pre>
 *  @memberOf Dynamics
 * @block
 */
/**
 * Returns the chosen point field value of the game's physics.
 * @method get_physics_point_field
 * @param field the field to get the value of
 * @returns {}
 * <pre><code>
 * game.physics.arcade.field
 * </code></pre>
 *  @memberOf Dynamics
 * @block
 */
Blockly.JavaScript['get_physics_boolean_field']
  = Blockly.JavaScript['get_physics_point_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  return [`game.physics.arcade.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
/**
 * @namespace Collision
 */
//region COLLISION
/**
 * @deprecated
 * @param block
 * </code></pre>
 *  @memberOf Collision
 * @block
 */
Blockly.JavaScript['is_body_touching'] = function (block) {
  const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
  const direction = block.getFieldValue('DIRECTION');
  return [`${body}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {String}
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * object.body.collideWorldBounds = collide;
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
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
 * <pre><code>
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
 * <pre><code>
 * game.physics.arcade.overlap(object1, object2, functionName);
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.overlap(object1, object2)
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.collide(object1, object2, functionName);
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.collide(object1, object2)
 * </code></pre>
 *  @memberOf Collision
 * @block
 */
Blockly.JavaScript['collide_boolean'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.collide(${object1}, ${object2})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/**
 * @deprecated
 * @param block
 * @returns {}
 * <pre><code>
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
 * <pre><code>
 * game.physics.arcade.collide(object1, object2);
 * </code></pre>
 *  @memberOf Collision
 * @block
 */
Blockly.JavaScript['collide_vi'] = function (block) {
  const object1 = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const object2 = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.collide(${object1}, ${object2});\n`;
};

/**
 * Returns true if something is touching the object in the specified direction.
 * @method is_body_touching_vi
 * @param object object to check
 * @param direction direction to check
 * @returns {}
 * <pre><code>
 * object.body.touching.direction
 * </code></pre>
 *  @memberOf Collision
 * @block
 */
Blockly.JavaScript['is_body_touching_vi'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
  const direction = block.getFieldValue('DIRECTION');
  return [`${object}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Enables/disables objects with physics enabled to collide with the world in the given direction.
 * @method check_collision
 * @param direction direction to set the property for
 * @param collide {Boolean} sets collision in the direction to true or false
 * @returns {}
 * <pre><code>
 * game.physics.arcade.checkCollision.direction = collide;
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.getObectsUnderPointer(pointer, group);
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 *
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.getObjectsAtLocation(x, y, group);
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.getObjectsAtLocation(x, y, group, functionName);
 * </code></pre>
 *  @memberOf Collision
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
 * <pre><code>
 * game.physics.arcade.intersects(lhs, rhs);
 * </code></pre>
 *  @memberOf Collision
 * @block
 */
Blockly.JavaScript['physics_intersects'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.intersects(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//endregion

/*Blockly.JavaScript['move_to_pointer'] = function (block) {
    const value_gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToPointer(${value_gameobject}, ${value_speed}, ${pointer});\n`;
};* </code></pre>
 * @block
 */

/*Blockly.JavaScript['move_to_pointer_extended'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${gameobject}, ${speed}, game.input.mousePointer, ${maximumTime});\n`;
};* </code></pre>
 * @block
 */

//endregion
