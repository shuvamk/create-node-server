#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const createProject_js_1 = require("./createProject.js");
const logger_js_1 = require("./utils/logger.js");
const program = new commander_1.Command();
program
    .name('create-node-server')
    .description('Create a production-ready Node.js backend server')
    .version('1.0.0')
    .argument('[directory]', 'Directory to create the project in')
    .action(async (directory) => {
    logger_js_1.logger.info('Welcome to create-node-server! 🚀');
    const answers = await inquirer_1.default.prompt([
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
        await (0, createProject_js_1.createProject)({
            projectName: answers.projectName,
            useSentry: answers.useSentry,
            useOpenTelemetry: answers.useOpenTelemetry,
            logger: answers.logger,
        });
        logger_js_1.logger.success(`
        🎉 Successfully created ${chalk_1.default.green(answers.projectName)}!
        
        To get started:
          ${chalk_1.default.cyan(`cd ${answers.projectName}`)}
          ${chalk_1.default.cyan('npm install')}
          ${chalk_1.default.cyan('npm run dev')}
        
        To build for production:
          ${chalk_1.default.cyan('npm run build')}
          ${chalk_1.default.cyan('npm start')}
      `);
    }
    catch (error) {
        logger_js_1.logger.error('Failed to create project:', error);
        process.exit(1);
    }
});
program.parse();
