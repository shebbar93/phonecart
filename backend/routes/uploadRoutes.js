const path = require('path')
const express = require('express')
const multer = require('multer')

const route = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb) {
    const fileTypes = /jpg|JPG|jpeg|JPEG|png/
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimetype);
    if (extname && mimeType) {
        return cb(null, true)
    } else {
        cb('Images only!');
    }

}

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)

    }
})

route.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})

module.exports = route
