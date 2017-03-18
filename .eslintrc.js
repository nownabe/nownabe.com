module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "settings": {
    "import/resolver": "webpack"
  },
  "globals": {
    "document": true
  },
  "rules": {
    "react/prop-types": "off"
  }
};
