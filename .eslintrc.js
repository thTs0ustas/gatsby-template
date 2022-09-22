module.exports = {
  root: true,
  extends: ['react-app', 'airbnb-typescript/base', 'prettier'],
  plugins: ['import'],

  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
    tsconfigRootDir: './',
  },
  rules: {
    'import/extensions': 0,
  },
};
