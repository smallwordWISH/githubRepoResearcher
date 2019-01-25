module.exports = {
    "extends": "airbnb",
    "rules": {
      "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      "jsx-a11y/label-has-for": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "linebreak-style":0,
      "no-restricted-properties": 0,
      'no-param-reassign': ["error", { "props": false }],
      'react/prop-types':0,
      'prefer-destructuring': 0,
      'react/sort-comp': 0,
      'no-alert': 0,
    },
    "globals": {
      "document": true,
      "foo": true,
      "window": true,
      "localStorage": true,
      "isNaN": true,
      "alert": true,
      "initGeetest": true,
      "JSON": true,
    },
    "env": {
      "jest": true
    },
    "settings": {
      "import/resolver": "webpack"
    },
    "parser": "babel-eslint",
  };