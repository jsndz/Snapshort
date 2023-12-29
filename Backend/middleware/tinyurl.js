const axios = require('axios');


async function generateTinyUrl(longUrl) {
    const tinyUrlApiUrl = 'http://tinyurl.com/api-create.php?url=';
  
    try {
      const response = await axios.get(`${tinyUrlApiUrl}${encodeURIComponent(longUrl)}`);
      const shortUrl = response.data;
      return shortUrl;
    } catch (error) {
      console.error('Error generating TinyURL:', error.message);
      throw error;
    }
  }

    module.exports = generateTinyUrl;