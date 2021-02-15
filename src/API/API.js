const axios = require ('axios');
const nodemailer = require ('nodemailer');

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

export const doesEmailExists = async email => {
  try {
    return await axios.get (API_URL + `/users/${email}`).then (res => {
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

export const sendMail = async (to, subject, text) => {
  try {
    return await axios
      .post (API_URL + `/sendMail`, {
        to,
        subject,
        text,
      })
      .then (res => {
        return res;
      });
  } catch (error) {
    console.error (error);
  }
};

export const getUserSpare1 = async id => {
  try {
    return await axios.get (API_URL + `/spare1/${id}`).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};
export const setUserSpare1 = async (id, spare1) => {
  try {
    return await axios.put (API_URL + `/spare1`, {id, spare1}).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};


export const getUserSpare2 = async id => {
  try {
    return await axios.get (API_URL + `/spare2/${id}`).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};
export const setUserSpare2 = async (id, spare2) => {
  try {
    return await axios.put (API_URL + `/spare2`, {id, spare2}).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};



export const setUserSpare1byEmail = async (email, spare1) => {
  try {
    return await axios.put (API_URL + `/spare1email`, {email, spare1}).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};
export const generateUserSpare1ByEmail = async (email) => {
  try {
    return await axios.put (API_URL + `/spare1email`, {email}).then (res => {
      return res;
    });
  } catch (error) {
    console.error (error);
  }
};
export const updatePasswordByToken = async (id, spare1, newPassword) => {
  try {
    return await axios
      .put (API_URL + `/updatePasswordByToken`, {
        id,
        spare1,
        newPassword,
      })
      .then (res => {
        return res;
      });
  } catch (error) {
    console.error (error);
  }
};
