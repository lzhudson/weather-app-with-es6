class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Fortaleza';
    this.defaultCountry = 'BR';
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', country);
  }
}