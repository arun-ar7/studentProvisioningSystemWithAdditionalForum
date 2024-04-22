const axios = require("axios");

async function callApi({ name, email }) {
  let data = `JSONString=%7B%22name%22%3A%22${name}%22%2C%22email%22%3A%22${email}%22%2C%22role_id%22%3A%221781869000000000780%22%2C%22custom_fields%22%3A%5B%5D%2C%22is_accountant_invite%22%3Afalse%7D&organization_id=${id}`;
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://books.zoho.in/api/v3/users",
    headers: {
      //headers with auth token
    },
    data: data,
  };

  try {
    response = await axios.request(config);
    return true;
  } catch (error) {
    if (error.response?.data?.message?.includes("already been invited")) {
      return false;
    }
    throw error;
  }
}

exports.callApi = callApi;
