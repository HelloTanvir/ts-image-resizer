import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function resizeImage(inputPath: string, outputPath: string, width: number, height: number) {
  try {
    await sharp(inputPath)
      .resize(width, height, {
        position: 'top',
      })
      .toFile(outputPath);
    console.log(`Image resized and saved to ${outputPath}`);
  } catch (error) {
    console.error(`Error resizing image: ${error}`);
  }
}

const inputImagePath = path.join(__dirname, '../image', 'input.jpg');
const resizedImagePath = path.join(__dirname, '../image', 'resized.jpg');

const width = 400;
const height = 400;

(async () => {
  await resizeImage(inputImagePath, resizedImagePath, width, height);
})();
