export default class CustomError extends Error {
    constructor(message, data = {}) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        // Custom debugging information
        this.message = message;
        this.data = data;
        this.date = new Date();
    }
}
