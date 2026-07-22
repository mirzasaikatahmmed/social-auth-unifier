import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth/apple')
export class AppleOauthController {
    @Get()
    @UseGuards(AuthGuard('apple'))
    async appleAuth(@Req() _req: any) {
        // Guard redirects to Apple
    }

    // Apple uses response_mode=form_post, so the callback arrives as POST.
    @Post('redirect')
    @UseGuards(AuthGuard('apple'))
    async appleAuthRedirect(@Req() req: Request, @Res() res: Response) {
        res.json(req.user);
    }
}
