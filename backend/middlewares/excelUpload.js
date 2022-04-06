const multer = require('multer')
const path = require('path')

const clientExcelStorage = multer.diskStorage({
    // Destination to store image     
    destination: './public/ClientExcelFiles',
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
          + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
        }
});
const clientExcelUpload = multer({
    storage: clientExcelStorage,
    fileFilter: checkFileType
});

const whitelist = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]

function checkFileType (req, file, cb) {
    if (!whitelist.includes(file.mimetype)) {
        return cb(new Error('please upload excel file'))
      }
      cb(null, true)
  }

module.exports = clientExcelUpload