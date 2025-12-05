import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { GithubOauthOptions } from '../interfaces/github-oauth-options.interface';

@Injectable()
export class GithubOauthStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(
        @Inject('GITHUB_OAUTH_OPTIONS') options: GithubOauthOptions,
    ) {
        super({
            clientID: options.clientId,
            clientSecret: options.clientSecret,
            callbackURL: options.callbackUrl,
            scope: ['user:email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (err: any, user: any, info?: any) => void,
    ): Promise<any> {
        const { displayName, emails, photos, username } = profile;
        const user = {
            email: emails ? emails[0].value : null,
            firstName: displayName ? displayName.split(' ')[0] : username,
            lastName: displayName && displayName.split(' ').length > 1 ? displayName.split(' ').slice(1).join(' ') : '',
            picture: photos ? photos[0].value : null,
            accessToken,
            profile,
        };

        done(null, user);
    }
}
