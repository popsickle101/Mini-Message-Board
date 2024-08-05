
const express = require("express");
const app = express();
const createNewRouter = require("./routes/newRouter.js");
const createIndexRouter = require("./routes/indexRouter.js");
const messages = require("./messages");

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use("/", createIndexRouter(messages));
app.use("/new", createNewRouter(messages));

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

module.exports = messages;
