## 安裝 react

```
npx create-react-app .
```

## eslint

```
npm i -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library eslint-plugin-jest jest prettier
```

`.eslintrc.json`

```json
{
  "root": true,
  "settings": {},
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
    "jest/globals": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["airbnb", "prettier", "plugin:testing-library/react", "plugin:jest/recommended"],
  "plugins": ["prettier", "react", "react-hooks", "testing-library", "jest"],
  "rules": {
    "prettier/prettier": ["warn", {}, { "usePrettierrc": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 1,
    "no-unused-vars": 1,
    "import/no-unresolved": 2,
    "no-undefined": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```

`.eslintignore`

```
node_modules
```

`.prettierrc`

```
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "endOfLine": "auto"
}
```

`.prettierignore`

```
node_modules
```

## Visual Studio Code 設定

`/.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "eslint.options": {
    "overrideConfigFile": ".eslintrc.json"
  },
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "javascript.preferences.quoteStyle": "single",
  "prettier.configPath": ".prettierrc"
}
```

## 安裝 tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npm install -D prettier prettier-plugin-tailwindcss
```

## Ref

https://dev.to/chandelieraxel/why-do-react-need-to-be-in-scope-for-jsx-3hen
https://dev.to/youssefzidan/configuring-eslint-in-react-with-prettier-react-testing-library-jest-and-airbnb-2hi
