// const axios = require('axios');


class Megatron {
    constructor(membername,facebook,github,
        email,linkedin,picSrc,phoneNo,dept,year){
        this.picSrc = picSrc;


        let names = membername.split(" ");
        this.membername = "";
        for (let index = 0; index < names.length; index++) {
            names[index] = names[index].toLowerCase();
            this.membername+=names[index].charAt(0).toUpperCase()+names[index].slice(1)+" ";
        }

        if(facebook != undefined && facebook.includes("www.facebook.com/")){
            this.facebook = facebook;
        }
        else{
            this.facebook = "https://www.facebook.com/";
        }
        if(github.includes("github.com/")){
            this.github = github;
        }
        else{
            this.github = "https://github.com/";
        }
        this.email = email;
        if(linkedin!= undefined && linkedin.includes("www.linkedin.com/in/")){
            this.linkedin = linkedin;
        }
        else{
            this.linkedin = "https://www.linkedin.com/in/";
        }
        this.dept = dept;
        this.year = parseInt(year.charAt(0));

        this.phoneNo = phoneNo.slice(phoneNo.length-10);

    }
    getName(){
        // const namewithExt = this.picSrc.substring(element.src.lastIndexOf("-"));
        // const name = namewithExt.slice(2,namewithExt.lastIndexOf("."));
        
        return this.membername;
    }
    getPicSrc(){
        const offset = 4;
        const idLength = 33;//Google Drive File ID 2019 Standards
        const id = this.picSrc.slice(this.picSrc.lastIndexOf("&id=")+offset,this.picSrc.lastIndexOf("&id=")+offset+idLength);
        const src = "https://drive.google.com/uc?export=view&id="+id;
        return src;
    }
    getSocialMedia(){
        return {github:this.github,linkedin:this.linkedin,facebook:this.facebook,email:"mailto:"+this.email};
    }
    getDept(){
        return this.dept;
    }
    getSocialSM(){
        return {email:"mailto:"+this.email,ph:"tel:+91"+this.phoneNo};
    }
}

var sortbyYear = (a, b) => {
    if (a.year < b.year)
        return 1;
    if (a.year > b.year)
        return -1;
    return 0;
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
makeGetRequest("https://teamspageapi.azurewebsites.net/api/v1/getDir");
setTimeout(() => {



    // console.log(apiData);



    for (let i = 0; i < apiData.length; i++) {
        const element = apiData[i];
        megatronlist.push(new Megatron(element.Name,
            element.Facebook_url,element.Github_url,element.Email_ID,element.LinkedIn_url,
            element.Image,element.Phone_Number,element.Department,element.Year
        ));

    }
    megatronlist.sort(sortbyYear);
    for (let index = 0; index < megatronlist.length; index++) {
        const element = megatronlist[ index ];
        const Mainname = element.getName();
        const imgSrc = element.getPicSrc();
        const socials = element.getSocialSM();
        const specialText = element.getDept();
        // if()
        const card = document.createElement("div");
        card.classList = "card";
        const megatron = '\
        <div class="card-image">\
            <img src="'+imgSrc+'" alt="">\
        </div>\
        <div class="card-content">\
            <h5 class="name">'+Mainname+'</h5>\
            <h4 class="spltxt">  '+specialText+' </h4>\
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



},500);
