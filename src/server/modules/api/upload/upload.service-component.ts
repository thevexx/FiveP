import { Component } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import multer = require('multer');
import { File } from './interfaces/upload.interface';
import { CreateFileDto } from './dto/create-upload.dto';
import { fileSchema } from './schemas/upload.schema';


@Component()
export class UploadServiceComponent {

    constructor(@InjectModel(fileSchema) private readonly fileModel: Model<File>) { }

    private readonly file: File[] = [];

    public storageFile = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'src/upload');
        },
        filename(req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}`);
        }
    });

    public diskUpload = multer({ storage: this.storageFile });

    async create(createFiileDto: CreateFileDto): Promise<File> {
        const createdFile = new this.fileModel(createFiileDto);
        return await createdFile.save();
    }

}
