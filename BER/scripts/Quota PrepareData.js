var today_flight_list;
var daily_plan_data;
var interview_data;
const current_months = "01-02-03";
const current_year = "2023";
var download_time;
/************************************/
function getToDate() {
  var d = new Date();
      
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month,year].join('-');
}

function notDeparted(flight_time) {
  var current_time = new Date().toLocaleString('de-DE', {timeZone: 'Europe/Berlin',});
  //15:13:27
  var current_time_value  = current_time.substring(current_time.length-8,current_time.length-6) * 60;
  current_time_value += current_time.substring(current_time.length-5,current_time.length-3)*1;

  // console.log("time de-DE: ", current_time);
  // console.log("current_time_value: ", current_time_value);

  //Time: 08:05    
  var flight_time_value = flight_time.substring(0,2) * 60 + flight_time.substring(3,5)*1;
  // console.log("flight_time_value: ", flight_time);
  // console.log("flight_time_value: ", flight_time_value);

  var result = (flight_time_value > current_time_value);
  // console.log("result: ", result);
  return (result);
}

function prepareInterviewData() {
  var quota_data_temp = JSON.parse(airport_airline_quota);
  var interview_data_temp  = JSON.parse(interview_data_raw);
  var departures_flight_list_temp  = JSON.parse(departuresFlightList);

  //get relevant interview data
  //empty the list
  interview_data = [];
  interview_data.length = 0;

  download_time = interview_data_temp.download_time;
  for (i = 0; i < interview_data_temp.rows.length; i++) {
    var interview = interview_data_temp.rows[i];
    //only get complete interview & not test
    if ((interview.InterviewState == "Completed")
      //&& (interview.Core_Q1 == "1")
      )
    {
      if (interview.urlVar15 && interview.urlVar16) {
        var airline = interview.urlVar15;
        var airport = interview.urlVar16;
        var airport_code = airport.substring(airport.length - 4, airport.length-1);
        var airport_airline = '"Airport_Airline"' + ":" + '"' +  airport_code + " - " + airline + '", ';
        var InterviewEndDate = '"InterviewEndDate"' + ":" + '"' +  interview["InterviewEndDate"] ;
        var str = '{' + airport_airline + InterviewEndDate + '"}';
        interview_data.push(JSON.parse(str));
      }
      else{
        console.log("ignored interview: ", interview);
      }
    }
  }
  console.log("interview_data: ", interview_data);

  //prepare flight list
    //empty the list
  today_flight_list = [];
  today_flight_list.length = 0;

  var today = getToDate();
  for (i = 0; i < departures_flight_list_temp.length; i++) {
    let flight = departures_flight_list_temp[i];

    //add one more hour to convert from UTC to GMT
    var dhour_int = parseInt(flight.Show.substring(9,11)) + 1;
    var dhour = "0" + dhour_int;
    dhour = dhour.substring(dhour.length-2,dhour.length);
    var dminutes = flight.Show.substring(12,14);
    var dtime = dhour + ":" + dminutes;
    console.log("flight.Show: ", flight.Show);
    console.log("dhour: ", dhour);
    console.log("dminutes: ", dminutes);
    console.log("dtime: ", dtime); 
    //

    //only get today & not departed flight
    //if ((today == flight.Date) && notDeparted(dtime)) { 
    if (today == flight.Date) { 
      //Airline
      var airline_code = flight.Flight.substring(0,2);
      //airport_airline
      var airport_airline = flight.Airport_code + " - " + flight.Airline

      flight.Dtime = dtime;
      flight.Airline = airline_code;
      flight.Airport_Airline = airport_airline;
      today_flight_list.push(flight);
    }
  }

  //add quota data
    //empty the list
  daily_plan_data = [];
  daily_plan_data.length = 0;
  
  for (i = 0; i < today_flight_list.length; i++) {
    let flight = today_flight_list[i];
    for (j = 0; j < quota_data_temp.length; j++) {
      let quota = quota_data_temp[j]
      if ((quota.Airport_Airline == flight.Airport_Airline) && (quota.Quota>0))
      {
        flight.Quota = quota.Quota;
        daily_plan_data.push(flight);
       }
    }
  }
  console.log("daily_plan_data list: ", daily_plan_data);
}
