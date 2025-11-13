import { resolvers } from "../../../lib/graphql/resolvers";

export async function GET(request, context) {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  console.log("Retrieving all customer")

  const customers = await resolvers.Query.customers(null);
  return Response.json(customers, {headers: headers,});
}