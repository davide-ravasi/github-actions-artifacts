import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

function run() {
  try {
    core.info("Starting the deployment process...");
  } catch (error) {
    core.error(`Error: ${error}`);
  }
}

run();
