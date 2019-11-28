
let router = require('express').Router();
router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working',
      message: 'Selamat Datang',
  });
});
var mahasiswaController = require('./mahasiswaController');
router.route('/mahasiswa')
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);
router.route('/mahasiswa/:nim')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);
module.exports = router;
