import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/github')
export class GithubOauthController {
    @Get()
    @UseGuards(AuthGuard('github'))
    async githubAuth(@Req() _req: any) {
        // Guard redirects
    }

    @Get('redirect')
    @UseGuards(AuthGuard('github'))
    async githubAuthRedirect(@Req() req: Request, @Res() res: Response) {
        res.json(req.user);
    }
}
