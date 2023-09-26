import {IsString,IsNotEmpty, IsEmail, MinLength, Matches} from "class-validator"

export class SignupDTO{

    @IsString()
    @IsNotEmpty()
    name:string;

    @Matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/,{message : "phone number is not a valid phone number"})
    phone:string;
    
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password:string;
}