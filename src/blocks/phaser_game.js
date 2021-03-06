//region STARTUP
Blockly.Blocks['phaser_simple_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WIDTH)
      .appendField(new Blockly.FieldNumber(800), 'WIDTH')
      .appendField(Blockly.Msg.HEIGHT)
      .appendField(new Blockly.FieldNumber(600), 'HEIGHT');
    this.appendStatementInput('PRELOAD')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_PRELOAD);
    this.appendStatementInput('CREATE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_CREATE);
    this.appendStatementInput('UPDATE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_UPDATE);
    this.setColour(PHASER_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL);
  }
};

Blockly.Blocks['start_phaser_for_states'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_PHASER_FOR_STATES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WIDTH)
      .appendField(new Blockly.FieldNumber(800, 0), 'WIDTH');
    this.appendDummyInput()
      .appendField(Blockly.Msg.HEIGHT)
      .appendField(new Blockly.FieldNumber(600, 0), 'HEIGHT');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.START_PHASER_FOR_STATES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_PHASER_FOR_STATES_HELP_URL);
  }
};
//endregion
//region WORLD
Blockly.Blocks['get_world_property'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HEIGHT, 'height'], [Blockly.Msg.WIDTH, 'width'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_CENTERX, 'centerX'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_CENTERY, 'centerY'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_RANDOMX, 'randomX'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_RANDOMY, 'randomY']]), 'NAME')
      .appendField(Blockly.Msg.GET_WORLD_PROPERTY);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.GET_WORLD_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_WORLD_PROPERTY_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
  }
};

Blockly.Blocks['set_world_bounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS_WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS_HEIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_WORLD_BOUNDS_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['create_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_POINT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_POINT_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
  }
};

Blockly.Blocks['get_world_reference'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_WORLD_REFERENCE);
    this.setOutput(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.GET_WORLD_REFERENCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_WORLD_REFERENCE_HELP_URL);
  }
};

Blockly.Blocks['set_game_pause'] = {
  init: function () {
    this.appendValueInput('PAUSED')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.SET_GAME_PAUSE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.SET_GAME_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_PAUSE_HELP_URL);
  }
};

Blockly.Blocks['get_game_pause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_PAUSE);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.GET_GAME_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_GAME_PAUSE_HELP_URL);
  }
};
//endregion
//region STATES
Blockly.Blocks['statemanager_add_state'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'KEY')
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_TO_MANAGER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_ADD_STATE_TOOLTIP);
    //TODO: This will need supporting documentation on or side illustrating how to create this class with blocks
    // this.setHelpUrl('')
  }
};

Blockly.Blocks['statemanager_start_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_START_STATE)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'TAG');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_get_current_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_restart_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_RESTART_STATE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_RESTART_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_RESTART_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_check_state'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.STATEMANAGER_CHECK_STATE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_CHECK_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_CHECK_STATE_HELP_URL);
  }
};
//endregion
//region TIME
//region TIME.PROPERTIES
const TIME_FIELDS_NUMERIC_WRITABLE = ['desiredFps', 'slowMotion',];
const TIME_FIELDS_NUMERIC_RO = ['pauseDuration', 'physicsElapsed', 'physicsElapsedMS'];
const TIME_FIELDS_NUMERIC = createDropDownField(TIME_FIELDS_NUMERIC_WRITABLE, TIME_FIELDS_NUMERIC_RO);

Blockly.Blocks['get_time_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.all), 'PROPERTY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_HELP_URL);
  },
  onchange: function () {
    if (TIME_FIELDS_NUMERIC_RO.includes(this.getFieldValue('PROPERTY'))) {
      this.customContextMenu = null;
    } else {
      this.customContextMenu = createNumericGetterContextMenu('set_time_numeric_member', {objectTag: null});
    }
  },
  customContextMenu: createNumericGetterContextMenu('set_time_numeric_member', {objectTag: null})
};

Blockly.Blocks['set_time_numeric_member'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.writable), 'PROPERTY')
      .appendField(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_time_numeric_member', {objectTag: null})
};
//endregion

Blockly.Blocks['delta_time_seconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELTA_TIME_SECONDS_TITLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.DELTA_TIME_SECONDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DELTA_TIME_SECONDS_HELP_URL);
  }
};

Blockly.Blocks['delta_time_milliseconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELTA_TIME_MILLISECONDS_TITLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.DELTA_TIME_MILLISECONDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DELTA_TIME_MILLISECONDS_HELP_URL);
  }
};

//region TIMER
const TIMER_FIELDS_NUMERIC_WRITABLE = ['timeCap'];
const TIMER_FIELDS_NUMERIC_RO = ['duration', 'length', 'ms', 'next', 'seconds'];
const TIMER_FIELDS_NUMERIC = createDropDownField(TIMER_FIELDS_NUMERIC_WRITABLE, TIMER_FIELDS_NUMERIC_RO);

const TIMER_FIELDS_BOOLEAN_WRITABLE = ['autoDestroy'];
const TIMER_FIELDS_BOOLEAN_RO = ['expired', 'paused', 'running'];
const TIMER_FIELDS_BOOLEAN = createDropDownField(TIMER_FIELDS_BOOLEAN_WRITABLE, TIMER_FIELDS_BOOLEAN_RO);

Blockly.Blocks['get_timer_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_TIMER_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIMER_FIELDS_NUMERIC.all), 'PROPERTY');
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.OF)
      .setCheck('Timer');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.GET_TIMER_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_TIMER_NUMERIC_MEMBER_HELP_URL);
  },
  onchange: function () {
    if (TIMER_FIELDS_NUMERIC_RO.includes(this.getFieldValue('PROPERTY'))) {
      this.customContextMenu = null;
    } else {
      this.customContextMenu = createNumericGetterContextMenu('set_timer_numeric_member', {objectTag: null});
    }
  },
  customContextMenu: createNumericGetterContextMenu('set_timer_numeric_member', {objectTag: null})
};

Blockly.Blocks['set_timer_numeric_member'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.SET_TIMER_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIMER_FIELDS_NUMERIC.writable), 'PROPERTY')
      .appendField(Blockly.Msg.OF)
      .setCheck('Timer');
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_TIMER_NUMERIC_MEMBER_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TIMER_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TIMER_NUMERIC_MEMBER_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_timer_numeric_member', {objectTag: null})
};

Blockly.Blocks['get_timer_boolean_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_TIMER_BOOLEAN_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIMER_FIELDS_BOOLEAN.all), 'PROPERTY');
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.OF)
      .setCheck('Timer');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.GET_TIMER_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_TIMER_BOOLEAN_MEMBER_HELP_URL);
  },
  onchange: function () {
    if (TIMER_FIELDS_BOOLEAN_RO.includes(this.getFieldValue('PROPERTY'))) {
      this.customContextMenu = null;
    } else {
      this.customContextMenu = createNumericGetterContextMenu('set_timer_boolean_member', {objectTag: null});
    }
  },
  customContextMenu: createNumericGetterContextMenu('set_timer_boolean_member', {objectTag: null})
};

Blockly.Blocks['set_timer_boolean_member'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.SET_TIMER_BOOLEAN_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIMER_FIELDS_BOOLEAN.writable), 'PROPERTY')
      .appendField(Blockly.Msg.OF)
      .setCheck('Timer');
    this.appendValueInput('VALUE')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.SET_TIMER_BOOLEAN_MEMBER_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TIMER_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TIMER_BOOLEAN_MEMBER_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_timer_boolean_member', {objectTag: null})
};

Blockly.Blocks['create_timer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(`${Blockly.Msg.CREATE_TIMER_TITLE}`);
    this.appendDummyInput()
      .appendField(`${Blockly.Msg.AUTO_DESTROY}`)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'AUTO_DESTROY');
    this.setOutput(true, 'Timer');
    this.setInputsInline(false);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_TIMER_URL);
  }
};

Blockly.Blocks['time_constants'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.QUARTER, 'Phaser.Timer.QUARTER'],
        [Blockly.Msg.HALF, 'Phaser.Timer.HALF'],
        [Blockly.Msg.SECOND, 'Phaser.Timer.SECOND'],
        [Blockly.Msg.MINUTE, 'Phaser.Timer.MINUTE']]), 'VALUE');
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_CONSTANTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_TIMER_URL);

  }
};

Blockly.Blocks['start_timer'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.START_TIMER)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.IN)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.START_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_TIMER_URL);
  }
};

Blockly.Blocks['timer_add_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_ADD_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.IN)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_ADD_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_ADD_EVENT_URL);
  }
};

Blockly.Blocks['timer_add_event_complex'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_ADD_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.IN)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_ADD_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_ADD_EVENT_URL);
    this.itemCount_ = 0;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['timer_item']));

    // Assign 'this' to a variable for use in the tooltip closure below.
    let thisBlock = this;
  },
  mutationToDom: function () {

    let container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'),10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    let containerBlock = workspace.newBlock('timer_container');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.itemCount_; i++) {
      let itemBlock = workspace.newBlock('timer_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {

    let itemBlock = containerBlock.nextConnection.targetBlock();

    let connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    for (let i = 0; i < this.itemCount_; i++) {
      let connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    let i = 0;
    let itemBlock = containerBlock.nextConnection.targetBlock();
    while (itemBlock) {
      let input = this.getInput('ADD' + i);
      itemBlock.valueConnection_  = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function () {
    let i;

    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    }

    // Add new inputs.
    for ( i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        let input = this.appendValueInput('ADD' + i);
        if(i == 0)
        {
          input.appendField(Blockly.Msg.WITH);
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  },
};

Blockly.Blocks['timer_container'] = {
  /**
   * Mutator block for container.
   * @this Blockly.Block
   */
  init: function () {
    this.setColour(PHASER_TIME_COLOUR);
    this.appendDummyInput()
      .appendField('arguments');
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
    this.contextMenu = false;
  }
};

Blockly.Blocks['timer_item'] = {
  /**
   * Mutator block for add items.
   * @this Blockly.Block
   */
  init: function () {
    this.setColour(PHASER_TIME_COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WITH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.contextMenu = false;
  }
};

Blockly.Blocks['timer_destroy'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.DESTROY_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DESTROY_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_TIMER_URL);
  }
};

Blockly.Blocks['timer_pause'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.PAUSE_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.PAUSE_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PAUSE_TIMER_URL);
  }
};

Blockly.Blocks['timer_resume'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.RESUME_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RESUME_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESUME_TIMER_URL);
  }
};

Blockly.Blocks['timer_stop'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.STOP_TIMER)
      .setCheck('Timer');
    this.appendDummyInput()
      .appendField(Blockly.Msg.STOP_TIMER_CLEAR_EVENTS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'CLEAR_EVENTS');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.STOP_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_TIMER_URL);
  }
};

Blockly.Blocks['timer_loop_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_LOOP_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_LOOP_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_LOOP_EVENT_URL);
  }
};

Blockly.Blocks['timer_loop_event_complex'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_LOOP_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_LOOP_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_LOOP_EVENT_URL);
    this.itemCount_ = 0;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['timer_item']));

    // Assign 'this' to a variable for use in the tooltip closure below.
    let thisBlock = this;
  },
  mutationToDom: function () {

    let container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'),10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    let containerBlock = workspace.newBlock('timer_container');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.itemCount_; i++) {
      let itemBlock = workspace.newBlock('timer_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {

    let itemBlock = containerBlock.nextConnection.targetBlock();

    let connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    for (let i = 0; i < this.itemCount_; i++) {
      let connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    let i = 0;
    let itemBlock = containerBlock.nextConnection.targetBlock();
    while (itemBlock) {
      let input = this.getInput('ADD' + i);
      itemBlock.valueConnection_  = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function () {
    let i;

    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    }

    // Add new inputs.
    for ( i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        let input = this.appendValueInput('ADD' + i);
        if(i == 0)
        {
          input.appendField(Blockly.Msg.WITH);
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  },
};

Blockly.Blocks['timer_repeat_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT)
      .setCheck('Timer');
    this.appendValueInput('REPEAT_COUNT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT_COUNT);
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_REPEAT_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_REPEAT_EVENT_URL);
  }
};
Blockly.Blocks['timer_repeat_event_complex'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT)
      .setCheck('Timer');
    this.appendValueInput('REPEAT_COUNT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT_COUNT);
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_REPEAT_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_REPEAT_EVENT_URL);
    this.itemCount_ = 0;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['timer_item']));

    // Assign 'this' to a variable for use in the tooltip closure below.
    let thisBlock = this;
  },
  mutationToDom: function () {

    let container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'),10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    let containerBlock = workspace.newBlock('timer_container');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.itemCount_; i++) {
      let itemBlock = workspace.newBlock('timer_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {

    let itemBlock = containerBlock.nextConnection.targetBlock();

    let connections = [];

    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    for (let i = 0; i < this.itemCount_; i++) {
      let connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    let i = 0;
    let itemBlock = containerBlock.nextConnection.targetBlock();
    while (itemBlock) {
      let input = this.getInput('ADD' + i);
      itemBlock.valueConnection_  = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function () {
    let i;

    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    }

    // Add new inputs.
    for ( i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        let input = this.appendValueInput('ADD' + i);
        if(i == 0)
        {
          input.appendField(Blockly.Msg.WITH);
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  },
};
Blockly.Blocks['timer_set_on_complete_callback'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK)
      .setCheck('Timer');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_COMPLETED)
      .appendField(new Blockly.FieldProcedure('onTimerComplete'), 'CALLBACK');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_URL);
  }
};
//endregion
//endregion