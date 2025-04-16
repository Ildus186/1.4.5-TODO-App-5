module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "airbnb", 
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "prettier" 
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "jsx-a11y",
      "import",
      "prettier" 
    ],
    "rules": {
      "no-plusplus": "off",
      "class-methods-use-this": "off",
      "react/button-has-type": "off",
      "react/static-property-placement": "off",
      "react/state-in-constructor": "off",
      "react/destructuring-assignment": "off",
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off", 
      "react/prefer-stateless-function": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], 
      "prettier/prettier": "error", 
      "import/order": [ 
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true }
        }
      ]
    },
    "settings": {
      "react": {
        "version": "detect"
      },
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  };