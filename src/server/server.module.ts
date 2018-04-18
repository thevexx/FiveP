import { Module } from '@nestjs/common';

import { ApiModule } from './modules/api/api.module';
import { StaticModule } from './modules/static/static.module';
import { EventsGateway } from './events.gateway.';
import { UserModule } from './modules/api/users/user.module';

@Module({
  imports: [
    ApiModule,
    StaticModule,
    UserModule,
  ],
  controllers: [],
  components: [
    EventsGateway
  ],
})
export class ApplicationModule {}
