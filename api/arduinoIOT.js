const config = require('../config');
const {iotArduinoToken, device_id, property_id_string, property_id_lamp, property_id_led} = config.arduinoIOT;

const IotApi = require('@arduino/arduino-iot-client');
const rp = require('request-promise');


//devicesV2

const getToken = async() => { try {
    const response = await rp(iotArduinoToken);
    return response['access_token'];
} catch (error) { console.error("arduino IOT issue, Failed getting an access token: " + error); } }

const getClient = async() => {
    const client = IotApi.ApiClient.instance;
    const oauth2 = client.authentications['oauth2'];
    oauth2.accessToken = await getToken();
    return client;
}

const getDevicesInfo = async() => {
    const client = await getClient();
    const api = new IotApi.DevicesV2Api(client)    
    api.devicesV2List().then(devices => {
        console.log(devices);
    }, error => {
        console.log('arduino IOT issue');
        console.log(error);
    });
}

//propertiesV2Publish
const apiPut = async(propertyId, value) => {
    const client = await getClient();
    const api = new IotApi.PropertiesV2Api(client)
    const property_value = { value: value }; // {PropertyValue} 
    api.propertiesV2Publish(device_id, propertyId, property_value).then(function(data) {
      console.log('arduino IOT issue, API called successfully.');     //set with map
    }, function(error) {
        console.error('arduino IOT issue, calling API');
        console.error(error);
    });
}


const setTextArduinoIOTMessage = async(strMessage) => {
    await apiPut(property_id_string, strMessage);
}

const setLamp = async() => {
    await apiPut(property_id_lamp, false);
}

const setLed = async() => {
    await apiPut(property_id_led, false);
}



module.exports = { 
    getDevicesInfo, setTextArduinoIOTMessage, setLamp, setLed
};