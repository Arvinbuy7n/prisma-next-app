import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const deleteProduct = await prisma.product.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(deleteProduct);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const { title, price, size } = await req.json();

  const updateProduct = await prisma.product.update({
    where: {
      id,
    },
    data: {
      title,
      price,
      size,
    },
  });

  return NextResponse.json(updateProduct);
};
