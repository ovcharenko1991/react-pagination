// Emulation of promise based api request
const getPageStub = (page, perPage, fullData) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(fullData.slice((page - 1) * perPage, page * perPage)),
      500
    );
  });

export default {
  getPageStub
};
