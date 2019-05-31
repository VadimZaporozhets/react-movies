import serialize from 'serialize-javascript';

export const getInitialTemplate = (content, store) =>
    `<!doctype html>
<html lang="en">
    <head>
        <title>Movies App</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/main.bundle.js"></script>
    </body>
</html>`;
