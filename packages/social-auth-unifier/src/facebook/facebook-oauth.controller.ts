import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/facebook')
export class FacebookOauthController {
    @Get()
    @UseGuards(AuthGuard('facebook'))
    async facebookAuth(@Req() _req: any) {
        // Guard redirects
    }

    @Get('redirect')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuthRedirect(@Req() req: Request, @Res() res: Response) {
        res.json(req.user);
    }
}
