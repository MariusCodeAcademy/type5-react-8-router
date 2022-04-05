export const getData = async (url) => {
  try {
    const resp = await fetch(url);
    const usersFromApi = await resp.json();
    return usersFromApi;
  } catch (error) {
    console.log('getData error', error);
    return false;
  }
};
