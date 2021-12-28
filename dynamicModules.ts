import { ClientsModule, Transport } from "@nestjs/microservices";
import { rootConfig } from "rootConfig";

export const MQTT_MODULE_NAME = "mqtt-dynamic-module"

export const MqttDynamicModule = ClientsModule.register([
  { 
    name: MQTT_MODULE_NAME, 
    transport: Transport.MQTT,
    options: {
      url: rootConfig.MQTT_URL
    }
  }
])