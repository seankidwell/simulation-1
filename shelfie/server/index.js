const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err));
const port = process.env.SERVER_PORT || 3010;

app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct);
app.delete('/api/product/id:', controller.removeProduct);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})