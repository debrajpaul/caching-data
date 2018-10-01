import express from "express";
import log from "utils/logger";
import { success, fail } from "utils/response-helpers";
import {} from "dotenv/config";
import Movie from "../provider/Movie";

const router = express.Router();
const movie = new Movie();

router.get("/getMovie", async (req, res) => {
    try {
        res.json(success("sucess", await movie.getMovie()));
    } catch (ex) {
        res.json(fail("fail", ex.data));
    }
});

export default router;
