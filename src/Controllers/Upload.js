exports.upload = async (req, res, next) =>{
    try {
        if (!req.files) {
            res.status(500).send({
                status: 'Failed',
                code: 500,
                message: 'Failed to upload files'
            })
        } else {
            const image = req.files.image
            console.log(image.name)
            console.log(__dirname + '/public/')
            image.mv(__dirname + '/public/' + image.name, (response, e))
            if (errr) {
                res.send({ errr })
            }
            res.send({
                data: `http://localhost:8000/${image.name}`
            })
        }
    } catch (error) {
        return next(error)
    }
}