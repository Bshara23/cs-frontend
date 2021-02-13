const axios = require ('axios');
export const API_URL = 'http://localhost:5000';
export const logIn = async (email, password) => {
  try {
    return await axios
      .get (API_URL + `/users/${email}/${password}`)
      .then (res => {
        return res;
      });
  } catch (error) {
    console.error (error);
  }
};

export const doesEmailExists = async (email) => {
  try {
    return await axios
      .get (API_URL + `/users/${email}`)
      .then (res => {
        return res;
      });
  } catch (error) {
    console.error (error);
  }
};

export const register = async (
  fname,
  lname,
  email,
  password,
  promoCode = ''
) => {
  try {
    return await axios
      .post (API_URL + `/users`, {
        name: fname,
        family_name: lname,
        email,
        promo_code: promoCode,
        password,
      })
      .then (res => {
        return res;
      });
  } catch (error) {
    console.error (error);
  }
};
