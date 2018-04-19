import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from './upload.controller';
import { UploadServiceComponent } from './upload.service-component';
import { fileSchema } from './schemas/upload.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'File', schema: fileSchema }])],
    controllers: [UploadController],
    components: [UploadServiceComponent],
    exports: [UploadModule],
})
export class UploadModule { }
