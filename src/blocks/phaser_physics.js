const PHYSICS_BOOLEAN_WRITABLE = ['isPaused'];
const PHYSICS_BOOLEAN_READABLE = [];
const PHYSICS_BOOLEAN_FIELDS = createDropDownField(PHYSICS_BOOLEAN_WRITABLE, PHYSICS_BOOLEAN_READABLE);

const PHYSICS_POINT_WRITABLE = ['gravity'];
const PHYSICS_POINT_READABLE = [];
const PHYSICS_POINT_FIELDS = createDropDownField(PHYSICS_POINT_WRITABLE, PHYSICS_POINT_READABLE);

//region PHYSICS_STARTUP
Blockly.Blocks['start_physics'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_PHYSICS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_ARCADE, 'ARCADE'], [Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_P2JS, 'P2JS']]), 'SYSTEM')
      .appendField(Blockly.Msg.START_PHYSICS_SYSTEM);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.START_PHYSICS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_PHYSICS_HELP_URL);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
  }
};

/**
 * Other physics functions assume we will be going through the arcade system.  Will need to extend the above block to
 * set something specifying which system was started. For now it will be removed from the toolbox and left for backwards
 * compatibility
 */
Blockly.Blocks['start_arcade_physics'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_ARCADE_PHYSICS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.START_ARCADE_PHYSICS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_ARCADE_PHYSICS_HELP_URL);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.enable_body_group.init}}
 */
Blockly.Blocks['enable_body_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_BODY_GROUP)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object')
      .appendField(Blockly.Msg.GROUP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_HELP_URL);
  }
};

Blockly.Blocks['enable_body_group_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ENABLE_BODY_GROUP_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_VI_HELP_URL);
  }
};

Blockly.Blocks['enable_arcade_physics_for_object'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['enable_arcade_physics_for_object_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_HELP_URL);
  }
};

//endregion

//region UTIL
Blockly.Blocks['acceleration_from_rotation'] = {
  init: function () {
    this.appendValueInput('ROTATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.RADIANS)
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND_SQUARED);
    this.setOutput(true, null);
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['physics_farthest'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_FARTHEST);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);

    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_FARTHEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_FARTHEST_HELP_URL);
  }
};

Blockly.Blocks['physics_closest'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_CLOSEST);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);

    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_CLOSEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_CLOSEST_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_between'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_to_pointer'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AND);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_HELP_URL);
  }
};
//endregion

//region COLLISION
/**
 * @deprecated
 * @type {{init: Blockly.Blocks.collide.init}}
 */
Blockly.Blocks['collide'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'LHS')
      .appendField(Blockly.Msg.WITH)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'RHS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['collide_vi'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.COLLIDE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.WITH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_VI_HELP_URL);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

// Blockly.Blocks['collide_vi_functionfield'] = {
//     init: function () {
//         this.appendValueInput('LHS')
//             .appendField("collide");
//         this.appendValueInput('RHS')
//             .appendField("with");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setTooltip('Collide the first group/object with the second group/object');
//         this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide');
//         this.setInputsInline(true);
//         this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
//     }
// };

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.is_body_touching.init}}
 */
Blockly.Blocks['is_body_touching'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('defaultObject'), 'BODY')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_UP, 'up'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_DOWN, 'down'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_LEFT, 'left'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_RIGHT, 'right'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_NONE, 'none']]), 'DIRECTION')
      .appendField(Blockly.Msg.IS_BODY_TOUCHING)

      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.IS_BODY_TOUCHING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_BODY_TOUCHING_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['is_body_touching_vi'] = {
  init: function () {
    this.appendValueInput('BODY');
    this.appendDummyInput()
      .appendField(Blockly.Msg.IS_BODY_TOUCHING_VI)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_UP, 'up'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_DOWN, 'down'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_LEFT, 'left'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_RIGHT, 'Right'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_NONE, 'none']]), 'DIRECTION')
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.IS_BODY_TOUCHING_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_BODY_TOUCHING_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.collide_with_world_bounds.init}}
 */
Blockly.Blocks['collide_with_world_bounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'BODY')
      .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COLLIDE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['collide_with_world_bounds_vi'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.MAKE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI);
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COLLIDE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

Blockly.Blocks['check_overlap_vi'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.CHECK_OVERLAP_VI);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'NAME')
      .appendField(Blockly.Msg.CHECK_OVERLAP_VI_IF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CHECK_OVERLAP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_OVERLAP_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

Blockly.Blocks['check_overlap_vi_procedure_field'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField('check overlap between');
    this.appendValueInput('RHS')
      .appendField('and');
    this.appendDummyInput()
      .appendField('calling')
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField('if overlapping');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Checks for an overlap between objectA and objectB.');
    this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['overlap_boolean'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.OVERLAP_BOOLEAN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.OVERLAP_BOOLEAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OVERLAP_BOOLEAN_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};
/**
 * @deprecated
 * @type {{init: Blockly.Blocks.check_overlap.init}}
 */
Blockly.Blocks['check_overlap'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CHECK_OVERLAP)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'LHS')
      .appendField(Blockly.Msg.AND)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'RHS')
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'NAME')
      .appendField(Blockly.Msg.CHECK_OVERLAP_IF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CHECK_OVERLAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_OVERLAP_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['check_collision'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CHECK_COLLISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.UP, 'up'], [Blockly.Msg.DOWN, 'down'], [Blockly.Msg.LEFT, 'left'], [Blockly.Msg.RIGHT, 'right']]), 'DIRECTION')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.CHECK_COLLISION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_COLLISION_HELP_URL);
  }
};

Blockly.Blocks['get_objects_under_pointer'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_UNDER_POINTER);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_OVERLAP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_HELP_URL);
  }
};

Blockly.Blocks['collision_get_objects_at_location_function'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AND);
    this.appendValueInput('X')
      .setCheck(null)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck(null)
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField(Blockly.Msg.IF_OVERLAPPING);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['get_objects_at_location'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_AT_LOCATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_OBJECTS_AT_LOCATION_OVERLAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECTS_AT_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECTS_AT_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['collide_with_arrow_function'] = {
  init: function () {
    this.appendValueInput('OBJECTA')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLIDE);
    this.appendValueInput('OBJECTB')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH);
    this.appendStatementInput('CALLBACK')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['collide_function_field'] = {
  init: function () {
    this.appendValueInput('OBJECTA')
      .setCheck(null)
      .appendField('collide');
    this.appendValueInput('OBJECTB')
      .setCheck(null)
      .appendField('with');
    this.appendDummyInput()
      .appendField('calling')
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField('if overlapping');
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip('Collide two objects, if they are collide do the statements in the block');
    this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['collide_boolean'] = {
  init: function () {
    this.appendValueInput('OBJECTA');
    this.appendValueInput('OBJECTB')
      .appendField(Blockly.Msg.COLLIDE_BOOLEAN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLIDE_BOOLEAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_BOOLEAN_HELP_URL);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['physics_intersects'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.PHYSICS_INTERSECTS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_INTERSECTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_INTERSECTS_HELP_URL);
  }
};

//endregion

//region DYNAMICS
Blockly.Blocks['set_immovable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_IMMOVABLE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'BODY')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'IMMOVABLE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_IMMOVABLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_IMMOVABLE_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['move_to_object'] = {
  init: function () {
    this.appendValueInput('GAMEOBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_TO_OBJECT);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_2);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT)
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_SPEED);
    this.appendValueInput('MAXIMUM_TIME')
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_TIME);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_TO_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_TO_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['physics_move_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT);
    this.appendValueInput('SPEED')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_TIME_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['physics_move_to_pointer'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_TIME_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_MOVE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_MOVE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('X_LOCATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y_LOCATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_pointer'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['set_physics_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('set_physics_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_physics_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_BOOLEAN_FIELDS.all), 'FIELD');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_physics_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_POINT_FIELDS.writable), 'FIELD');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.SET_PHYSICS_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_PHYSICS_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('set_physics_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_physics_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_POINT_FIELDS.all), 'FIELD');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PHYSICS_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PHYSICS_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};
//endregion

//region BODY

// NOTE: worldBounce is null by default, and when null Body.bounce is used instead. Setting this enables specific values.
const BODY_POINT_WRITABLE = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce'];
const BODY_POINT_FIELDS = createDropDownField(BODY_POINT_WRITABLE, []);

const BODY_POINT_WRITABLE_CLASS = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce', 'deltaMax', 'offset', 'tilePadding'];
const BODY_POINT_FIELDS_CLASS = createDropDownField(BODY_POINT_WRITABLE_CLASS, []);

const BODY_BOOLEAN_WRITABLE = ['allowDrag', 'allowGravity', 'allowRotation', 'collideWorldBounds', 'customSeparateX', 'customSeparateY', 'dirty', 'enable', 'immovable', 'skipQuadTree', 'stopVelocityOnCollide', 'syncBounds']; // There is also 'moves', omitted to avoid confusion.
const BODY_BOOLEAN_READABLE = ['embedded', 'isCircle', 'isMoving'];
const BODY_BOOLEAN_FIELDS = createDropDownField(BODY_BOOLEAN_WRITABLE, BODY_BOOLEAN_READABLE);

const BODY_NUMERIC_WRITABLE = ['mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY']; // Full list, note it contains duplicates from GameObject: [ 'mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY', 'x', 'y' ];
const BODY_NUMERIC_READABLE = ['preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type']; // Full list, note it contains duplicates from GameObject: [ 'angle', 'width', 'height', 'halfWidth', 'halfHeight', 'left', 'right', 'top', 'bottom',  'preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type'];
const BODY_NUMERIC_FIELDS = createDropDownField(BODY_NUMERIC_WRITABLE, BODY_NUMERIC_READABLE);

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_field_point.init}}
 */
Blockly.Blocks['set_body_field_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.BOUNCE, 'bounce'], [Blockly.Msg.GRAVITY, 'gravity'], [Blockly.Msg.VELOCITY, 'velocity'], [Blockly.Msg.ACCELERATION, 'acceleration'], [Blockly.Msg.DRAG, 'drag'], [Blockly.Msg.FRICTION, 'friction'], [Blockly.Msg.MAXVELOCITY, 'maxVelocity'], [Blockly.Msg.WORLDBOUNCE, 'worldBounce']]), 'FIELD')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT')
      .appendField(Blockly.Msg.FOR)
      .appendField(new Blockly.FieldVariable('item'), 'OBJECT');
    this.appendValueInput('VALUE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

// Normally, it would be a good idea to have this say something about point fields.
// However, point fields here are used independently, and so it may make sense to leave them separated as such.
// (These are not points like elsewhere: More accurately, they're points being used as vectors)
Blockly.Blocks['set_body_field_point_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS.writable), 'FIELD')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT')
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_DIRECTION);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_field_point_class', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_body_field_point_class_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_field_point_class', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_body_field_point_class'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createPointGetterContextMenu('set_body_field_point_vi', {propertyTag: 'FIELD', valueTag: 'POINT'})
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_boolean_field.init, customContextMenu: Function}}
 */
Blockly.Blocks['set_body_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALLOWROTATION, 'allowRotation'], [Blockly.Msg.ALLOWGRAVITY, 'allowGravity'], [Blockly.Msg.IMMOVABLE, 'immovable']]), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.writable), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.all), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.writable), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_numeric_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BODY_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.all), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GET_BODY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createNumericGetterContextMenu('set_body_numeric_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['debug_body'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.DEBUG_BODY_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

Blockly.Blocks['stop_body'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.STOP_BODY_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STOP_BODY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_BODY_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

//endregion

Blockly.Blocks['call_function_on_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'FUNCTION');
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP_CHILDREN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CALL_FUNCTION_ON_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CALL_FUNCTION_ON_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};