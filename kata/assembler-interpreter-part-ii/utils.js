module.exports.isConstant = val => !Number.isNaN(val) && Number.isFinite(Number(val));

module.exports.programParser = (program) => {
    const multipleSpaces = new RegExp(/[ ]{2,}/g);
    const inlineComments = new RegExp(/;.*/);
    const singleQuotes = new RegExp(/'/g);
    const parsedProgram = [];

    const programByLine = program.split(/[\n]{1,}/g);

    programByLine.forEach((line) => {
        // ignore line comments
        if (line[0] !== ';') {
            const parsedLine = line.replace(inlineComments, '')
                .replace(multipleSpaces, ' ')
                .replace(singleQuotes, '"')
                .trim();

            if (parsedLine !== '') {
                parsedProgram.push(parsedLine);
            }
        }
    });

    return parsedProgram;
};
