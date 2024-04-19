function sortCarByYearDescendingly(cars) {
    console.log(cars);
    const result = [...cars];
 
    result.sort(function (a, b) {
      return b.year - a.year;
    });
  
    return result;
  }