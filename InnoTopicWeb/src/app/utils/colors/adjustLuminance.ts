type ColorInput = string | [number, number, number];
type Hsl = [number, number, number];

export function toRgb(input: ColorInput): Hsl {
  let r, g, b;
  if (typeof input === 'string') {
    const c = input[0] === '#' ? input.substr(1) : input;
    const num = parseInt(c, 16);
    r = (num >> 16) & 255;
    g = (num >> 8) & 255;
    b = num & 255;
  } else {
    [r, g, b] = input;
  }
  return [r, g, b];
}

export function toHsl(rgb: Hsl): Hsl {
  const [r, g, b] = rgb.map(c => c / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  let h = 0, s = 0, l = (max + min) / 2;

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch (max) {
      case r: h = (g - b) / diff + (g < b ? 6 : 0); break;
      case g: h = (b - r) / diff + 2; break;
      case b: h = (r - g) / diff + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}

function fromHsl(hsl: Hsl): string {
  const [h, s, l] = hsl;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
  const g = Math.round(hue2rgb(p, q, h) * 255);
  const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);

  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export function adjustLuminance(color: ColorInput, amount: number): string {
  const rgb = toRgb(color);
  const hsl = toHsl(rgb);
  hsl[2] = Math.min(Math.max(hsl[2] + amount, 0), 1);
  return fromHsl(hsl);
}
