function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_technicalskills(data.technicalskills);
});
var div2=document.getElementById("child2");
function fun_career(car)
{
  var abc=document.createElement("h2");
  abc.textContent="career objective";
  div2.appendChild(abc);
  var abc2=document.createElement("hr");
  div2.appendChild(abc2);
  var listItem=document.createElement("p");
  listItem.textContent=car.info;
  div2.appendChild(listItem);
}

function fun_education(edu)
{
  var abc=document.createElement("h2");
  abc.textContent="EDUCATION QUALIFICATION";
  div2.appendChild(abc);
  var abc1=document.createElement("hr");
  div2.appendChild(abc1);
 var list=document.createElement("ul");
  div2.appendChild(list);
for(var i=0;i<edu.length;i++){
  var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);

    var listItem1=document.createElement("p")
    listItem1.textContent=edu[i].institute;
    list.appendChild(listItem1);

    var listItem2=document.createElement("p");
    listItem2.textContent=edu[i].data;
    list.appendChild(listItem2);

}
}
function fun_achievements(ach)
{
  var xyz=document.createElement("h2");
  xyz.textContent="ACHIEVEMENTS";
  div2.appendChild(xyz);
  var xyz1=document.createElement("hr");
  div2.appendChild(xyz1);
  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var j=0;j<ach.length;j++){
    var listItem4=document.createElement("li");
      listItem4.innerHTML=ach[j].name;
      list.appendChild(listItem4);

}
}
function fun_technicalskills(tech)
{
      var heading=document.createElement("h2");
      heading.textContent="technicalskills";
      div2.appendChild(heading);
      var hr=document.createElement("hr");
      heading.appendChild(hr);
      var tr="";
      var table=document.createElement("table");
      div2.appendChild(table);
      for(i=0;i<tech.length;i++){
        tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>"
      }
      table.innerHTML=tr;
      table.border="2%"
}
