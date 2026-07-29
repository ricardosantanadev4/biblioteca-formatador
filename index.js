// ts-check

/**
 *
 * @param { string } name
 */
function formatName (name) {

  const partes = name.toLocaleLowerCase().split(' ');

  const formatedName = partes.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

  return formatedName;
}

module.exports = { formatName };
