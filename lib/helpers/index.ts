import jsonwebtoken from "jsonwebtoken";
import * as Config from "../config";

const SECRET: string | any = Config.secret;

export const generateToken = (id: string, email: string, expiry: string) => {
	return jsonwebtoken.sign({ id, email }, SECRET, { expiresIn: expiry });
};
