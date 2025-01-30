import "dotenv/config";
import connectToDatabase from "./config/db";

import { NODE_ENV, PORT } from "./constants/env";

import app from "./app";
import initializeDefaultRBAC from "./config/initializeDefaultRBAC";

const initServer = async () => {
  app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(
      `Server is running on port ${PORT} in ${NODE_ENV} environment.`,
    );
    await initializeDefaultRBAC();
  });
};

initServer().then();
