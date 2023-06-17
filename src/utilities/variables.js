function pictureSource(value, pngImg2x, pngImg1x, webpImg2x, webpImg1x) {
  return [
    { image: pngImg2x, type: "image/png", media: value },
    { image: webpImg2x, type: "image/webp", media: value },
    { image: pngImg1x, type: "image/png" },
    { image: webpImg1x, type: "image/webp" },
  ];
}

export { pictureSource };
