import * as authService from '../services/authService.js';

export async function login(ctx) {
  const { email, password } = ctx.request.body;

  console.log({email}, {password});
  
  const token = await authService.loginUser(email, password);

  ctx.body = { token };
}
