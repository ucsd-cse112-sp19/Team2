const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['test/testcafe-hello-core.js', 'test/testcafe-meat-button.js'])
            .browsers(['browserstack:Chrome@74.0:Windows 10', 'browserstack:firefox@66.0:OS X Mavericks']) 
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });