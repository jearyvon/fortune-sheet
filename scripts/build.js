const fs = require("fs");
const { spawnSync } = require("child_process");
const { platform } = require("process");
const tsconfig = JSON.parse(fs.readFileSync("tsconfig.json"));

delete tsconfig.compilerOptions.paths;
tsconfig.include = ["./src"];
tsconfig.exclude = ["node_modules", "**/*.test.ts", "**/*.spec.ts", "dist", "lib"];

const tsconfigJson = JSON.stringify(tsconfig);
fs.writeFileSync("packages/core/tsconfig.json", tsconfigJson);
fs.writeFileSync("packages/react/tsconfig.json", tsconfigJson);

const fatherBin = platform === "win32" ? "node_modules\\.bin\\father-build.cmd" : "node_modules/.bin/father-build";
spawnSync(fatherBin, { stdio: "inherit" });

fs.rmSync("packages/core/tsconfig.json");
fs.rmSync("packages/react/tsconfig.json");
