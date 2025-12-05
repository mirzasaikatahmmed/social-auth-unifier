import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return `
      <h1>Social Auth Unifier Test App</h1>
      <p>Click below to test authentication flows:</p>
      <ul>
        <li><a href="/auth/google">Login with Google</a></li>
        <li><a href="/auth/twitter">Login with Twitter</a></li>
        <li><a href="/auth/facebook">Login with Facebook</a></li>
        <li><a href="/auth/linkedin">Login with LinkedIn</a></li>
        <li><a href="/auth/github">Login with GitHub</a></li>
      </ul>
    `;
  }

  @Get('profile')
  getProfile(@Req() req) {
    if (!req.user) {
      return 'No user logged in. <a href="/">Back to Home</a>';
    }
    return `
      <h1>User Profile</h1>
      <pre>${JSON.stringify(req.user, null, 2)}</pre>
      <br>
      <a href="/">Back to Home</a>
    `;
  }
}
