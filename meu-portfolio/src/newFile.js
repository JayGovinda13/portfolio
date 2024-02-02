const { app } = require('./server');

app.use(bodyParser.json({ limit: '5mb' }));
