/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Articles = require("../models/Articles");

module.exports = {
  create: async (req, res) => {
    try {
      let data = req.body;
      let StoreData = await Articles.create(data).fetch();
      return res.json({ StoreData: StoreData });
    } catch (error) {
      res.status(400).json({ Error: error });
      console.log(error);
    }
  },

  find: async (req, res) => {
    try {
      let data = await Articles.find();
      return res.json({ data: data });
    } catch (error) {
      res.status(400).json({ Error: error });
    }
  },

  update: async (req, res) => {
    try {
      let id = req.params.id;
      let data = req.body;
      let UpdateData = await Articles.update({ id: id }).set(data).fetch();
      return res.json({ UpdateData: UpdateData });
    } catch (error) {
      res.status(400).json({ Error: error });
    }
  },

  delete: async (req, res) => {
    try {
      let id = req.params.id;
      let DeleteData = await Articles.destroy({ id: id }).fetch();
      return res.json({ DeleteData: DeleteData });
    } catch (error) {
      res.status(400).json({ Error: error });
    }
  },
};
