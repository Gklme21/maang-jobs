import { MongoClient } from "mongodb";

declare global {
  // Extend the Node.js global object to include _mongoClientPromise
  var _mongoClientPromise: Promise<MongoClient>;
}

// This export is necessary to make the file a module and prevent TypeScript errors
export {};
