var list = "Super Cars";
var harga;

switch (list) {
  case "Sport Cars":
    harga = 30000000;
    break;
  case "Super Cars":
    harga = 50000000;
    break;
  case "Family Cars":
    harga = 25000000;
    break;
  default:
    harga = "Mobil tidak ada dalam daftar";
}

console.log("Harga " + list + " adalah " + harga + " ribu rupiah");

