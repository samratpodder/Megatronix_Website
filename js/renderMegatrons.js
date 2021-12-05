// const axios = require('axios');


class Megatron {
    constructor(picSrc){
        this.picSrc = picSrc;
    }
    getName(){
        const namewithExt = this.picSrc.substring(element.src.lastIndexOf("-"));
        const name = namewithExt.slice(2,namewithExt.lastIndexOf("."));
        
        return name;
    }
}





var apiData;
 function makeGetRequest(path) {
    axios.get(path).then(
        async (response) => {
            apiData = await response.data;
            // return result;
            // console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}






// var data = {
//     pictures:[
//         {
//             src:"/media/members/sdsdsdsd  - Beautiful Naaam.jpeg",
//             socials:[{}]
//         },
//         {
//             src:"/media/members/sdsdsdsd  - Beautiful Name.jpeg",
//             socials:[{}]
//         },
//         {
//             src:"/media/members/sdsdsdsd  - ExtremelyLong NameThisIs.jpeg",
//             socials:[{}]
//         },
//         {
//             src:"/media/members/sdsdsdsd  - Sundor Name.jpeg",
//             socials:[{}]
//         },
//         {
//             src:"/media/members/sdsdsdsd  - Sundor Name.jpeg",
//             socials:[{}]
//         },
//         {
//             src:"/media/members/sdsdsdsd  - Sundor Name.jpeg",
//             socials:[{}]
//         }
//     ],
//     count:6
// }


// data.pictures.forEach((element,i)=>
// {
//     console.log(document.querySelector(".cards").innerHTML);
// });





// // const apiData = makeGetRequest("http://localhost:3000/api/v1/getDir");
// setTimeout(() => {

// }, 1000);

// var megatrons = new Megatron[apiData.length];
// for (let i = 0; i < apiData.length; i++) {
//     const element = apiData[i];
    
// }



var megatronlist=[];
makeGetRequest("http://localhost:3000/api/v1/getDir");
setTimeout(() => {



    // console.log(apiData);



    for (let i = 0; i < apiData.length; i++) {
        const element = apiData[i];
        megatronlist.push(new Megatron(element));
    }

    for (let index = 0; index < megatronlist.length; index++) {
        const element = megatronlist[ index ];
        var Mainname = element.picSrc.substring(element.picSrc.lastIndexOf("-"));
        Mainname = Mainname.slice(2,Mainname.lastIndexOf("."));
        const card = document.createElement("div");
        card.classList = "card";
        const imgSrc = element.picSrc.slice(element.picSrc.indexOf("media"));
        console.log(imgSrc);
        const megatron = '\
        <div class="card-image">\
            <img src="'+element.picSrc+'" alt="">\
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
    // console.log(Mainname);
    }



},200);
