import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/google')
export class GoogleOauthController {
    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() _req: any) {
        // Guard redirects
    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
        // Logic can be extended here
        // For now we just return the user
        res.json(req.user);
    }
}
