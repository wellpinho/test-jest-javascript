const queryString = data => {
  /*
    O método Object.entries() retorna uma array dos próprios pares  [key, value]
    enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do
    loop for...in (sendo a diferença que o for-in loop enumera também propriedades
    dispostas na cadeia de prototipagem - prototype chain).
  */
  const entries = Object.entries(data).map(item => {
    return `${item[0]}=${item[1]}`;
  });

  return entries.join('&');
};

module.exports = queryString;
