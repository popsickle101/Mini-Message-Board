
const { Router } = require("express");

const createIndexRouter = (messages) => {
  const indexRouter = Router();

  indexRouter.get("/", (req, res) =>
    res.render('index', {
      title: "Mini Messageboard",
      messages: messages
    })
  );
  indexRouter.get("/message/:id", (req, res) => {
    const message = messages[req.params.id];
    if (message) {
      res.render('message', {
        title: "Message Details",
        message: message
      });
    } else {
      res.status(404).send("Message not found");
    }
  });
  return indexRouter;
};

module.exports = createIndexRouter;
