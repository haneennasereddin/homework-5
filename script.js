$(document).ready(function(){
    var plannerTimes = [
        { hour: "9:00",
            military: 9, 
        },
        {hour: "10:00",
            military: 10,   
        },
        {hour: "11:00",
            military: 11, 
        }, 
        {hour: "12:00",
            military: 12,    
        },
        {hour: "1:00",
            military: 13, 
        },
        {hour: "2:00",
            military: 14, 
        },
        {hour: "3:00",
            military: 15, 
        },
        {hour: "4:00",
            military: 16, 
        },
        {hour: "5:00",
            military: 17, 
        },
    ];
    

    function getStorage() {
        $("#9").val(localStorage.getItem("9"));
        $("#10").val(localStorage.getItem("10"));
        $("#11").val(localStorage.getItem("11"));
        $("#12").val(localStorage.getItem("12"));
        $("#13").val(localStorage.getItem("13"));
        $("#14").val(localStorage.getItem("14"));
        $("#15").val(localStorage.getItem("15"));
        $("#16").val(localStorage.getItem("16"));
        $("#17").val(localStorage.getItem("17"));
            
            }
    date();
    
    function date(){
        today = moment().format("dddd, MMMM Do YYYY");
        $("#currentDay").text(today);
    };
    
    let currentTime = moment().format("k")
    let currentTimeAsNum = Number(currentTime);
    
    
    plannerTimes.forEach(function(el){
        let plannerRow = $("<div></div>").addClass("row justify-content-center").appendTo(".container");
        let plannerCol1 = $("<div></div>").addClass("col-sm-2 col-md-2 col-lg-2 column1").appendTo(plannerRow).text(el.hour).attr("id", el.hour);
        let plannerCol2 = $("<input type='text' name='textbox' maxlength='140'></input>").addClass("col-sm-9 col-md-9 col-lg-9 column2 inputTasks ").attr("id", el.military).appendTo(plannerRow)
        $("<i><i/>").addClass("col-sm-1 col-md-1 col-lg-1 column3 saveBtn far fa-save").appendTo(plannerRow);
        
        
            if (currentTimeAsNum > el.military) {
                plannerCol2.addClass("past");
                }
            else if (currentTimeAsNum < el.military) {
                plannerCol2.addClass("future");
                }
            else  {
                plannerCol2.addClass("present");
                };
            
                        if(el.hour === "9:00" || el.hour === "10:00" || el.hour === "11:00"){
               plannerCol1.text(el.hour + "AM");
                }
            else{
               plannerCol1.text(el.hour + "PM")
                }
    
       
    }) 

    
    
        }) 