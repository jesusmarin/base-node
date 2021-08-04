require("dotenv").config();

const protegida = async (req, res, next) => {
  res.json({
    error: null,
    data: {
      title: "mi ruta protegida",
      user: req.user,
    },
  });
};

module.exports = {
  protegida,
};
