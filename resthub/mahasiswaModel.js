
var mongoose = require('mongoose');
var mahasiswaSchema = mongoose.Schema({
  create_date: {
      type: Date,
      default: Date.now
  },
  nim:{
     type:String,
     required:true,
     index:{
         unique:true
     }
  },
  nama: {
      type: String,
      required: true
  },
  jurusan: String,
  semester: String
});
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
}
