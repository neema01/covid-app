    
    let stateData;
    function fetchData(){
        //alert("hi");
        const selectElement = document.querySelector("#states");
        fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
        .then((data)=>data.json())
        .then((res)=>{
            stateData = res;
            //console.log(res);
            for(let state in res){
                //console.log(state);
                let selectOption = document.createElement('option');
                selectOption.value = state;
                selectOption.text = state;
                selectElement.append(selectOption);
            }

              
         
         })
    }
    fetchData();
    function getCovidDetails(){
        let states_det = document.querySelector("#states").value;
        //console.log(stateData[states_det]);

       // console.log(states_det);
       let dates = stateData[states_det]["dates"];
       //console.log(dates);

       let html_data =`<table class="table table-secondary">
    <thead>
      <tr>
        <th scope="col">DATE</th>
        <th scope="col">DELTA</th>
        <th scope="col">DELTA 7</th>
        <th scope="col">TOTAL</th>
      </tr>
    </thead>
    <tbody>`;

    for(let date in dates){

        html_data += `<tr>
        <th scope="row">${date}</th>
        <td>${(dates[date]?.delta?.confirmed) ?? ""}</td>
        <td>${(dates[date]?.delta7?.confirmed) ?? ""}</td>
        <td>${(dates[date]?.total?.confirmed) ?? ""}</td>
        
      </tr>`

       //console.log(dates[date].delta.confirmed); 
       }
       html_data += `</tbody>
       </table>`;

document.getElementById("covid-report").innerHTML = html_data;
    }

    
    
    






















    
    // window.addEventListener('load',function(){
    //     fetchData();
    // })
   
//     //console.log("hai");
//     const selectElement = document.querySelector("#state");

//     //let state = document.querySelector("#state").value;
//     //console.log(state);

//     const covidReport =async()=>{
//         let report = await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
//         var jsonReport = await report.json();
        
//         console.log(jsonReport);
//     };
    
//     covidReport();
// }

// let obj = {
//     kl:{districts:14},
//     Tn:{districts:20},
//     Dl:{districts:16}
// }

// let arr = [10,20,30,40];
// for(let num of arr){
//     console.log(num);
// }

// for(let dis in obj){
//     console.log(dis);
//     console.log(obj[dis]);
// }

// console.log(obj["kl"]);