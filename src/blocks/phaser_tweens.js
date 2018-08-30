/**
 * @file Blocks for Phaser tween
 * @author Luke Powell
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

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