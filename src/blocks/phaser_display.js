//region SPRITES AND IMAGES
Blockly.Blocks['create_image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_IMAGE);
    this.setColour(PHASER_COLOUR);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.CREATE_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['create_sprite_sheet'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FRAME_WIDTH)
      .appendField(new Blockly.FieldNumber(0), 'FRAME_WIDTH')
      .appendField(Blockly.Msg.PIXELS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FRAME_HEIGHT)
      .appendField(new Blockly.FieldNumber(0), 'FRAME_HEIGHT')
      .appendField(Blockly.Msg.PIXELS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_SPRITE_SHEET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_SPRITE_SHEET_HELP_URL);
  }
};

Blockly.Blocks['add_image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_IMAGE);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X)
      .setCheck('Number');
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y)
      .setCheck('Number');
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAGGED)
      .setCheck('String');
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['addspritewithatlas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADDSPRITEWITHATLAS);
    this.appendValueInput('tag')
      .setCheck('String')
      .appendField(Blockly.Msg.TAG);
    this.appendValueInput('text_source')
      .setCheck('String')
      .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_SOURCE);
    this.appendValueInput('text_xmlsource')
      .setCheck('String')
      .appendField(Blockly.Msg.XML);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADDSPRITEWITHATLAS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADDSPRITEWITHATLAS_HELP_URL);
  }
};

Blockly.Blocks['imagesubtextureatlas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('spritesource')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('xmlsubtexture')
      .setCheck('String')
      .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_ID);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.IMAGESUBTEXTUREATLAS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IMAGESUBTEXTUREATLAS_HELP_URL);
  }
};

Blockly.Blocks['add_child_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_VI_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['add_child_at'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_AT);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_AT_HELP_URL);
  }
};

Blockly.Blocks['add_child_at_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_AT_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_AT_VI_HELP_URL);
  }
};

Blockly.Blocks['align_in'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ALIGN);
    this.appendValueInput('CONTAINER')
      .setCheck(null)
      .appendField(Blockly.Msg.INSIDE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TOP_LEFT, 'TOP_LEFT'], [Blockly.Msg.TOP_CENTER, 'TOP_CENTER'], [Blockly.Msg.TOP_RIGHT, 'TOP_RIGHT'], [Blockly.Msg.LEFT_CENTER, 'LEFT_CENTER'], [Blockly.Msg.CENTER, 'CENTER'], [Blockly.Msg.RIGHT_CENTER, 'RIGHT_CENTER'], [Blockly.Msg.BOTTOM_LEFT, 'BOTTOM_LEFT'], [Blockly.Msg.BOTTOM_CENTER, 'BOTTOM_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'BOTTOM_RIGHT']]), 'POSITION');
    this.appendValueInput('OFFSETX')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_IN_OFFSET_X);
    this.appendValueInput('OFFSETY')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_IN_OFFSET_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ALIGN_IN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ALIGN_IN_HELP_URL);
  }
};

Blockly.Blocks['align_to'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ALIGN);
    this.appendValueInput('CONTAINER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TOP_LEFT, 'TOP_LEFT'], [Blockly.Msg.TOP_CENTER, 'TOP_CENTER'], [Blockly.Msg.TOP_RIGHT, 'TOP_RIGHT'], [Blockly.Msg.TOP_LEFT, 'LEFT_TOP'], [Blockly.Msg.CENTER_LEFT, 'LEFT_CENTER'], [Blockly.Msg.BOTTOM_LEFT, 'LEFT_BOTTOM'], [Blockly.Msg.TOP_RIGHT, 'RIGHT_TOP'], [Blockly.Msg.CENTER_RIGHT, 'RIGHT_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'RIGHT_BOTTOM'], [Blockly.Msg.BOTTOM_LEFT, 'BOTTOM_LEFT'], [Blockly.Msg.BOTTOM_CENTER, 'BOTTOM_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'BOTTOM_RIGHT']]), 'POSITION');
    this.appendValueInput('OFFSETX')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_TO_OFFSET_X);
    this.appendValueInput('OFFSETY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OFFSET_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ALIGN_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ALIGN_TO_HELP_URL);
  }
};

Blockly.Blocks['bring_to_top'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.BRING_TO_TOP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BRING_TO_TOP_FRONT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.BRING_TO_TOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.BRING_TO_TOP_HELP_URL);
  }
};

Blockly.Blocks['check_world_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.CHECK_WORLD_BOUNDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CHECK_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_WORLD_BOUNDS_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.contains.init}}
 */
Blockly.Blocks['contains'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.IS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.A_CHILD_OF)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['contains_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.IS);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.A_CHILD_OF)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CONTAINS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CONTAINS_VI_HELP_URL);
  }
};

Blockly.Blocks['crop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CROP);
    this.appendValueInput('RECTANGLE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CROP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CROP_HELP_URL);
  }
};

Blockly.Blocks['clear_cropping'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CLEAR_CROPPING);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CLEAR_CROPPING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CLEAR_CROPPING_HELP_URL);
  }
};

Blockly.Blocks['destroy_sprite'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DESTROY);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.DESTROY_SPRITE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_SPRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_SPRITE_HELP_URL);
  }
};

Blockly.Blocks['get_child_at_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET_CHILD_AT_VI);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_AT_VI_HELP_URL);
  }
};

Blockly.Blocks['get_child_index'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_CHILD_INDEX);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_HELP_URL);
  }
};

Blockly.Blocks['get_child_index_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_CHILD_INDEX_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_VI_HELP_URL);
  }
};

Blockly.Blocks['load_texture'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.LOAD_TEXTURE);
    this.appendValueInput('TEXTURE')
      .setCheck('String')
      .appendField(Blockly.Msg.LOAD_TEXTURE_TAG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.LOAD_TEXTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LOAD_TEXTURE_HELP_URL);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['move_down'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_DOWN);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_DOWN_HELP_URL);
  }
};

Blockly.Blocks['move_up'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.UP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_UP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_UP_HELP_URL);
  }
};

Blockly.Blocks['sprite_overlap'] = {
  init: function () {
    this.appendValueInput('SPRITEA')
      .setCheck(null)
      .appendField(Blockly.Msg.DOES);
    this.appendValueInput('SPRITEB')
      .setCheck(null)
      .appendField(Blockly.Msg.SPRITE_OVERLAP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SPRITE_OVERLAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SPRITE_OVERLAP_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.out_of_bounds_kill.init}}
 */
Blockly.Blocks['out_of_bounds_kill'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.OUT_OF_BOUNDS_KILL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.OUT_OF_BOUNDS_KILL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OUT_OF_BOUNDS_KILL_HELP_URL);
  }
};

Blockly.Blocks['out_of_bounds_faint'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.OUT_OF_BOUNDS_FAINT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.OUT_OF_BOUNDS_FAINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OUT_OF_BOUNDS_FAINT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_child.init}}
 */
Blockly.Blocks['remove_child'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_CHILD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_HELP_URL);
  }
};

Blockly.Blocks['remove_child_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_CHILD_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_VI_HELP_URL);
  }
};

Blockly.Blocks['remove_child_at_vi'] = {
  init: function () {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.REMOVE_CHILD_AT_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_AT_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_child_at.init}}
 */
Blockly.Blocks['remove_child_at'] = {
  init: function () {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.REMOVE_CHILD_AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_AT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_children.init}}
 */
Blockly.Blocks['remove_children'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOVE_CHILDREN)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILDREN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILDREN_HELP_URL);
  }
};

Blockly.Blocks['remove_children_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.REMOVE_CHILDREN_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILDREN_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILDREN_VI_HELP_URL);
  }
};

Blockly.Blocks['send_to_back'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SEND);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SEND_TO_BACK);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SEND_TO_BACK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SEND_TO_BACK_HELP_URL);
  }
};

Blockly.Blocks['set_child_index'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_CHILD_INDEX_CHILD);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'PARENT')
      .appendField(Blockly.Msg.SET_CHILD_INDEX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_CHILD_INDEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_CHILD_INDEX_HELP_URL);
  }
};

Blockly.Blocks['set_child_index_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_CHILD_INDEX_CHILD);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_CHILD_INDEX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_CHILD_INDEX_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_CHILD_INDEX_VI_HELP_URL);
  }
};

Blockly.Blocks['set_sprite_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_SPRITE_FRAME);
    this.appendValueInput('FRAME')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SPRITE_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SPRITE_FRAME_HELP_URL);
  }
};

Blockly.Blocks['set_scale_min_max'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_SCALE_MIN_MAX);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_MIN_MAX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_MIN_MAX_HELP_URL);
  }
};

Blockly.Blocks['clear_scale_min_max'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CLEAR_SCALE_MIN_MAX);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CLEAR_SCALE_MIN_MAX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CLEAR_SCALE_MIN_MAX_HELP_URL);
  }
};

Blockly.Blocks['set_texture'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_TEXTURE);
    this.appendValueInput('TEXTURE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TEXTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXTURE_HELP_URL);
  }
};

Blockly.Blocks['swap_children'] = {
  init: function () {
    this.appendValueInput('PARENT')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN);
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN_1);
    this.appendValueInput('CHILD2')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN_2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SWAP_CHILDREN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SWAP_CHILDREN_HELP_URL);
    this.setInputsInline(true);
  }
};

//endregion

//region GAME OBJECT
const GAME_OBJECT_COLOUR = 60;

const GAME_OBJECT_POINT_WRITABLE = ['position', 'anchor', 'cameraOffset', 'scaleMax', 'scaleMin', 'world', 'scale'];
const GAME_OBJECT_POINT_READABLE = ['previousPoint'];
const GAME_OBJECT_POINT_FIELDS = createDropDownField(GAME_OBJECT_POINT_WRITABLE, GAME_OBJECT_POINT_READABLE);

const GAME_OBJECT_BOOLEAN_WRITABLE = ['alive', 'checkWorldBounds', 'debug', 'exists', 'fixedToCamera', 'outOfBoundsFaint', 'outOfCameraBoundsFaint'];
const GAME_OBJECT_BOOLEAN_READONLY = ['destroyPhase', 'inCamera', 'inWorld', 'pendingDestroy'];
const GAME_OBJECT_BOOLEAN_FIELDS = createDropDownField(GAME_OBJECT_BOOLEAN_WRITABLE, GAME_OBJECT_BOOLEAN_READONLY);

const GAME_OBJECT_NUMERIC_WRITABLE = ['x', 'y', 'angle', 'health', 'height', 'width', 'lifespan', 'maxHealth'];
const GAME_OBJECT_NUMERIC_READONLY = ['bottom', 'top', 'left', 'right', 'centerX', 'centerY', 'deltaX', 'deltaY', 'deltaZ', 'offsetX', 'offsetY', 'previousRotation', 'z'];
const GAME_OBJECT_NUMERIC_FIELDS = createDropDownField(GAME_OBJECT_NUMERIC_WRITABLE, GAME_OBJECT_NUMERIC_READONLY);

Blockly.Blocks['set_game_object_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createSetterContextMenu('get_game_object_point_field')
};

Blockly.Blocks['get_game_object_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createPointGetterContextMenu('set_game_object_point_field', {valueTag: 'POINT'})
};

Blockly.Blocks['set_game_object_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createSetterContextMenu('get_game_object_numeric_field')
};

Blockly.Blocks['get_game_object_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createNumericGetterContextMenu('set_game_object_numeric_field')
};

Blockly.Blocks['set_game_object_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'BOOLEAN');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createSetterContextMenu('get_game_object_boolean_field')
};

Blockly.Blocks['set_game_object_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')  // Value input
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_game_object_boolean_field')
};

Blockly.Blocks['get_game_object_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  onchange: function (event) {
    this.setHelpUrl(Blockly.Msg.GAME_OBJECT_FIELD_HELP_URL.replace('%1', this.getFieldValue('PROPERTY')));
  },
  customContextMenu: createBooleanGetterContextMenu('set_game_object_boolean_field')
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_object_anchor.init}}
 */
Blockly.Blocks['set_object_anchor'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_OBJECT_ANCHOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_OBJECT_ANCHOR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_OBJECT_ANCHOR_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.kill_object.init}}
 */
Blockly.Blocks['kill_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.KILL_OBJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.KILL_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KILL_OBJECT_HELP_URL);
  }
};

/**
 * Faints the object, it will still be in memory until it is destroyed can be used to create object pools and the like
 * revive will make the object alive again
 * @type {{init: Blockly.Blocks.faint_object.init}}
 */
Blockly.Blocks['faint_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FAINT_OBJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.FAINT_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.FAINT_OBJECT_HELP_URL);
  }
};

/**
 * Destroys the object removing it from memory
 * @type {{init: Blockly.Blocks.destroy_object.init}}
 */
Blockly.Blocks['destroy_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DESTROY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_OBJECT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_scale.init}}
 */
Blockly.Blocks['set_scale'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_SCALE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('SCALE_X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('SCALE_Y')
      .appendField(Blockly.Msg.Y);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_HELP_URL);
  }
};

Blockly.Blocks['set_scale_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_SCALE_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('SCALE_X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('SCALE_Y')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_VI_HELP_URL);
  }
};

Blockly.Blocks['set_pos'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'PARAM')
      .appendField(Blockly.Msg.ON);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_POS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_POS_HELP_URL);
  }
};

Blockly.Blocks['object_set_to'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.FOR)
      .appendField(new Blockly.FieldVariable('object'), 'OBJECT');
    this.appendValueInput('setx')
      .setCheck('Number')
      .appendField(Blockly.Msg.OBJECT_SET_TO_SETX);
    this.appendValueInput('sety')
      .setCheck('Number')
      .appendField(Blockly.Msg.OBJECT_SET_TO_SETY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.OBJECT_SET_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OBJECT_SET_TO_HELP_URL);
  }
};

Blockly.Blocks['set_velocity'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_VELOCITY)
      .appendField(new Blockly.FieldDropdown([['x', 'body.velocity.x'],
        ['y', 'body.velocity.y'],
        ['Angular', 'body.angularVelocity']]), 'PARAM')
      .appendField(Blockly.Msg.ON);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_VELOCITY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_VELOCITY_HELP_URL);
  }
};

Blockly.Blocks['get_param'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown([['x', 'x'],
        ['y', 'y'],
        ['Width', 'width'],
        ['Height', 'height'],
        ['Velocity x', 'body.velocity.x'],
        ['Velocity y', 'body.velocity.y'],
        ['Angular Velocity', 'body.angularVelocity']]), 'PARAM')
      .appendField(Blockly.Msg.GET_PARAM);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PARAM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PARAM_HELP_URL);
  }
};

Blockly.Blocks['object_inCamera'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.IS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OBJECT_INCAMERA);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.OBJECT_INCAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OBJECT_INCAMERA_HELP_URL);
  }
};
Blockly.Blocks['get_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_CAMERA);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CAMERA_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.camera_follow.init}}
 */
Blockly.Blocks['camera_follow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOLLOW)
      .appendField(new Blockly.FieldVariable('object'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_HELP_URL);
  }
};

Blockly.Blocks['get_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_BOUNDS);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BOUNDS_HELP_URL);
  }
};

Blockly.Blocks['get_rotation'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET_ROTATION);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['rotate'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ROTATE);
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.ROTATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ROTATE_HELP_URL);
  }
};

Blockly.Blocks['set_rotation'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_ROTATION);
    this.appendValueInput('ROTATION')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['get_local_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_LOCAL_BOUNDS);
    this.setOutput(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_LOCAL_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_LOCAL_BOUNDS_HELP_URL);
  }
};

Blockly.Blocks['reset'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESET);
    this.appendValueInput('X_POS')
      .setCheck(null)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck(null)
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESET_HELP_URL);
  }
};

Blockly.Blocks['revive'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.REVIVE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.REVIVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REVIVE_HELP_URL);
  }
};

Blockly.Blocks['move_by'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_BY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_BY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_BY_HELP_URL);
  }
};
//endregion