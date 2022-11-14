const cloudinary = require("../database/cloudinary");
const { Project_list } = require("../model/projectModel");

const addProject = async (req, res) => {
  const { name, image, skill, link, live } = req.body;
  try {
    // const newProject = new Project_list({
    //   name: req.body.name,
    //   image: req.file.filename,
    //   skill: req.body.skill,
    //   link: req.body.link,
    //   live: req.body.live,
    // });

    const resultImage = await cloudinary.uploader.upload(image, {
      folder: "project",
      // width: 300,
      // height: 300,
      // crop: "scale",
    });
    const newProject = await Project_list.create({
      name,
      image: {
        public_id: resultImage.public_id,
        url: resultImage.secure_url,
      },
      skill,
      link,
      live,
    });

    res.status(200).json({
      success: true,
      newProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const project_list = await Project_list.find();
    res.status(200).send(project_list);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { addProject, getProject };
