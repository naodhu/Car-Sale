class CompareItem {
  constructor(car) {
    this.car = car;
  }

  compareCategory(carB) {
    return this.car.Category.localeCompare(carB.Category);
  }

  compareMake(carB) {
    return this.car.Make.localeCompare(carB.Make);
  }

  compareModel(carB) {
    return this.car.Model.localeCompare(carB.Model);
  }

  compareYear(carB) {
    return this.car.Year - carB.Year;
  }
}

export default CompareItem;
