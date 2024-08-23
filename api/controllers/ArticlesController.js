/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Articles = require("../models/Articles");

module.exports = {
  list: (req, res) => {
    Articles.find().exec((err, articles) => {
      if (err) {
        res.send(500, { err: err });
      }
      res.view("articles/articles", { articles: articles });
    });
  },
};
