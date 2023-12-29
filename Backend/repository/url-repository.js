const Url = require('../models/url');

class UrlRepository 
{
    async urlcreate(data){
        try {
            const url = await Url.create({data});
            return url;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    
}

module.exports = UrlRepository;