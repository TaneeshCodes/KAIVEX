import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve('src/shaders/neuform-isolated/sources/creator-studio-intro.html');
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

function transformIntroSource(source, text, fontSize, showMark = false, logoSvg) {
  let transformed = source;

  // Adapt the text and loop in makeWordmark
  const authoredLoop = `    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }`;

  const customText = text || 'ThreeUI';
  const customFontSize = fontSize || (customText.includes('\n') ? 74 : 56);

  const replacementLoop = `    var chars=[], str=${JSON.stringify(customText)};
    for(var i=0;i<str.length;i++){
      if(str[i]==='\\n'){
        tx.appendChild(document.createElement('br'));
        continue;
      }
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }`;

  if (transformed.includes(authoredLoop)) {
    transformed = transformed.replace(authoredLoop, replacementLoop);
  } else {
    console.warn('authoredLoop not found in exact format, trying flexible replace');
  }

  // Handle mark visibility
  if (!showMark) {
    transformed = transformed.replace(
      "var mk=el('span','mark',tx,APPLE);",
      "var mk=el('span','mark',tx,''); mk.style.display='none';"
    );
  } else if (logoSvg) {
    transformed = transformed.replace(
      "var mk=el('span','mark',tx,APPLE);",
      `var mk=el('span','mark',tx,${JSON.stringify(logoSvg)});`
    );
  }

  // Replace fitPx calculation with custom or calculated font size
  transformed = transformed.replace(
    "var fs=fitPx('Creator Studio',678);",
    `var fs=${customFontSize};`
  );

  return transformed;
}

const test1 = transformIntroSource(rawHtml, "YOUR NEXT BIG THING,\nOUR NEXT BIG BUILD", 72, false);
console.log('Test transform successful!');
console.log('Contains YOUR NEXT BIG THING:', test1.includes('YOUR NEXT BIG THING'));
console.log('Contains br check:', test1.includes("str[i]==='\\n'"));
