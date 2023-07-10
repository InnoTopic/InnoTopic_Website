export function hexToRgb(hex: string): string {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

export function getIonicTextColor(backgroundColor: string, contrastValue: 'high' | 'medium' | 'low'): string {
  // Convert the background color to RGB format
  const hexToRgb = (hex: string): number[] => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      throw new Error(`Invalid hexadecimal color code: ${hex}`);
    }
    const [_, r, g, b] = match;
    return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
  };
  const rgbBackground: number[] = hexToRgb(backgroundColor);

  // Calculate the relative luminance of the background color
  const luminance: number = (rgbBackground[0] * 0.299 + rgbBackground[1] * 0.587 + rgbBackground[2] * 0.114) / 255;

  // Determine the appropriate foreground color based on the contrast value
  if (contrastValue === 'high') {
    return luminance > 0.5 ? '#000000' : '#ffffff';
  } else if (contrastValue === 'medium') {
    return luminance > 0.4 ? '#000000' : '#ffffff';
  } else if (contrastValue === 'low') {
    return luminance > 0.6 ? '#000000' : '#ffffff';
  } else {
    return '#000000'; // default to black if contrast value is invalid
  }
}

