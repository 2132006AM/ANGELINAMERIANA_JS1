// if statement
let height = 160;

if (height >159){
    console.log("Selamat, Anda bisa melanjutkan test PASKIBRA berikutnya")
}

// if else
let birth = 2003;

if (birth >=2000){
    console.log("Umur lebih tua atau sama dengan 23 tahun")
} else{
    console.log("Umur lebih muda dari 23 tahun")
}

// nested if
let belanja = 200000;
let voucher = true;

if (belanja < 200000){
    console.log("Maaf, Anda tidak dapat menggunakan voucher diskon ini")
} else{
    if(belanja >= 200000 && voucher == true){
        console.log("Selamat, voucher diskon Anda berhasil digunakan")
    }else{
        console.log("Maaf, anda tidak mendapatkan diskon")
    }
}

// switch case
let beli = "Tokek";

switch (beli) {
    case "Baju":
        console.log("Anda membeli Baju");
        break;
    case "Buah":
        console.log("Anda membeli Buah");
        break;
    case "Tokek":
        console.log("Anda membeli Tokek");
        break;
    case "Makanan Kucing":
        console.log("Anda membeli Makanan Kucing");
        break;
    case "Tuak":
        console.log("Anda membeli Tuak");
        break;
    case "Tanah":
        console.log("Anda membeli Tanah");
        break;
    default:
        console.log("Anda tidak membeli apa-apa");
}

// for statement
for (let i = 2; i <= 6; i++) {
    console.log("Aku mempunyai "+i+" pacar");
}

//while
let umur = 20;
while (umur <= 28){
    console.log("Anda berumur "+umur+" tahun");
    umur++;
}

// do while
let coins = 10;
do {
    if (coins % 10 === 0) {
        console.log(coins + " adalah jumlah koin anda sekarang");
    }
    coins++;
} while (coins <= 100);

//function
function pangkat(x, y) {
    let hasil = x ** y;
    return hasil;
}
let jadi = pangkat(1234, 56);

// Menampilkan hasilnya di konsol
console.log("Hasil Pemangkatan: " + jadi);
