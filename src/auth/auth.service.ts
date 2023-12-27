import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtTokenService: JwtService) {}
  async getAuthToken(user: any) {
    const payload = { username: user.username };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
