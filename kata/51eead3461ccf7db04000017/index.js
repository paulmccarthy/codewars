class UriBuilder {
    constructor(base) {
        this.params = {};
        this.existingParams = {};

        // get the base url
        const existingBaseParams = base.split('?');
        this.base = existingBaseParams[0];

        // check if there are existing params
        if (existingBaseParams[1]) {
            const params = existingBaseParams[1].split('&');
            for (let i = 0; i < params.length; i += 1) {
                const keyValues = params[i].split('=');
                this.params[keyValues[0]] = keyValues[1];
            }
        }
    }

    build() {
        let result = this.base;
        let existingParamKeys = Object.keys(this.params);

        if (existingParamKeys.length) {
            result += '?';

            for (let i = 0; i < existingParamKeys.length; i += 1) {
                const key = existingParamKeys[i];
                const value = this.params[key];
                result += key + '=' + value + '&';
            }

            result = result.slice(0, -1);
        }

        return encodeURI(result);
    }
}

module.exports = UriBuilder;
