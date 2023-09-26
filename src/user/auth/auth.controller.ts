import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from '../DTOS/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authServie : AuthService) { }

    @Post('/signup')
    signup(@Body() body : SignupDTO){

        return this.authServie.signup();
    }
}
