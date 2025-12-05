import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from '@superfaceai/passport-twitter-oauth2';
import { TwitterOauthOptions } from '../interfaces/twitter-oauth-options.interface';

@Injectable()
export class TwitterOauthStrategy extends PassportStrategy(Strategy, 'twitter') {
    constructor(
        @Inject('TWITTER_OAUTH_OPTIONS') options: TwitterOauthOptions,
    ) {
        super({
            clientID: options.clientId,
            clientSecret: options.clientSecret,
            callbackURL: options.callbackUrl,
            scope: ['users.read', 'tweet.read'],
            clientType: 'confidential',
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (err: any, user: any, info?: any) => void,
    ): Promise<any> {
        const username = profile.username || profile?.username || profile?.screen_name || profile?.id;
        const displayName = profile.displayName || profile?.name || profile?.display_name || username;

        const user = {
            username: String(username),
            displayName: String(displayName),
            accessToken,
            refreshToken,
            profile,
        };

        done(null, user);
    }
}
