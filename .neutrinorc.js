const airbnbBase = require('@neutrinojs/airbnb-base');
const web = require('@neutrinojs/web');
const jest = require('@neutrinojs/jest');

module.exports = {
  use: [
    airbnbBase(),
    web(),
    jest({
      testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
    }),
    neutrino => {
      neutrino.config.module
        .rule('lint')
        .use('eslint')
        .tap(options =>
          Object.assign({}, options, {
            rules: {
              'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
            },
          }),
        );
    },
  ],
};
