const api = require('../api');
const {mongoose, mongoose1} = api.mongoDB;

//Schemes
const MessageSchema =  new mongoose.Schema({message: {type: String, index: false}, createdAt: {type: Date, index: -1}, }, { timestamps: true, });
//module and validator
const CommentModel = mongoose1.model( "Comment", MessageSchema ); //comments
const DisplayTextModel = mongoose1.model( "Display_String" , MessageSchema );  //display_strings
const IOTTextModel = mongoose1.model( "Display_IOT_String" , MessageSchema );  //display_iot_strings


module.exports = { CommentModel, DisplayTextModel, IOTTextModel }
