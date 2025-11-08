import { resolvers } from "../../../lib/graphql/resolvers";

export async function POST(req) {
  const { name, email } = await req.json();
  const customer = await resolvers.Mutation.createCustomer(null, { name, email });
  return Response.json(customer);
}