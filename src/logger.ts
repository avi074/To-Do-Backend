/**
 * consoles the message with date
 */
const showMessage = (msg: string, newLine: boolean) => {
    console.log(
        `\x1b[1m${newLine ? "\n" : ""}\x1b[47m[${new Date().toLocaleTimeString()}]\x1b[0m \x1b[1m ${msg} \x1b[0m`
    );
};

/**
 * Centralized logger
 */
const logger = {

    info: (message: string, newLine: boolean = false) => {
        showMessage(`\x1b[36m[INFO] ${message} \x1b[0m`, newLine);
    },

    success: (message: string, newLine: boolean = false) => {
        showMessage(`\x1b[32m[SUCCESS] ${message} \x1b[0m`, newLine);
    },

    error: (message: string, newLine: boolean = false) => {
        showMessage(`\x1b[31m[ERROR] ${message} \x1b[0m`, newLine);
    },

    warn: (message: string, newLine: boolean = false) => {
        showMessage(`\x1b[33m[WARN] ${message} \x1b[0m`, newLine);
    },

    log: (message: string, newLine: boolean = false) => {
        showMessage(`[LOG] ${message}`, newLine);
    },
};

export default logger;