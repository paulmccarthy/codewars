const airbnb = require('eslint-config-airbnb-base');

airbnb.env = {
    node: true,
    mocha: true,
    browser: true,
    phantomjs: true,
    jquery: true,
    worker: true
};

airbnb.rules = {
    indent: ['error', 4, { SwitchCase: 1 }],
    strict: 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'prefer-destructuring': 'off',
    'comma-dangle': ['error', { functions: 'ignore' }],
    'prefer-template': 'off',
    'func-names': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-restricted-properties': ['error', {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
    }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
    }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
    }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
    }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
    }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
    }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
    }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
    }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', { vue: 'never' }],
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
        props: false
    }],
    'no-underscore-dangle': ['error', { allow: ['_rowVariant', '_cellVariants', '_showDetails'] }]
};

module.exports = airbnb;
