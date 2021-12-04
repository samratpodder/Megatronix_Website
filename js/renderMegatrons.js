var data = {
    pictures:[
        {
            src:"images\\sdsdsdsd  - Beautiful Naaam.jpeg",
            socials:[{}]
        },
        {
            src:"images\\sdsdsdsd  - Beautiful Name.jpeg",
            socials:[{}]
        },
        {
            src:"images\\sdsdsdsd  - ExtremelyLong NameThisIs.jpeg",
            socials:[{}]
        },
        {
            src:"images\\sdsdsdsd  - Sundor Name.jpeg",
            socials:[{}]
        },
        {
            src:"images\\sdsdsdsd  - Sundor Name.jpeg",
            socials:[{}]
        },
        {
            src:"images\\sdsdsdsd  - Sundor Name.jpeg",
            socials:[{}]
        }
    ],
    count:6
}


// data.pictures.forEach((element,i)=>
// {
//     console.log(document.querySelector(".cards").innerHTML);
// });








var doc = document;
for (let index = 0; index < data.count; index++) {
    const element = data.pictures[index];
    var Mainname = element.src.substring(element.src.lastIndexOf("-"));
    Mainname = Mainname.slice(2,Mainname.lastIndexOf("."));
    const card = doc.createElement("div");
    card.classList = "card";
    const megatron = '\
    <div class="card-image">\
        <img src="'+element.src+'" alt="">\
    </div>\
    <div class="card-content">\
        <h3 class="name">'+Mainname+'</h3>\
        <h4> <i> Lorem ipsum dolor sit</i> </h4>\
        <div class="socials">\
            <ul class="social">\
                <li><a href="#" class="fa fa-facebook"></a></li>\
                <li><a href="#" class="fa fa-twitter"></a></li>\
                <li><a href="#" class="fa fa-instagram"></a></li>\
                <li><a href="#" class="fa fa-linkedin"></a></li>\
            </ul>\
        </div>\
    </div>\
    ';
    card.innerHTML += megatron;
    document.querySelector(".cards").appendChild(card);
console.log(Mainname);
}