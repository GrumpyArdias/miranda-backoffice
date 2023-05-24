import fetch from "cross-fetch";

export async function apiFetch(
  option: string,
  method: string,
  token: string,
  id?: string,
  body?: string
) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  try {
    let url = id
      ? `http://localhost:3001/api/${option}/${id}`
      : `http://localhost:3001/api/${option}/`;

    const res = await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    });
    if (res.status >= 400) {
      console.error("Bad response from Server");
    }
    console.log("fetch succeded");
    const response = await res.json();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("This is the error in the fetch", error);
    return error;
  }
}

export async function apiLoginFetch(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const res = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log("Login succeded");
      const token = await res.json();
      const tokenData = token.data;
      console.log(tokenData);
      return tokenData;
    } else {
      console.error("Bad response from server");
    }
  } catch (err) {
    console.error("This is the error in the fetch", err);
    return err;
  }
}
