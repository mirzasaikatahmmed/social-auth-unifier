import { ModuleMetadata, Type } from '@nestjs/common';

export interface LinkedinOauthOptions {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
}

export interface LinkedinOauthOptionsFactory {
    createLinkedinOauthOptions(): Promise<LinkedinOauthOptions> | LinkedinOauthOptions;
}

export interface LinkedinOauthAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<LinkedinOauthOptionsFactory>;
    useClass?: Type<LinkedinOauthOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<LinkedinOauthOptions> | LinkedinOauthOptions;
    inject?: any[];
}
