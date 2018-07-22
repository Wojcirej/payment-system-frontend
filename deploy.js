var exec = require('child_process').exec;
const stages = ["staging", "production"];
const pushRemotes = {
  staging: "git push staging develop:master",
  production: "git push production master:master"
};

var stage = process.argv[2];
if (stages.includes(stage)) {
  console.log("Deploying to " + stage + "...");
  exec(pushRemotes[stage], function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
}
else {
  console.error("Deploy aborted - invalid stage!");
};
