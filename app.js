// let hello = alert('Добро пожаловать)' );
// let name = prompt('Ваше имя?', "murod");
// let age = prompt('Солько вам лет?', "18");
// let year = prompt('Какого вы года рождения?',"2003");
// let adres = prompt('Ваш адрес?',"eski otchopar");
// let school = prompt('В какой школе вы учитесь?',"175");
// let tel = prompt('Номер телефона?',"97 734 03 28");

// alert(
//     "Ваше имя "+ name +
//      "\nВам "+ age + " лет"+
//     "\nВы "+ year +" года рождения"+
//     "\nВаш адрес "+ adres+
//     "\nВы учитесь в школе № "+ school+ 
//     "\nВаш номер телефона "+tel

// )

var elp= document.querySelector('#p')

alert('Xush kelibsiz!');
var name = prompt(`Iltimos ismingizni kiriting`),
    ctiy = prompt(`Qayerga sayoxat qilmoqchisiz?`),
    money = prompt(`siz bu sayoxatga qancha mablag ajratgansiz? (so'mda)`);

 alert(`Umumiy xarajatlar: 

 Borish-kelish samolyot bileti - $500

 Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250

 Muzey va ko’ngilochar joylar uchun - 120 yevro`);

var euro = 10354.03;
var usd = 9433.34;

var rasxod = (euro *120) +(usd*750) ;

if(money >= rasxod){

    elp.textContent= `Oq yo'l  ${name}`
} else{
    elp.textContent= ` ${name}  ozgina sabr qilish kerak bo’lar ekan.`
}
