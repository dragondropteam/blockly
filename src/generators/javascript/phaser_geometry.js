/**
 * @phaser
 * @namespace Rectangle
 */
//region RECTANGLE
/**
 * Creates a rectangle with the given properties.
 * @method rectangle_create
 * @param x {Number} x coordinate for the new rectangle
 * @param y {Number} y coordinate for the new rectangle
 * @param width {Number} width of the rectangle
 * @param height {Number} height of the rectangle
 * @returns {}
 * <pre><code>
 * new Phaser.Rectangle(x, y, width, height)
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * Phaser.Rectangle.intersects(rectA, rectB)
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf Rectangle
 * @block
 */
/**
 * Returns the chosen point field value of the rectangle.
 * @method rectangle_get_point_field
 * @param object object to get values from
 * @param field the field to get values of
 * @returns {}
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * object.field = value;
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * object.field.copyFrom(point);
 * </code></pre>
 *  @memberOf Rectangle
 * @block
 */
Blockly.JavaScript['rectangle_set_point_field'] = setPointField;

/**
 * Returns true/false if the rectangle contains the point.
 * @method rectangle_contains_point
 * @param rectangle rectangle to check
 * @param point point to check
 * @returns {}
 * <pre><code>
 * Phaser.Rectangle.containsPoint(rectangle, point)
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * Phaser.Rectangle.contains(rectangle, x, y)
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * Phaser.Rectangle.containsRect(rectangle_a, rectangle_b)
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * rectangle.clone()
 * </code></pre>
 *  @memberOf Rectangle
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
 * <pre><code>
 * rectangle.random()
 * </code></pre>
 *  @memberOf Rectangle
 * @block
 */
Blockly.JavaScript['rectangle_random'] = function (block) {
  const rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${rectangle}.random()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
/**
 * @phaser
 * @namespace Point
 */
//region POINT
/**
 * Returns a point from the given x/y values.
 * @method point_create
 * @param x {Number} x value for the point
 * @param y {Number} y value for the point
 * @returns {}
 * <pre><code>
 * new Phaser.Point(x, y)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.element
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.element = value;
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.setMagnitude(value);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.add(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.subtract(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.angle(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.distance(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.divide(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.equals(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.interpolate(pointA, pointB, f)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.multiply(pointA, pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.negative(pointA)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.normalize(pointA)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.perp(pointA)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * Phaser.Point.centroid(array)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.clamp(min, max);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.clampX(min, max);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.clampY(min, max);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.clone()
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * target.copyFrom(source);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * pointA.cross(pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * pointA.dot(pointB)
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.add(x, y);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.subtract(x, y);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.divide(x, y);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.multiply(x, y);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.ceil();
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.floor();
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.getMagnitude()
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.getMagnitudeSq()
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.invert();
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.isZero()
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.limit(max);
 * </code></pre>
 *  @memberOf Point
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
 * <pre><code>
 * point.setToPolar(degrees, radius, true);
 * </code></pre>
 *  @memberOf Point
 * @block
 */
Blockly.JavaScript['points_set_to_polar'] = function (block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setToPolar(${degrees}, ${radius}, true);\n`;
};
//endregion
/**
 * @phaser
 * @namespace Circle
 */
//region CIRCLE
/**
 * Returns a circle with the given properties.
 * @method circle_create
 * @param x {Number} x coordinate to create the circle at
 * @param y {Number} y coordinate to create the circle at
 * @param diameter {Number} diameter of the circle
 * @returns {}
 * <pre><code>
 * new Phaser.Circle(x, y, diameter)
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * object.field
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * object.field = value;
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * Phaser.Circle.intersects(circle_a, circle_b)
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * Phaser.Circle.intersectsRectangle(circle, rectangle)
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * circle.clone()
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * circle.contains(x, y)
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * circle.random()
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * circle.circumference()
 * </code></pre>
 *  @memberOf Circle
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
 * <pre><code>
 * circle_circumference_point
 * </code></pre>
 *  @memberOf Circle
 * @block
 */
Blockly.JavaScript['circle_circumference_point'] = function (block) {
  const circle = Blockly.JavaScript.valueToCode(block, 'CIRCLE', Blockly.JavaScript.ORDER_ATOMIC);
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${circle}.circumferencePoint(${degrees}, true)`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion
