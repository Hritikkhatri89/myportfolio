import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function createPdf() {
  const imageBytes = fs.readFileSync('public/resume.png');
  const pdfDoc = await PDFDocument.create();
  let image;
  try {
    image = await pdfDoc.embedJpg(imageBytes);
  } catch (e) {
    try {
      image = await pdfDoc.embedPng(imageBytes);
    } catch (e2) {
      console.error("Could not embed image");
      return;
    }
  }

  const { width, height } = image.scale(1);
  const page = pdfDoc.addPage([width, height]);
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: width,
    height: height,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/resume.pdf', pdfBytes);
  console.log('PDF created successfully at public/resume.pdf');
}

createPdf();
