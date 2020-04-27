let data1,data2,data3;
const https= require('https');
https.get('https://saarang2021aspirers.herokuapp.com/welcome',resp =>{
    let data="";
    resp.on('data', chunk => {
        data+= chunk;
    });
    resp.on("end", () => {
        data1= JSON.parse(data);
        console.log(data1);
        });
}).on('error',err =>{
    console.log('Error '+ err.message);
});

https.get('https://saarang2021aspirers.herokuapp.com/saarang2021',resp =>{
    let data="";
    resp.on('data', chunk => {
        data+= chunk;
    });
    resp.on("end", () => {
        global.data2= JSON.parse(data);
        console.log(data2);
        });
}).on('error',err =>{
    console.log('Error '+ err.message);
});

https.get('https://saarang2021aspirers.herokuapp.com/character21',resp =>{
    let data="";
    resp.on('data', chunk => {
        data+= chunk;
    });
    resp.on("end", () => {
        data3= JSON.parse(data);
        console.log(data3);
        });
}).on('error',err =>{
    console.log('Error '+ err.message);
});

module.exports.data1=data1;


