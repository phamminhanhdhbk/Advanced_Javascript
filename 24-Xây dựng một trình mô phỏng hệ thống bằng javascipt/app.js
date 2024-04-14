const MAX_MEMORY = 1024; // Maximum memory size in MB
const MAX_CPU_USAGE = 100; // Maximum CPU usage in percentage

let memoryUsage = 0; // Current memory usage in MB
let cpuUsage = 0; // Current CPU usage in percentage

function executeProgram(programName) {
    addToConsole(`Executing program: ${programName}`);
    // Simulate execution of the program
    // Update CPU and memory usage accordingly
    updateCPUUsage(Math.random() * MAX_CPU_USAGE);
    updateMemoryUsage(Math.random() * MAX_MEMORY);
}

function updateMemoryUsage(usage) {
    memoryUsage = Math.min(usage, MAX_MEMORY);
    document.getElementById('memory-usage').textContent = memoryUsage.toFixed(2) + '%';
}

function updateCPUUsage(usage) {
    cpuUsage = Math.min(usage, MAX_CPU_USAGE);
    document.getElementById('cpu-usage').textContent = cpuUsage.toFixed(2) + '%';
}

function addToConsole(message) {
    const consoleOutput = document.getElementById('console');
    consoleOutput.textContent += message + '\n';
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Example: Execute a program every second
setInterval(() => {
    executeProgram('Example Program');
}, 1000);
