const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

// Middleware para contagem de produtos
server.use(jsonServer.rewriter({
  '/products/count': '/countProducts'
}));

server.use(middlewares);

server.get('/countProducts', (req, res) => {
  const db = router.db; // get lowdb instance
  const productsCount = db.get('products').size().value();
  res.json({ count: productsCount });
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
