const UrlService = require('../services/url-service');


const urlService = new UrlService();

const Addurl = async (req, res) => {
    try {
        const url = await urlService.createUrl(req.body);
        return res.status(201).json({
            data: url,
            sucess: true,
            message: 'successfully created a url',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt create a airport',
            err:{error}
       })
    }
};  

const Removeurl = async (req, res) => {
    try {
        const url = await urlService.removeUrl(req.params.id);
        return res.status(201).json({
            data: url,
            sucess: true,
            message: 'successfully removed a url',
            err:{}
        })
    } catch (error) {
        console.log(error); 
       return res.status(500).json({
            data: {},
            sucess: false,
            message: 'couldnt delete a url',
            err:{error}
       })
    }
}; 

module.exports ={
    Addurl,
    Removeurl
}