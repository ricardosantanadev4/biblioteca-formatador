// ts-check

/**
 *
 * @param { string } name
 */
function formatName (name) {
  const partes = name.split(" ");

  console.log(partes);

  const formatedName = partes.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");

  console.log(formatedName);
}
