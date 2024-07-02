let harp = prompt('Ismingizni yozing')
let harf = prompt('harfni yozing')

if(harp.toLocaleLowerCase().includes(harf.toLocaleLowerCase())){
    alert(`Ismingizda ${harf} bor`)
}else{
    alert(`Ismingizda ${harf} yoq`)
}































