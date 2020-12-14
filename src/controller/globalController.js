import Bread from "../../models/Bread";

const homeController = (req, res) => {
  res.render("screens/home");
};

const breadController = async (req, res) => {
  const result = await Bread.find({}, {});

  return res.render("screens/bread", { bread: result });
};

export const globalController = {
  homeController,
  breadController,
};
