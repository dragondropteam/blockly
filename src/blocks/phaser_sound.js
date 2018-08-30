/**
 * @file Blocks for Phaser sound
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

//region SOUND.PROPERTIES
const SOUND_FIELDS_BOOLEAN_WRITABLE = ['autoplay', 'loop', 'mute', 'override', 'paused',];
const SOUND_FIELDS_BOOLEAN_RO = ['isDecoded', 'isDecoding', 'isPlaying', 'pendingPlayback', 'usingAudioTag', 'usingWebAudio'];
const SOUND_FIELDS_BOOLEAN = createDropDownField(SOUND_FIELDS_BOOLEAN_WRITABLE, SOUND_FIELDS_BOOLEAN_RO);

Blockly.Blocks['set_sound_boolean_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.writable), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_sound_boolean_member', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_sound_boolean_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_sound_boolean_member', {propertyTag: 'ELEMENT'})
};

const SOUND_FIELDS_NUMERIC_WRITABLE = ['position', 'volume'];
const SOUND_FIELDS_NUMERIC_RO = ['currentTime', 'duration', 'durationMS', 'pausedPosition', 'pausedTime', 'startTime', 'stopTime', 'totalDuration'];
const SOUND_FIELDS_NUMERIC = createDropDownField(SOUND_FIELDS_NUMERIC_WRITABLE, SOUND_FIELDS_NUMERIC_RO);

Blockly.Blocks['set_sound_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.writable), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_sound_numeric_member', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_sound_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createNumericGetterContextMenu('set_sound_numeric_member', {propertyTag: 'ELEMENT'})
};

const SOUND_FIELDS_STRING_RO = ['currentMarker', 'key'];
const SOUND_FIELDS_STRING = createDropDownField([], SOUND_FIELDS_STRING_RO);

Blockly.Blocks['get_sound_string_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_STRING.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.GET_SOUND_STRING_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_STRING_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  }
};
//endregion

//region SOUND.METHODS
Blockly.Blocks['load_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOAD_SOUND);
    this.appendValueInput('TAG')
      .setCheck('String')
      .appendField(Blockly.Msg.TAG);
    this.appendValueInput('SOURCE')
      .setCheck('String')
      .appendField(Blockly.Msg.SOURCE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.LOAD_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LOAD_SOUND_HELP_URL);
  }
};

Blockly.Blocks['add_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_SOUND);
    this.appendValueInput('TAG')
      .setCheck('from tag')
      .setCheck('String');
    this.appendValueInput('VOLUME')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_VOLUME);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOPING)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOOPING');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_SOUND_HELP_URL);
  }
};

Blockly.Blocks['play_sound'] = {
  init: function () {
    this.appendValueInput('TAG')
      .setCheck(null)
      .appendField(Blockly.Msg.PLAY_SOUND);
    this.appendValueInput('VOLUME')
      .setCheck(null)
      .appendField(Blockly.Msg.AT_VOLUME);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOPING)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOOPING');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.PLAY_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PLAY_SOUND_HELP_URL);
  }
};

Blockly.Blocks['load_audio'] = {
  init: function () {

  }
};

Blockly.Blocks['remove_sound'] = {
  init: function () {
    this.appendValueInput('TAG')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_SOUND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_SOUND_HELP_URL);
  }
};

Blockly.Blocks['stop_pause_resume_sounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_STOP, 'stop'], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_PAUSE, 'pause'], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_RESUME, 'resume']]), 'OPTION')
      .appendField(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_in'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_IN);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.SOUND_FADE_IN_LOOP)
      .appendField(new Blockly.FieldCheckbox(), 'LOOP');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_IN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_IN_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_OUT);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_OUT_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_to'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_TO);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.SOUND_FADE_TO_VOLUME)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_TO_HELP_URL);
  }
};

Blockly.Blocks['sound_loop_full'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_LOOP_FULL);
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_LOOP_FULL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_LOOP_FULL_HELP_URL);
  }
};

Blockly.Blocks['sound_pause'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_PAUSE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_PAUSE_HELP_URL);
  }
};

Blockly.Blocks['sound_resume'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_RESUME);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_RESUME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_RESUME_HELP_URL);
  }
};

Blockly.Blocks['sound_stop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_STOP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_STOP_HELP_URL);
  }
};

Blockly.Blocks['sound_play'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_PLAY);
    this.appendValueInput('POSITION')
      .appendField(Blockly.Msg.SOUND_PLAY_POSITION)
      .setCheck('Number');
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.appendDummyInput()
      .appendField(Blockly.Msg.RESTART)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'RESTART');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_PLAY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_PLAY_HELP_URL);
  }
};

Blockly.Blocks['sound_restart'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_RESTART);
    this.appendValueInput('POSITION')
      .appendField(Blockly.Msg.SOUND_RESTART_POSITION)
      .setCheck('Number');
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_RESTART_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_RESTART_HELP_URL);
  }
};
//endregion