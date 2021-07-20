const { user } = require("../utils/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const routes = {
  hello: (req, res) => {
    try {
      res.status(200).json({ message: "Say Hello to my little friend" });
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (req, res) => {
console.log(req.body)
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
  login: (req, res) => {
    
   const  {username,password} = req.body

   console.log(req.body)



    const user = {
      id: 1,
    email: "henry@email.com",
      pass: "1234",
    };



    if(username === user.email && password === user.pass){

      console.log("usuario existe")


      jwt.sign(
        { user: user },
        "secretkey",
        { expiresIn: "32s" },
        (err, token) => {
          res.cookie(token)
  
          res.json({
            token: token,
          });
        }
      );

    }
    else {

      console.log("el usuario no existe, se tiene que registrar")
    }

  
  },
  posts: (req, res) => {
    jwt.verify(req.token, "secretkey", (error, authData) => {
      if (error) {
        res.sendStatus(403);
      } else {
        res.json({
          mensaje: "postveriffy fue creado",
          authData,
        });
      }
    });

    res.json({ mensaje: "Postssss fué creado" });
  },
};

module.exports = routes;
