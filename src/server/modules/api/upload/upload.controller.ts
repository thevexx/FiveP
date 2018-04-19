import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateFileDto } from './dto/create-upload.dto';
import { UploadServiceComponent } from './upload.service-component';
import { File } from './interfaces/upload.interface';

@Controller('upload')
export class UploadController {

  constructor(private readonly uploadServiceComponent: UploadServiceComponent) { }

  @Post()
  async create(@Body() createUserDto: CreateFileDto) {
    this.uploadServiceComponent.create(createUserDto);
  }

  async upload(@Body() params) {
    this.uploadServiceComponent.upload();
  }

}
