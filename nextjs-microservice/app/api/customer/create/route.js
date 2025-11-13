import { resolvers } from "../../../lib/graphql/resolvers";

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

export async function POST(req) {
  const { name, email } = await req.json();
  const customer = await resolvers.Mutation.createCustomer(null, { name, email });

  // const headers = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  // };

  // return Response.json(customer, {headers: headers,});

  return new Response(JSON.stringify(customer), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",  // important
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}