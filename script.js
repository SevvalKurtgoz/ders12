console.log("Ben satır 1'deki kodum")

let pr1 = new Promise( (basarili ,basarisiz) => {
//  zaman alan işlemler


basarili("Tüm işlemler tamamlandı")

})
// ilk colback promise tamamlandıktan sonra başarılsa ilk colback tetiklenir
// başarısız ise ikinci callback tetiklenir
pr1
.then((deger) => {
  console.log("işlem tamamlandı. İşlem sonucu" + deger)
})
 .catch ((hata) => {
    console.log("Bir hata oluşmuş. Hata:" + hata)
 })
//FinLLY => Yukarıdakilerden biri çaılışınca çalışır verileri boşaltmak için kullanılır
 .finally( () => {})
console.log("Ben satır 8'deki kodum")

for (let i = 0; i < 20; i++){
   console.log("sayaç:" +i)
}



async function mesajGoster() {
    let pr1 = new Promise( ( basarili, basarisiz )=>{
        // zaman alan işlemler
        //...
        //...
        //...
    
        basarisiz("HATA! HATA! HATA!.")
    } )

    try {
        let deger = await pr1
        console.log( deger )
    } catch(hata) {
        console.log(hata)
    }

}

mesajGoster()

