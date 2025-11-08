import { connectDB } from "../mongodb";
import Customer from "../models/Customer";

export const resolvers = {
  Query: {
    customer: async (_, { id }) => {
      await connectDB();
      return Customer.findById(id);
    },
  },
  Mutation: {
    createCustomer: async (_, { name, email }) => {
      await connectDB();
      const newCustomer = new Customer({ name, email });
      return newCustomer.save();
    },
    updateCustomer: async (_, { id, name, email }) => {
      await connectDB();
      return Customer.findByIdAndUpdate(id, { name, email }, { new: true });
    },
    deleteCustomer: async (_, { id }) => {
      await connectDB();
      await Customer.findByIdAndDelete(id);
      return true;
    },
  },
};