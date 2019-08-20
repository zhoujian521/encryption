function objKeySort(arys) {
    const newkey = Object.keys(arys).sort();
    let str = '';
    for (var i = 0; i < newkey.length; i++) {
       str += [newkey[i]] + arys[newkey[i]];
    }
   return str; 
}

function getSign(str){
    const sha1 = require('js-sha1');
    const shaData = sha1(str).toUpperCase();
    return shaData;
}



const moment = require('moment');
const timestamp = moment().format('YYYY-MM-DD HH:mm:ss')
console.log('==============timestamp======================');
console.log(timestamp);
console.log('==============timestamp======================');

const itemList = {
    method:"bm.elife.directRecharge.waterCoal.item.list",
    access_token:"9c438426a69e4d278d77c9a2a34ca0c7",
    v:"1.1",
    timestamp,
    pageNo:0,
    pageSize:10,
    provinceVid:'v1953',
    cityVid:'v1954',
	projectId:'c2670',
	city:'北京',
	province:'北京'
  }
  
const AppSecret = 'Pp9syrGLr4YSImSyc1fRFhSsI4aaDxOM';
const str = AppSecret + objKeySort(itemList) + AppSecret;
console.log('=============str=======================');
console.log(str);
console.log('=============str=======================');
const sign = getSign(str);

console.log('================sign====================');
console.log(sign);
console.log('================sign====================');


