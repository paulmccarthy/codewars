/* eslint-disable no-case-declarations */

const utils = require('./utils');

const assemblerInterpreter = (program) => {
    const registers = {};
    let stackPointer = 0;

    const parsedProgram = utils.programParser(program);

    while (stackPointer < parsedProgram.length) {
        const currentInstruction = parsedProgram[stackPointer].split(' ');
        const code = currentInstruction[0];

        let register;

        switch (code) {
            case 'mov':
                // requires a source and a destination
                const destination = currentInstruction[1];
                const source = currentInstruction[2];

                // source can be a constant or another register
                if (utils.isConstant(source)) {
                    registers[destination] = Number(source);
                } else {
                    registers[destination] = Number(registers[source]);
                }

                stackPointer += 1;
                break;

            case 'inc':
                register = currentInstruction[1];
                registers[register] += 1;
                stackPointer += 1;
                break;

            case 'dec':
                register = currentInstruction[1];
                registers[register] -= 1;
                stackPointer += 1;
                break;

            case 'jnz':
                register = currentInstruction[1];
                const step = currentInstruction[2];

                if (registers[register] === 0) {
                    stackPointer += 1;
                } else {
                    stackPointer += Number(step);
                }
                break;

            default:
                throw new Error('Unknown instruction type', code);
        }
    }

    return registers;
};

module.exports = assemblerInterpreter;
