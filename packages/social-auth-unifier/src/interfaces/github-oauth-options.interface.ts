import { ModuleMetadata, Type } from '@nestjs/common';

export interface GithubOauthOptions {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
}

export interface GithubOauthOptionsFactory {
    createGithubOauthOptions(): Promise<GithubOauthOptions> | GithubOauthOptions;
}

export interface GithubOauthAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useExisting?: Type<GithubOauthOptionsFactory>;
    useClass?: Type<GithubOauthOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<GithubOauthOptions> | GithubOauthOptions;
    inject?: any[];
}
