/*
  const data = {
      name: 'well',
      profession: 'developer',
  };
*/

module.exports.queryString = data =>
  Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
