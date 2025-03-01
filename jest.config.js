module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './',
    testMatch: ['<rootDir>/test/**/*.spec.ts'], // Asegúrate de que los archivos de prueba tengan la extensión '.spec.ts'
  };
  