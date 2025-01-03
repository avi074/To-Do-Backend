import chalk from "chalk";

/**
 * consoles the message with date
 */
const showMessage = (msg: string, newLine: boolean) => {
    console.log(
        chalk.bold(`${newLine ? "\n" : ""}[${chalk.italic.blackBright(new Date().toLocaleTimeString())}] ${msg}`)
    );
};

/**
 * Centralized logger
 */
const logger = {

    info: (message: string, newLine: boolean = false) => {
        showMessage(chalk.blueBright(`[INFO] ${message}`), newLine);
    },

    success: (message: string, newLine: boolean = false) => {
        showMessage(chalk.green(`[SUCCESS] ${message}`), newLine);
    },

    error: (message: string, newLine: boolean = false) => {
        showMessage(chalk.red(`[ERROR] ${message}`), newLine);
    },

    warn: (message: string, newLine: boolean = false) => {
        showMessage(chalk.yellowBright(`[WARN] ${message}`), newLine);
    },

    log: (message: string, newLine: boolean = false) => {
        showMessage(`[LOG] ${message}`, newLine);
    },
};

export default logger;