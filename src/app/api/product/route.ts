import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const product = await prisma.product.findMany({});

  return NextResponse.json(product);
};

export const POST = async (req: NextRequest) => {
  const { title, price, size } = await req.json();

  const product = await prisma.product.create({
    data: {
      title,
      price,
      size,
    },
  });

  return NextResponse.json(product);
};
