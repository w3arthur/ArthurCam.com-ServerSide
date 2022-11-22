const arduinoIOTValueMaxLength = 12;
const lastSentDisplayTextShow = 10;

//token access
const iotTokenClientId = 'NU69UWvmi2vlL7c84DNtBcraQJ3DLAlr';
const iotTokenClientSecret = 'DFAf7d9QFjphptdrJTq7c6MJjk30eyUWjDPtlGLjTDMSTOlRdpcqoTsCIraud9t2';
const iotArduinoToken = {
    method: 'POST', json: true,
    url: 'https://api2.arduino.cc/iot/v1/clients/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: { grant_type: 'client_credentials', client_id: iotTokenClientId, client_secret: iotTokenClientSecret, audience: 'https://api2.arduino.cc/iot' }
};
//control
const device_id = "c089bb7d-f067-45dc-9213-765015344c93"; // {String} The id of the thing
const property_id_string = '92c9383f-7420-4082-9a33-d10f9e26f9bc'; // {String} The id of the property
const property_id_lamp = '3e25914d-4cac-4538-82bf-ae12a1c0995b'; // {String} The id of the property
const property_id_led = '21370988-90ad-4c0e-aac4-0c1d9ae521f8'; // {String} The id of the property

module.exports = {
    arduinoIOTValueMaxLength
    , lastSentDisplayTextShow
    , iotArduinoToken
    , device_id
    , property_id_string
    , property_id_lamp
    , property_id_led
};