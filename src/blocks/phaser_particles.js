//region EMITTER
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