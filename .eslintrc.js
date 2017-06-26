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
    "window": true
  },
  "rules": {
    "react/jsx-filename-extension": "off", // Because of Next.js
    "react/prop-types": "off",
  }
};
