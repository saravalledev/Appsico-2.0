const path = require('path');

module.exports = {
  renderMenuExterno: (caminhoMenu) => {
    return res.render(path.join(__dirname, '../', caminhoMenu));
  },
};
