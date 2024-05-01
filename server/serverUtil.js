const axios = require("axios");

async function callApi({ name, email, role_id, org_id, oauth }) {
  const axios = require("axios");
  let data = JSON.stringify({
    name: name,
    email: email,
    role_id: role_id,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://www.zohoapis.in/books/v3/users?organization_id${org_id}`,
    headers: {
      Authorization: "Zoho-oauthtoken " + oauth,
      "content-type": "application/json",
      Cookie:
        "BuildCookie_60028095508=1; 54900d29bf=c6306c95177cf811ef626b61272b63be; JSESSIONID=555760B4F0FBC2566F64655DF19C1644; _zcsr_tmp=41283d93-1fb9-4b62-a7fe-b7ee3cd6e7de; zbcscook=41283d93-1fb9-4b62-a7fe-b7ee3cd6e7de",
    },
    data: data,
  };

  try {
    console.log("oauth ", oauth);
    const response = await axios.request(config);
    res.send(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    // console.log(error.messge);
    res.status(400).send("Error occured");
  }
}

exports.callApi = callApi;
