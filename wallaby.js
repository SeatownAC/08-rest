module.exports = function () {
  return {
    files: [
      'src/**/*.js',
      '!__test__/**/*.test.js',
        
      'index.js',
    ],
  
    tests: [
      '__test__/**/*.test.js',
    ],
  
    testFramework: 'jest',
    env: {
      type: 'node',
    },
  };
};