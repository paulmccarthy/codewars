/* eslint-disable no-case-declarations */

const utils = require('./utils');

const assemblerInterpreter = (program) => {
    const registers = {};
    let stackPointer = 0;

    const parsedProgram = utils.programParser(program);
    let endCalled;
    let msg = '';
    let cmpResult;
    let prevStackPointer;
    let prevCallPointer;

    while (stackPointer < parsedProgram.length) {
        const currentInstruction = parsedProgram[stackPointer].split(' ');
        const code = currentInstruction[0];

        let register;
        let destination;
        let source;
        let label;
        let location;

        switch (code) {
            case 'mov':
                // requires a source and a destination
                destination = currentInstruction[1].replace(',', '');
                source = currentInstruction[2].replace(',', '');

                // source can be a constant or another register
                if (utils.isConstant(source)) {
                    registers[destination] = Number(source);
                } else {
                    registers[destination] = Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'inc':
                register = currentInstruction[1].replace(',', '');
                registers[register] += 1;
                stackPointer += 1;
                break;

            case 'dec':
                register = currentInstruction[1].replace(',', '');
                registers[register] -= 1;
                stackPointer += 1;
                break;

            case 'jnz':
                register = currentInstruction[1].replace(',', '');
                const step = currentInstruction[2].replace(',', '');

                if (registers[register] === 0) {
                    stackPointer += 1;
                } else {
                    stackPointer += Number(step);
                }
                break;

            case 'add':
                source = currentInstruction[2].replace(',', '');
                destination = currentInstruction[1].replace(',', '');

                if (utils.isConstant(source)) {
                    registers[destination] += Number(source);
                } else {
                    registers[destination] += Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'sub':
                source = currentInstruction[2].replace(',', '');
                destination = currentInstruction[1].replace(',', '');

                if (utils.isConstant(source)) {
                    registers[destination] -= Number(source);
                } else {
                    registers[destination] -= Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'mul':
                source = currentInstruction[2].replace(',', '');
                destination = currentInstruction[1].replace(',', '');

                if (utils.isConstant(source)) {
                    registers[destination] *= Number(source);
                } else {
                    registers[destination] *= Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'div':
                source = currentInstruction[2].replace(',', '');
                destination = currentInstruction[1].replace(',', '');

                if (utils.isConstant(source)) {
                    registers[destination] /= Number(source);
                } else {
                    registers[destination] /= Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'cmp':
                const x = currentInstruction[1].replace(',', '');
                const y = currentInstruction[2].replace(',', '');

                const numX = utils.isConstant(x) ? Number(x) : Number(registers[x]);
                const numY = utils.isConstant(y) ? Number(y) : Number(registers[y]);
                cmpResult = numX - numY;

                stackPointer += 1;
                break;

            case 'msg':
                // remove the 'code', and recreate the string, split on commas
                const message = currentInstruction.slice(1, currentInstruction.length).join(' ').split(',');

                msg = message.map((part) => {
                    // no quotes means it's a register
                    if (part.indexOf('"') === -1) {
                        return registers[part.trim()];
                    }

                    return part.replace(/"/g, '');
                }).join('');

                stackPointer += 1;
                break;

            case 'end':
                endCalled = true;
                stackPointer = parsedProgram.length;
                break;

            case 'ret':
                stackPointer = prevStackPointer;
                break;

            case 'jmp':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                prevStackPointer = stackPointer;
                stackPointer = location + 1;
                break;

            case 'jne':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult !== 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'je':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult === 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'jge':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult >= 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'jg':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult > 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'jle':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult <= 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'jl':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                if (cmpResult < 0) {
                    prevStackPointer = stackPointer;
                    stackPointer = location + 1;
                } else {
                    stackPointer += 1;
                }

                break;

            case 'call':
                label = currentInstruction[1] + ':';
                location = parsedProgram.indexOf(label);

                // jump to the next instruction, after the label
                prevCallPointer = stackPointer;
                stackPointer = location + 1;

                break;

            default:
                if (code[code.length - 1] !== ':') {
                    throw new Error('Unknown instruction type: ' + code);
                }
        }
    }

    if (endCalled) {
        return msg;
    }

    return -1;
};

module.exports = assemblerInterpreter;
