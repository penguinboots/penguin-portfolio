function convertRemToPixels(rem) {
  return (
    rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
}

export { convertRemToPixels };