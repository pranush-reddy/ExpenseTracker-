let t=0;
let c=[];
function val(event) {
    event.preventDefault();
    let a = document.getElementById("cat").value;
    let b = document.getElementById("sp").value;
    let errorMessage = document.getElementsByTagName("h4")[0];
    if(a.length!=0 && b.length!=0){
    t=t+Number(b);
        errorMessage.innerHTML = "";
        const node = document.createElement("tr");
        c++;
        node.setAttribute("id",c);
        const chnode0 = document.createElement("td");
        const chb=document.createElement("input");
        chb.setAttribute("id",c);
        chb.setAttribute("class","cb")
        chb.setAttribute("type","checkbox");
        chnode0.appendChild(chb);
        node.appendChild(chnode0);
        const chnode1 = document.createElement("td");
        let l=document.getElementsByTagName("tr").length;
        let len = document.createTextNode(l);
        chnode1.appendChild(len);
        node.appendChild(chnode1);
        const chnode2 = document.createElement("td");
        let textA = document.createTextNode(a.substr(0,1).toUpperCase()+a.substr(1,a.length)); 
        chnode1.setAttribute("id","sn");
        chnode2.appendChild(textA);
        node.appendChild(chnode2);
        const chnode3 = document.createElement("td");
        chnode3.setAttribute("id","spent");
        chnode3.setAttribute("class",b);
        let textB = document.createTextNode(b+" /-");
        chnode3.appendChild(textB);
        node.appendChild(chnode3);
        document.getElementById("mytable").appendChild(node);
        document.getElementById("res").innerHTML="You've Spent : Rs "+t+" /-";
    }
}
/*function delIt(){
    let delleng=document.querySelectorAll('input[type="checkbox"]');
    console.log(delleng);
    for(var i=1;i<delleng.length;i++){
        if(delleng[i].checked == true){
            document.getElementById(i).remove();
        }
    }
}
*/
function del(){
    t=0;
    let er=document.querySelectorAll('input[type="checkbox"]');
    for(var i=1;i<er.length;i++){
            if(er[i].checked){
                let fin=er[i].id;
                document.getElementById(fin).remove();
            }
        }
    let tot=document.querySelectorAll("td#spent");
    for(var j=0;j<tot.length;j++){
                t+=Number(tot[j].className);
    }
    document.getElementById("res").innerHTML="You've Spent : Rs "+t+" /-";
    let ud=document.querySelectorAll("td#sn");
    var inp=document.querySelectorAll('input[type="checkbox"].cb');
    for(var t=0;t<ud.length;t++){
        ud[t].innerHTML=t+1;
        let parent=ud[t].parentNode;
        parent.setAttribute("id",t+1);
        console.log(parent.setAttribute("id",t+1));
        inp[t].setAttribute("id",t+1);

    }
}
function checkIt() {
    var mycheckbox = document.getElementById("mc");
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = mycheckbox.checked;
    });
}
