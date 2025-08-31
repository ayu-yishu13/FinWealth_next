import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
  id: "FinWealth", 
  name: "FinWealth",
  // Add dev server configuration for local development
  devServer: {
    url: "http://localhost:3000/api/inngest"
  },
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});