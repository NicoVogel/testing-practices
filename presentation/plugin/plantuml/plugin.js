import encoder from 'plantuml-encoder/browser-index';

/** @param block {HTMLElement} */
export function createPlantUmlImage(block) {
  const src = '//www.plantuml.com/plantuml/svg/' + encoder.encode(block.innerText);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
}
