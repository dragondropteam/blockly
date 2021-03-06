

'use strict';
goog.provide('Blockly.C.arduino');

goog.require('Blockly.C');

Blockly.C['hardwarestartup_arduino'] = function (block) {
    var statements_do = Blockly.C.statementToCode(block, 'do');
    Blockly.C.definitions_['setup'] = `// Below is the "setup" function. It runs one time as soon as the board turns on. You can add stuff\nvoid setup(){\n${statements_do}}\n`;
    return null;
};

//region TIME

/**
 * @arduino
 * @namespace ArduinoTime
 */

/**
 * Delays the program for the given number of seconds.
 * @method delayseconds
 * @param value_seconds the number of seconds
 * @returns {}
 * <pre><code>
 * delay(value_seconds * 1000);
 * </code></pre>
 *  @memberOf ArduinoTime
 * @block
 */
Blockly.C['delayseconds'] = function (block) {
    var value_seconds = Blockly.C.valueToCode(block, 'SECONDS', Blockly.C.ORDER_ATOMIC) || '0';
    //return 'delay( ' + (value_seconds * 1000) + ' ); // Delay ' + value_seconds + ' second(s)\n';
  return `delay(${value_seconds} * 1000);\n`;
};
Blockly.C['delayms'] = function (block) {
    var value_milliseconds = Blockly.C.valueToCode(block, 'MILLISECONDS', Blockly.C.ORDER_ATOMIC) || '0';
    return 'delay( ' + value_milliseconds + ' );\n';
};
Blockly.C['delaymicroseconds'] = function (block) {
    var value_microseconds = Blockly.C.valueToCode(block, 'MICROSECONDS', Blockly.C.ORDER_ATOMIC) || '0';
    return 'delayMicroseconds( ' + value_microseconds + ' );\n';
};
Blockly.C['seconds'] = function (block) {
    return ['(millis() / 1000)', Blockly.C.ORDER_NONE];
};
Blockly.C['milliseconds'] = function (block) {
    return ['millis()', Blockly.C.ORDER_NONE];
};
Blockly.C['microseconds'] = function (block) {
    return ['micros()', Blockly.C.ORDER_NONE];
};

//endregion

//region CONSTANTS

Blockly.C['high'] = function (block) {
    return ['HIGH', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['low'] = function (block) {
    return ['LOW', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['led_builtin'] = function (block) {
    return ['LED_BUILTIN', Blockly.C.ORDER_ATOMIC];
};

//endregion

//region DIGITAL I/O
Blockly.C['pininput'] = function (block) {
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    var mode = block.getFieldValue('MODE') || '0';
    return `pinMode(${pin}, ${mode});\n`;
};

Blockly.C['digitalwrite'] = function (block) {
    var value = block.getFieldValue('VALUE') || 'HIGH';
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    return `digitalWrite(${pin}, ${value});\n`;
};

Blockly.C['digital_read'] = function (block) {
    var value_pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    var code = `digitalRead(${value_pin})`;
    return [code, Blockly.C.ORDER_ATOMIC];
};
//endregion

//region ANALOG IO
Blockly.C['analog_reference'] = function (block) {
    var type = block.getFieldValue('TYPE');
    return `analogReference(${type});\n`;
};

Blockly.C['analog_read'] = function (block) {
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    return [`analogRead(${pin})`, Blockly.C.ORDER_ATOMIC];
};


Blockly.C['analog_write'] = function (block) {
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    return `analogWrite(${pin}, ${value});\n`;
};
//endregion

//region DUO AND ZERO ONLY

//endregion

//region ADVANCED I/O

Blockly.C['tone_pin_freq_duration'] = function (block) {
    var frequency = Blockly.C.valueToCode(block, 'FREQUENCY', Blockly.C.ORDER_ATOMIC);
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    var duration = Blockly.C.valueToCode(block, 'DURATION', Blockly.C.ORDER_ATOMIC);
    return `tone(${pin}, ${frequency}, ${duration});\n`;
};

Blockly.C['tone_pin_freq'] = function (block) {
    var frequency = Blockly.C.valueToCode(block, 'FREQUENCY', Blockly.C.ORDER_ATOMIC) || '0';
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    return `tone(${pin}, ${frequency});\n`;
};

Blockly.C['advanced_io_pulse_in'] = function (block) {
    const pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    const value = block.getFieldValue('VALUE');
    return [`pulseIn(${pin}, ${value})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['advanced_io_pulse_in_timeout'] = function (block) {
    const pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const timeout = Blockly.C.valueToCode(block, 'TIMEOUT', Blockly.C.ORDER_ATOMIC) || '0';
    const value = block.getFieldValue('VALUE');
    return [`pulseIn(${pin}, ${value}, ${timeout})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['advanced_io_pulse_in_long'] = function (block) {
    const pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const value = block.getFieldValue('VALUE');
    return [`pulseInLong(${pin}, ${value})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['advanced_io_pulse_in_long_timeout'] = function (block) {
    const pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const timeout = Blockly.C.valueToCode(block, 'TIMEOUT', Blockly.C.ORDER_ATOMIC) || '0';
    const value = block.getFieldValue('VALUE');
    return [`pulseInLong(${pin}, ${value}, ${timeout})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['advanced_io_shift_in'] = function (block) {
    const dataPin = Blockly.C.valueToCode(block, 'DATA_PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const clockPin = Blockly.C.valueToCode(block, 'CLOCK_PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const bitOrder = block.getFieldValue('BIT_ORDER');
    return [`shiftIn(${dataPin}, ${clockPin}, ${bitOrder})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['advanced_io_shift_out'] = function (block) {
    const dataPin = Blockly.C.valueToCode(block, 'DATA_PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const clockPin = Blockly.C.valueToCode(block, 'CLOCK_PIN', Blockly.C.ORDER_ATOMIC) || '0';
    const bitOrder = block.getFieldValue('BIT_ORDER');
    const value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC) || '0';
    return [`shiftOut(${dataPin}, ${clockPin}, ${bitOrder}, ${value})`, Blockly.C.ORDER_ATOMIC];
};

//endregion

//region RANDOM NUMBERS

Blockly.C['random_seed'] = function (block) {
    var seed = Blockly.C.valueToCode(block, 'SEED', Blockly.C.ORDER_ATOMIC);
    return `randomSeed(${seed});\n`;
};

Blockly.C['random'] = function (block) {
    var min = Blockly.C.valueToCode(block, 'MIN', Blockly.C.ORDER_ATOMIC) || '0';
    var max = Blockly.C.valueToCode(block, 'MAX', Blockly.C.ORDER_ATOMIC);
    return [`random(${min}, ${max})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_random_seed'] = function(block) {
  var seed = Blockly.C.valueToCode(block, 'SEED', Blockly.C.ORDER_ATOMIC);
  return `randomSeed(${seed});\n`;
};

Blockly.C['arduino_random'] = function(block) {
  var min = Blockly.C.valueToCode(block, 'MIN', Blockly.C.ORDER_ATOMIC);
  var max = Blockly.C.valueToCode(block, 'MAX', Blockly.C.ORDER_ATOMIC);
  return [`random(${min}, ${max})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['arduino_srand'] = function(block) {
  const seed = Blockly.C.valueToCode(block, 'SEED', Blockly.C.ORDER_ATOMIC);
  return `srand(${seed});\n`;
};
//endregion

//region BITS AND BYTES

Blockly.C['bit'] = function (block) {
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return [`bit(${value})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['bit_clear'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return `bitClear(${num}, ${position});\n`;
};

Blockly.C['bit_set'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return `bitSet(${num}, ${position});\n`;
};

Blockly.C['bit_write'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return `bitWrite(${num}, ${position}, ${value});\n`;
};

Blockly.C['bit_read'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return [`bitRead(${num}, ${position})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['high_byte'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    return [`highByte(${num})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['low_byte'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    return [`lowByte(${num})`, Blockly.C.ORDER_ATOMIC];
};

//endregion

//region MATH
Blockly.C['arduino_math_map'] = function (block) {
    const value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    const fromLow = Blockly.C.valueToCode(block, 'FROM_LOW', Blockly.C.ORDER_ATOMIC);
    const fromHigh = Blockly.C.valueToCode(block, 'FROM_HIGH', Blockly.C.ORDER_ATOMIC);
    const toLow = Blockly.C.valueToCode(block, 'TO_LOW', Blockly.C.ORDER_ATOMIC);
    const toHigh = Blockly.C.valueToCode(block, 'TO_HIGH', Blockly.C.ORDER_ATOMIC);
    return [`map(${value}, ${fromLow}, ${fromHigh}, ${toLow}, ${toHigh})`, Blockly.C.ORDER_ATOMIC];
};
//endregion

//region CHARACTER
Blockly.C['char_input'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = block.getFieldValue('TEXT');
  return [`'${char}'`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['char_to_lower'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`tolower(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_to_upper'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`toupper(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_alnum'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isalnum(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_alpha'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isalpha(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_cntrl'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`iscntrl(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_digit'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isdigit(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_graph'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isgraph(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_lower'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`islower(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_print'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isprint(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_punct'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`ispunct(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_space'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isspace(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_upper'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isupper(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};

Blockly.C['char_is_xdigit'] = function (block) {
  Blockly.C.definitions_['import_c_type'] =
    '#include <ctype.h>';
  const char = Blockly.C.valueToCode(block, 'CHAR', Blockly.C.ORDER_ATOMIC);
  return [`isxdigit(${char})`, Blockly.C.ORDER_FUNCTION_CALL];
};
//endregion CHARACTER