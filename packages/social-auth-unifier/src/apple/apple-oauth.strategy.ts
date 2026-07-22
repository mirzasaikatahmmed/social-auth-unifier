import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import AppleStrategy = require('passport-apple');
import { AppleOauthOptions } from '../interfaces/apple-oauth-options.interface';

function decodeIdToken(idToken: string): Record<string, any> {
    const payload = idToken.split('.')[1];
    if (!payload) {
        return {};
    }
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
}

function parseAppleUser(raw: unknown): { firstName?: string; lastName?: string; email?: string } {
    if (!raw) {
        return {};
    }

    const user = typeof raw === 'string' ? JSON.parse(raw) : raw;
    return {
        firstName: user?.name?.firstName,
        lastName: user?.name?.lastName,
        email: user?.email,
    };
}

@Injectable()
export class AppleOauthStrategy extends PassportStrategy(AppleStrategy, 'apple') {
    constructor(@Inject('APPLE_OAUTH_OPTIONS') options: AppleOauthOptions) {
        const privateKey = options.privateKey
            ? options.privateKey.replace(/\\n/g, '\n')
            : undefined;

        const strategyOptions: AppleStrategy.AuthenticateOptionsWithRequest = {
            clientID: options.clientId,
            teamID: options.teamId,
            keyID: options.keyId,
            callbackURL: options.callbackUrl,
            passReqToCallback: true,
            scope: ['email', 'name'],
        };

        if (privateKey) {
            strategyOptions.privateKeyString = privateKey;
        } else if (options.privateKeyPath) {
            strategyOptions.privateKeyLocation = options.privateKeyPath;
        }

        super(strategyOptions);
    }

    async validate(
        req: Request,
        accessToken: string,
        refreshToken: string,
        idToken: string,
        _profile: AppleStrategy.Profile,
        done: AppleStrategy.VerifyCallback,
    ): Promise<any> {
        const decoded = decodeIdToken(idToken);
        // Apple only sends name/email in the body on the first authorization.
        const appleUser = parseAppleUser(req.body?.user);

        const user = {
            id: decoded.sub,
            email: appleUser.email || decoded.email || null,
            firstName: appleUser.firstName || '',
            lastName: appleUser.lastName || '',
            picture: null,
            accessToken,
            idToken,
            profile: decoded,
        };

        done(null, user);
    }
}
