import { resolvers } from "../../../../lib/graphql/resolvers";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // or your React origin
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function DELETE(request, context) {
  const { customerId } = await context.params;

  console.log("Customer ID for deletion: ", customerId)

  const success = await resolvers.Mutation.deleteCustomer(null, {
    id: customerId,
  });

  // return Response.json({ success });

  return new Response(JSON.stringify(success), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",  // important
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
