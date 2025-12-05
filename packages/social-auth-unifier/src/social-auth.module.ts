import { Module, DynamicModule, Global, Logger } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionSerializer } from './session.serializer';

import { GoogleOauthStrategy } from './google/google-oauth.strategy';
import { GoogleOauthController } from './google/google-oauth.controller';

import { TwitterOauthStrategy } from './twitter/twitter-oauth.strategy';
import { TwitterOauthController } from './twitter/twitter-oauth.controller';

import { FacebookOauthStrategy } from './facebook/facebook-oauth.strategy';
import { FacebookOauthController } from './facebook/facebook-oauth.controller';

import { LinkedinOauthStrategy } from './linkedin/linkedin-oauth.strategy';
import { LinkedinOauthController } from './linkedin/linkedin-oauth.controller';

import { GithubOauthStrategy } from './github/github-oauth.strategy';
import { GithubOauthController } from './github/github-oauth.controller';

@Global()
@Module({})
export class SocialAuthModule {
    private static readonly logger = new Logger(SocialAuthModule.name);

    static register(): DynamicModule {
        const providers: any[] = [SessionSerializer];
        const controllers: any[] = [];
        const imports: any[] = [
            PassportModule.register({ session: true }),
            HttpModule,
            ConfigModule.forRoot(),
        ];

        const config = new ConfigService();

        // Google Auth
        if (process.env.GOOGLE_AUTH === 'true') {
            const clientId = process.env.GOOGLE_CLIENT_ID;
            const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
            const callbackUrl = process.env.GOOGLE_CALLBACK_URL;

            if (clientId && clientSecret && callbackUrl) {
                this.logger.log('Google Auth Enabled');
                providers.push(GoogleOauthStrategy);
                controllers.push(GoogleOauthController);
                providers.push({
                    provide: 'GOOGLE_OAUTH_OPTIONS',
                    useValue: { clientId, clientSecret, callbackUrl },
                });
            } else {
                this.logger.warn('Google Auth enabled but missing configuration. Skipping.');
            }
        }

        // Twitter Auth
        if (process.env.TWITTER_AUTH === 'true') {
            const clientId = process.env.TWITTER_CLIENT_ID;
            const clientSecret = process.env.TWITTER_CLIENT_SECRET;
            const callbackUrl = process.env.TWITTER_CALLBACK_URL;

            if (clientId && clientSecret && callbackUrl) {
                this.logger.log('Twitter Auth Enabled');
                providers.push(TwitterOauthStrategy);
                controllers.push(TwitterOauthController);
                providers.push({
                    provide: 'TWITTER_OAUTH_OPTIONS',
                    useValue: { clientId, clientSecret, callbackUrl },
                });
            } else {
                this.logger.warn('Twitter Auth enabled but missing configuration. Skipping.');
            }
        }

        // Facebook Auth
        if (process.env.FACEBOOK_AUTH === 'true') {
            const clientId = process.env.FACEBOOK_CLIENT_ID;
            const clientSecret = process.env.FACEBOOK_CLIENT_SECRET;
            const callbackUrl = process.env.FACEBOOK_CALLBACK_URL;

            if (clientId && clientSecret && callbackUrl) {
                this.logger.log('Facebook Auth Enabled');
                providers.push(FacebookOauthStrategy);
                controllers.push(FacebookOauthController);
                providers.push({
                    provide: 'FACEBOOK_OAUTH_OPTIONS',
                    useValue: { clientId, clientSecret, callbackUrl },
                });
            } else {
                this.logger.warn('Facebook Auth enabled but missing configuration. Skipping.');
            }
        }

        // LinkedIn Auth
        if (process.env.LINKEDIN_AUTH === 'true') {
            const clientId = process.env.LINKEDIN_CLIENT_ID;
            const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
            const callbackUrl = process.env.LINKEDIN_CALLBACK_URL;

            if (clientId && clientSecret && callbackUrl) {
                this.logger.log('LinkedIn Auth Enabled');
                providers.push(LinkedinOauthStrategy);
                controllers.push(LinkedinOauthController);
                providers.push({
                    provide: 'LINKEDIN_OAUTH_OPTIONS',
                    useValue: { clientId, clientSecret, callbackUrl },
                });
            } else {
                this.logger.warn('LinkedIn Auth enabled but missing configuration. Skipping.');
            }
        }

        // GitHub Auth
        if (process.env.GITHUB_AUTH === 'true') {
            const clientId = process.env.GITHUB_CLIENT_ID;
            const clientSecret = process.env.GITHUB_CLIENT_SECRET;
            const callbackUrl = process.env.GITHUB_CALLBACK_URL;

            if (clientId && clientSecret && callbackUrl) {
                this.logger.log('GitHub Auth Enabled');
                providers.push(GithubOauthStrategy);
                controllers.push(GithubOauthController);
                providers.push({
                    provide: 'GITHUB_OAUTH_OPTIONS',
                    useValue: { clientId, clientSecret, callbackUrl },
                });
            } else {
                this.logger.warn('GitHub Auth enabled but missing configuration. Skipping.');
            }
        }

        return {
            module: SocialAuthModule,
            imports,
            controllers,
            providers,
            exports: providers,
        };
    }
}
