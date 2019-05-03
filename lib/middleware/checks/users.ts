import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../../utils/httpErrors";

export const newUserParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.body) {
		throw new HTTP400Error("Something went wrong. Please try again");
	} else {
		if (!req.body.username) {
			throw new HTTP400Error("Username is required");
		}
		if (!req.body.email) {
			throw new HTTP400Error("Emal is required");
		}
		if (!req.body.password) {
			throw new HTTP400Error("Password is required");
		}
		next();
	}
};

export const authUserParams = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.body) {
		throw new HTTP400Error("Something went wrong. Please try again");
	} else {
		if (!req.body.username) {
			throw new HTTP400Error("Username is required");
		}
		if (!req.body.password) {
			throw new HTTP400Error("Password is required");
		}
		next();
	}
};
