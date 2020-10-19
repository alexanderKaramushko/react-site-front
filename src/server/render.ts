import { Contents } from './types';

function render(contents: Contents): string {
    const { app, css } = contents;

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>React Boilerplate</title>
                <link rel="stylesheet" href="style.css">
                <style id="jss-server-side">${css}</style>
            </head>
            <body>
                <div id="root">${app}</div>
                <div id="modal"></div>
                <script src="client.js"></script>
            </body>
        </html>
    `;
}

export default render;
