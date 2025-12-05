import { Module } from '@nestjs/common';
import { SocialAuthModule } from 'social-auth-unifier';
import { AppController } from './app.controller';

@Module({
    imports: [
        SocialAuthModule.register(),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
