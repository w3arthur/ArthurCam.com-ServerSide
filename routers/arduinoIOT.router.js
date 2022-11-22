const config = require('../config');
const {arduinoIOTValueMaxLength, lastSentDisplayTextShow} = config.arduinoIOT;
const api = require('../api');
const {express} = api.express;
const {setTextArduinoIOTMessage, setLamp, setLed} = api.arduinoIOT;
const arduinoIOTRouter = express.Router();
const models = require('../models');
const {IOTTextModel} = models.messageModels;

arduinoIOTRouter.route('/:param')  // /api/arduinoIOT/____ //send arduino IOT string or number
    .all(async (req, res) => { try{
        const {param} = req.params;
        if (param.length > arduinoIOTValueMaxLength) param = param.substring(0, arduinoIOTValueMaxLength);
        if (param.trim().length === 0) throw new Error();
        if(param == 6) setLed();
        else if(param == 2) setLamp();
        else{   //is a string
            try{ await setTextArduinoIOTMessage(param); }
            catch(e){ console.log('Arduino IOT requested ' + (result ? 'sent' : 'not sent!')); throw new Error(); }
            if(param.length !== 1){ //is a string, store to data base
                const data1 = {message: param};
                await IOTTextModel(data1).save();
                //don't check if sent
            }
        }

        
        const data2 = {arduino: true};
        return res.status(200).json( data2 );
    } catch(e){ return res.status(400).send('Cant send a message to Arduino IOT'); }
    } );

arduinoIOTRouter.route('/') // /api/arduinoIOT/ //get posted strings
    .get(async (req, res) => { try{
        const data = {};
        const sort = {createdAt: -1};
        const result = await IOTTextModel.find(data).sort( sort ).limit( lastSentDisplayTextShow ).skip(0).select('message -_id');
        const arrayResult = result.map(x => x.message);
        const returnResult = {displayText: arrayResult};
        return res.status(200).json(returnResult);
    } catch(e){ return res.status(400).send('fail to get the display text IOT strings'); }
    } );

module.exports = arduinoIOTRouter;