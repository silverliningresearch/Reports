/************************************/
function CalculateAirportAirLineReport() {
  prepareInterviewData();
  
  var daily_plan_data_temp;
  daily_plan_data_temp = [];
  daily_plan_data_temp.length = 0;

  for (i = 0; i < quota_data.length; i++) {//airport_airline_report.length;
    row = quota_data[i];
    row.Completed = 0;
    for (j = 0; j < interview_data.length; j++) {
      if (row.Airport_Airline.toUpperCase() == interview_data[j].Airport_Airline.toUpperCase()) 
      { 
        row.Completed++;
      }
    }
    row.Difference = row.Completed -  row.Quota;
    row.Difference_percent =(100*(row.Difference/row.Quota)).toFixed(1);
    row.Prioritisation_score = row.Difference_percent*row.Difference/100;
  }

  for (i = 0; i < daily_plan_data.length; i++) {//airport_airline_report.length;
    row = daily_plan_data[i];
    for (j = 0; j < quota_data.length; j++) {
      if (row.Airport_Airline.toUpperCase() == quota_data[j].Airport_Airline.toUpperCase()) 
      {
        if ( quota_data[j].Difference < 0) {
          row.Completed = quota_data[j].Completed;
          row.Difference = quota_data[j].Difference;
          row.Difference_percent = quota_data[j].Difference_percent;
          row.Prioritisation_score = quota_data[j].Prioritisation_score;
          daily_plan_data_temp.push(row);
        }
      }
    }  
  }

  daily_plan_data = [];
  daily_plan_data.length = 0;

 //sort decending
  daily_plan_data_temp.sort(function(a, b) {
    return parseFloat(b.Prioritisation_score) - parseFloat(a.Prioritisation_score);
  });

  for (i = 0; i < daily_plan_data_temp.length; i++) {
    row = daily_plan_data_temp[i];
    row.Priority = 0;
    daily_plan_data.push(row);
    if(i< daily_plan_data_temp.length*0.25)
    {
      row.Priority = 1;
    }
  }
}

function getDOOP(date) //"07-02-2023"
{
  var parts = date.split("-")
  var day = parts[0];
  var Month = parts[1];
  var Year = parts[2];

  const d = new Date();
  d.setDate(day);
  d.setMonth(Month-1); //month start from 0
  d.setYear(Year);

  return d.getDay(); //Sun: 0; Sat: 6
}
function CalculateDOOP() {
  for (i = 0; i < quota_data.length; i++) {
    quota_data[i].doop = " ";

    var mon =0;
    var tue =0;
    var wed =0;
    var thu =0;
    var fri =0;
    var sat =0;
    var sun =0;

    for (j = 0; j < this_month_flight_list.length; j++) {
      if (quota_data[i].Airport_Airline.toUpperCase() == this_month_flight_list[j].Airport_Airline.toUpperCase()) 
      {
        switch (getDOOP( this_month_flight_list[j].Date)) {
          case 0:
            sun = "1";
            break;
          case 1:
            mon = "1";
            break;
          case 2:
            tue = "1";
            break;
          case 3:
            wed = "1";
            break;
          case 4:
            thu = "1";
            break;
          case 5:
            fri = "1";
            break;
          case 6:
            sat = "1";
            break;
          default:
            break;
        }
        if (this_month_flight_list[j].Airport_Airline =="VLC - easyJet Europe")
        {
        // console.log("Date: ", this_month_flight_list[j]);
        // console.log("doop: ",quota_data[i]);
        }
      }
    }
    quota_data[i].doop =[mon, tue, wed, thu, fri, sat, sun].join('');

  }
}