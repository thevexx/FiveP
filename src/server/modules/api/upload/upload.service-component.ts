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

    async create(createFileDto: CreateFileDto): Promise<File> {
        const createdFile = new this.fileModel(createFileDto);
        return await createdFile.save();
    }
    async upload() {
        const storageFile = multer.diskStorage({
            destination(req, file, cb) {
                cb(null, 'src/upload');
            },
            filename(req, file, cb) {
                cb(null, `${file.fieldname}-${Date.now()}`);
            }
        });
        console.log(storageFile);
        const diskUpload = multer({ storage: storageFile });
        diskUpload.any();
    }

}
