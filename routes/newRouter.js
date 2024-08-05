
const { Router } = require("express");

const createNewRouter = (messages) => {
  const newRouter = Router();

  newRouter.get("/", (req, res) => res.render("form"));

  newRouter.post("/", (req, res) => {
    const author = req.body.author;
    const message = req.body.message;
    messages.push({ text: message, user: author, added: new Date() });

    res.redirect("/");
  });

  return newRouter;
};

module.exports = createNewRouter;
