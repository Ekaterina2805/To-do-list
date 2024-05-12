import { Injectable, BadRequestException } from '@nestjs/common';
import { createReadStream, existsSync, mkdirSync } from 'fs';
import { extname, join } from 'path';
import * as fs from 'fs';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class MediaUploadService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadMedia(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const mediaDir = join(__dirname, '..', 'uploads');
    if (!existsSync(mediaDir)) {
      mkdirSync(mediaDir);
    }

    const mediaName = `${uuid()}${extname(file.originalname)}`;
    const mediaPath = join(mediaDir, mediaName);

    // Сохраняем файл на сервере
    await new Promise((resolve, reject) => {
      const stream = createReadStream(file.path);
      const writeStream = fs.createWriteStream(mediaPath);
      stream.pipe(writeStream);
      writeStream.on('error', reject);
      writeStream.on('finish', resolve);
    });

    return mediaPath;
  }
}
function uuid() {
    throw new Error('Function not implemented.');
}

