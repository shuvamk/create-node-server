import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ora from "ora";
import chalk from "chalk";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function createProject(options) {
    const spinner = ora("Creating your project...").start();
    try {
        // Create project directory
        const projectPath = path.join(process.cwd(), options.projectName);
        await fs.ensureDir(projectPath);
        // Copy template files
        const templatePath = path.join(__dirname, "../template");
        await fs.copy(templatePath, projectPath);
        // Rename gitignore (npm ignores .gitignore files)
        const gitignorePath = path.join(projectPath, ".gitignoreTemplate");
        if (await fs.pathExists(gitignorePath)) {
            await fs.move(gitignorePath, path.join(projectPath, ".gitignore"));
        }
        // Update package.json
        const packageJsonPath = path.join(projectPath, "package.json");
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = options.projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
        // Initialize git repository
        spinner.text = "Initializing git repository...";
        await execa("git", ["init"], { cwd: projectPath });
        spinner.succeed(chalk.green("Project created successfully!"));
        return projectPath;
    }
    catch (error) {
        spinner.fail(chalk.red("Failed to create project"));
        throw error;
    }
}
//# sourceMappingURL=createProject.js.map