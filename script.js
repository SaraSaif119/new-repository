let newPro = [];
var pattern1=/^[A-Za-z]/
var pattern2=/[0-9]/
var p1=document.getElementById("p1")
var p2=document.getElementById("p2")
var p3=document.getElementById("p3")
document.getElementById('btn1').onclick=function(){
        if((document.getElementById('id2').value && document.getElementById('id3').value && document.getElementById('id4').value)!=''){
                let newObj = {
                        title:document.getElementById('id2').value,
                        author:document.getElementById('id3').value,
                        isbn:document.getElementById('id4').value,
                        }
                newPro.push(newObj);
                read();
                clear();
                p1.style.display='none';
                p2.style.display='none';
                p3.style.display='none';
        }
        else{  
                if(!(document.getElementById('id2').value).match(pattern1)){
                        p1.style.display='block'
                }else{
                        p1.style.display='none'
                }
                if(!(document.getElementById('id3').value).match(pattern1)){
                        p2.style.display='block'
                }else{
                        p2.style.display='none'
                }
                if(!(document.getElementById('id4').value).match(pattern2)){
                        p3.style.display='block'
                }else{
                        p3.style.display='none'
                }
        }
        }
function clear(){
        document.getElementById('id2').value='';
        document.getElementById('id3').value='';
        document.getElementById('id4').value='';
}
function read(){
        let table='';
        for(let i=0;i<newPro.length;i++){
                table+=`
                <tr>
                        <td>${newPro[i].title}</td>
                        <td>${newPro[i].author}</td>
                        <td>${newPro[i].isbn}</td>
                        <td><i class="fas fa-times" onclick="clearData(${i})"></i></td>
                </tr>        
                `
        }
        document.getElementById('tbody').innerHTML=table;
        //لاذم جوا read
        if(newPro.length > 0){
                document.getElementById('deleteall').innerHTML=`
                <button class="btn1" onclick="deleteAll()">deleteAll</button>
                `
        }
        else{
                document.getElementById('deleteall').innerHTML=''; 
        }
}
read()


function clearData(i){
        newPro.splice(i,1);
        read();
}
function deleteAll(){
        newPro.splice(0);
        read();
}


