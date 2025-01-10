import { MongoClient } from "mongodb";

declare global {
  // Extend the Node.js global object to include _mongoClientPromise
  var _mongoClientPromise: Promise<MongoClient>;
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// This export is necessary to make the file a module and prevent TypeScript errors
export {};
