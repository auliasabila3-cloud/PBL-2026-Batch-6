function introduce(nama,jk,pekerjaan,umur){
    return (jk=="laki-laki" ? "Pak" : "Bu") + ` ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}

let john = introduce("John", "laki-laki", "penulis", "30")
console.log(john)

let sarah = introduce("Sarah", "perempuan", "model", "20")
console.log(sarah)