let interview_data_raw = `
{"defaultLocale":"en","surveyId":29,"locales":["en","zh-Hans","id","ms","th","vi","ta","ko","ja","fr","de"],"download_time":"27\/01\/2023 15:38:49","codePlan":[],"name":"CAG Airhub","errorMessage":null,"errorCode":null,"rows":[{"custom.Airline":"BA","custom.Airline_Code":null,"custom.Dest":"LHR","InterviewState":"ScreenOut","custom.Flight":"12","InterviewEndDate":"1\/13\/2023 3:43:46 PM"},{"custom.Airline":"VN","custom.Airline_Code":null,"custom.Dest":"SGN","InterviewState":"InProgress","custom.Flight":"654","InterviewEndDate":null},{"custom.Airline":"Airline SQ Airline","custom.Airline_Code":"SQ","custom.Dest":"HKG","InterviewState":"ScreenOut","custom.Flight":"874","InterviewEndDate":"1\/15\/2023 8:59:04 PM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"EWR","InterviewState":"InProgress","custom.Flight":"22","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"VN Airline","custom.Airline_Code":"VN","custom.Dest":"SGN","InterviewState":"InProgress","custom.Flight":"650","InterviewEndDate":null},{"custom.Airline":"Airline VN Airline","custom.Airline_Code":"VN","custom.Dest":"SGN","InterviewState":"InProgress","custom.Flight":"650","InterviewEndDate":null},{"custom.Airline":"SQ Airline","custom.Airline_Code":"SQ","custom.Dest":"REP","InterviewState":"ScreenOut","custom.Flight":"164","InterviewEndDate":"1\/15\/2023 10:57:24 AM"},{"custom.Airline":"Airline VN Airline","custom.Airline_Code":"VN","custom.Dest":"HAN","InterviewState":"InProgress","custom.Flight":"660","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"714","InterviewEndDate":"1\/17\/2023 4:07:51 PM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"LH - Lufthansa","custom.Airline_Code":"LH - Lufthansa","custom.Dest":"FRA","InterviewState":"ScreenOut","custom.Flight":"779","InterviewEndDate":"1\/18\/2023 7:47:12 PM"},{"custom.Airline":"Airline FX Airline","custom.Airline_Code":"FX","custom.Dest":"CAN","InterviewState":"ScreenOut","custom.Flight":"6024","InterviewEndDate":"1\/16\/2023 8:40:55 AM"},{"custom.Airline":"Airline SQ Airline","custom.Airline_Code":"SQ","custom.Dest":"PVG","InterviewState":"Completed","custom.Flight":"828","InterviewEndDate":"1\/16\/2023 8:50:44 AM"},{"custom.Airline":"Airline BI Airline","custom.Airline_Code":"BI","custom.Dest":"BWN","InterviewState":"Completed","custom.Flight":"422","InterviewEndDate":"1\/16\/2023 9:14:51 AM"},{"custom.Airline":"Airline EK Airline","custom.Airline_Code":"EK","custom.Dest":"HKG","InterviewState":"InProgress","custom.Flight":"9820","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"Airline SQ - Singapore Airlines Airline","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"JFK","InterviewState":"ScreenOut","custom.Flight":"26","InterviewEndDate":"1\/16\/2023 3:45:30 PM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"Airline SQ - Singapore Airlines Airline","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"108","InterviewEndDate":"1\/16\/2023 3:52:12 PM"},{"custom.Airline":"VN - Vietnam Airlines","custom.Airline_Code":"VN - Vietnam Airlines","custom.Dest":"SGN","InterviewState":"InProgress","custom.Flight":"650","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"PNH","InterviewState":"ScreenOut","custom.Flight":"158","InterviewEndDate":"1\/17\/2023 11:19:05 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E - IndiGo","custom.Dest":"BLR","InterviewState":"Completed","custom.Flight":"58","InterviewEndDate":"1\/19\/2023 8:04:56 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"KL - KLM Royal Dutch Airlines","custom.Airline_Code":"KL","custom.Dest":"AMS","InterviewState":"InProgress","custom.Flight":"836","InterviewEndDate":null},{"custom.Airline":"QR - Qatar Airways","custom.Airline_Code":"QR - Qatar Airways","custom.Dest":"DOH","InterviewState":"ScreenOut","custom.Flight":"947","InterviewEndDate":"1\/19\/2023 8:06:59 AM"},{"custom.Airline":"QR - Qatar Airways","custom.Airline_Code":"QR - Qatar Airways","custom.Dest":"DOH","InterviewState":"ScreenOut","custom.Flight":"945","InterviewEndDate":"1\/24\/2023 10:13:15 AM"},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E - IndiGo","custom.Dest":"TRZ","InterviewState":"Completed","custom.Flight":"35","InterviewEndDate":"1\/20\/2023 2:13:53 AM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"MNL","InterviewState":"InProgress","custom.Flight":"806","InterviewEndDate":null},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E - IndiGo","custom.Dest":"BLR","InterviewState":"InProgress","custom.Flight":"58","InterviewEndDate":null},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"InProgress","custom.Flight":"700","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"InProgress","custom.Flight":"116","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"QF - Qantas","custom.Airline_Code":"QF - Qantas","custom.Dest":"SYD","InterviewState":"Completed","custom.Flight":"82","InterviewEndDate":"1\/20\/2023 6:46:11 AM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"MNL","InterviewState":"ScreenOut","custom.Flight":"814","InterviewEndDate":"1\/20\/2023 6:56:57 AM"},{"custom.Airline":"8M - Myanmar Airways International","custom.Airline_Code":"8M - Myanmar Airways International","custom.Dest":"RGN","InterviewState":"ScreenOut","custom.Flight":"232","InterviewEndDate":"1\/20\/2023 6:50:10 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"BA - British Airways","custom.Airline_Code":"BA - British Airways","custom.Dest":"SYD","InterviewState":"ScreenOut","custom.Flight":"15","InterviewEndDate":"1\/20\/2023 6:56:15 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"700","InterviewEndDate":"1\/20\/2023 10:46:55 AM"},{"custom.Airline":"3U - Sichuan Airlines","custom.Airline_Code":"3U - Sichuan Airlines","custom.Dest":"CTU","InterviewState":"Completed","custom.Flight":"3920","InterviewEndDate":"1\/20\/2023 6:51:19 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"108","InterviewEndDate":"1\/20\/2023 7:02:26 AM"},{"custom.Airline":"JQ - Jetstar Airways","custom.Airline_Code":"JQ - Jetstar Airways","custom.Dest":"MEL","InterviewState":"ScreenOut","custom.Flight":"8","InterviewEndDate":"1\/20\/2023 7:00:28 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"108","InterviewEndDate":"1\/20\/2023 6:54:26 AM"},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E - IndiGo","custom.Dest":"BLR","InterviewState":"Completed","custom.Flight":"58","InterviewEndDate":"1\/20\/2023 7:00:39 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"DAD","InterviewState":"ScreenOut","custom.Flight":"172","InterviewEndDate":"1\/20\/2023 6:59:49 AM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"CEB","InterviewState":"Completed","custom.Flight":"548","InterviewEndDate":"1\/20\/2023 7:15:47 AM"},{"custom.Airline":"TG - Thai Airways","custom.Airline_Code":"TG - Thai Airways","custom.Dest":"BKK","InterviewState":"ScreenOut","custom.Flight":"410","InterviewEndDate":"1\/20\/2023 7:13:32 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"706","InterviewEndDate":"1\/20\/2023 7:05:53 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/20\/2023 7:03:23 AM"},{"custom.Airline":"3U - Sichuan Airlines","custom.Airline_Code":"3U - Sichuan Airlines","custom.Dest":"CTU","InterviewState":"Completed","custom.Flight":"3920","InterviewEndDate":"1\/20\/2023 7:13:20 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"Completed","custom.Flight":"38","InterviewEndDate":"1\/20\/2023 7:14:09 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"108","InterviewEndDate":"1\/20\/2023 7:11:25 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"HAN","InterviewState":"InProgress","custom.Flight":"194","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"Completed","custom.Flight":"106","InterviewEndDate":"1\/21\/2023 6:09:29 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"MNL","InterviewState":"ScreenOut","custom.Flight":"804","InterviewEndDate":"1\/21\/2023 3:37:45 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"KL - KLM Royal Dutch Airlines","custom.Airline_Code":"KL - KLM Royal Dutch Airlines","custom.Dest":"AMS","InterviewState":"InProgress","custom.Flight":"836","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"HAN","InterviewState":"Completed","custom.Flight":"194","InterviewEndDate":"1\/21\/2023 3:52:25 AM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"CEB","InterviewState":"Completed","custom.Flight":"548","InterviewEndDate":"1\/21\/2023 6:22:02 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"MNL","InterviewState":"Completed","custom.Flight":"806","InterviewEndDate":"1\/21\/2023 7:18:27 AM"},{"custom.Airline":"3K - Jetstar Asia","custom.Airline_Code":"3K - Jetstar Asia","custom.Dest":"HKT","InterviewState":"Completed","custom.Flight":"535","InterviewEndDate":"1\/21\/2023 10:47:50 AM"},{"custom.Airline":"FJ - Fiji Airways","custom.Airline_Code":"FJ - Fiji Airways","custom.Dest":"NAN","InterviewState":"ScreenOut","custom.Flight":"360","InterviewEndDate":"1\/21\/2023 7:21:04 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"PEN","InterviewState":"ScreenOut","custom.Flight":"1724","InterviewEndDate":"1\/21\/2023 7:23:54 AM"},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E - IndiGo","custom.Dest":"BLR","InterviewState":"ScreenOut","custom.Flight":"58","InterviewEndDate":"1\/24\/2023 12:10:51 PM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J","custom.Dest":"MNL","InterviewState":"ScreenOut","custom.Flight":"804","InterviewEndDate":"1\/26\/2023 3:33:39 PM"},{"custom.Airline":"7C - Coyne Airways","custom.Airline_Code":"7C - Coyne Airways","custom.Dest":"PUS","InterviewState":"ScreenOut","custom.Flight":"4056","InterviewEndDate":"1\/21\/2023 12:26:35 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"EWR","InterviewState":"Completed","custom.Flight":"22","InterviewEndDate":"1\/23\/2023 11:56:43 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"718","InterviewEndDate":"1\/23\/2023 1:09:07 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LHR","InterviewState":"ScreenOut","custom.Flight":"306","InterviewEndDate":"1\/23\/2023 1:33:46 PM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"716","InterviewEndDate":"1\/24\/2023 12:27:01 PM"},{"custom.Airline":"KL - KLM Royal Dutch Airlines","custom.Airline_Code":"KL - KLM Royal Dutch Airlines","custom.Dest":"DPS","InterviewState":"InProgress","custom.Flight":"835","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"NQ - Air Japan","custom.Airline_Code":"NQ - Air Japan","custom.Dest":"NRT","InterviewState":"InProgress","custom.Flight":"802","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"SGN","InterviewState":"ScreenOut","custom.Flight":"178","InterviewEndDate":"1\/24\/2023 12:16:36 PM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J - Cebu Pacific","custom.Dest":"MNL","InterviewState":"ScreenOut","custom.Flight":"806","InterviewEndDate":"1\/24\/2023 1:09:12 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 12:37:05 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"108","InterviewEndDate":"1\/24\/2023 12:39:16 PM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KCH","InterviewState":"ScreenOut","custom.Flight":"1776","InterviewEndDate":"1\/24\/2023 12:47:35 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"116","InterviewEndDate":"1\/24\/2023 12:43:43 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"116","InterviewEndDate":"1\/24\/2023 12:47:44 PM"},{"custom.Airline":"CX - Cathay Pacific Airways","custom.Airline_Code":"CX - Cathay Pacific Airways","custom.Dest":"HKG","InterviewState":"ScreenOut","custom.Flight":"714","InterviewEndDate":"1\/24\/2023 1:03:31 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ","custom.Dest":"PNH","InterviewState":"InProgress","custom.Flight":"158","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:14:05 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:20:54 PM"},{"custom.Airline":"FD - Thai AirAsia","custom.Airline_Code":"FD - Thai AirAsia","custom.Dest":"DMK","InterviewState":"ScreenOut","custom.Flight":"356","InterviewEndDate":"1\/24\/2023 1:12:25 PM"},{"custom.Airline":"EK - Emirates","custom.Airline_Code":"EK","custom.Dest":"DXB","InterviewState":"ScreenOut","custom.Flight":"355","InterviewEndDate":"1\/26\/2023 2:24:43 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 3:39:05 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:23:34 PM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:29:09 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"ScreenOut","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:32:54 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"LAX","InterviewState":"Completed","custom.Flight":"38","InterviewEndDate":"1\/24\/2023 1:37:31 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"106","InterviewEndDate":"1\/24\/2023 1:45:58 PM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"106","InterviewEndDate":"1\/24\/2023 1:49:43 PM"},{"custom.Airline":"8M - Myanmar Airways International","custom.Airline_Code":"8M - Myanmar Airways International","custom.Dest":"RGN","InterviewState":"ScreenOut","custom.Flight":"232","InterviewEndDate":"1\/25\/2023 8:05:32 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK - AirAsia Berhad","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"702","InterviewEndDate":"1\/24\/2023 3:58:50 PM"},{"custom.Airline":"GA - Garuda Indonesia","custom.Airline_Code":"GA - Garuda Indonesia","custom.Dest":"SOQ","InterviewState":"ScreenOut","custom.Flight":"8410","InterviewEndDate":"1\/25\/2023 1:16:03 AM"},{"custom.Airline":"VJ - VietJet Air","custom.Airline_Code":"VJ - VietJet Air","custom.Dest":"HAN","InterviewState":"Completed","custom.Flight":"916","InterviewEndDate":"1\/25\/2023 5:25:06 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK","custom.Dest":"IPH","InterviewState":"ScreenOut","custom.Flight":"1310","InterviewEndDate":"1\/26\/2023 5:14:06 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ - Singapore Airlines","custom.Dest":"SFO","InterviewState":"Completed","custom.Flight":"32","InterviewEndDate":"1\/25\/2023 12:23:59 PM"},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J","custom.Dest":"MNL","InterviewState":"InProgress","custom.Flight":"804","InterviewEndDate":null},{"custom.Airline":"5J - Cebu Pacific","custom.Airline_Code":"5J","custom.Dest":"MNL","InterviewState":"ScreenOut","custom.Flight":"814","InterviewEndDate":"1\/25\/2023 9:25:39 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"6E - IndiGo","custom.Airline_Code":"6E","custom.Dest":"MAA","InterviewState":"InProgress","custom.Flight":"54","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"KL - KLM Royal Dutch Airlines","custom.Airline_Code":"KL","custom.Dest":"AMS","InterviewState":"InProgress","custom.Flight":"836","InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ","custom.Dest":"KUL","InterviewState":"InProgress","custom.Flight":"106","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"VJ - VietJet Air","custom.Airline_Code":"VJ","custom.Dest":"HAN","InterviewState":"ScreenOut","custom.Flight":"916","InterviewEndDate":"1\/26\/2023 5:22:36 AM"},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK","custom.Dest":"IPH","InterviewState":"InProgress","custom.Flight":"1310","InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"AK - AirAsia Berhad","custom.Airline_Code":"AK","custom.Dest":"KUL","InterviewState":"Completed","custom.Flight":"700","InterviewEndDate":"1\/26\/2023 9:32:24 AM"},{"custom.Airline":"VN - Vietnam Airlines","custom.Airline_Code":"VN","custom.Dest":"HAN","InterviewState":"Completed","custom.Flight":"660","InterviewEndDate":"1\/26\/2023 5:46:22 AM"},{"custom.Airline":"VN - Vietnam Airlines","custom.Airline_Code":"VN","custom.Dest":"HAN","InterviewState":"Completed","custom.Flight":"660","InterviewEndDate":"1\/26\/2023 5:52:32 AM"},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":null,"custom.Airline_Code":null,"custom.Dest":null,"InterviewState":"InProgress","custom.Flight":null,"InterviewEndDate":null},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ","custom.Dest":"KUL","InterviewState":"ScreenOut","custom.Flight":"106","InterviewEndDate":"1\/26\/2023 4:42:27 PM"},{"custom.Airline":"8M - Myanmar Airways International","custom.Airline_Code":"8M","custom.Dest":"RGN","InterviewState":"ScreenOut","custom.Flight":"232","InterviewEndDate":"1\/27\/2023 8:04:38 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ","custom.Dest":"AKL","InterviewState":"ScreenOut","custom.Flight":"285","InterviewEndDate":"1\/27\/2023 8:25:48 AM"},{"custom.Airline":"SQ - Singapore Airlines","custom.Airline_Code":"SQ","custom.Dest":"DXB","InterviewState":"InProgress","custom.Flight":"494","InterviewEndDate":null}],"isSuccess":true} `;