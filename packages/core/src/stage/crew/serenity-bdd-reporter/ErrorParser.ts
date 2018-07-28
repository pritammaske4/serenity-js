import * as ErrorStackParser from 'error-stack-parser';

export class ErrorParser {
    parse(error: Error) {
        // todo: add an instanceof check perhaps?
        return {
            errorType:    error.name,
            message:      error.message,
            stackTrace:   ErrorStackParser.parse(error).map(frame => ({
                declaringClass: '',
                methodName:     `${ frame.functionName }(${ (frame.args || []).join(', ') })`,
                fileName:       frame.fileName,
                lineNumber:     frame.lineNumber,
            })),
        };
    }
}