var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

  var res=result.filter((ele)=>ele.name);
  var res=result.map((ele)=>ele.capital);
  var res=result.map((ele)=>ele.flag);
  console.log(res)
  
}