Mahasiswa = require('./mahasiswaModel');

exports.index = function(req, res){
  Mahasiswa.get(function(err, mahasiswa){
    if(err){
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Data Mahasiswa berhasil Didapatkan",
      data: mahasiswa
    });
  })
}

exports.new = function(req, res){
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;
  mahasiswa.save(function(err){

    res.json({
      message:'Mahasiswa Baru Terdaftar',
      data: mahasiswa
    });
  });
};


exports.view = function (req, res) {
   Mahasiswa.findById(req.params.nim, function (err, mahasiswa) {
       if (err)
           res.send(err);
       res.json({
           message: 'Memuat Data Mahasiswa ...',
           data: mahasiswa
       });
   });
};


exports.update = function (req, res) {
Mahasiswa.findById(req.params.nim, function (err, mahasiswa) {
       if (err)
           res.send(err);
       mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
       mahasiswa.nama = req.body.nama;
       mahasiswa.jurusan = req.body.jurusan;
       mahasiswa.semester = req.body.semester;
       mahasiswa.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'Mahasiswa Info Update',
               data: mahasiswa
           });
       });
   });
};

exports.delete = function (req, res) {
   Mahasiswa.remove({
       _id: req.params.nim
   }, function (err, mahasiswa) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Mahasiswa Dihapus'
       });
   });
};
