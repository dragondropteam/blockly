/**
 * @file Blocks for Phaser math
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

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

//region RANDOMDATAGENERATOR
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