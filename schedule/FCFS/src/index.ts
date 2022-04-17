import { TaskManager } from "./fcfs-sort";
import { Process } from "./process";

function main() {
    const chrome = new Process({
        processId: 1,
        processName: 'chrome',
        executionTime: 21,
    });

    const spotify = new Process({
        processId: 2,
        processName: 'spotify',
        executionTime: 4,
    });

    const vsCode = new Process({
        processId: 3,
        processName: 'visual-studio-code',
        executionTime: 28,
    });

    const word = new Process({
        processId: 4,
        processName: 'word',
        executionTime: 39,
    });

    const taskManager = new TaskManager([
        chrome,
        spotify,
        vsCode,
        word,
    ]);

    const sortedProcesses = taskManager.sortProcess();

    console.table(sortedProcesses);
}


main()