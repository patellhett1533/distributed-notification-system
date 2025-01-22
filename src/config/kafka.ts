import { Kafka, Producer, Consumer } from "kafkajs";

const kafka = new Kafka({
  clientId: "notification-service",
  brokers: ["kafka:9092"],
});

const producer: Producer = kafka.producer();

const consumer: Consumer = kafka.consumer({ groupId: "notification-group" });

const connectProducer = async () => {
  await producer.connect();
  console.log("Kafka Producer connected");
};

const connectConsumer = async () => {
  await consumer.connect();
  console.log("Kafka Consumer connected");
};

const disconnectProducer = async () => {
  await producer.disconnect();
  console.log("Kafka Producer disconnected");
};

const disconnectConsumer = async () => {
  await consumer.disconnect();
  console.log("Kafka Consumer disconnected");
};

export {
  kafka,
  producer,
  consumer,
  connectProducer,
  connectConsumer,
  disconnectProducer,
  disconnectConsumer,
};
