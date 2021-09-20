// Script for html forms
var myArray=[];
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address = document.getElementById("address");
var pin = document.getElementById("pin");
var state = document.getElementById("state");
var country = document.getElementById("country");
// Button 
var btn = document.querySelector(".btn");

// Submit function
btn.addEventListener("click",add_data);


function add_data()
{    
    // getting value from radio button
    var gender = document.getElementsByName("gender");
    var gender_checked;
    gender.forEach(x=>{
        if(x.checked)
        gender_checked=x.value;
    })


    // Getting value from checkbox

    var food_arr =[];
    var food = document.getElementsByName("food");
    food.forEach(x =>{
        if(x.checked)
        {
            food_arr.push(x.value);
        }
    })

    // checking minimum two food options are selected
    if(food_arr.length<2)
    {
        alert("Please select atleast two food items")
    }
    
    // saving all the values inside an object [for any future use ]
    var myObj={
        fname : fname.value,
        lname : lname.value,
        address : address.value,
        pincode : pin.value,
        gender : gender_checked,
        food : food_arr,
        state : state.value,
        country : country.value

    }

    //Pushing the object to array 
    
    myArray.push(myObj);
    console.log(myArray);

    // Resetting the form 
    document.getElementById("myform").reset();

    // displaying the data in table 

    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let output = "";
    if(myArray.length>0)
    {
        for(let i=0;i<myArray.length;i++)
        {
            output += 
            `<tr>
            <th scope="row" id="t_sno">${i+1}</th>
            <td id="t_fname">${myArray[i].fname}</td>
            <td id="t_lname">${myArray[i].lname}</td>
            <td id="t_address">${myArray[i].address}</td>
            <td id="t_pin">${myArray[i].pincode}</td>
            <td id="gender">${myArray[i].gender}</td>
            <td id="t_food">${myArray[i].food}</td>
            <td id="t_state">${myArray[i].state}</td>
            <td id="t_country">${myArray[i].country}</td>
          </tr>`
        }
    }
    tbody.insertAdjacentHTML("beforeend",output);
    
    alert("Please scroll down for the data table")
}


