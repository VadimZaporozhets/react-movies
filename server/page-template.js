import serialize from 'serialize-javascript';

export const getInitialTemplate = (content, store) => `
    <html lang="en">
        <head>
            <title>Movies App</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="main.bundle.js"></script>
        </body>
    </html>
`;
