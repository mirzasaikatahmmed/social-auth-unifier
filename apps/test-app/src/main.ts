import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Required for Apple Sign In (response_mode=form_post)
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use(
        session({
            secret: 'my-secret',
            resave: false,
            saveUninitialized: false,
        }),
    );

    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
