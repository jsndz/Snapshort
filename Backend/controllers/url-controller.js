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


async function getUrlsOfUser(req, res){
    try {
        const urls = await urlService.getUrls(req.params.id);
        return res.status(200).json({
        data: urls,
        sucess: true,
        message: 'successfully fetched urls',
        err:{}
    })
    } catch (error) {
        console.log(error); 
         return res.status(500).json({
                data: {},
                sucess: false,
                message: 'couldnt fetch urls',
                err:{error}
         })
    }
    }
module.exports ={
    Addurl,
    Removeurl,
    getUrlsOfUser
}