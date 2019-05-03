import {Request, Response, NextFunction} from 'express';

export default [
	{
		path: '/api/v1/user/new',
		method: 'post',
		handler: async (req: Request, res: Response, next: NextFunction) {
			
		}
	}
]