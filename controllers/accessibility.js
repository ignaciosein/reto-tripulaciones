const { user } = require("../utils/database");
const bcrypt = require("bcrypt");

const routes = {
  hello: (req, res) => {
    try {
      res.status(200).json({ message: "Say Hello to my little friend" });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 11);
    const entry = { name: name, email: email, password: hashedPassword };
    console.log(entry);
    try {
      await user
        .create(entry)
        .then((newUser) => {
          console.log(newUser);
        })
        .catch((error) => {
          console.log(error);
        });
      res.status(200).json({ message: `CREATED User: ${entry.name}` });
    } catch (err) {
      console.log(err);
    }
  },
  findUser: async (req, res) => {
    try {
      const response = await user.findOne({ where: req.body });
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = routes;
