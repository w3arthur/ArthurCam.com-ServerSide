
const PORT = process.env.PORT || 3777;

const api = require('./api');
const { getLocalFile } = api.localFiles;
const { app, express, server } = api.express;
const routers = require('./routers');
const { rtmpAuthRouter, arduinoSerialRouter, arduinoIOTRouter, commentsRouter } = routers;
const { wsServer1 } = require('./sockets');

//middleware:
app.use(require("cookie-parser")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//http:
app.use("/", express.static(getLocalFile()));  //global public folder
app.route("/").get(async (req, res) => res.status(200).sendFile(getLocalFile("index.html")));
app.route("/test").get(async (req, res) => {
    //await CommentModel( {message : 'test2'} ).save();
    //await DisplayTextModel( {message : 'test2'} ).save();
    return res.status(200).sendFile(getLocalFile("test.html"))
});
app.use("/api/rtmp_auth", rtmpAuthRouter);
app.use("/api/arduinoSerial", arduinoSerialRouter);
app.use("/api/arduinoIOT", arduinoIOTRouter);
app.use("/api/comments", commentsRouter);

app.route("*").all((req, res) => res.status(404).send("fail " + req.path));

//websocket:
wsServer1(server, app, '/ws_arduino');  //ws explain examples https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express

server.listen(PORT, () => console.log(`${(new Date().toISOString())} Server is listening on port ${PORT}, (Express + WS)`));