const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

function run() {
  try {
    core.notice("Starting the deployment process...");
  } catch (error) {
    core.error(`Error: ${error}`);
  }
}

run();
