// const axios = require('axios');


class Megatron {
    constructor(membername,facebook,github,
        email,linkedin,picSrc,phoneNo,specialText){
        this.picSrc = picSrc;
        this.membername = membername;
        this.facebook = facebook;
        this.github = github;
        this.email = email;
        this.linkedin = linkedin;
        this.specialText = specialText;
        this.phoneNo = phoneNo;
    }
    getName(){
        // const namewithExt = this.picSrc.substring(element.src.lastIndexOf("-"));
        // const name = namewithExt.slice(2,namewithExt.lastIndexOf("."));
        
        return this.membername;
    }
    getPicSrc(){
        const offset = 4;
        const idLength = 33;//Google Drive File ID 2019 Standards
        const id = this.picSrc.slice(this.picSrc.indexOf("&id=")+offset,this.picSrc.indexOf("&id=")+offset+idLength);
        const src = "https://drive.google.com/uc?export=view&id="+id;
        return src;
    }
    getSocialMedia(){
        return {github:this.github,linkedin:this.linkedin,facebook:this.facebook,email:"mailto:"+this.email};
    }
    getSpecialText(){
        return this.specialText;
    }
    getSocialSM(){
        return {email:this.email,ph:"tel:"+this.phoneNo};
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
makeGetRequest("http://192.168.0.108:3000/api/v1/getDir");
setTimeout(() => {



    // console.log(apiData);



    for (let i = 0; i < apiData.length; i++) {
        const element = apiData[i];
        megatronlist.push(new Megatron(element.Name,
            element.Facebook,element.Github,element.Email_ID,element.LinkedIn,
            element.Image,9876543210,element.SpecialText
        ));

    }

    for (let index = 0; index < megatronlist.length; index++) {
        const element = megatronlist[ index ];
        const Mainname = element.getName();
        const imgSrc = element.getPicSrc();
        const socials = element.getSocialSM();
        const specialText = element.getSpecialText();
        // if()
        const card = document.createElement("div");
        card.classList = "card";
        const megatron = '\
        <div class="card-image">\
            <img src="'+imgSrc+'" alt="">\
        </div>\
        <div class="card-content">\
            <h5 class="name">'+Mainname+'</h5>\
            <h4>  '+specialText+' </h4>\
            <div class="socials">\
                <ul class="social">\
                    <li><a href="'+socials.email+'" class="fa fa-envelope "></a></li>\
                    <li><a href="'+socials.ph+'" class="fa fa-phone"></a></li>\
                </ul>\
            </div>\
        </div>\
        ';
        card.innerHTML += megatron;
        document.querySelector(".cards").appendChild(card);
    }



},200);
