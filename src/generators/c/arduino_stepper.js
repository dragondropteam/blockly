/**
 * @file Code for Arduino stepper blocks.
 * @author Aeon Williams
 * @copyright DigiPen Institute of Technology 2018
 */

'use strict';
goog.provide('Blockly.C.arduino_stepper');

goog.require('Blockly.C');

/**
 * Lets you control the stepper motor located at the pins given. Creates a new instance of the Stepper class to be assigned to a variables.
 * @method stepper
 * @block
 * @param steps {Number} the number of steps in one revolution of your motor
 * @param pin1 {Number} pin location of the motor
 * @param pin2 {Number} pin location of the motor
 * @param pin3 {Number} pin location of the motor
 * @param pin4 {Number} pin location of the motor
 * @returns {} Stepper stepper = Stepper(steps, pin1, pin2, pin3, pin4)
 */
Blockly.C['stepper'] = function (block) {
  Blockly.C.definitions_['include_stepper'] = '#include <Stepper.h>';
  const steps = Blockly.C.valueToCode(block, 'STEPS', Blockly.C.ORDER_ATOMIC);
  const pin1 = Blockly.C.valueToCode(block, 'PIN1', Blockly.C.ORDER_ATOMIC);
  const pin2 = Blockly.C.valueToCode(block, 'PIN2', Blockly.C.ORDER_ATOMIC);
  const pin3 = Blockly.C.valueToCode(block, 'PIN3', Blockly.C.ORDER_ATOMIC);
  const pin4 = Blockly.C.valueToCode(block, 'PIN4', Blockly.C.ORDER_ATOMIC);
  const code = `Stepper stepper = Stepper(${steps},${pin1},${pin2},${pin3},${pin4});\n`;
  Blockly.C.definitions_['stepper_create'] = code;
  return ``;
};

/**
 * Sets the motor speed in rotations per minute (RPMs).
 * @method stepper_set_speed
 * @block
 * @param speed {Number} the speed to set the motor to
 * @returns {} stepper.setSpeed(speed);
 */
Blockly.C['stepper_set_speed'] = function (block) {
  Blockly.C.definitions_['include_stepper'] = '#include <Stepper.h>';
  const speed = Blockly.C.valueToCode(block, 'SPEED', Blockly.C.ORDER_ATOMIC);
  return `stepper.setSpeed(${speed});\n`;
}

/**
 * Turns the motor the given number of steps, at the speed determined by the previous setSpeed statement.
 * @method stepper_step
 * @block
 * @param steps {Number} how many steps the motor should take
 * @returns {} stepper.step(steps);
 */
Blockly.C['stepper_steps'] = function (block) {
  Blockly.C.definitions_['include_stepper'] = '#include <Stepper.h>';
  const stepper = Blockly.C.valueToCode(block, 'STEPPER', Blockly.C.ORDER_ATOMIC);
  const steps = Blockly.C.valueToCode(block, 'STEPS', Blockly.C.ORDER_ATOMIC);
  return `stepper.step(${steps});\n`;
};