class Cities{
    constructor(url){
        if(typeof url !== 'string'){
            throw new TypeError('URL is not a string')
        }else{
            this.url = url
        }
    }
    send(city){
        if(typeof city !== 'string')
            throw new TypeError('parameter is not a string!');
        let regexVar = /&appid/i
        const indexVar = this.url.match(regexVar).index
        const link = this.url.substring(0, indexVar) + `${city}` +this.url.substring(indexVar, this.url.length);
            return new Promise((resolve, reject) => {
                get(link, (error, meta, body) =>{
                    if(meta.status == 200){
                        const data = JSON.parse(body);
                        resolve(data.wind)
                    }
                        reject(`We have error, status code: ${meta.status}`);
                })
            })
        }
    }

const getURL = require('fetch').fetchUrl;
const urlVar = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=299fb2133133f9d8fc214f5ae28ca753';
const cities = new Cities(url);

(async() => {
    try{
        const data = await city.send('Kobuleti');
        console.log(data);
    }catch(err){
        console.error(err)
    }
})