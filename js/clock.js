
//Burada ismi kullanıcıdan alıp HTML de id=myName olan parametreye yolluyoruz.
let name = prompt("Lütfen kullanıcı isminizi giriniz:")
document.getElementById("myName").innerHTML = name; 

let days= ["Pazartesi","Salı","Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

setInterval(() => {
    let d= new Date;
    let day = (days[d.getDay()])

document.getElementById("myClock").innerHTML = d.toLocaleString() +  day;
},1000)



  



