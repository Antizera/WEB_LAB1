

async function Game(){
let url = "https://www.cheapshark.com/api/1.0/games?title=";
let titel=document.getElementById('titel').value.toString();
let Sid=document.getElementById('steamAppID').value.toString();
url = 'https://www.cheapshark.com/api/1.0/games?title='+titel+'&steamAppID='+Sid;



var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 ;
    

}