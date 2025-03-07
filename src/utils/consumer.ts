import { Kafka } from "kafkajs";
import { consumer } from "../config/kafka";

export const consumeNotifications = async (topic: string) => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      // write logic for sending notification to frontend and save notification in database
      console.log(`Received notification: ${message.value?.toString()}`);
    },
  });
};
