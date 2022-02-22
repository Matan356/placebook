const multer = require("multer");

const fileUpload = multer({
  limits: 50000,
  fileFilter: (req, file, cb) => {
    const isValid = true;
    let error = null;
    cb(error, isValid);
  },
});

module.exports = fileUpload;
