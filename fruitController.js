// import data
const fruits = require('./data');

// menampilkan semua data
const index = () => {
   for (const fruit of fruits) {
      console.log(fruit);    
   }
}

// Menambahkan data
const store = (name) => {
    fruits.push(name);
    index()
}

// Mengupdate data
const update = (id, name) => {
    fruits[id] = name;
    index()
}

// Menghapus data
const destroy = (id) => {
    fruits.splice(id, 1);
    index()
}

// export module
module.exports = { index, store, update, destroy }

