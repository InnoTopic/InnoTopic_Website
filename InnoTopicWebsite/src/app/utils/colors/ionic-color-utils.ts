import * as chroma from 'chroma-js';
import {hexToRgb} from "./colorUtils";

export function setIonicColorSteps(baseColor: string, step: number = 50, limit: number = 950): void {
  const root = document.documentElement;

  for(let i = step; i <= limit; i += step) {
    const factor = i / 1000;

    let color = ''
    // if(chroma(baseColor).luminance() < 0.5) {
    //   // FIXME: use chroma.mix 0..1 bg & fg or just opacity
    //   color = chroma(baseColor).brighten(factor/* *3 */).css();
    // } else {
    //   color = chroma(baseColor).darken(factor/* *3 */).css();
    // }
    color = chroma(baseColor).alpha(factor).css();

    const ccsVarName = `--ion-color-step-${i}`;
    root.style.setProperty(ccsVarName, color);
    // console.log(`ccsVarName, color`, factor, ccsVarName, color)
  }
}


export function setIonicColorVarHexAndRgb(root: CSSStyleDeclaration, varName: string, colorValue: string) {
  console.log(`root.setProperty(, )`, varName, colorValue)
  root.setProperty(varName, colorValue)
  // set in RGB format: https://ionicframework.com/docs/theming/advanced#the-alpha-problem
  root.setProperty(`${varName}-rgb`, hexToRgb(colorValue))
}
