import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/linkedin')
export class LinkedinOauthController {
    @Get()
    @UseGuards(AuthGuard('linkedin'))
    async linkedinAuth(@Req() _req: any) {
        // Guard redirects
    }

    @Get('redirect')
    @UseGuards(AuthGuard('linkedin'))
    async linkedinAuthRedirect(@Req() req: Request, @Res() res: Response) {
        res.json(req.user);
    }
}
