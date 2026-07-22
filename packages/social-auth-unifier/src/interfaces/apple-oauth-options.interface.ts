import { ModuleMetadata, Type } from '@nestjs/common';

export interface AppleOauthOptions {
    clientId: string;
    teamId: string;
    keyId: string;
    callbackUrl: string;
    /** Contents of the .p8 private key (use \\n for newlines in env vars). */
    privateKey?: string;
    /** Absolute or relative path to the .p8 private key file. */
    privateKeyPath?: string;
}

export interface AppleOauthOptionsFactory {
    createAppleOauthOptions(): Promise<AppleOauthOptions> | AppleOauthOptions;
}

export interface AppleOauthAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<AppleOauthOptionsFactory>;
    useClass?: Type<AppleOauthOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<AppleOauthOptions> | AppleOauthOptions;
    inject?: any[];
}
