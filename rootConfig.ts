const { 
  MQTT_URL,
  MONGODB_DATABASE,
  MONGO_URL
} = process.env;

export const rootConfig = Object.freeze({
  MQTT_URL,
  MONGODB_DATABASE,
  MONGO_URL
})