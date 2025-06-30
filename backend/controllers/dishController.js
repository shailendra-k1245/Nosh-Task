const Dish = require('../models/Dish');

// Get all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dishes" });
  }
};

// Toggle publish status
exports.togglePublish = async (req, res) => {
  try {
    const dish = await Dish.findOne({ dishId: req.params.dishId });
    if (!dish) return res.status(404).json({ message: "Dish not found" });

    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: "Failed to toggle publish status" });
  }
};
