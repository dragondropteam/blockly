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
//region ANIMATION
Blockly.Blocks['add_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ADD_ANIMATION_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.NAME), 'NAME');
    this.appendValueInput('FRAMES')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH_FRAMES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISPLAYED_AT)
      .appendField(new Blockly.FieldNumber(60), 'FPS')
      .appendField(Blockly.Msg.FPS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADD_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_ANIMATION_VI_HELP_URL);
    this.setColour(PHASER_ANIMATION_COLOUR);
  }
};

Blockly.Blocks['play_animation_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PLAY_ANIMATION_VI);
    this.appendValueInput('ANIMATION');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.PLAY_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PLAY_ANIMATION_VI_HELP_URL);
    this.setInputsInline(true);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_next.init}}
 */
Blockly.Blocks['animation_next'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_NEXT)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_previous.init}}
 */
Blockly.Blocks['animation_previous'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_HELP_URL);
  }
};

Blockly.Blocks['animation_next_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_NEXT_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_VI_HELP_URL);
  }
};

Blockly.Blocks['animation_previous_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_VI_HELP_URL);
  }
};

Blockly.Blocks['refresh_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REFRESH_FRAME)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.REFRESH_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REFRESH_FRAME_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_update.init}}
 */
Blockly.Blocks['animation_update'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_UPDATE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_UPDATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_UPDATE_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.validate_frames.init}}
 */
Blockly.Blocks['validate_frames'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.VALIDATE_FRAMES)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'Object');
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_HELP_URL);
  }
};

Blockly.Blocks['validate_frames_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI);
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_destroy.init}}
 */
Blockly.Blocks['animation_destroy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_DESTROY)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_HELP_URL);
  }
};

Blockly.Blocks['animation_destroy_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ANIMATION_DESTROY_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_VI_HELP_URL);
  }
};

Blockly.Blocks['stop_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.STOP_ANIMATION_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_ANIMATION_VI_HELP_URL);
  }
};

Blockly.Blocks['set_frame_vi'] = {
  init: function () {
    this.appendValueInput('FRAME_NUMBER')
      .appendField(Blockly.Msg.SET_FRAME_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_FRAME_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_FRAME_VI_HELP_URL);
  }
};

// Revised field manipulation blocks for animations
// Note that these do not need to be translated because they will always have to appear as shown below.
const ANIMATION_BOOLEAN_WRITABLE = ['enableUpdate', 'isFinished', 'isPaused', 'isPlaying', 'isReversed', 'faintOnComplete', 'loop', 'paused', 'reversed'];
const ANIMATION_BOOLEAN_FIELDS = createDropDownField(ANIMATION_BOOLEAN_WRITABLE, []);

const ANIMATION_NUMERIC_WRITABLE = ['delay', 'frame', 'loopCount', 'speed'];
const ANIMATION_NUMERIC_READABLE = ['frameTotal'];
const ANIMATION_NUMERIC_FIELDS = createDropDownField(ANIMATION_NUMERIC_WRITABLE, ANIMATION_NUMERIC_READABLE);

const ANIMATION_STRING_WRITABLE = ['name'];
const ANIMATION_STRING_FIELDS = createDropDownField(ANIMATION_STRING_WRITABLE, []);

Blockly.Blocks['set_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createSetterContextMenu('get_animation_string_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createNumericGetterContextMenu('set_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  onchange: function(event) {
    this.setHelpUrl(Blockly.Msg.ANIMATION_FIELD_HELP_URL.replace('%1', this.getFieldValue('FIELD')));
  },
  customContextMenu: createStringGetterContextMenu('set_animation_string_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_property'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.ON_GAMEOBJECT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTANIM, 'currentAnim'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTFRAME, 'currentFrame'], [Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMEDATA, 'frameData'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMETOTAL, 'frameTotal'], [Blockly.Msg.GAME, 'game'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_ISLOADED, 'isLoaded'], [Blockly.Msg.NAME, 'name'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SPRITE, 'sprite'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.setOutput(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_PROPERTY_HELP_URL);
  }
};

Blockly.Blocks['set_animation_property'] = {
  init: function () {
    this.appendValueInput('NEWPROPERTY')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_animation_property_vi.init}}
 */
Blockly.Blocks['set_animation_property_vi'] = {
  init: function () {
    this.appendDummyInput('NEWPROPERTY')
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_get_animation.init}}
 */
Blockly.Blocks['animation_get_animation'] = {
  init: function () {
    this.appendValueInput('Sprite')
      .setCheck(null)
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION_NAME)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'NAME');
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL);
  }
};
//endregion
//region PHASER_TEXT
Blockly.Blocks['add_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('INITIAL_TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
    this.appendValueInput('FONT_SIZE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT_FONT_COLOUR)
      .appendField(new Blockly.FieldColour('#ff0000'), 'FILL');
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['add_text_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('INITIAL_TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
    this.appendValueInput('FONT_SIZE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

/**
 * @deprecated Use set_text_vi instead
 * @type {{init: Blockly.Blocks.set_text.init}}
 */
Blockly.Blocks['set_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_TEXT)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['set_text_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_TEXT_VI);
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_VI_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['create_bitmapFont'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_BITMAPFONT);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.appendValueInput('XML')
      .appendField(Blockly.Msg.CREATE_BITMAPFONT_XML)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TEXT_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_BITMAPFONT_HELP_URL);
  }
};
//endregion
//region PARTICLES
Blockly.Blocks['addemitter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADDEMITTER);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('maxParticles')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADDEMITTER_MAXPARTICLES);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.ADDEMITTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADDEMITTER_HELP_URL);
  }
};

Blockly.Blocks['emitter_make_particles'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES);
    this.appendValueInput('KEYS')
      .appendField(Blockly.Msg.KEYS)
      .setCheck(['Array', 'String']);
    this.appendValueInput('FRAMES')
      .appendField(Blockly.Msg.FRAMES)
      .setCheck(['Array', 'Number']);
    this.appendValueInput('QUANTITY')
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_QAUNTITY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_COLLIDE_WORLD)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDEWORLDBOUNDS');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(false);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setHelpUrl(Blockly.Msg.EMITTER_MAKE_PARTICLES_HELP_URL);
    this.setTooltip(Blockly.Msg.EMITTER_MAKE_PARTICLES_TOOLTIP);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_make_particles.init}}
 */
Blockly.Blocks['emitters_make_particles'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.EMITTERS_MAKE_PARTICLES_TAG), 'TAG');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_MAKE_PARTICLES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_MAKE_PARTICLES_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_rotation.init}}
 */
Blockly.Blocks['emitters_set_rotation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION);
    this.appendValueInput('NAME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('NAME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_rotation_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ROTATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ROTATION_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_start.init}}
 */
Blockly.Blocks['emitters_start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_START);
    this.appendValueInput('EXPLODE')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.EMITTERS_START_BURST);
    this.appendValueInput('LIFESPAN')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_LIEFSPAN);
    this.appendValueInput('FREQUENCY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_FREQUENCY);
    this.appendValueInput('QUANTITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_QUANTITY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_START_HELP_URL);
  }
};

Blockly.Blocks['emitters_start_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTERS_START_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_START_VI_EXPLODE)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXPLODE');
    this.appendValueInput('LIFESPAN')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_LIFESPAN);
    this.appendValueInput('FREQUENCY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_FREQUENCY);
    this.appendValueInput('QUANTITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_QUANTITY);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_START_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_START_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_alpha.init}}
 */
Blockly.Blocks['emitters_set_alpha'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ALPHA);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ALPHA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ALPHA_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_alpha_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ALPHA_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ALPHA_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_scale.init}}
 */
Blockly.Blocks['emitters_set_scale'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_SCALE);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_scale_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_VI_HELP_URL);
  }
};

Blockly.Blocks['set_emit_from'] = {
  init: function () {
    this.appendValueInput('Object')
      .setCheck(null)
      .appendField(Blockly.Msg.ON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_EMIT_FROM)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'X'], [Blockly.Msg.Y, 'Y']]), 'cord')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('emit_loc')
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_EMIT_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_EMIT_FROM_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_speed.init}}
 */
Blockly.Blocks['emitters_set_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_SPEED);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SPEED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SPEED_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_speed_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SPEED_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SPEED_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_gravity.init}}
 */
Blockly.Blocks['emitters_set_gravity'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY);
    this.appendValueInput('GRAVITY')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_gravity_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_VI);
    this.appendValueInput('GRAVITY')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_WIDTH);
    this.appendValueInput('WIDTH')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_WIDTH_HELP_URL);
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
//tilemap