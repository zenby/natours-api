const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

console.log(process.env.NODE_ENV);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`App running on port ${port}`);
});
