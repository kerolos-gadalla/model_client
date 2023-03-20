function getRouteUtils() {
  const getDemoPath = () => {
    return "/demo";
  };
  const getPlaygroundPath = () => {
    return "/playground";
  };

  const getTesseractPath = () => {
    return "/tesseract";
  };

  return {
    getDemoPath,
    getPlaygroundPath,
    getTesseractPath,
  };
}

export const { getDemoPath, getPlaygroundPath, getTesseractPath } =
  getRouteUtils();
