const mongoose = require("mongoose");
const multer = require("multer");
const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  skill: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  live: {
    type: String,
  },
});

const Project_list = mongoose.model("Project_list", projectSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

module.exports = {
  Project_list,
  upload,
};
