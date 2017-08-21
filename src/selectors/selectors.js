/*This file is a selector because it is selecting data. If we have complicated data selection or manipulation code
 * we can consider placing it here. (Can be split to multiple file if the file too large: authorSelectors, courseSelectors... etc)
 * */

//NOTE: there is a Reselect.js library that allows a selector only to run if the parameter changes. useful for expensive operations

export function authorsFormattedForDropdown(authors){
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
