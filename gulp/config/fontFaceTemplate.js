export const fontFaceTemplate = (name, file, weight, style) => `@font-face {
	font-family: ${name};
	font-display: swap;
	src: url("../fonts/${file}.woff2") format("woff2"),
       url("../fonts/${file}.woff") format("woff");
	font-weight: ${weight};
	font-style: ${style};
}\n`;
