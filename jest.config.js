module.exports = {
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    setupFiles: ['./enzyme-adapter.js'],
    snapshotSerializers: ['enzyme-to-json/serializer']
};
