import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Public()
  @Get()
  @ApiOperation({ summary: 'API Health Check' })
  checkHealth() {
    return {
      status: 'ok',
      service: 'Tilecraft Interiors API',
      timestamp: new Date().toISOString(),
    };
  }
}
