import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authServie : AuthService) { }

    @Post('/signup')
    signup(){

        return this.authServie.signup();
    }
}
