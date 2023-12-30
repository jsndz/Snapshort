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
      const url = await this.urlRepository.urlcreate(input);
      return url;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = UrlService;
