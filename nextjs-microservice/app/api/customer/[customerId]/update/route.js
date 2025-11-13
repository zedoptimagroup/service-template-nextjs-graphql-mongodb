import { resolvers } from "../../../../lib/graphql/resolvers";

export async function PUT(request, context) {
  const { customerId } = await context.params;
  console.log("Customer ID for update: ", customerId)

  const { name, email } = await request.json();
  console.log("Customer name and email for update ", name, email)

  const updated = await resolvers.Mutation.updateCustomer(null, {
    id: customerId,
    name,
    email,
  });

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  return Response.json(updated, {headers: headers});
}
