const core = require("@actions/core");
//const exec = require("@actions/exec");
// const github = require("@actions/github"); // useful to communicate with GitHub API

function run() {
  const bucketName = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });
  const accessKeyId = core.getInput("access-key-id", { required: true });
  const secretAccessKey = core.getInput("secret-access-key", {
    required: true,
  });

  const websiteUrl =
    "https://" + bucketName + ".s3." + bucketRegion + ".amazonaws.com";

  try {
    core.info(`Deploying to S3 bucket: ${bucketName}`);
    core.info(`Bucket region: ${bucketRegion}`);
    core.info(`Distribution folder: ${distFolder}`);
    core.notice("Starting the deployment process...");
    core.setOutput("website-url", websiteUrl);
    // upload files to S3
    // we can use the AWS CLI or SDK to upload files
    // because is present in the GitHub Actions environment
    // const s3UploadCommand = `aws s3 sync ${distFolder} s3://${bucketName} --region ${bucketRegion}`;
    // exec.exec(s3UploadCommand);
  } catch (error) {
    core.error(`Error: ${error}`);
  }
}

run();
