#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require('child_process');

const root = process.cwd();
const oldDirs = ["app", "components", "hooks", "constants", "scripts"];
const newDir = "app-example";
const newAppDir = "app";
const newDirPath = path.join(root, newDir);

const indexContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

const copyDirectory = async (src, dest) => {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
};

const moveDirectories = async () => {
  try {
    await fs.promises.mkdir(newDirPath, { recursive: true });
    console.log(`📁 /${newDir} directory created.`);

    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      const newDirPath = path.join(root, newDir, dir);
      
      if (fs.existsSync(oldDirPath)) {
        try {
          await copyDirectory(oldDirPath, newDirPath);
          await fs.promises.rm(oldDirPath, { recursive: true, force: true });
          console.log(`➡️ /${dir} moved to /${newDir}/${dir}.`);
        } catch (err) {
          console.log(`⚠️ Error moving ${dir}: ${err.message}`);
        }
      } else {
        console.log(`➡️ /${dir} does not exist, skipping.`);
      }
    }

    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    console.log("\n📁 New /app directory created.");

    await fs.promises.writeFile(path.join(newAppDirPath, "index.tsx"), indexContent);
    console.log("📄 app/index.tsx created.");

    await fs.promises.writeFile(path.join(newAppDirPath, "_layout.tsx"), layoutContent);
    console.log("📄 app/_layout.tsx created.");

    console.log("\n✅ Project reset complete!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

moveDirectories();