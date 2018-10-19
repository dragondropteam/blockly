/**
 * @author Luke Powell
 * @author Aeon Williams
 * @file Generates JavaScript for phaser blocks
 * @copyright DigiPen Institute of Technology 2016
 * ```
 * @block
 */

//region MEMBER_FUNCTIONS
/**
 * Generic method to translate a block for a set_<object>_<type>_member block
 * @param block A block containing two value inputs OBJECT and VALUE representing the object the member is on and the value to set it to and a field ELEMENT to determine the member
 * ```
 * @block
 * @ignore
 */

function getMember (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const element = block.getFieldValue('ELEMENT');
  return [`${object}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
}

function getField (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
}

/**
 * Generic method to translate a block for a get_<object>_<type>_member block
 * @param block A block containing a value input OBJECT representing the object the member is on and a field ELEMENT to determine the member
 * @return {String}
 * ```
 * @block
 * @ignore
 */
function setMember (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const element = block.getFieldValue('ELEMENT');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${element} = ${value};\n`;
}

function setPointField (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('PROPERTY');
  const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.${field}.copyFrom(${point});\n`;
}

//endregion

//region GET_OBJECT_WIDTH
//TODO: TO COMPLETE
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['get_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  return [`${variable_name}.width`, Blockly.JavaScript.ORDER_NONE];
};
//endregion
//region SET_OBJECT_WIDTH
/**
 * @deprecated
 * @param block
 * @returns {}
 * ```javascript
 *
 */
Blockly.JavaScript['set_object_width'] = function (block) {
  const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  const value_name = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${variable_name} = ${value_name}`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region HELPER_FUNCTIONS
function timerComplexHelper (block) {
  let code = '';

  for (let i = 0; i < block.itemCount_; i++) {
    code += Blockly.JavaScript.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_ATOMIC) || '';
    if (i < block.itemCount_ - 1) {
      code += ' , ';
    }
  }
  return code;
}

