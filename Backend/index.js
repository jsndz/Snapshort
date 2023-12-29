const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/config.json');
const Apiroutes = require('./routes/index');
const db = require('./models/index')
const setupAndstartserver = async () =>
{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api',Apiroutes);

    app.listen(3000, async () =>
    {
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC){
            db.sequelize.sync({alter:true});
           
        }
        
    });
    
    
}
setupAndstartserver();