import { existsSync, readdirSync, writeFileSync, appendFileSync } from "fs";
import { fontFaceTemplate } from "../config/fontFaceTemplate.js";
import { fontWeights } from "../config/fontWeights.js";
import { paths } from "../config/paths.js";

export const fontStyle = (done) => {
  const fontFacesFile = existsSync(paths.fonts.fontFacesFile);
  if (fontFacesFile) {
    done();
  }
  const fontsFiles = readdirSync(paths.fonts.dist);
  if (fontsFiles) {
    try {
      writeFileSync(paths.fonts.fontFacesFile, '');
      let newFileOnly;
      for (const file of fontsFiles) {
        const [fileName] = file.split('.');

        if (newFileOnly !== fileName) {
          const name = fileName.split('-')[0];
          let weight = fileName.split('-')[1];
          if (weight) {
            weight = weight.replace(/(?:_|__|-|\s)?(italic)/i, '').toLocaleLowerCase();
          }
          let weightString = weight || "regular";
          const fontStyle = /italic/i.test(fileName) ? 'italic' : 'normal';

          appendFileSync(paths.fonts.fontFacesFile, fontFaceTemplate(name, fileName, fontWeights[weightString], fontStyle));
          newFileOnly = fileName;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  done();
}