module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  rules: {
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-opening-brace-space-before': null,
    'color-named': 'never',
    'color-function-notation': null,
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never-single-line',
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-specificity': null,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'selector-not-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-empty-line-before': null,
    'declaration-no-important': true,
    'font-weight-notation': [
      'numeric',
      {
        'ignore': [
          'relative'
        ]
      }
    ],
    'function-url-no-scheme-relative': true,
    'max-empty-lines': 2, 'max-line-length': null,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'number-max-precision': null,
    'value-list-comma-space-after': 'always',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
  },
  overrides: [
    {
      files: '**/*.scss',
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order'
      ],
      rules: {
        'no-invalid-position-at-import-rule': null,
        'scss/at-mixin-pattern': null,
        'scss/at-if-no-null': null
      }
    }
  ]
}
