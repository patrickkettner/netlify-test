exports.handler = function(event, context, callback) {
  const UA = event.headers['user-agent']
  let body;

  if (UA.contains('Chrome')) {
  body = ` <!doctype html>
      <html>
        <head>
          <title>testing 123</title>
          <script>history.replaceState({}, "yes!", "/download")</script>
        </head>
        <body>
          <pre>${event.headers['user-agent']}</pre>
        </body>
      </html>`
  } else {
  body = `<!doctype html>
      <html>
        <head>
          <title>testing 123</title>
        </head>
        <body>
<pre>this is not chrome</chrome>
        </body>
      </html>`
}

  callback(null, {
    statusCode: 200,
    body
});
}
