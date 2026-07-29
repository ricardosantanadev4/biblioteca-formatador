// ts-check

/**
 *
 * @param { string } name
 */
function formatName (name) {

  console.log('Iniciando function formatName');

  const partes = name.toLocaleLowerCase().split(' ');

  console.log(`Palavras: ${partes}`);

  const formatedName = partes.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

  return formatedName;
}

module.exports = { formatName };
