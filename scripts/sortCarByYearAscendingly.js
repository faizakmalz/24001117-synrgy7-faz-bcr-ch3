function sortCarByYearAscendingly(cars) {
    console.log(cars);
    const result = [...cars];
  
    result.sort(function (a, b) {
      return a.year - b.year;
    });
  
    return result;
  }