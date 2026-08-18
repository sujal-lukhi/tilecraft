import { Injectable, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StorageService {
  private uploadDir = process.env.UPLOAD_DIR || './uploads';

  constructor() {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  saveFile(file: Express.Multer.File, subfolder = 'gallery'): string {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const targetDir = path.join(this.uploadDir, subfolder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const fileExt = path.extname(file.originalname);
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${fileExt}`;
    const filePath = path.join(targetDir, fileName);

    fs.writeFileSync(filePath, file.buffer);

    return `/uploads/${subfolder}/${fileName}`;
  }
}
