import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ora from "ora";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ProjectOptions {
  projectName: string;
  useSentry: boolean;
  useOpenTelemetry: boolean;
  logger: "winston" | "pino" | "none";
}

export async function createProject(options: ProjectOptions) {
  const spinner = ora("Creating your project...").start();

  try {
    // Create project directory
    const projectPath = path.join(process.cwd(), options.projectName);
    await fs.ensureDir(projectPath);

    // Copy template files
    // Fix: Move up one more directory level to reach the template folder
    const templatePath = path.join(dirname(__dirname), "template");
    await fs.copy(templatePath, projectPath);

    // Rename gitignore (npm ignores .gitignore files)
    const gitignorePath = path.join(projectPath, ".gitignoreTemplate");
    const targetGitignorePath = path.join(projectPath, ".gitignore");

    if (await fs.pathExists(gitignorePath)) {
      await fs.move(gitignorePath, targetGitignorePath, { overwrite: true });
    } else {
      spinner.warn("Could not find .gitignoreTemplate");
    }

    // Update package.json
    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = options.projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Initialize git repository
    spinner.text = "Initializing git repository...";
    await execa("git", ["init"], { cwd: projectPath });

    // Install dependencies
    spinner.text = "Installing dependencies...";
    await execa("npm", ["install"], { cwd: projectPath });

    spinner.succeed(chalk.green("Project created successfully!"));

    return projectPath;
  } catch (error) {
    spinner.fail(chalk.red("Failed to create project"));
    throw error;
  }
}
