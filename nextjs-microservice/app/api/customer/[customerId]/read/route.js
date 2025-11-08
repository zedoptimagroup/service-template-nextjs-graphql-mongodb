import { resolvers } from "../../../../lib/graphql/resolvers";

export async function GET(request, context) {

  const { customerId } = await context.params;
  console.log("Customer ID for retrieval: ", customerId)


  const customer = await resolvers.Query.customer(null, { id: customerId });
  return Response.json(customer);
}