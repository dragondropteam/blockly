/**
 * @phaser
 * @namespace Graphics
 */
//region DRAWPRIMITIVES
/**
 * Adds a graphics object to use to draw primitive shapes.
 * @method create_graphics_object
 * @param x {Number} x position of the new graphics object
 * @param y {Number} y position of the new graphics object
 * @returns {}
 * <pre><code>
 * game.add.graphics(x, y);
 * </code></pre>
 *  @memberOf Graphics
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
 * <pre><code>
 * graphics.beginFill(toHexColor(colour));
 * (shapes to fill)
 * graphics.endFill();
 * </code></pre>
 *  @memberOf Graphics
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
 * <pre><code>
 * graphicsVar.drawRect(x, y, width, height);
 * </code></pre>
 *  @memberOf Graphics
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
 * <pre><code>
 * graphicsVar.drawCircle(x, y, diameter);
 * </code></pre>
 *  @memberOf Graphics
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
 * <pre><code>
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