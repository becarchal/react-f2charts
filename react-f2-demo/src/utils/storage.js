
export const memoryStorage = {
  set: function set(key, value) {
    sessionStorage[key] = value;
  },
  get: function get(key) {
    return sessionStorage[key];
  },
  remove: function remove(key) {
    delete sessionStorage[key];
  },
  clear: function clear() {
    sessionStorage.clear();
  },
};
export const deviceStorage = {
  set: function set(key, value) {
    localStorage[key] = value;
  },
  get: function get(key) {
    return localStorage[key];
  },
  remove: function remove(key) {
    delete localStorage[key];
  },
  clear: function clear() {
    localStorage.clear();
  },
};
