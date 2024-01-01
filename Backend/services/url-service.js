const UrlRepository = require("../repository/url-repository");
const generateTinyUrl = require("../middleware/tinyurl");
class UrlService {
  constructor() {
    this.urlRepository = new UrlRepository();
  }

  async createUrl(data) {
    try {
      const tinyurl = await generateTinyUrl(data.originalUrl);

      const input = {
        originalUrl: data.originalUrl,
        shortUrl: tinyurl,
      };
      const url = await this.urlRepository.createurl(input);
      return url;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async removeUrl(id){
    try {
      const url = await this.urlRepository.removeurl(id);
      return url;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = UrlService;
