import fetch from 'dva/fetch';
import { isDev } from './configuration';

function parseJSON(response) {
  return response.json();
}

async function checkStatus(response) {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 403
  ) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = await response.json();
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      if (isDev()) {
        console.log('request suceeded with JSON response', url, data);
      }
      return data;
    })
    .catch(err => {
      if (isDev()) {
        console.log('request failed', url, err);
      }
      return err;
    });
  //   const response = await fetch(url, options);
  //   checkStatus(response);
  //   const data = await response.json();
  //   return data;
}

export function generateBody(params) {
  const str = [];
  if (typeof params === 'object') {
    Object.keys(params).forEach(item => {
      str.push(
        `${encodeURIComponent(item)}=${encodeURIComponent(params[item])}`
      );
    });
  }
  return str.join('&');
}

export async function postJson(url, json) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  };
  console.log(['postJson(url, json)', { url, json, options }]);
  return await request(url, options);
}
export async function postParams(url, params) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: generateBody(params)
  };
  console.log(['postParams(url, json)', { url, params, options }]);
  return await request(url, options);
}
export async function getJson(url) {
  const options = {
    credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };
  return await request(url, options);
}
export async function getNocredentialsJson(url) {
  const options = {
    credentials: 'omit',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };
  return await request(url, options);
}
