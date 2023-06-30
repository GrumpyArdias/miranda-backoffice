import fetch from "cross-fetch";
type fetchParam = {
  option: string;
  method: string;
  token: string;
  id?: string;
  body?: string;
};

export async function apiFetch(params: fetchParam) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + params.token,
  };

  let url = params.id
    ? `http://localhost:3001/api/${params.option}/${params.id}`
    : `http://localhost:3001/api/${params.option}`;
  //
  const res = await fetch(url, {
    method: params.method,
    headers: headers,
    body: params.body,
  });

  if (!res.ok) {
    throw new Error();
  }
  const response = await res.json();
  return response.data;
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
      const data = await res.json();
      const fixedData = data.data;
      return fixedData;
    } else {
    }
  } catch (err) {
    throw new Error();
  }
}
