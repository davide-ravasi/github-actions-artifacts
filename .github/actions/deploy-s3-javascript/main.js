const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

function run() {
  const bucketName = core.getInput("bucket");
  const bucketRegion = core.getInput("bucket-region");
  const distFolder = core.getInput("dist-folder");

  try {
    core.info(`Deploying to S3 bucket: ${bucketName}`);
    core.info(`Bucket region: ${bucketRegion}`);
    core.info(`Distribution folder: ${distFolder}`);
    core.notice("Starting the deployment process...");
  } catch (error) {
    core.error(`Error: ${error}`);
  }
}

run();
