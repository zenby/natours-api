const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`App running on port ${port}`);
});
