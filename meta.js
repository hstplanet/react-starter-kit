const { complete } = require('./utils')
const escape = val => JSON.stringify(val).slice(1, -1)

module.exports = {
    prompts: {
        name: {
            type: 'string',
            message: 'Project name (internal usage for dev)',
            validate: val => val && val.length > 0
        },

        productName: {
            type: 'string',
            message: 'Project product name (must start with letter if building mobile apps)',
            default: 'HSTCore App',
            validate: val => val && val.length > 0,
            transformer: escape
        },

        description: {
            type: 'string',
            message: 'Project description',
            default: 'A HSTCore Framework app',
            transformer: escape
        },

        author: {
            type: 'string',
            message: 'Author'
        },

        importStrategy: {
            type: 'list',
            message: 'Pick a HST components & directives import strategy: (can be changed later)',
            choices: [{
                    name: '* Auto-import in-use HST components & directives\n    - also treeshakes HST; minimum bundle size',
                    value: 'auto',
                    short: 'Auto import',
                    checked: true
                },
                {
                    name: '* Import everything from HST\n    - not treeshaking HST; biggest bundle size',
                    value: 'all',
                    short: 'Import everything'
                }
            ]
        },

        preset: {
            type: 'checkbox',
            message: 'Check the features needed for your project:',
            choices: [
                {
                    name: 'Vuex',
                    value: 'vuex'
                },
                {
                    name: 'Axios',
                    value: 'axios'
                },
                {
                    name: 'HSTCore',
                    value: 'hstcore'
                },
                {
                    name: 'Login System',
                    value: 'loginsystem'
                },
                {
                    name: 'I18n',
                    value: 'i18n'
                },
                {
                    name: 'Firebase',
                    value: 'firebase'
                },
            ]
        },

        hstcloud: {
            when: 'preset.hstcore',
            type: 'list',
            message: 'Connect to HST Cloud project:',
            choices: [
                {
                    name: 'New HST Cloud Project',
                    value: 'new',
                },
                {
                    name: 'Existing Project',
                    value: 'existing',
                }
            ]
        },

        project: {
            when: 'hstcloud === "existing"',
            type: 'list',
            message: 'Select HST Cloud project:',
            choices: []
        },

        autoInstall: {
            type: 'list',
            message: 'Continue to install project dependencies after the project has been created? (recommended)',
            choices: [{
                    name: 'Yes, use Yarn (recommended)',
                    value: 'yarn',
                    short: 'yarn',
                },
                {
                    name: 'Yes, use NPM',
                    value: 'npm',
                    short: 'NPM',
                },
                {
                    name: 'No, I will handle that myself',
                    value: false,
                    short: 'no',
                }
            ]
        }
    },

    filters: {

        // HST Core
        'hst.conf.js': 'preset.hstcore',
        'src/hst/**/*.js': 'preset.hstcore',
        
        // Loging
        'src/layouts/LoginLayout.js': 'preset.loginsystem',
        'src/pages/Login/**/*.js': 'preset.loginsystem',
        'src/pages/Profile/**/*.js': 'preset.loginsystem',
        'src/store/User/**/*.js': 'preset.loginsystem',
        'src/store/Pages/**/*.js': 'preset.loginsystem',

        // i18n
        'src/i18n/**/*.js': 'preset.i18n',
    },



    complete
};