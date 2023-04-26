import { adjustLuminance } from './adjustLuminance';

describe('adjustLuminance', () => {
  it('brighten white', () => {
    expect(adjustLuminance('#ffffff', 0.2)).toEqual('#ffffff');
  });

  it('darken black', () => {
    expect(adjustLuminance('#000000', -0.2)).toEqual('#000000');
  });

  it('brighten black', () => {
    expect(adjustLuminance('#000000', 0.2)).toEqual('#333333');
  });

  it('darken white', () => {
    expect(adjustLuminance('#ffffff', -0.2)).toEqual('#cccccc');
  });

  it('darken red', () => {
    expect(adjustLuminance('#ff0000', -0.2)).toEqual('#990000');
  });

  it('brighten blue', () => {
    expect(adjustLuminance('#0000ff', 0.2)).toEqual('#3333ff');
  });

  it('no change to gray', () => {
    expect(adjustLuminance('#808080', 0)).toEqual('#808080');
  });

  it('brighten gray', () => {
    expect(adjustLuminance('#808080', 0.2)).toEqual('#cccccc');
  });

  it('darken gray', () => {
    expect(adjustLuminance('#808080', -0.2)).toEqual('#333333');
  });

  it('brighten green', () => {
    expect(adjustLuminance('#00ff00', 0.2)).toEqual('#66ff66');
  });

  it('darken yellow', () => {
    expect(adjustLuminance('#ffff00', -0.2)).toEqual('#999900');
  });

  it('adjust with RGB input', () => {
    expect(adjustLuminance([0, 255, 0], 0.2)).toEqual('#33ff33');
  });

  it('exceed upper limit', () => {
    expect(adjustLuminance('#ff00ff', 2)).toEqual('#ffffff');
  });

  it('exceed lower limit', () => {
    expect(adjustLuminance('#660066', -2)).toEqual('#000000');
  });
});
