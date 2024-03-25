let t=0;
function val(event) {
    event.preventDefault();
    let a = document.getElementById("cat").value;
    let b = document.getElementById("sp").value;
    let errorMessage = document.getElementsByTagName("h4")[0];
    if(a.length!=0 && b.length!=0){
    t=t+Number(b);
        errorMessage.innerHTML = "";
        const node = document.createElement("tr");
        const chnode1 = document.createElement("td");
        let l=document.getElementsByTagName("tr").length;
        let len = document.createTextNode(l);
        chnode1.appendChild(len);
        node.appendChild(chnode1);
        
        const chnode2 = document.createElement("td");
        let textA = document.createTextNode(a.substr(0,1).toUpperCase()+a.substr(1,a.length)); 
        chnode2.appendChild(textA);
        node.appendChild(chnode2);
        const chnode3 = document.createElement("td");
        let textB = document.createTextNode(b);
        chnode3.appendChild(textB);
        node.appendChild(chnode3);
        document.getElementById("mytable").appendChild(node);
        document.getElementById("res").innerHTML="You've Spent : Rs "+t+" /-";
    }

}