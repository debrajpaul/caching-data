import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import mainRoutes from "routes/main";
import log from "utils/logger";

const app = express();
let { PORT } = process.env;
if (!PORT) {
    log(
        "app:agds:app.js",
        "FATAL ERROR : Port is not defind! Please check .env setting"
    );
    process.exit(1);
}

app.use(cors());
app.use("/", mainRoutes);

app.listen(PORT, err => {
    return err
        ? log("app:server", `Failed to start server instance %O`, err)
        : log("app:server", `Listening on port ${PORT}`);
});
