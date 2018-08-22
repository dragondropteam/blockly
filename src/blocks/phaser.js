/**
 * Created by lukepowell on 12/15/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */

/**
 * This file modified by DigiPen Institute of Technology USA
 * All modifications DigiPen Institute of Technology USA 2017
 * These modifications are not under the Apache license
 */

/**
 * Start modifications by DigiPen Institute of Technology 2017
 * All changes copyright DigiPen Institute of Technology USA 2017
 * These below changes are not under the Apache license
 */

/**
 * End modifications by DigiPen Institute of Technology 2017
 * All changes copyright DigiPen Institute of Technology 2017
 * The above changes are not under the Apache license
 */

// Configuration and utilities

//region COLOURS
const PHASER_COLOUR = 120;
const PHASER_STARTUP_COLOUR = '#558B2F'; //'#689f38';
const PHASER_STATES_COLOUR = '#689f38';  //'#7cb342';
const PHASER_WORLD_COLOUR = '#7cb342';   //'#8bc34a';
const PHASER_TIME_COLOUR = '#8bc34a';    //'#a5d6a7';

const PHASER_SPRITE_AND_IMAGES_COLOUR = '#004d40'; // (no change)
const PHASER_GROUPS_COLOUR = '#116056';            //'#00695c';
const PHASER_ANIMATION_COLOUR = '#22736D';         //'#00796b';
const PHASER_TEXT_COLOUR = '#348783';              //'#009688';
const PHASER_PARTICLES_COLOUR = '#459A9A';         //'#56ADB0';
const PHASER_GAMEOBJECT_COLOUR = '#56ADB0';        //'#00bfa5';
const PHASER_TILEMAP_COLOUR = '#66cbce';        //'#00bfa5';


const PHASER_PHYSICS_STARTUP_COLOUR = '#6A1B9A';   //'#d500f9';
const PHASER_PHYSICS_BODY_COLOUR = '#862FB2';      // (new addition)
const PHASER_PHYSICS_DYNAMICS_COLOUR = '#A142CA';  //'#6a1b9a';
const PHASER_PHYSICS_COLLISION_COLOUR = '#BD56E2'; //'#8e24aa';
const PHASER_PHYSICS_UTIL_COLOUR = '#da95e2'; //'#8e24aa';

const PHASER_GEOMETRY_COLOUR = '#424242';  // UNUSED
const PHASER_RECTANGLE_COLOUR = '#5C5C5C'; //'#616161';
const PHASER_POINT_COLOUR = '#757575';     // (no change)
const PHASER_CIRCLE_COLOUR = '#838383';

const PHASER_KEYBOARD_INPUT = '#1565C0'; // (no change)
const PHASER_MOUSE_INPUT = '#2479D1';    //'#42A5F5' // ?2175CE 277DD5 2C85DB
const PHASER_GAMEPAD_INPUT = '#328DE2';  // UNUSED // ?328DE2
const PHASER_POINTER_INPUT_COLOUR = '#42a5f5';
const PHASER_DEVICE_BUTTON_COLOUR = '#64b5f6';
const PHASER_INPUT_HANDLER_COLOUR = '#66bcff';

const PHASER_UTILITY_COLOUR = '#E03400';      //'#ff6d00'; UNUSED
const PHASER_UTIL_GENERAL_COLOUR = '#E03400'; //'#ff3d00';
const PHASER_UTIL_DEBUG_COLOUR = '#E6460D';   //'#ff6e40';
//const EVAL_JAVASCRIPT_COLOUR = '#EC591A';
const PHASER_UTIL_LIST_COLOUR = '#F36B28';    //'#bf360c';
const PHASER_MATH_COLOUR = '#F97E35';         //'#ffab91';
const PHASER_RANDOM_COLOUR = '#FF9042';       //'#ff7043';

const PHASER_GRAPHICS_COLOUR = '#C66959';

const PHASER_CAMERA_COLOUR = '#607d8b';

const PHASER_SOUND_COLOUR = '#bf9023'; //'#827717'

const PHYSICS_COLOUR = '#5A5C51'; // DEPRECATED ONLY, DO NOT USE

const PHASER_KEYS = [
  ['A', 'A'],
  ['B', 'B'],
  ['C', 'C'],
  ['D', 'D'],
  ['E', 'E'],
  ['F', 'F'],
  ['G', 'G'],
  ['H', 'H'],
  ['I', 'I'],
  ['J', 'J'],
  ['K', 'K'],
  ['L', 'L'],
  ['M', 'M'],
  ['N', 'N'],
  ['O', 'O'],
  ['P', 'P'],
  ['Q', 'Q'],
  ['R', 'R'],
  ['S', 'S'],
  ['T', 'T'],
  ['U', 'U'],
  ['V', 'V'],
  ['W', 'W'],
  ['X', 'X'],
  ['Y', 'Y'],
  ['Z', 'Z'],
  ['UP', 'UP'],
  ['DOWN', 'DOWN'],
  ['LEFT', 'LEFT'],
  ['RIGHT', 'RIGHT'],
  ['ONE', 'ONE'],
  ['TWO', 'TWO'],
  ['THREE', 'THREE'],
  ['FOUR', 'FOUR'],
  ['FIVE', 'FIVE'],
  ['SIX', 'SIX'],
  ['SEVEN', 'SEVEN'],
  ['EIGHT', 'EIGHT'],
  ['NINE', 'NINE'],
  ['ZERO', 'ZERO'],
  ['NUMPAD_1', 'NUMPAD_1'],
  ['NUMPAD_2', 'NUMPAD_2'],
  ['NUMPAD_3', 'NUMPAD_3'],
  ['NUMPAD_4', 'NUMPAD_4'],
  ['NUMPAD_5', 'NUMPAD_5'],
  ['NUMPAD_6', 'NUMPAD_6'],
  ['NUMPAD_7', 'NUMPAD_7'],
  ['NUMPAD_8', 'NUMPAD_8'],
  ['NUMPAD_9', 'NUMPAD_9'],
  ['NUMPAD_ADD', 'NUMPAD_ADD'],
  ['NUMPAD_DECIMAL', 'NUMPAD_DECIMAL'],
  ['NUMPAD_DIVIDE', 'NUMPAD_DIVIDE'],
  ['NUMPAD_ENTER', 'NUMPAD_ENTER'],
  ['NUMPAD_MULTIPLY', 'NUMPAD_MULTIPLY'],
  ['NUMPAD_SUBTRACT', 'NUMPAD_SUBTRACT'],
  ['[', 'OPEN_BRACKET'],
  [']', 'CLOSE_BRACKET'],
  ['F1', 'F1'],
  ['F2', 'F2'],
  ['F3', 'F3'],
  ['F4', 'F4'],
  ['F5', 'F5'],
  ['F6', 'F6'],
  ['F7', 'F7'],
  ['F8', 'F8'],
  ['F9', 'F9'],
  ['F10', 'F10'],
  ['F11', 'F11'],
  ['F12', 'F12'],
  ['ALT', 'ALT'],
  [':', 'COLON'],
  [',', 'COMMA'],
  ['CONTROL', 'CTRL'],
  ['DELETE', 'DELETE'],
  ['END', 'END'],
  ['ENTER', 'ENTER'],
  ['ESC', 'ESC'],
  ['INSERT', 'INSERT'],
  ['-', 'MINUS'],
  ['NUM_LOCK', 'NUM_LOCK'],
  ['PAGE_DOWN', 'PAGE_DOWN'],
  ['PAGE_UP', 'PAGE_UP'],
  ['.', 'PERIOD'],
  ['+', 'PLUS'],
  ['EQUALS', 'EQUALS'],
  ['?', 'QUESTION_MARK'],
  ['"', 'QUOTES'],
  ['TAB', 'TAB'],
  ['~', 'TILDE'],
  ['_', 'UNDERSCORE'],
  ['BACKSPACE', 'BACKSPACE'],
  ['\\', 'BACKWARD_SLASH'],
  ['SPACEBAR', 'SPACEBAR'],
  ['CLEAR', 'CLEAR'],
  ['CAPS LOCK', 'CAPS_LOCK']];

//endregion colours

//region DOM

const dragondrop = {dom: {}};

/***
 * Extension of goog.dom from closure library to allow the createDom function to accept custom attributes in the
 * opt_attributes key-value object
 */

/**
 * Returns a dom node with a set of attributes.  This function accepts varargs
 * for subsequent nodes to be added.  Subsequent nodes will be added to the
 * first node as childNodes.
 *
 * So:
 * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
 * createDom(goog.dom.TagName.P));</code> would return a div with two child
 * paragraphs
 *
 * For passing properties, please see {@link goog.dom.setProperties} for more
 * information.
 *
 * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
 * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
 *     of name-value pairs for attributes. If a string, then this is the
 *     className of the new element. If an array, the elements will be joined
 *     together as the className of the new element.
 * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
 *     strings for text nodes. If one of the var_args is an array or NodeList,
 *     its elements will be added as childNodes instead.
 * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
 *     is a string or a more specific type if it is a member of
 *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
 * @template T
 * @template R := cond(isUnknown(T), 'Element', T) =:
 */
dragondrop.dom.createDom = function (tagName, opt_attributes, var_args) {
  return dragondrop.dom.createDom_(document, arguments);
};

/**
 * Helper for {@code createDom}.
 * @param {!Document} doc The document to create the DOM in.
 * @param {!Arguments} args Argument object passed from the callers. See
 *     {@code goog.dom.createDom} for details.
 * @return {!Element} Reference to a DOM node.
 * @private
 */
dragondrop.dom.createDom_ = function (doc, args) {
  let tagName = String(args[0]);
  let attributes = args[1];
  // Internet Explorer is dumb:
  // name: https://msdn.microsoft.com/en-us/library/ms534184(v=vs.85).aspx
  // type: https://msdn.microsoft.com/en-us/library/ms534700(v=vs.85).aspx
  // Also does not allow setting of 'type' attribute on 'input' or 'button'.
  if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes &&
    (attributes.name || attributes.type)) {
    var tagNameArr = ['<', tagName];
    if (attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"');
    }
    if (attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');

      // Clone attributes map to remove 'type' without mutating the input.
      var clone = {};
      goog.object.extend(clone, attributes);

      // JSCompiler can't see how goog.object.extend added this property,
      // because it was essentially added by reflection.
      // So it needs to be quoted.
      delete clone['type'];

      attributes = clone;
    }
    tagNameArr.push('>');
    tagName = tagNameArr.join('');
  }

  const element = doc.createElement(tagName);

  if (attributes) {
    if (goog.isString(attributes)) {
      element.className = attributes;
    } else if (goog.isArray(attributes)) {
      element.className = attributes.join(' ');
    } else {
      dragondrop.dom.setAttributes(element, attributes);
    }
  }

  if (args.length > 2) {
    goog.dom.append_(doc, element, args, 2);
  }

  return element;
};

dragondrop.dom.setAttributes = function (element, properties) {
  goog.object.forEach(properties, function (val, key) {
    element.setAttribute(key, val);
  });
};

function createDropDownField (write, readOnly) {
  const output = {
    writable: [],
    all: []
  };

  write.forEach(item => {
    output.writable.push([item, item]);
    output.all.push([item, item]);
  });

  readOnly.forEach(item => {
    output.all.push([item, item]);
  });
  return output;
}

//endregion DOM

//region PROPERTY CONTEXT MENUS
/**
 * Creates a shadow block for math_number
 * @param {number} [value=0] The value of the math number
 * @return {R}
 */
function createNumShadowDom (value = 0) {
  const xmlField = dragondrop.dom.createDom('field', {name: 'NUM'}, String(value));
  return dragondrop.dom.createDom('shadow', {type: 'math_number'}, xmlField);
}

/**
 * Creates a shadow block for point_create defaulting to [0,0]
 * @param {number} [x=0] The x coordinate
 * @param {number} [y=0]  The y coordinate
 * @return {R}
 */
function createPointShadowDom ({x = 0, y = 0} = {}) {
  const xmlCoordX = dragondrop.dom.createDom('value', {name: 'X'}, createNumShadowDom(x));
  const xmlCoordY = dragondrop.dom.createDom('value', {name: 'Y'}, createNumShadowDom(y));
  return dragondrop.dom.createDom('shadow', {type: 'point_create'}, xmlCoordX, xmlCoordY);
}

/**
 * Creates a shadow block for text
 * @param {String} [string=''] Starting text for the shadow block
 */
function createStringShadowDom (string = '') {
  const text = dragondrop.dom.createDom('field', {name: 'TEXT'}, string);
  return dragondrop.dom.createDom('shadow', {type: 'text'}, text);
}

/**
 * Create a shadow block for a boolean value
 * @param {boolean} [val=true] Starting value for the shadow block
 * @return {R}
 */
function createBooleanShadowDom (val = true) {
  const boolean = dragondrop.dom.createDom('field', {name: 'BOOL'}, val === true ? 'TRUE' : 'FALSE');
  return dragondrop.dom.createDom('shadow', {type: 'logic_boolean'}, boolean);
}

/**
 * Creates a shadow block for variables values
 * @param {String} [name='defaultObject'] Starting value for the variable drop down on the shadow block
 * @return {R}
 */
function createVariableShadowDom (name = 'defaultObject') {
  const varField = dragondrop.dom.createDom('field', {name: 'VAR'}, name);
  return dragondrop.dom.createDom('shadow', {type: 'variables_get'}, varField);
}

/**
 * Creates a context menu function for property setter blocks. As these blocks only have the property and the object
 * there is no need to distinguish between types of property
 * @param {String} type The name of the getter associated with this property
 * @param propertyTag
 * @param objectTag
 * @return {Function}
 */
function createSetterContextMenu (type, {propertyTag = 'PROPERTY', objectTag = 'OBJECT'} = {}) {
  return function (options) {
    const option = {enabled: true, text: `Create "get ${this.getFieldValue(propertyTag)}"`};
    const field = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));

    // The object the setter is working on
    const block = dragondrop.dom.createDom('block', {type: type}, field);
    if (objectTag) {
      const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));

      block.append(variable);
    }
    console.log(block);
    option.callback = Blockly.ContextMenu.callbackFactory(this, block);
    options.push(option);
  };
}

/**
 * Creates a context menu function for numeric getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a numeric getter
 */
function createNumericGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createNumShadowDom, options);
}

/**
 * Creates a context menu function for string getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a string getter
 */
function createStringGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createStringShadowDom, options);
}

/**
 * Creates a context menu function for boolean getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a boolean getter
 */
function createBooleanGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createBooleanShadowDom, options);
}

/**
 * Creates a context menu function for point getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a point getter
 */
function createPointGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createPointShadowDom, options);
}

/**
 *
 * @param {String} type The type of the setter block the getter is associated with
 * @param {Function} shadowGenerator Function to generate a shadow block to be used on the value field
 * @param {String}} [objectTag="OBJECT"] The tag of the object field
 * @param {String} [propertyTag="PROPERTY"] The tag of the property field
 * @param {String} [valueTag="VALUE"] The tag of the value field
 * @return {Function} Custom context menu to generate a setter from a getter block
 */
function createGetterContextMenu (type, shadowGenerator, {objectTag = 'OBJECT', propertyTag = 'PROPERTY', valueTag = 'VALUE'} = {}) {
  return function (options) {
    const option = {enabled: true, text: `Create "set ${this.getFieldValue(propertyTag)}"`};
    // The property the getter is returning
    const property = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));
    // Default shadow block to populate the setter
    const value = dragondrop.dom.createDom('value', {name: valueTag}, shadowGenerator());
    //The block will contain a shadow block containing the defaults appropriate to the type of the property
    const block = dragondrop.dom.createDom('block', {type: type}, property, value);

    if (objectTag) {
      // The object the getter is working on
      const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));
      block.append(variable);
    }

    console.log(block);
    option.callback = Blockly.ContextMenu.callbackFactory(this, block);
    options.push(option);
  };
}

//endregion Property context menus

//region DEPRECATED

//These blocks exist for backwards compatibility they should not be used in the toolbox going forward

//region ANIMATION_DEPRECATED
/**
 * @Deprecated use stop_animation_vi instead
 * @type {{init: Blockly.Blocks.stop_animation.init}}
 */
Blockly.Blocks['stop_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STOP_ANIMATION)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_ANIMATION_HELP_URL);
  }
};

/**
 * @Deprecated use play_animation_vi instead
 * @type {{init: Blockly.Blocks.play_animation.init}}
 */
Blockly.Blocks['play_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PLAY_ANIMATION);
    this.appendValueInput('ANIMATION');
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setHelpUrl(Blockly.Msg.PLAY_ANIMATION_HELP_URL);
    this.setTooltip(Blockly.Msg.PLAY_ANIMATION_TOOLTIP);
  }
};

/**
 * @Deprecated use set_frame_vi instead
 * @type {{init: Blockly.Blocks.set_frame.init}}
 */
Blockly.Blocks['set_frame'] = {
  init: function () {
    this.appendValueInput('FRAME_NUMBER')
      .appendField(Blockly.Msg.SET_FRAME)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_FRAME_HELP_URL);
  }
};

/**
 * @Deprecated used add_animation_vi instead
 * @type {{init: Blockly.Blocks.add_animation.init}}
 */
Blockly.Blocks['add_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_ANIMATION)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object');
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
    this.setTooltip(Blockly.Msg.ADD_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_ANIMATION_HELP_URL);
    this.setColour(PHASER_ANIMATION_COLOUR);
  }
};
//endregion

//region SPRITE_DEPRECATED
/**
 * @deprecated use add_child_vi instead
 * @type {{init: Blockly.Blocks.add_child.init}}
 */
Blockly.Blocks['add_child'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_HELP_URL);
  }
};

/**
 * @deprecated this should never need to be called, no reason to expose to students preserved for backwards compatibility
 * do not add to the toolbox
 * @type {{init: Blockly.Blocks.reset_frame.init}}
 */
Blockly.Blocks['reset_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESET_FRAME);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.RESET_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESET_FRAME_HELP_URL);
  }
};

/**
 * @deprecated this should never need to be called, no reason to expose to students preserved for backwards compatibility
 * do not add to the toolbox
 * @type {{init: Blockly.Blocks.reset_frame.init}}
 */
Blockly.Blocks['resize_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESIZE_FRAME);
    this.appendValueInput('PARENT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESIZE_FRAME_ACCOMODATE);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.RESIZE_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESIZE_FRAME_HELP_URL);
  }
};
//endregion

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.get_object_width.init}}
 */
Blockly.Blocks['get_object_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_OBJECT_WIDTH)
      .appendField(new Blockly.FieldVariable('item'), 'NAME');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECT_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECT_WIDTH_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_object_width.init}}
 */
Blockly.Blocks['set_object_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_OBJECT_WIDTH)
      .appendField(new Blockly.FieldVariable('item'), 'NAME');
    this.appendValueInput('NAME')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_OBJECT_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_OBJECT_WIDTH_HELP_URL);
  }
};

//endregion

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
Blockly.Blocks['get_world'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_WORLD);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.GET_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_WORLD_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
  }
};

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

//region PHASER_CAMERA

//region CAMERA.METHODS

Blockly.Blocks['game_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAME_CAMERA);
    this.setOutput(true);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.GAME_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_CAMERA_URL);
  }
};

Blockly.Blocks['camera_follow_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FOLLOW_STYLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FOLLOW_LOCKON, 'Phaser.Camera.FOLLOW_LOCKON'],
        [Blockly.Msg.FOLLOW_PLATFORMER, 'Phaser.Camera.FOLLOW_PLATFORMER'],
        [Blockly.Msg.FOLLOW_TOPDOWN, 'Phaser.Camera.FOLLOW_TOPDOWN'],
        [Blockly.Msg.FOLLOW_TOPDOWN_TIGHT, 'Phaser.Camera.FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.appendValueInput('LERP_X')
      .appendField(Blockly.Msg.LERP_X)
      .setCheck('Number');
    this.appendValueInput('LERP_Y')
      .appendField(Blockly.Msg.LERP_Y)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_fade'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FADE);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FADE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FADE_HELP_URL);
  }
};

Blockly.Blocks['camera_flash'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FLASH);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_FLASH_FADE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FLASH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FLASH_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on_xy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_XY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_XY_HELP_URL);
  }
};

Blockly.Blocks['camera_reset'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_HELP_URL);
  }
};

Blockly.Blocks['camera_reset_fx'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET_FX);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_FX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_FX_HELP_URL);
  }
};

Blockly.Blocks['camera_set_bounds_to_world'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_HELP_URL);
  }
};

Blockly.Blocks['camera_set_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_POSITION);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_POSITION_HELP_URL);
  }
};

Blockly.Blocks['camera_set_size'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_SIZE);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_SIZE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_SIZE_HELP_URL);
  }
};

Blockly.Blocks['camera_shake'] = {
  init: function () {
    this.appendValueInput('INTENSITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_SHAKE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SHAKE_INTENSITY);
    this.appendValueInput('DURATION')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_BOTH, 'SHAKE_BOTH'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_VERTICAL, 'SHAKE_VERTICAL'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_HORIZONTAL, 'SHAKE_HORIZONTAL']]), 'DIRECTION')
      .appendField(Blockly.Msg.FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SHAKE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SHAKE_HELP_URL);
  }
};

Blockly.Blocks['camera_unfollow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_UNFOLLOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_UNFOLLOW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_UNFOLLOW_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_styled'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_SELECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LOCKON, 'FOLLOW_LOCKON'], [Blockly.Msg.PLATFORMER, 'FOLLOW_PLATFORMER'], [Blockly.Msg.TOPDOWN, 'FOLLOW_TOPDOWN'], [Blockly.Msg.TOPDOWN_TIGHT, 'FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_HELP_URL);
  }
};
//endregion

//endregion
