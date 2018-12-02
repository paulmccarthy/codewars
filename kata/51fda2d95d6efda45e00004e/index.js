class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
    }

    checkProgress() {
        while (this.progress >= 100) {
            this.progress -= 100;
            this.rank += 1;

            // no zero rank
            if (this.rank === 0) {
                this.rank = 1;
            }

            // no rank beyond 8
            if (this.rank >= 8) {
                this.rank = 8;
                this.progress = 0;
            }
        }
    }

    incProgress(level) {
        if (level === 0 || level < -8 || level > 8) {
            throw new Error('Invalid rank supplied');
        }

        if (this.rank === 8) {
            this.progress = 0;
        } else {
            // negative diff means that user completed a higher rank
            // positive diff means that user completed a lower rank
            const diff = this.rank - level;

            // same level - 3 progress points
            if (diff === 0) {
                this.progress += 3;
            }

            // completed lower rank
            // 2 levels or more lower are ignored
            if (diff === 1) {
                this.progress += 1;
            }

            // completed a lower rank while at rank 1
            if (diff === 2 && this.rank === 1 && level === -1) {
                this.progress += 1;
            }

            // completed a higher rank
            if (diff < 0) {
                if (this.rank < 0 && level > 0) {
                    // there is no zero level
                    this.progress += (10 * (diff + 1) * (diff + 1));
                } else {
                    this.progress += (10 * diff * diff);
                }
            }

            this.checkProgress();
        }
    }
}

module.exports = User;
