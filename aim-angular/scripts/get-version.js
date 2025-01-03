const { execSync } = require("child_process");
const fs = require("fs");

try {
  // Get current tag from Git, using --abbrev=0 to get just the tag
  const version = execSync("git describe --tags --abbrev=0").toString().trim();
  
  // Create a JSON file with the version
  const versionData = { version };
  fs.writeFileSync("./src/assets/version.json", JSON.stringify(versionData, null, 2));

  console.log("The version file has been created successfully:", version);
} catch (error) {
  console.error("Error getting version:", error.message);
}