const createTestCafe = require("testcafe");
let testcafe = null;

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .src([
        "test/testcafe-hello-core.js",
        "test/testcafe-meat-button.js",
        "test/testcafe-meat-input.js",
        "test/testcafe-meat-link.js",
        "test/testcafe-meat-card.js"
      ])
      .browsers([
        "browserstack:Chrome@74.0:Windows 10",
        "browserstack:firefox@66.0:OS X Mavericks"
      ])
      .reporter("slack")
      .run();
  })
  .then(failedCount => {
    console.log("Tests failed: " + failedCount);
    if (failedCount > 0) {
      // process.exitCode = 1;
      process.exitCode(1);
    }
    testcafe.close();
  });
