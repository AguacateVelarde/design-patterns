import { Process } from "./process";

type ProcessWithTime = Process & { waitingTime?: number };

export class TaskManager {
    private _processes: Process[] | null = null;

    constructor(processes: Process[]) {
        this._processes = processes;
    };

    private _getLastTime(sortedProcesses: ProcessWithTime[]) {
        const copySortedProcess = [...sortedProcesses];
        const reducer = (previousValue: number, currentValue: ProcessWithTime) =>
            previousValue + currentValue.executionTime;

        return copySortedProcess.reduce(reducer, 0);
    }

    public sortProcess(): ProcessWithTime[] {
        const sortedProcesses: ProcessWithTime[] = [];
        if (!this._processes) {
            throw new Error('process list should not empty');
        }

        for (const process of this._processes) {
            const waitingTime = this._getLastTime(sortedProcesses);
            sortedProcesses.push({
                ...process,
                waitingTime
            });
        }

        return sortedProcesses;
    }
}