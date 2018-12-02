function bowlingScore(game) {
    const rolls = {};
    const frames = game.split(' ');

    for (let i = 0; i < frames.length; i += 1) {
        rolls[i] = frames[i].split('');
    }

    let score = 0;
    strikeRolls = []; // track which rolls were a strike
    spareRolls = []; // track which rolls were a spare

    // count all the base scores first
    const frameIds = Object.keys(rolls);

    for (let i = 0; i < frameIds.length; i += 1) {
        const frameId = frameIds[i];
        const currentFrame = rolls[frameId];

        for (let j = 0; j < currentFrame.length; j += 1) {
            const currentRoll = currentFrame[j];

            if (currentRoll === 'X') {
                score += 10;

                // ignore the last frame
                if (frameId < 9) {
                    strikeRolls.push(i);
                }
            } else if (currentRoll === '/') {
                score += 10 - parseInt(currentFrame[j - 1], 10);
                // ignore the last frame
                if (frameId < 9) {
                    spareRolls.push(i);
                }
            } else {
                score += parseInt(currentRoll, 10);
            }
        }
    }

    // handles rolls that were a strike
    // maximum number of strikes we need to count is 10
    for (let i = 0; i < strikeRolls.length; i += 1) {
        const nextFrame = rolls[strikeRolls[i] + 1];
        const secondFrame = rolls[strikeRolls[i] + 2];
        const firstRoll = nextFrame[0];
        let secondRoll;

        if (nextFrame.length >= 2) {
            secondRoll = nextFrame[1];
        } else {
            secondRoll = secondFrame[0];
        }

        if (firstRoll === 'X') {
            score += 10;
        } else if (firstRoll != null) {
            // first roll after a strike can't be a spare
            score += parseInt(firstRoll, 10);
        }

        if (secondRoll === 'X') {
            score += 10;
        } else if (secondRoll === '/') {
            // second roll can be a spare
            score += 10 - parseInt(firstRoll, 10);
        } else if (secondRoll != null) {
            score += parseInt(secondRoll, 10);
        }
    }

    // handles rolls that were a spare
    for (let i = 0; i < spareRolls.length; i += 1) {
        const nextFrame = rolls[spareRolls[i] + 1];
        const firstRoll = nextFrame[0];

        if (firstRoll === 'X') {
            score += 10;
        } else if (firstRoll != null) {
            // first roll can't be a spare
            score += parseInt(firstRoll, 10);
        }
    }

    return score;
}

module.exports = bowlingScore;
