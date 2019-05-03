import expressJwt from 'express-jwt';
import Axios from 'axios';
import { Request } from 'express';

const secret: any = process.env.SECRET;

export const jwt = () => {
  return expressJwt({
    secret,
    isRevoked: isRevoked,
  }).unless({
    path: [
      '/',
      '/api/v1/user/new',
      '/api/v1/user/authenticate',
      '/api/v1/version',
    ],
  });
};

async function isRevoked(req: Request, payload: any, done: any) {
  // const response = await Axios.post(
  //   'https://api-euwest.graphcms.com/v1/cjslj49sx1lxs01fj4bto7hsb/master',
  //   {
  //     query: `query{
	// 				account(where: {id: "${payload.sub}"}){
	// 					id
	// 				}
	// 			}`,
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiYmJiM2RmODMtYjNlMy00NjcxLTk4YmYtOWU2Yjg4ZDY4MTBjIn0.81CWxpqgztt0VO5kO2lWsTX1hg-hS2BMncEb_rGqaKA`,
  //     },
  //   }
  // );
  // if (!response.data.data.account) {
  //   return done(null, true);
  // }

  done();
}
