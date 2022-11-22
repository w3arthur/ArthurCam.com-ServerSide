const config = require('../config');
const {commentValueMaxLength, lastSentCommentsShow} = config.comments;
const api = require('../api');
const {express} = api.express;
const commentsRouter = express.Router();
const models = require('../models');
const {CommentModel} = models.messageModels;


commentsRouter.route('/')  // /api/comments/
    .get(async (req, res) => { try{
        const data = {};
        const sort = {createdAt: -1};
        const result = await CommentModel.find(data).sort( sort ).limit( lastSentCommentsShow ).skip(0).select('message -_id');
        const arrayResult = result.map(x => x.message);
        const returnResult = {comments: arrayResult};
        return res.status(200).json(returnResult);
    } catch(e){ return res.status(400).send('fail to get the comments'); }
    } )
    .post(async (req, res) => { try{
        const {message} = req.body;
        let messageTrim = message;
        if (messageTrim.length > commentValueMaxLength) messageTrim = messageTrim.substring(0, commentValueMaxLength);
        if (messageTrim.trim().length === 0) throw new Error();
        messageTrim = messageTrim.replaceAll('<', '&lt;');
        const data = {message: messageTrim};
        const result = await CommentModel( data ).save();
        return res.status(200).json(result);
    } catch(e){ return res.status(400).send('fail to post a comment'); }
    } );

module.exports = commentsRouter;