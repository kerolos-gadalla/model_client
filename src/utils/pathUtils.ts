function getRouteUtils() {
    const getDemoPath = () => {
      return "/demo";
    };
    const getPlaygroundPath = () => {
      return "/playground";
    };
  
    return {
      getDemoPath,
      getPlaygroundPath,
    };
  }
  
  export const { getDemoPath, getPlaygroundPath } = getRouteUtils();
  