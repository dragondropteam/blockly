/**
 * @file Blocks for Phaser utils
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */
//region GENERAL
Blockly.Blocks['center_and_stretch'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CENTER_AND_STRETCH);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_GENERAL_COLOUR);
    this.setTooltip(Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CENTER_AND_STRETCH_HELP_URL);
  }
};
//endregion
//region DEBUG
Blockly.Blocks['debug_geom'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DEBUG_GEOM);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FILLED)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'FILLED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_GEOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_GEOM_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['enable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['disable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DISABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DISABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_sprite'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DEBUG_SPRITE);
    this.appendValueInput('X_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.DEBUG_SPRITE_AT_X);
    this.appendValueInput('Y_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_HELP_URL);
  }
};

Blockly.Blocks['debug_body_info'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_BODY_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_body_render'] = {
  init: function () {
    this.appendValueInput('BODY')
    .appendField(Blockly.Msg.DEBUG_BODY_RENDER);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FILLED)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'FILLED');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_RENDER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_RENDER_HELP_URL);
  }
};

Blockly.Blocks['debug_camera'] = {
  init: function () {
    this.appendValueInput('CAMERA')
      .appendField(Blockly.Msg.DEBUG_CAMERA);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_camera_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_CAMERA_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_input_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_INPUT_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_INPUT_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_INPUT_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_key'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_KEY)
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEY')
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_KEY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_KEY_HELP_URL);
  }
};

Blockly.Blocks['debug_physics_group'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_PHSYICS_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_PHYSICS_GROUP_CHECK)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CHECK_EXISTS');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_PHYSICS_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_PHYSICS_GROUP_HELP_URL);
  }
};

Blockly.Blocks['debug_rectangle'] = {
  init: function () {
    this.appendValueInput('RECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_RECTANGLE);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_RECTANGLE_HELP_URL);
  }
};

Blockly.Blocks['debug_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_SOUND);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_HELP_URL);
  }
};

Blockly.Blocks['debug_sound_info'] = {
  init: function () {
    this.appendValueInput('SOUND')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SOUND_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_coords'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_COORDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_COORDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_COORDS_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_info'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_text'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.DEBUG_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_TEXT_HELP_URL);
  }
};
//endregion
//region LISTS
Blockly.Blocks['list_find_closest'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST_NUMBER);
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL);
  }
};

Blockly.Blocks['list_get_random'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_GET_RANDOM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_GET_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_GET_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['number_list'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_HELP_URL);
  }
};

Blockly.Blocks['number_list_step'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP_AMOUNT);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_STEP_HELP_URL);
  }
};

Blockly.Blocks['list_remove_random_item'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL);
  }
};

Blockly.Blocks['list_shuffle'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_SHUFFLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_SHUFFLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_SHUFFLE_HELP_URL);
  }
};
//endregion
//region MATH
Blockly.Blocks['math_deg_to_rad'] = {
  init: function () {
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField(Blockly.Msg.MATH_DEG_TO_RAD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MATH_DEG_TO_RAD_RESULT);
    this.setOutput(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.MATH_DEG_TO_RAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_DEG_TO_RAD_HELP_URL);
  }
};

Blockly.Blocks['math_rad_to_deg'] = {
  init: function () {
    this.appendValueInput('RADIANS')
      .setCheck('Number')
      .appendField(Blockly.Msg.MATH_RAD_TO_DEG);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MATH_RAD_TO_DEG_RESULT);
    this.setOutput(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.MATH_RAD_TO_DEG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_RAD_TO_DEG_HELP_URL);
  }
};
//endregion
//region TWEEN
Blockly.Blocks['tween_mutatorcontainer'] = {
  /**
   * Mutator block for procedure container.
   * @this Blockly.Block
   */
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TITLE);
    this.appendStatementInput('STACK');
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['tween_mutatorarg'] = {
  /**
   * Mutator block for procedure argument.
   * @this Blockly.Block
   */
  init: function () {
    var field = new Blockly.FieldTextInput('x', this.validator_);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
      .appendField(field, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = false;
  },
  /**
   * Obtain a valid name for the procedure.
   * Merge runs of whitespace.  Strip leading and trailing whitespace.
   * Beyond this, all names are legal.
   * @param {string} newVar User-supplied name.
   * @return {?string} Valid name, or null if a name was not specified.
   * @private
   * @this Blockly.Block
   */
  validator_: function (newVar) {
    newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
    return newVar || null;
  },
};

Blockly.Blocks['phaser_game_add_tween_to'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TITLE);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.PHASER_TWEEN_TARGET);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.PHASER_TWEEN_DURATION)
      .setCheck('Number');
    this.appendValueInput('EASE')
      .appendField(Blockly.Msg.PHASER_TWEEN_EASE)
      .setCheck('Ease');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_AUTO_START)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'AUTOSTART');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('REPEAT')
      .appendField(Blockly.Msg.PHASER_TWEEN_REPEAT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'YOYO');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_PROPERTIES_HEADER);
    this.setOutput(true, 'Tween');
    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['tween_mutatorarg']));
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_URL);
    this.properties_ = [];
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('tween_mutatorcontainer');
    containerBlock.initSvg();

    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.properties_.length; ++i) {
      let paramBlock = workspace.newBlock('tween_mutatorarg');
      paramBlock.initSvg();

      paramBlock.setFieldValue(this.properties_[i], 'NAME');
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }

    return containerBlock;
  },

  compose: function (containerBlock) {
    this.properties_ = [];
    let propertyBlock = containerBlock.getInputTargetBlock('STACK');
    while (propertyBlock) {
      this.properties_.push(propertyBlock.getFieldValue('NAME'));
      propertyBlock = propertyBlock.nextConnection && propertyBlock.nextConnection.targetBlock();
    }

    this.updateProperties_();
  },

  updateProperties_: function () {
    let i;
    for (i = 0; i < this.properties_.length; ++i) {
      let field = this.getField('PROPNAME' + i);
      if (field) {
        Blockly.Events.disable();
        try {
          field.setValue(this.properties_[i]);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(this.properties_[i]);
        let input = this.appendValueInput('PROP' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(field, 'PROPNAME' + i);
        input.init();
      }
    }

    while (this.getInput('PROP' + i)) {
      this.removeInput('PROP' + i);
      ++i;
    }
  },

  mutationToDom: function () {
    const container = document.createElement('mutation');
    for (let i = 0; i < this.properties_.length; ++i) {
      const property = document.createElement('prop');
      property.setAttribute('name', this.properties_[i]);
      container.appendChild(property);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    this.properties_ = [];
    for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; ++i) {
      if (childNode.nodeName.toLowerCase() === 'prop') {
        this.properties_.push(childNode.getAttribute('name'));
      }
    }
    this.updateProperties_();
  }
};

Blockly.Blocks['phaser_game_add_tween_from'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TITLE);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.PHASER_TWEEN_TARGET);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.PHASER_TWEEN_DURATION)
      .setCheck('Number');
    this.appendValueInput('EASE')
      .appendField(Blockly.Msg.PHASER_TWEEN_EASE)
      .setCheck('Ease');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_AUTO_START)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'AUTOSTART');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('REPEAT')
      .appendField(Blockly.Msg.PHASER_TWEEN_REPEAT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'YOYO');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_PROPERTIES_HEADER);
    this.setOutput(true, 'Tween');
    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['tween_mutatorarg']));
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_URL);
    this.properties_ = [];
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('tween_mutatorcontainer');
    containerBlock.initSvg();

    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.properties_.length; ++i) {
      let paramBlock = workspace.newBlock('tween_mutatorarg');
      paramBlock.initSvg();

      paramBlock.setFieldValue(this.properties_[i], 'NAME');
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }

    return containerBlock;
  },

  compose: function (containerBlock) {
    this.properties_ = [];
    let propertyBlock = containerBlock.getInputTargetBlock('STACK');
    while (propertyBlock) {
      this.properties_.push(propertyBlock.getFieldValue('NAME'));
      propertyBlock = propertyBlock.nextConnection && propertyBlock.nextConnection.targetBlock();
    }

    this.updateProperties_();
  },

  updateProperties_: function () {
    let i;
    for (i = 0; i < this.properties_.length; ++i) {
      let field = this.getField('PROPNAME' + i);
      if (field) {
        Blockly.Events.disable();
        try {
          field.setValue(this.properties_[i]);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(this.properties_[i]);
        let input = this.appendValueInput('PROP' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(field, 'PROPNAME' + i);
        input.init();
      }
    }

    while (this.getInput('PROP' + i)) {
      this.removeInput('PROP' + i);
      ++i;
    }
  },

  mutationToDom: function () {
    const container = document.createElement('mutation');
    for (let i = 0; i < this.properties_.length; ++i) {
      const property = document.createElement('prop');
      property.setAttribute('name', this.properties_[i]);
      container.appendChild(property);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    this.properties_ = [];
    for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; ++i) {
      if (childNode.nodeName.toLowerCase() === 'prop') {
        this.properties_.push(childNode.getAttribute('name'));
      }
    }
    this.updateProperties_();
  }
};

Blockly.Blocks['phaser_stop_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_STOP_TWEEN)
      .setCheck('Tween');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_STOP_TWEEN_COMPLETE)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COMPLETE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_STOP_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_STOP_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_pause_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_PAUSE_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_PAUSE_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_PAUSE_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_start_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_START_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_START_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_START_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_resume_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_RESUME_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_RESUME_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_RESUME_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_yoyo_tween'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_YOYO_TWEEN);
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'ENABLE')
      .setCheck('Tween');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_YOYO_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('INDEX')
      .appendField(Blockly.Msg.PHASER_YOYO_CHILD_TWEEN_INDEX)
      .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_YOYO_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_YOYO_TWEEN_URL);
  }
};
//endregion
//region EASING
//Note this block does not translate
Blockly.Blocks['phaser_easing'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ['Easing.Back', 'Easing.Back'],
        ['Easing.Bounce', 'Easing.Bounce'],
        ['Easing.Circular', 'Easing.Circular'],
        ['Easing.Cubic', 'Easing.Cubic'],
        ['Easing.Elastic', 'Easing.Elastic'],
        ['Easing.Exponential', 'Easing.Exponential'],
        ['Easing.Quadratic', 'Easing.Quadratic'],
        ['Easing.Quartic', 'Easing.Quintic'],
        ['Easing.Sinusoidal', 'Easing.Sinusoidal']
      ]), 'EASING')
      .appendField(new Blockly.FieldDropdown([
        ['In', 'In'],
        ['Out', 'Out'],
        ['InOut', 'InOut']
      ]), 'DIRECTION');

    this.setOutput(true, 'Ease');
    this.setTooltip(Blockly.Msg.PHASER_EASING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_EASING_URL);
    this.setColour(PHASER_MATH_COLOUR);
  }
};

Blockly.Blocks['phaser_easing_linear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Easing.Linear');
    this.setOutput(true, 'Ease');
    this.setTooltip(Blockly.Msg.PHASER_EASING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_EASING_URL);
    this.setColour(PHASER_MATH_COLOUR);
  }
};
//endregion
//region RANDOM
/*
 Blockly.Blocks['create_random_generator'] = {
 init: function() {
 this.appendDummyInput()
 .appendField("create random number generator");
 this.setInputsInline(true);
 this.setOutput(true, null);
 this.setColour(PHASER_RANDOM_COLOUR);
 this.setTooltip("Creates an object you can use to make random numbers.");
 this.setHelpUrl("https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#RandomDataGenerator");
 }
 };

 Blockly.Blocks['create_random_generator_seeded'] = {
 init: function() {
 this.appendValueInput("SEED")
 .appendField("create random number generator with seed")
 this.setOutput(true, null);
 this.setColour(PHASER_RANDOM_COLOUR);
 this.setTooltip("Creates a random number generator. Using a seed produces predictable results.");
 this.setHelpUrl("https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#RandomDataGenerator");
 }
 };*/

Blockly.Blocks['random_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_ANGLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_ANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_ANGLE_HELP_URL);
  }
};

Blockly.Blocks['random_pick'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.RANDOM_PICK);
    this.setOutput(true, null);
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_PICK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_PICK_HELP_URL);
  }
};

Blockly.Blocks['random_pick_weighted'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.RANDOM_PICK_WEIGHTED);
    this.setOutput(true, null);
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_PICK_WEIGHTED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_PICK_WEIGHTED_HELP_URL);
  }
};

Blockly.Blocks['random_real'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_REAL);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_REAL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_REAL_HELP_URL);
  }
};

Blockly.Blocks['random_real_in_range'] = {
  init: function () {
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.RANDOM_REAL_IN_RANGE);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_REAL_IN_RANGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_REAL_IN_RANGE_HELP_URL);
  }
};

Blockly.Blocks['random_sign'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_SIGN);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_SIGN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_SIGN_HELP_URL);
  }
};

Blockly.Blocks['random_boolean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_BOOLEAN);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_BOOLEAN_TOOLTIP);
    this.setHelpUrl('');
  }
};

//endregion

