import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/twitter')
export class TwitterOauthController {
    @Get()
    @UseGuards(AuthGuard('twitter'))
    async twitterAuth(@Req() _req: any) {
        // Guard redirects
    }

    @Get('redirect')
    @UseGuards(AuthGuard('twitter'))
    async twitterAuthRedirect(@Req() req: Request, @Res() res: Response) {
        // Logic can be extended here
        // For now we just return the user
        res.json(req.user);
    }
}
