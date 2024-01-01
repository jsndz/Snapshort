const { Url } = require("../models/index");
const  CrudRepository  = require("./crud-repository");
class UrlRepository extends CrudRepository{
  constructor(){
    super(Url);
  }
  async createurl(data) {
    try {
      const url = await Url.create(data);
      return url;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async removeurl(urlId){
    try {
      const result = await Url.destroy({
          where:{
              id:urlId
          }

      });
      return result;
  } catch (error) {
      console.log("Something went wrong in the crud layer");
      throw {error};
  }
  }
}

module.exports = UrlRepository;
