exports.handler = function(event, context, callback) {
  const UA = event.headers['user-agent'];
  let responseObj = {};

  if (UA.includes('Chrome')) {
    responseObj = {
      "statusCode": 200,
      "body": ` <!doctype html>
        <html>
          <head>
            <title>testing 123</title>
            <script>history.replaceState({}, "yes!", "/download")</script>
          </head>
          <body>
            <pre>${event.headers['user-agent']}</pre>
          </body>
      </html>`
    };
  } else if (!!UA.match(/^npm\//)) {
    responseObj = {
      "statusCode": 301,
      "headers": {
        "Location": '/test.tar.gz'
      }
    };
  } else {
    responseObj = {
      "statusCode": 200,
      "body": `<!doctype html>
        <html>
          <head>
            <title>testing 123</title>
          </head>
          <body>
          <pre>this is not chrome</chrome>
          </body>
        </html>`
    };
  }

  callback(null, responseObj);
}
