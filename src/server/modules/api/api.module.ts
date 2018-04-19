import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UserModule,
    UploadModule,
     MongooseModule.forRoot('mongodb://localhost/Nest')],
  controllers: [ApiController],
  components: [],
})
export class ApiModule {}
