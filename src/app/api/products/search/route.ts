import { z } from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get("q"));

  const product = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  if (!product) {
    return Response.json(
      { message: "Product not found." },
      {
        status: 400,
      }
    );
  }

  return Response.json(product);
}
