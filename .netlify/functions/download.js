exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `
      <!doctype html>
      <html>
        <head>
          <title>testing 123</title>
          <script>history.replaceState({}, "yes!", "/download")</script>
        </head>
        <body>
          <pre>${event.headers['user-agent']}</pre>
        </body>
      </html>
    `
  });
}
