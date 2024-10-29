import {
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { Public } from './decorator/customize';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  // @Public()
  // @Post('/login')
  // handleLogin(@Request() req) {
  //   return this.authService.login(req.body);
  // }

  // // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
