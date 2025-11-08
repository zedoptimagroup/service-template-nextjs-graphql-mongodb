import { resolvers } from "../../../../lib/graphql/resolvers";

export async function DELETE(request, context) {
  const { customerId } = await context.params;

  console.log("Customer ID for deletion: ", customerId)

  const success = await resolvers.Mutation.deleteCustomer(null, {
    id: customerId,
  });

  return Response.json({ success });
}
