
/**
 * Calls a GraphQL endpoint.
 *
 * @param {string} url - The GraphQL endpoint.
 * @param {string} method - The HTTP request method used.
 * @param {object} headers - The HTTP request headers used.
 * @param {string} query - The GraphQL query or mutation in string form.
 * @param {object} variables - Definitions of the variables needed
 * in the query parameter.
*/

export async function execute({url, method, headers, query, variables}) {

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });
  const data = await response.json();
  return data;

}
