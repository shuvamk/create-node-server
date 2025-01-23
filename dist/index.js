#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createProject } from './createProject.js';
import { logger } from './utils/logger.js';
const program = new Command();
program
    .name('create-node-server')
    .description('Create a production-ready Node.js backend server')
    .version('1.0.0')
    .argument('[directory]', 'Directory to create the project in')
    .action(async (directory) => {
    logger.info('Welcome to create-node-server! 🚀');
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
            default: directory || 'my-node-server',
            validate: (input) => {
                if (/^[a-zA-Z0-9-_]+$/.test(input))
                    return true;
                return 'Project name may only include letters, numbers, underscores and hashes.';
            },
        },
        {
            type: 'confirm',
            name: 'useSentry',
            message: 'Would you like to set up Sentry for error tracking?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'useOpenTelemetry',
            message: 'Would you like to set up OpenTelemetry for observability?',
            default: true,
        },
        {
            type: 'list',
            name: 'logger',
            message: 'Which logger would you like to use?',
            choices: ['winston', 'pino', 'none'],
            default: 'winston',
        },
    ]);
    try {
        await createProject({
            projectName: answers.projectName,
            useSentry: answers.useSentry,
            useOpenTelemetry: answers.useOpenTelemetry,
            logger: answers.logger,
        });
        logger.success(`
        🎉 Successfully created ${chalk.green(answers.projectName)}!
        
        To get started:
          ${chalk.cyan(`cd ${answers.projectName}`)}
          ${chalk.cyan('npm install')}
          ${chalk.cyan('npm run dev')}
        
        To build for production:
          ${chalk.cyan('npm run build')}
          ${chalk.cyan('npm start')}
      `);
    }
    catch (error) {
        logger.error('Failed to create project:', error);
        process.exit(1);
    }
});
program.parse();
//# sourceMappingURL=index.js.map