module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory().then(products => res.status(200).send(products))
  },
  addProduct: (req, res) => {
    const dbInstance = req.app.get('db');
    const {name, price, imgUrl} = req.body
    dbInstance.create_product([name, price, imgUrl]).then(() => res.sendStatus(200))
  },
  removeProduct: (req, res) => {
    const dbInstance = req.app.get('db');

  }
}