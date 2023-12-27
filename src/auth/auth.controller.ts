import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { ResponseAuthDto } from './dto/responseAuth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    type: AuthDto,
  })
  @ApiOperation({
    description: 'Autenticar para obtener el JWT',
  })
  @Post()
  @ApiOkResponse({ type: ResponseAuthDto })
  async login(@Body() data) {
    return this.authService.getAuthToken(data);
  }
}
