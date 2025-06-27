const nama = "Hyperbank";
let usia = 20;
let text = document.getElementById('textm');

function PengenalanData() {
  let generasi;
  if(usia >= 10 && usia <= 20) {
    generasi = "remaja";
  }else {
    generasi = "bukan aku";
  }
  
  return textm.innerHTML = generasi;
  return console.log(generasi);
}
console.log (nama);
  console.log (usia);
  PengenalanData();