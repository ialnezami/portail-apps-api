import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  uploadAvatar(file: Express.Multer.File) {
    // save file in folder ./uploads as a token name (e.g. 1234567890abcdef) and return link
    // to download file
  }
  getHello(): string {
    return 'Hello World!';
  }
}
