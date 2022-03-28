const address = {
  street: "",
  city: "",
  country: "",
};
const street = address.street;
const city = address.city;
const country = address.country;

//object destructure method
const { street: st, city: ci, country: co } = address;
