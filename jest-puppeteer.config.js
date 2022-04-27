module.exports = {
    server: {
        command: 'yarn http-server ./test -p 10080',
        port: 10080,
    },
    launch: {
        // headless: false,
        // devtools: true,
        args: [
            '--explicitly-allowed-ports=10080',
        ],
    },
    browserContext: 'default',
};
