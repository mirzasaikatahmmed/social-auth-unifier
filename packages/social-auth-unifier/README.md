# social-auth-unifier

[Passport](http://passportjs.org/) strategies for authenticating with Google, Twitter, Facebook, LinkedIn, and GitHub using OAuth 2.0, all unifed in a single NestJS module.

This module lets you authenticate using multiple social providers in your Node.js applications. By plugging into [Passport](http://passportjs.org/), social authentication can be easily and unobtrusively integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/) and [NestJS](https://nestjs.com/).

## Install

```bash
$ npm install social-auth-unifier
```

## Usage

#### Configure Strategy

The unified strategy authenticates users using a client ID and client secret, which are obtained by creating an application at the respective developer portals (e.g., [Google Cloud Console](https://console.cloud.google.com/), [Twitter Developer Portal](https://developer.twitter.com/)). The client ID and secret are supplied as environment variables.

```typescript
import { Module } from '@nestjs/common';
import { SocialAuthModule } from 'social-auth-unifier';

@Module({
  imports: [
    // Register the module. It will automatically read from process.env
    SocialAuthModule.register(),
  ],
})
export class AppModule {}
```

#### Environment Variables

The module automatically detects and configures enabled providers based on the presence of these environment variables:

```dotenv
# Google
GOOGLE_AUTH=true
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/redirect

# Twitter
TWITTER_AUTH=true
TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret
TWITTER_CALLBACK_URL=http://localhost:3000/auth/twitter/redirect

# Facebook
FACEBOOK_AUTH=true
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/redirect

# LinkedIn
LINKEDIN_AUTH=true
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
LINKEDIN_CALLBACK_URL=http://localhost:3000/auth/linkedin/redirect

# GitHub
GITHUB_AUTH=true
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/redirect
```

#### Authenticate Requests

Use the built-in routes to initiate authentication. The module automatically registers controllers for enabled strategies.

-   **Google**: `GET /auth/google`
-   **Twitter**: `GET /auth/twitter`
-   **Facebook**: `GET /auth/facebook`
-   **LinkedIn**: `GET /auth/linkedin`
-   **GitHub**: `GET /auth/github`

For example, to log in with GitHub, simply link to:

```html
<a href="/auth/github">Login with GitHub</a>
```

## License

[MIT](LICENSE)

## Author

-   **Mirza Saikat Ahmmed**
-   Website: [saikat.com.bd](https://saikat.com.bd)
-   Email: contact@saikat.com.bd

## Repository

-   GitHub: [https://github.com/mirzasaikatahmmed](https://github.com/mirzasaikatahmmed)
-   Project Link: [https://github.com/mirzasaikatahmmed/social-auth-unifier](https://github.com/mirzasaikatahmmed/social-auth-unifier)

