

let API = "https://polls.apiblueprint.org/";
async function getData(url) {
  let response = await fetch(`${API}${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  let body = await response.json();
  return body;
}

async function postData(url, data) {
  let req = await fetch(`${API}${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    //   Authorization: "Token " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
}


export {getData,
                postData};