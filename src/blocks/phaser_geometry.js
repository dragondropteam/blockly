/**
 * @file Blocks for Phaser geometry
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

//region RECTANGLE
const RECTANGLE_NUMERIC_WRITABLE = ['x', 'y', 'width', 'height', 'bottom', 'centerX', 'centerY', 'left', 'randomX', 'randomY', 'right', 'top'];
const RECTANGLE_NUMERIC_READABLE = ['halfHeight', 'halfWidth', 'perimeter', 'volume'];
const RECTANGLE_NUMERIC_FIELDS = createDropDownField(RECTANGLE_NUMERIC_WRITABLE, RECTANGLE_NUMERIC_READABLE);

const RECTANGLE_POINT_WRITABLE = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
const RECTANGLE_POINT_READABLE = [];
const RECTANGLE_POINT_FIELDS = createDropDownField(RECTANGLE_POINT_WRITABLE, RECTANGLE_POINT_READABLE);

Blockly.Blocks['rectangle_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RECTANGLE_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('WIDTH')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

//contains, contains point, contains rect, intersects
// Blockly.Blocks['rectangle_get_prop'] = {
//   init: function() {
//     this.appendDummyInput()
//   }
// };

Blockly.Blocks['rectangle_intersects'] = {
  init: function () {
    this.appendValueInput('RECT_A');
    this.appendDummyInput()
      .appendField('intersects');
    this.appendValueInput('RECT_B');
    this.appendDummyInput()
      .appendField('?');
    this.setInputsInline(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CREATE_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['rectangle_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_GET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['rectangle_get_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_POINT_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_GET_POINT_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['rectangle_set_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_SET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('rectangle_get_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['rectangle_set_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_POINT_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_SET_POINT_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.RECTANGLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createSetterContextMenu('rectangle_get_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['rectangle_contains_point'] = {
  init: function () {
    this.appendValueInput('RECTANGLE');
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.RECTANGLE_CONTAINS_POINT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_POINT_HELP_URL);
  }
};

Blockly.Blocks['rectangle_contains'] = {
  init: function () {
    this.appendValueInput('RECTANGLE');
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.CONTAINS)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['rectangle_contains_rect'] = {
  init: function () {
    this.appendValueInput('RECTANGLE_A');
    this.appendValueInput('RECTANGLE_B')
      .appendField(Blockly.Msg.CONTAINS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_RECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_RECT_HELP_URL);
  }
};

Blockly.Blocks['rectangle_clone'] = {
  init: function () {
    this.appendValueInput('RECTANGLE')
      .appendField(Blockly.Msg.CLONE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CLONE_HELP_URL);
  }
};

Blockly.Blocks['rectangle_random'] = {
  init: function () {
    this.appendValueInput('RECTANGLE')
      .appendField(Blockly.Msg.RECTANGLE_RANDOM);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_RANDOM_HELP_URL);
  }
};
//endregion

//region POINT
Blockly.Blocks['point_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

Blockly.Blocks['point_get_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_GET_ELEMENT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_GET_ELEMENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_GET_ELEMENT_HELP_URL);
    this.setOutput(true);
  },
  customContextMenu: createPointGetterContextMenu('point_set_element', {propertyTag: 'ELEMENT', objectTag: 'POINT'})
};

Blockly.Blocks['point_set_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_SET_ELEMENT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_SET_ELEMENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_SET_ELEMENT_HELP_URL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
  },
  customContextMenu: createSetterContextMenu('point_get_element', {propertyTag: 'ELEMENT', objectTag: 'POINT'})
};

/**
 * Set the magnitude of the point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#setMagnitude
 * @type {{init: Blockly.Blocks.point_set_magnitude.init}}
 */
Blockly.Blocks['point_set_magnitude'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINT_SET_MAGNITUDE);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_SET_MAGNITUDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_SET_MAGNITUDE_HELP_URL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
  }
};

/**
 * Static method to add two points Phaser.Point.add
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.add
 * @type {{init: Blockly.Blocks.points_add.init}}
 */
Blockly.Blocks['points_add'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_ADD);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.POINTS_ADD_HELP_URL);
    this.setTooltip(Blockly.Msg.POINTS_ADD_TOOLTIP);
    this.setColour(PHASER_POINT_COLOUR);
  }
};

/**
 * Subtracts two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.subtract
 * @type {{init: Blockly.Blocks.points_subtract.init}}
 */
Blockly.Blocks['points_subtract'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_SUBTRACT);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.POINTS_SUBTRACT_HELP_URL);
    this.setTooltip(Blockly.Msg.POINTS_SUBTRACT_TOOLTIP);
    this.setColour(PHASER_POINT_COLOUR);
  }
};

/**
 * Static method to find the angle in radians between two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.angle
 * @type {{init: Blockly.Blocks.points_angle_between.init}}
 */
Blockly.Blocks['points_angle_between'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_ANGLE_BETWEEN);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_ANGLE_BETWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_ANGLE_BETWEEN_HELP_URL);

  }
};

/**
 * Static method to find the distance between two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.distance
 * @type {{init: Blockly.Blocks.points_angle_between.init}}
 */
Blockly.Blocks['points_distance'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DISTANCE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_DISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DISTANCE_HELP_URL);

  }
};

/**
 * Component wise division of two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.distance
 * @type {{init: Blockly.Blocks.points_divide}}
 */
Blockly.Blocks['points_divide'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DIVIDE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_DIVIDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DIVIDE_HELP_URL);

  }
};

/**
 * Static comparision this will use value vs reference
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.equals
 * @type {{init: Blockly.Blocks.points_equals}}
 */
Blockly.Blocks['points_equals'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.POINTS_EQUALS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Boolean');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_EQUALS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_EQUALS_HELP_URL);

  }
};

/**
 * Interpolates between two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.interpolate
 * @type {{init: Blockly.Blocks.points_interpolate.init}}
 */
Blockly.Blocks['points_interpolate'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE_B);
    this.appendValueInput('F')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE_PERCENT);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_INTERPOLATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_INTERPOLATE_HELP_URL);

  }
};

/**
 * Component wise multiplication of two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.multiply
 * @type {{init: Blockly.Blocks.points_multiply.init}}
 */
Blockly.Blocks['points_multiply'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_MULTIPLY);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_MULTIPLY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_MULTIPLY_HELP_URL);

  }
};

/**
 * Negate the point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.negative
 * @type {{init: Blockly.Blocks.points_negate.init}}
 */
Blockly.Blocks['points_negate'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_NEGATE);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_NEGATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_NEGATE_HELP_URL);

  }
};

/**
 * Normalize the point (make unit length)
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.normalize
 * @type {{init: Blockly.Blocks.points_normalize.init}}
 */
Blockly.Blocks['points_normalize'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_NORMALIZE);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_NORMALIZE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_NORMALIZE_HELP_URL);
  }
};

/**
 * Finds a vector perpendicular to the given point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.perp
 * @type {{init: Blockly.Blocks.points_perpendicular.init}}
 */
Blockly.Blocks['points_perpendicular'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_PERPENDICULAR);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_PERPENDICULAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_PERPENDICULAR_HELP_URL);
  }
};

Blockly.Blocks['points_centroid'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.POINTS_CENTROID);
    this.setOutput(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CENTROID_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CENTROID_HELP_URL);
  }
};

Blockly.Blocks['points_clamp'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_HELP_URL);
  }
};

Blockly.Blocks['points_clamp_x'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP_X);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_X_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_X_HELP_URL);
  }
};

Blockly.Blocks['points_clamp_y'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP_Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_Y_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_Y_HELP_URL);
  }
};

Blockly.Blocks['points_clone'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLONE);
    this.setOutput(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLONE_HELP_URL);
  }
};

Blockly.Blocks['points_copy_from'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .appendField(Blockly.Msg.POINTS_COPY_FROM);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_COPY_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_COPY_FROM_HELP_URL);
  }
};

Blockly.Blocks['points_cross'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_CROSS);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CROSS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CROSS_HELP_URL);
  }
};

Blockly.Blocks['points_dot'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DOT);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_DOT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DOT_HELP_URL);
  }
};

Blockly.Blocks['points_add_member'] = {
  init: function () {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_ADD_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_ADD_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_subtract_member'] = {
  init: function () {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.SUBTRACT)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.FROM);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_SUBTRACT_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_SUBTRACT_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_divide_member'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_DIVIDE);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_DIVIDE_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DIVIDE_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_multiply_member'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_MULTIPLY);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_MULTIPLY_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_MULTIPLY_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_ceil'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CEIL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CEIL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CEIL_HELP_URL);
  }
};

Blockly.Blocks['points_floor'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_FLOOR);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_FLOOR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_FLOOR_HELP_URL);
  }
};

Blockly.Blocks['points_get_magnitude'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_GET_MAGNITUDE);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_GET_MAGNITUDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_GET_MAGNITUDE_HELP_URL);
  }
};

Blockly.Blocks['points_get_magnitude_squared'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED_HELP_URL);
  }
};

Blockly.Blocks['points_invert'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_INVERT);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_INVERT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_INVERT_HELP_URL);
  }
};

Blockly.Blocks['points_is_zero'] = {
  init: function () {
    this.appendValueInput('POINT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINTS_IS_ZERO);
    this.setOutput(true, 'Boolean');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_IS_ZERO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_IS_ZERO_HELP_URL);
  }
};

Blockly.Blocks['points_limit'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_LIMIT);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_LIMIT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_LIMIT_HELP_URL);
  }
};

Blockly.Blocks['points_set_to_polar'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_SET_TO_POLAR_POINT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINTS_SET_TO_POLAR);
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField(Blockly.Msg.DEGREES);
    this.appendValueInput('RADIUS')
      .setCheck('Number')
      .appendField(Blockly.Msg.RADIUS);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_SET_TO_POLAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_SET_TO_POLAR_HELP_URL);
  }
};
//endregion
//region CIRCLE
const CIRCLE_NUMERIC_WRITABLE = ['bottom', 'diameter', 'left', 'radius', 'right', 'top', 'x', 'y'];
const CIRCLE_NUMERIC_READABLE = ['area'];
const CIRCLE_NUMERIC_FIELDS = createDropDownField(CIRCLE_NUMERIC_WRITABLE, CIRCLE_NUMERIC_READABLE);

Blockly.Blocks['circle_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CIRCLE_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('DIAMETER')
      .appendField(Blockly.Msg.DIAMETER);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

Blockly.Blocks['circle_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(CIRCLE_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_GET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.CIRCLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  }
};

Blockly.Blocks['circle_set_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(CIRCLE_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_SET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.CIRCLE_FIELDS_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('circle_get_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['circle_intersects'] = {
  init: function () {
    this.appendValueInput('CIRCLE_A');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERSECTS);
    this.appendValueInput('CIRCLE_B');
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_INTERSECTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_INTERSECTS_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['circle_intersects_rectangle'] = {
  init: function () {
    this.appendValueInput('CIRCLE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERSECTS);
    this.appendValueInput('RECTANGLE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_INTERSECTS_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_INTERSECTS_RECTANGLE_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['circle_clone'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CLONE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CLONE_HELP_URL);
  }
};

Blockly.Blocks['circle_contains'] = {
  init: function () {
    this.appendValueInput('CIRCLE');
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.CONTAINS)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['circle_random'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_RANDOM);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['circle_circumference'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_CIRCUMFERENCE);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CIRCUMFERENCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CIRCUMFERENCE_HELP_URL);
  }
};

Blockly.Blocks['circle_circumference_point'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT);
    this.appendValueInput('DEGREES')
      .appendField(Blockly.Msg.AT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT_HELP_URL);
  }
};
//endregion

