module.exports = {
  use: [
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'hyperhtml-demo',
        },
      },
    ],
    ['@neutrinojs/jest', {
      testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
    }],
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
