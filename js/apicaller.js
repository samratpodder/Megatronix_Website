const axios = require('axios');
var data={retVal:[]};
function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
            // var result = response.data;
            // // console.log(result);
            // return result;
            data.retVal = response.data;
        },
        (error) => {
            console.log("\n\n"+error);
        }
    );
}
makeGetRequest('http://localhost:3000/api/v1/getDir');
setTimeout(() => {console.log(data);} , 5000); // Use Async/Await
