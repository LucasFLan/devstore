import { z } from "zod";
import data from "../data.json";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const paramsResolved = await params;

  const slug = z.string().parse(paramsResolved.slug);

  const product = data.products.find((product) => product.slug === slug);

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
