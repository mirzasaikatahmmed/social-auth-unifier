import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-linkedin-oauth2';
import { LinkedinOauthOptions } from '../interfaces/linkedin-oauth-options.interface';

@Injectable()
export class LinkedinOauthStrategy extends PassportStrategy(Strategy, 'linkedin') {
    constructor(
        @Inject('LINKEDIN_OAUTH_OPTIONS') options: LinkedinOauthOptions,
    ) {
        super({
            clientID: options.clientId,
            clientSecret: options.clientSecret,
            callbackURL: options.callbackUrl,
            scope: ['r_emailaddress', 'r_liteprofile'],
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
