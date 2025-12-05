import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { FacebookOauthOptions } from '../interfaces/facebook-oauth-options.interface';

@Injectable()
export class FacebookOauthStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(
        @Inject('FACEBOOK_OAUTH_OPTIONS') options: FacebookOauthOptions,
    ) {
        super({
            clientID: options.clientId,
            clientSecret: options.clientSecret,
            callbackURL: options.callbackUrl,
            scope: ['email', 'public_profile'],
            profileFields: ['id', 'displayName', 'photos', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (err: any, user: any, info?: any) => void,
    ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails ? emails[0].value : null,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos ? photos[0].value : null,
            accessToken,
            profile,
        };

        done(null, user);
    }
}
