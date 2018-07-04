export const resize = (frame, image) => {
  if (frame.width === image.width && frame.height === image.height) {
    return {width: frame.width, height: frame.height};
  }
  if (image.width < image.height) {
    return {width: Math.floor(frame.width / 2), height: frame.height};
  }
  if (image.width > image.height) {
    return {width: frame.width, height: Math.floor(frame.height / 2)};
  }
  return new Error(`Can't get sizes`);
};
