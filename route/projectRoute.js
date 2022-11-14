const express = require("express");
const { addProject, getProject } = require("../controller/projectController");
const { upload } = require("../model/projectModel");

const router = express.Router();

router.post("/project-list", addProject);
router.get("/project-list", getProject);

module.exports = router;
