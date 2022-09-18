const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

//TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise ((resolve, reject) => {
    if (emosi != "marah" && emosi != "tidak marah"){
      reject(" Emosi harus berupa \"marah\" atau \"tidak marah\"");
    } else {
      resolve(emosi);
    }
  })
  .then(data => {
    a = data;
    return promiseTheaterIXX()
  })
  .then((array) =>{
    array.forEach(element => {
      if (element.hasil === a){
        count += 1;
      }
    });
    return promiseTheaterVGC()
  })
  .then((array) =>{
    array.forEach(element => {
      if (element.hasil === a){
        count += 1;
      }
    });
    return count;
  })
  .catch(error => console.log(error))
  .finally(count = 0);

};
let a;
let count = 0;

  







module.exports = {
  promiseOutput,
};
