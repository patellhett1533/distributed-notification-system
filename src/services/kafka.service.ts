import { Kafka } from "kafkajs";

export class KafkaService {
  private kafka = new Kafka({
    clientId: "notification-service",
    brokers: ["localhost:9092"],
  });

  private producer = this.kafka.producer();

  async publish(topic: string, message: any) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }
}
