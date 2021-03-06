/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Dart for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.C');

goog.require('Blockly.Generator');

goog.require('Blockly.CReservedWords');

/**
 * Dart code generator.
 * @type {!Blockly.Generator}
 */
Blockly.C = new Blockly.Generator('C');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.C.addReservedWords(Blockly.CReservedWords);

/**
 * Order of operation ENUMs.
 * http://en.cppreference.com/w/cpp/language/operator_precedence
 */
Blockly.C.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.C.ORDER_UNARY_POSTFIX = 1;     // expr++ expr-- () [] .
Blockly.C.ORDER_FUNCTION_CALL = 1;     // f()
Blockly.C.ORDER_FUNCTIONAL_CAST = 1;   // type() type{}
Blockly.C.ORDER_SUBSCRIPT = 1;         // []
Blockly.C.ORDER_MEMBER_ACCESS = 1;     // . ->
Blockly.C.ORDER_UNARY_PREFIX = 2;      // -expr !expr ~expr ++expr --expr
Blockly.C.ORDER_NOT = 2;               // ! ~
Blockly.C.ORDER_C_STYLE_CAST = 2;      // (int)a
Blockly.C.ORDER_INDIRECTION = 2;       // *a
Blockly.C.ORDER_ADDRESS_OF = 2;        // &a
Blockly.C.ORDER_SIZEOF = 2;            // sizeof
Blockly.C.ORDER_NEW = 2;               // new new[]
Blockly.C.ORDER_DELETE = 2;            // delete delete[]
Blockly.C.ORDER_POINTER_TO_MEMBER = 3; // .* ->*
Blockly.C.ORDER_MULTIPLICATIVE = 4;    // * / %
Blockly.C.ORDER_ADDITIVE = 5;          // + -
Blockly.C.ORDER_SHIFT = 6;             // << >>
Blockly.C.ORDER_RELATIONAL  = 7;       // >= > <= <
Blockly.C.ORDER_EQUALITY = 8;          // == !=
Blockly.C.ORDER_BITWISE_AND = 9;       // &
Blockly.C.ORDER_BITWISE_XOR = 10;      // ^
Blockly.C.ORDER_BITWISE_OR = 11;       // |
Blockly.C.ORDER_LOGICAL_AND = 12;      // &&
Blockly.C.ORDER_LOGICAL_OR = 13;       // ||
Blockly.C.ORDER_CONDITIONAL = 14;      // expr ? expr : expr
Blockly.C.ORDER_THROW = 14;            // throw
Blockly.C.ORDER_ASSIGNMENT = 14;       // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.C.ORDER_COMMA = 15;            // ,
Blockly.C.ORDER_NONE = 99;             // (...)

Blockly.C.TYPE_CONVERSION = [];
Blockly.C.TYPE_CONVERSION['INTEGER'] = ['int', Blockly.Msg.TYPE_INT];
Blockly.C.TYPE_CONVERSION['BOOLEAN'] = ['bool', Blockly.Msg.TYPE_BOOL];
Blockly.C.TYPE_CONVERSION['FLOAT'] = ['float', Blockly.Msg.TYPE_FLOAT];
Blockly.C.TYPE_CONVERSION['CHARACTER'] = ['char', Blockly.Msg.TYPE_CHARACTER];
Blockly.C.TYPE_CONVERSION['STRING'] = ['String', Blockly.Msg.TYPE_STRING];
Blockly.C.TYPE_CONVERSION['ArrayINT'] = ['int *', Blockly.Msg.TYPE_INT_ARR];
Blockly.C.TYPE_CONVERSION['ArrayFLOAT'] = ['float *', Blockly.Msg.TYPE_FLOAT_ARR];
Blockly.C.TYPE_CONVERSION['ArrayBoolean'] = ['bool *', Blockly.Msg.TYPE_BOOL_ARR];
Blockly.C.TYPE_CONVERSION['ArrayString'] = ['String *', Blockly.Msg.TYPE_STRING_ARR];
Blockly.C.TYPE_CONVERSION['SERVO'] = ['Servo', Blockly.Msg.TYPE_SERVO];
Blockly.C.TYPE_CONVERSION['STEPPER'] = ['Stepper', Blockly.Msg.TYPE_STEPPER];


/**
 * @return {string}
 */
function DefineVar(name, type){
    return `${type} ${Blockly.C.variableDB_.getName(name, Blockly.Variables.NAME_TYPE)};`;
}

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.C.init = function (workspace) {
    // Create a dictionary of definitions to be printed before the code.
    Blockly.C.definitions_ = Object.create(null);
    // Create a dictionary mapping desired function names in definitions_
    // to actual function names (to avoid collisions with user functions).
    Blockly.C.functions_ = Object.create(null);

    // Create a dictionary mapping desired function names in definitions_
    // to actual function names (to avoid collisions with user functions).
    Blockly.C.functionNames_ = Object.create(null);

    if (!Blockly.C.variableDB_) {
        Blockly.C.variableDB_ =
            new Blockly.Names(Blockly.C.RESERVED_WORDS_);
    } else {
        Blockly.C.variableDB_.reset();
    }

    let defvars = [];
    let variables = Blockly.Variables.allVariables(workspace);
    for (let i = 0; i < variables.length; i++) {
        let varType = workspace.getVariableType(variables[i]);
        console.log(`varType: ${varType} for ${variables[i]}`);
        defvars[i] = DefineVar(variables[i], Blockly.C.TYPE_CONVERSION[varType][0]);
    }
    Blockly.C.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.C.finish = function (code) {
    // Indent every line.
    if (code) {
        code = Blockly.C.prefixLines(code, Blockly.C.INDENT);
    }

    // Convert the definitions dictionary into a list.
    let imports = [];
    let definitions = [];
    for (let name in Blockly.C.definitions_) {
        let def = Blockly.C.definitions_[name];
        if (def.match(/^#include\s/)) {
            imports.push(def);
        } else {
            definitions.push(def);
        }
    }

    // Clean up temporary data.
    delete Blockly.C.definitions_;
    delete Blockly.C.functionNames_;
    Blockly.C.variableDB_.reset();

    let allDefs = imports.join('\n') + '\n' + definitions.join('\n\n');
    return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.C.scrubNakedValue = function (line) {
    return line + ';\n';
};

/**
 * Encode a string as a properly escaped C string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} C string.
 * @private
 */
Blockly.C.quote_ = function (string) {
    return goog.string.quote(string);
};

/**
 * Common tasks for generating Dart from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Dart code created for this block.
 * @return {string} Dart code with comments and subsequent blocks added.
 * @private
 */
Blockly.C.scrub_ = function (block, code) {
    let commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
        // Collect comment for this block.
        let comment = block.getCommentText();
        if (comment) {
            commentCode += Blockly.C.prefixLines(comment, '// ') + '\n';
        }
        // Collect comments for all value arguments.
        // Don't collect comments for nested statements.
        for (let x = 0; x < block.inputList.length; x++) {
            if (block.inputList[x].type == Blockly.INPUT_VALUE) {
                let childBlock = block.inputList[x].connection.targetBlock();
                if (childBlock) {
                    let comment = Blockly.C.allNestedComments(childBlock);
                    if (comment) {
                        commentCode += Blockly.C.prefixLines(comment, '// ');
                    }
                }
            }
        }
    }
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = Blockly.C.blockToCode(nextBlock);
    return commentCode + code + nextCode;
};

