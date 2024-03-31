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
        const chb = document.createElement("input");
        chb.setAttribute("id", c);
        chb.setAttribute("class", "cb");
        chb.setAttribute("type", "checkbox");
        chnode0.appendChild(chb);
        node.appendChild(chnode0);
        chb.addEventListener("click", Uncheck);
        const chnode1 = document.createElement("td");
        let l=document.getElementsByTagName("tr").length;
        let len = document.createTextNode(l);
        chnode1.appendChild(len);
        node.appendChild(chnode1);
        const chnode2 = document.createElement("td");
        let textA = document.createTextNode(a);
        chnode2.setAttribute("id","categ");
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
        Update();
        Remve();
}
}

function Uncheck(){
    var op=document.querySelectorAll('input[type="checkbox"]');
    for(var y=1;y<op.length;y++){
        if(op[y].checked==false){
           let mn= document.getElementById('mc');            //if anycheckbox is uncheckd main cb is uncheck
            mn.checked=false;
            break;
        }
    }
}
function Remve(){
    let dv=document.querySelectorAll('input[type="checkbox"]');
    for(var b=0;b<=dv.length;b++){                                  //to remove checkbox.ched after adding elementor deleting
        dv[b].checked=false;
    }
}

function del(){
    
    let er=document.querySelectorAll('input[type="checkbox"]');
    for(var i=1;i<er.length;i++){
            if(er[i].checked){
                let fin=er[i].id;                                 //remove row by fin (id)accessed 
                document.getElementById(fin).remove();
            }
        }
    
    let ud=document.querySelectorAll("td#sn");
    var inp=document.querySelectorAll('input[type="checkbox"].cb');
    for(var t=0;t<ud.length;t++){
        ud[t].innerHTML=t+1;
        let parent=ud[t].parentNode;
        parent.setAttribute("id",t+1);
        console.log(parent.setAttribute("id",t+1));                     //updating sno and sorting rows
        inp[t].setAttribute("id",t+1);
    }
    Update();
}
function Update(){
    t=0;
    let tot=document.querySelectorAll("td#spent");                    //total update
    for(var j=0;j<tot.length;j++){
                t+=Number(tot[j].className);
    }
    document.getElementById("res").innerHTML="You've Spent : Rs "+t+" /-";
}
function checkIt() {
    var mycheckbox = document.getElementById("mc");
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = mycheckbox.checked;
    });
    console.log(checkboxes.length);
    for(var i=1;i<checkboxes.length;i++){
        
    }
}function Show() {
    // Remove existing canvas element
    var oldCanvas = document.getElementById("myChart");
    oldCanvas.parentNode.removeChild(oldCanvas);

    // Create new canvas element
    var newCanvas = document.createElement("canvas");
    newCanvas.id = "myChart";
    document.getElementById("graph").appendChild(newCanvas);

    let s = new Set();
    let obj = {"Food": 0, "Transport": 0, "Party": 0, "Groceries": 0, "Clothing": 0, "Bills": 0, "Health care": 0, "Tax": 0, "Entertainment": 0};
    let y = document.querySelectorAll("#categ");
    let x = document.querySelectorAll("#spent");

    y.forEach(function(el) {
        s.add(el.innerHTML);
    });

    for (var i = 0; i < x.length; i++) {
        let v = y[i].innerHTML; // Category
        let amt = parseInt(x[i].textContent); // Spent amount; using textContent to get the text content
        if (obj.hasOwnProperty(v)) {
            obj[v] += amt;
        } else {
            obj[v] = amt;
        }
    }

    const keys = Object.keys(obj);
    const values = keys.map(key => obj[key]);
    var barColors = ["red", "green", "blue", "orange", "brown", "pink", "violet", "yellow", "grey"];

    // Create new chart
    var ctx = newCanvas.getContext('2d');
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: keys,
            datasets: [{
                backgroundColor: barColors,
                data: values
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Your Spent Analysis",
                    color: 'black',
                    font:{
                        size: 30,
                        color: 'black'
                    }
                },
            },
            legend: {
                display: false
            },
        }
    });
}
