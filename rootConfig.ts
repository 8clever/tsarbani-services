const { MQTT_URL, BOOKING_SERVICE_PORT = 3001 } = process.env;

export const rootConfig = Object.freeze({
  MQTT_URL,
  BOOKING_SERVICE_PORT
})