const expect = require('chai').expect;
const simpleAssembler = require('../index');

describe('Simple Assembler Test', function () {
    it('Single register', function () {
        const registers = simpleAssembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']);
        expect(registers).to.deep.equal({ 'a': 1 });
    });

    it('Multiple registers', function () {
        const registers = simpleAssembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']);
        expect(registers).to.deep.equal({ 'a': 0, 'b': -20 });
    });
});
