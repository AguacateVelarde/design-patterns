type ProcessProps = {
    processId: number,
    executionTime: number,
    processName: string,
}

export class Process {
    processName: string = 'undefined process';
    processId: number = 0;
    executionTime: number = 0;

    constructor({
        processId,
        executionTime,
        processName,
    }: ProcessProps) {
        this.executionTime = executionTime;
        this.processId = processId;
        this.processName = processName;
    }
}