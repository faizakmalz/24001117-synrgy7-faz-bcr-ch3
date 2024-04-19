function filterCarByAvailability(cars) {
    console.log(cars);
    const result = [];
  
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].available === true) {
        console.log(cars[i]);
        result.push(cars[i]);
      }
    }
  
    return result;
  }