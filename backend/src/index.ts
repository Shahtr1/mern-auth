import "dotenv/config";
import connectToDatabase from "./config/db";

import { NODE_ENV, PORT } from "./constants/env";

import app from "./app";

const initServer = async () => {
  app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(
      `Server is running on port ${PORT} in ${NODE_ENV} environment.`,
    );
  });
};

initServer();
