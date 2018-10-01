import log from "../utils/logger";
import CustomError from "./custom-error";
import axios from "../utils/axios-helper";

export default class Movie {
    async getMovie() {
        try {
            let api_key = "79e613050b1fc2a94239ee4b844238a2";
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
            let result = await axios.get(url);
            // API success checking here
            if (result.total_results === 0)
                throw new CustomError("Chart call returned `success: false`", {
                    errorCode: result.status_code,
                    errorDesc: status_message
                });
            return result;
        } catch (ex) {
            throw ex;
        }
    }
    async getMovieName() {
        try {
            let api_key = "79e613050b1fc2a94239ee4b844238a2";
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
            let result = await axios.get(url);
            console.log(result);
            // API success checking here
            if (result.total_results === 0)
                throw new CustomError("Chart call returned `success: false`", {
                    errorCode: result.status_code,
                    errorDesc: status_message
                });
            return result;
        } catch (ex) {
            throw ex;
        }
    }
}
