import functions from './index';

const 	bolunenler = [
   45,  63,  54,  78, 654,  63, 969,  45, 321, 570,
  546, 990, 480, 255, 885, 276, 636, 336, 945, 105,
   69, 477,  33, 885, 948, 762, 888, 423, 255, 474,
  231, 237, 546, 384, 381, 933, 180, 822, 552, 954,
  798,  75, 156, 123,  45,  78,  12,  24,  57, 207,
  762, 777, 798, 828, 588, 909,  36, 501, 273, 561,
  159, 507
];
const besyuz = [45,12.5,63,0.02,154,2,54,78,61.7,26,12.5,63,152,32,31,14,74,32,365.9,5.2,45,76,20,27.4,12.15,365.85,45.87,22,88,56.4,96.45,23,56,332,361,321,258.3,10,275,326,494,359,231.4,379.1,476,370.8,480,221.1,78.8,255,209,470.6,157,13,314,269.6,383,276,268.8,114.7,336,311.7,340,403.2,356.9,17,415,187.8,105,217,68,28,358.6,69,87.1,477,289,86,33,458,102.8,328.8,286,194,423,61.4,19,146.5,255,38.4,356,19,269,49.3,474,130,113.3,198.2,467.3,231,0.02,196.2,38,178.3,237,140,260.3,430,238.4,384,14,319.6,11.5,381,430,398.1,319.1,50,349.6,316.6,180,250.7,88.3,430.2,463.4,75,156,362,41,14.5,76,123,369.4,7.7,45,78,23,27.4,12,335.85,45.87,24,85,56.4,96.45,23,57,337.8,245,8.41,1.3,4.24,1.17,7.85,5.94,3.55,8.45,7.84,296,30.1,207,305.8,467.3,200.5,209,159.6,36,396.5,197.2,273,314,123.9,422,493.2,427,5.22,4.99,0.08,5.2,1.7,3.85,0.85,2.04,1.64,7.16,3.9,159,266,491,470.6,464.5,423.2,239.5,358.6,339.1]
const sirali = [
0.02,0.02,0.08,0.85,1.17,1.3,1.64,1.7,2,2.04,3.55,3.85,3.9,4.24,4.99,5.2,5.2,5.22,5.94,7.16,7.7,7.84,7.85,8.41,8.45,10,11.5,12,12.15,12.5,12.5,13,14,14,14.5,17,19,19,20,22,23,23,23,24,26,27.4,27.4,28,30.1,31,32,32,33,36,38,38.4,41,45,45,45,45.87,45.87,49.3,50,54,56,56.4,56.4,57,61.4,61.7,63,63,68,69,74,75,76,76,78,78,78.8,85,86,87.1,88,88.3,96.45,96.45,102.8,105,113.3,114.7,123,123.9,130,140,146.5,152,154,156,157,159,159.6,178.3,180,187.8,194,196.2,197.2,198.2,200.5,207,209,209,217,221.1,231,231.4,237,238.4,239.5,245,250.7,255,255,258.3,260.3,266,268.8,269,269.6,273,275,276,286,289,296,305.8,311.7,314,314,316.6,319.1,319.6,321,326,328.8,332,335.85,336,337.8,339.1,340,349.6,356,356.9,358.6,358.6,359,361,362,365.85,365.9,369.4,370.8,379.1,381,383,384,396.5,398.1,403.2,415,422,423,423.2,427,430,430,430.2,458,463.4,464.5,467.3,467.3,470.6,470.6,474,476,477,480,491,493.2,494
]
const tekrar = [
  '14 sayısı 2 kere tekrar edilmiştir',
  '19 sayısı 2 kere tekrar edilmiştir',
  '23 sayısı 3 kere tekrar edilmiştir',
  '32 sayısı 2 kere tekrar edilmiştir',
  '45 sayısı 3 kere tekrar edilmiştir',
  '63 sayısı 2 kere tekrar edilmiştir',
  '76 sayısı 2 kere tekrar edilmiştir',
  '78 sayısı 2 kere tekrar edilmiştir',
  '209 sayısı 2 kere tekrar edilmiştir',
  '255 sayısı 2 kere tekrar edilmiştir',
  '314 sayısı 2 kere tekrar edilmiştir',
  '430 sayısı 2 kere tekrar edilmiştir',
  '546 sayısı 2 kere tekrar edilmiştir',
  '762 sayısı 2 kere tekrar edilmiştir',
  '798 sayısı 2 kere tekrar edilmiştir',
  '845 sayısı 2 kere tekrar edilmiştir',
  '885 sayısı 2 kere tekrar edilmiştir',
  '12.5 sayısı 2 kere tekrar edilmiştir',
  '0.02 sayısı 2 kere tekrar edilmiştir',
  '5.2 sayısı 2 kere tekrar edilmiştir',
  '27.4 sayısı 2 kere tekrar edilmiştir',
  '45.87 sayısı 2 kere tekrar edilmiştir',
  '56.4 sayısı 2 kere tekrar edilmiştir',
  '96.45 sayısı 2 kere tekrar edilmiştir',
  '470.6 sayısı 2 kere tekrar edilmiştir',
  '358.6 sayısı 2 kere tekrar edilmiştir',
  '467.3 sayısı 2 kere tekrar edilmiştir'
]

describe('saFunction', ()=>{
    it('sa, as döndürüyor', ()=>{
        expect(functions.sa()).toBe('as');
    })
});
//görev 1
describe('CemberinCevresi görevi', (r)=>{
    it(2*3.14*r, ()=>{
	expect(functions.CemberinCevresi(10)).toEqual(62.8318);
    })
});
//görev 2
describe('CemberinAlani görevi', (r)=>{
    it('CemberinAlani bir sayı döndürüyor', (3,14*r*3)=>{
	expect(functions.CemberinAlani(4,3.14159)).toEqual(50.26544);
    })
});
//görev 3
// en büyük
    const enBuyuk = (sayilar) =>{
    let enBuyukSayi = sayilar[0];
      for(let i = 0; i< sayilar.length; i++){
          if(sayilar[i] > enBuyukSayi){
               enBuyukSayi = sayilar[i];
              
      }
      
  }    console.log(enBuyukSayi)
}
    // en küçük
    const enKucuk = (sayilar) =>{
        let enKucukSayi = sayilar[0];
          for(let i = 0; i< sayilar.length; i++){
              if(sayilar[i] < enKucukSayi){
                   enKucukSayi = sayilar[i];
                  
          }
          
      }    console.log(enKucukSayi)
    }

    // 3' e tam bölünenler
      const uceTam = (sayi) => {
        let tamBolunenler =[];
        for(let i = 0; i< sayi.length; i++){
            if(sayi[i]%3 === 0){
                tamBolunenler.push(sayi[i]);
            }
        }
      }

    // 3 e bölünenlerin toplamı

    const uceToplam = (sayi) => {
        let tamlar = 0;
            for(let i = 0; i< sayi.length; i++){
            if(sayi[i]%3 === 0){
                tamlar = tamlar + sayi[i];
            }
        }

    }
    // 500'den küçükler
    const besyuzdenKucukler = (sayi) => {
        let kucukOlanlar = [];
        for(let i = 0; i< sayi.length; i++){
            if(sayi[i] < 500){
                kucukOlanlar.push(sayi[i]);
            }

    }
    // Düzgün sıralanmış sayılar hangileri? 

    const duzgunSira = (sayi) => {
        sayi.sort((a,b) => a-b);
    }
    // tekrar eden sayılar neler?

    const tekrar = (sayi) => {

        const duplicates = sayi.filter((num, index) => sayi.indexOf(num) !== index);
    }
};