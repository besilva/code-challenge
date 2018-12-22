import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

export const inputText = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
