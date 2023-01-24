/************************************/
function CalculateAirportAirLineReport() {
  prepareInterviewData();
  
  var daily_plan_data_temp;
  daily_plan_data_temp = [];
  daily_plan_data_temp.length = 0;

  for (i = 0; i < daily_plan_data.length; i++) {//airport_airline_report.length;
    row = daily_plan_data[i];
    row.Completed = 0;
    for (j = 0; j < interview_data.length; j++) {
      if (row.Airport_Airline == interview_data[j].Airport_Airline) 
      { 
        row.Completed++;
      }
    }
    //console.log("airport_airline:", airport_airline);
    row.Difference = row.Completed -  row.Quota;
    row.Difference_percent =(100*(row.Difference/row.Quota)).toFixed(1);
    row.Prioritisation_score = row.Difference_percent*row.Difference/100;

    if ( row.Difference < 0) {
      daily_plan_data_temp.push(row);
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
