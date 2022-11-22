const config = require('../config');
const {rtmpSecretKey} = config.rtmpStream;
const api = require('../api');
const {express} = api.express;
const rtmpAuthRouter = express.Router();

rtmpAuthRouter.route('/')  // /api/rtmp_auth/
    .post(async (req, res) => {
        const streamKey = req.body.key;
        if (streamKey === rtmpSecretKey) {return res.status(200).send(); } // You can make a database of users instead :) 
        else return res.status(403).send(); //Reject the stream
    } );

module.exports = rtmpAuthRouter;