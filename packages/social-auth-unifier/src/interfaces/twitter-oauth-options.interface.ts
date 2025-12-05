import { ModuleMetadata, Type } from '@nestjs/common';

export interface TwitterOauthOptions {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
}

export interface TwitterOauthOptionsFactory {
    createTwitterOauthOptions(): Promise<TwitterOauthOptions> | TwitterOauthOptions;
}

export interface TwitterOauthAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<TwitterOauthOptionsFactory>;
    useClass?: Type<TwitterOauthOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<TwitterOauthOptions> | TwitterOauthOptions;
    inject?: any[];
}
