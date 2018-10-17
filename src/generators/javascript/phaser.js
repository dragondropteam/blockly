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

//region STEPPING
/**
 * Enables stepping through the game loop one frame at a time. Must use game.step()
 * @method enable_step
 * @returns {}
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

