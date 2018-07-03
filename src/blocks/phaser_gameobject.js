//region GROUP
Blockly.Blocks['create_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.create_object_in_group.init}}
 */
Blockly.Blocks['create_object_in_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM_TAG)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'TAG')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.create_object_in_group_with_frame.init}}
 */
Blockly.Blocks['create_object_in_group_with_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM_TAG)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'TAG')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_NUMBER);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['create_object_in_group_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.FROM_TAG);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.IN_GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['create_object_in_group_with_frame_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.FROM_TAG);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.IN_GROUP);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['add_to_group'] = {
  init: function () {
    this.appendValueInput('NEW_ITEM')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD);
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_TO_GROUP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_TO_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TO_GROUP_HELP_URL);
  }
};

Blockly.Blocks['remove_from_group'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE);
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_FROM_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOVE_FROM_GROUP_DESTROY)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'DESTROY');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_FROM_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_FROM_GROUP_HELP_URL);
  }
};

Blockly.Blocks['group_contains'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP);
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.CONTAINS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['group_count_alive_dead'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Living'], [Blockly.Msg.FAINTED, 'Fainted']]), 'STATE')
      .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_OBJECTS);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_HELP_URL);
  }
};

Blockly.Blocks['destroy_group'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.DESTROY_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DESTROY_GROUP_MEMBERS)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'HANDLE_CHILDREN');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_GROUP_HELP_URL);
  }
};

Blockly.Blocks['group_get_all'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_ALL);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_ALL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_ALL_HELP_URL);
  }
};

Blockly.Blocks['group_get_at'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_AT);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_AT_HELP_URL);
  }
};

Blockly.Blocks['group_get_closest_to'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO_MEMBER);
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_CLOSEST_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_CLOSEST_TO_HELP_URL);
  }
};

Blockly.Blocks['group_get_first_alive_dead'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_FIRST)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Alive'], [Blockly.Msg.DEAD, 'Dead']]), 'MODE')
      .appendField(Blockly.Msg.MEMBER_OF_GROUP);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_HELP_URL);
  }
};

Blockly.Blocks['group_get_first_alive_fainted'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Alive'], [Blockly.Msg.FAINTED, 'Fainted']]), 'MODE')
      .appendField(Blockly.Msg.MEMBER_OF_GROUP);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_HELP_URL);
  }
};

Blockly.Blocks['group_get_random'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_RANDOM);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['group_get_random_exists'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_HELP_URL);
  }
};

Blockly.Blocks['group_remove_all'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_REMOVE_ALL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROUP_REMOVE_ALL_DESTROY)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'DESTROY_CHILDREN');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_REMOVE_ALL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_REMOVE_ALL_HELP_URL);
  }
};

Blockly.Blocks['add_to_world'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TO_WORLD);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_TO_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TO_WORLD_HELP_URL);
  }
};
//endregion