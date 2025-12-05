import { ModuleMetadata, Type } from '@nestjs/common';

export interface FacebookOauthOptions {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
}

export interface FacebookOauthOptionsFactory {
    createFacebookOauthOptions(): Promise<FacebookOauthOptions> | FacebookOauthOptions;
}

export interface FacebookOauthAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<FacebookOauthOptionsFactory>;
    useClass?: Type<FacebookOauthOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<FacebookOauthOptions> | FacebookOauthOptions;
    inject?: any[];
}
