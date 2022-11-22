
const webSocketBroadcast = (clients, message) => {
    try{ 
        if(!clients || clients.size == 0) throw new Error();
        clients.forEach((client) => { 
            if (client.readyState === WebSocket.OPEN)  client.send(message);
            else throw new Error();
        });
        return true;
    } catch {return false;}
}



const WebSocket = require('ws');


module.exports = { 
    webSocketBroadcast, WebSocket
};