let request = require('request');

function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() { resolve() }, ms);
    });
}

let colors = ['red', 'blue', 'white', 'black', 'orange', 'yellow', 'green', 'pink', 'purple', 'test1', 'test2', 'test3']

async function start() {
    for (let i = 0; i < 25; i++) {
        request.patch(
            `http://127.0.0.1/api/clothing/testshirt${i+1}`,
            {
                json: {
                    token: 'testPass',
                    data: {
                        type: 'dress',
                        colors: [colors[Math.floor(Math.random() * colors.length)]],
                    }
                }
            },

            function(error, response, body) {
                if (error) { return console.log(error) }
                console.log(`${body} - PATCH: Test Shirt ${i+1}`);
            }
        );
    }
}

start();