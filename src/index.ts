import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use((error, req, res, next) => {
  return res.json({ error });
});

export { app };
