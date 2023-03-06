import type { Order } from "@prisma/client";
import { prisma } from "~/db.server";

export function getOrder({ id }: Pick<Order, "id">) {
  return prisma.order.findFirst({
    select: { id: true, notes: true, title: true },
    where: { id },
  });
}

export function getAllOrders() {
  return prisma.order.findMany({ select: { id: true, title: true, notes: true } });
}

export function createOrder({ title, notes }: Pick<Order, "notes" | "title">) {
  return prisma.order.create({
    data: {
      title,
      notes,
    },
  });
}

export function deleteOrder({ id }: Pick<Order, "id">) {
  return prisma.order.deleteMany({
    where: { id },
  });
}
