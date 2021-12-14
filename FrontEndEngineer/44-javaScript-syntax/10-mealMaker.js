const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizersList) {
    this._courses.appetizers = appetizersList;
  },
  set mains(mainList) {
    this._courses.mains = mainList;
  },
  set desserts(dessertList) {
    this._courses.desserts = dessertList;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is: $${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "salad", 4.0);
menu.addDishToCourse("appetizers", "fries", 5.0);
menu.addDishToCourse("appetizers", "wings", 6.0);

menu.addDishToCourse("mains", "beef", 15.0);
menu.addDishToCourse("mains", "turkey", 20.0);
menu.addDishToCourse("mains", "pig feet", 18.5);

menu.addDishToCourse("desserts", "ice cream", 7.0);
menu.addDishToCourse("desserts", "flan", 6.0);
menu.addDishToCourse("desserts", "pudding", 7.5);

const meal = menu.generateRandomMeal();
console.log(meal);