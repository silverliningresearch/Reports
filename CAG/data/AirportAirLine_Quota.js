    let airport_airline_quota = `
    [
      {"Airport_Airline": "FRA - Lufthansa", "Quota": "144", "Completed": "38", "Difference": "-106", "Difference_percent": "-74%"},
      {"Airport_Airline": "MUC - Lufthansa", "Quota": "100", "Completed": "41", "Difference": "-59", "Difference_percent": "-59%"},
      {"Airport_Airline": "ZRH - Swiss", "Quota": "97", "Completed": "8", "Difference": "-89", "Difference_percent": "-92%"},
      {"Airport_Airline": "CDG - Air France", "Quota": "74", "Completed": "18", "Difference": "-56", "Difference_percent": "-76%"},
      {"Airport_Airline": "VIE - Austrian Airlines", "Quota": "73", "Completed": "2", "Difference": "-71", "Difference_percent": "-97%"},
      {"Airport_Airline": "LHR - British Airways", "Quota": "69", "Completed": "28", "Difference": "-41", "Difference_percent": "-59%"},
      {"Airport_Airline": "AMS - KLM Royal Dutch Airlines", "Quota": "66", "Completed": "24", "Difference": "-42", "Difference_percent": "-64%"},
      {"Airport_Airline": "IST - Turkish Airlines", "Quota": "56", "Completed": "24", "Difference": "-32", "Difference_percent": "-57%"},
      {"Airport_Airline": "STR - Eurowings", "Quota": "55", "Completed": "19", "Difference": "-36", "Difference_percent": "-66%"},
      {"Airport_Airline": "DUS - Eurowings", "Quota": "46", "Completed": "3", "Difference": "-43", "Difference_percent": "-93%"},
      {"Airport_Airline": "STN - Ryanair", "Quota": "44", "Completed": "10", "Difference": "-34", "Difference_percent": "-78%"},
      {"Airport_Airline": "HEL - Finnair", "Quota": "44", "Completed": "11", "Difference": "-33", "Difference_percent": "-75%"},
      {"Airport_Airline": "LCY - British Airways", "Quota": "42", "Completed": "14", "Difference": "-28", "Difference_percent": "-66%"},
      {"Airport_Airline": "CGN - Eurowings", "Quota": "39", "Completed": "", "Difference": "-39", "Difference_percent": "-100%"},
      {"Airport_Airline": "BRU - Brussels Airlines", "Quota": "38", "Completed": "", "Difference": "-38", "Difference_percent": "-100%"},
      {"Airport_Airline": "MAD - IBERIA Express", "Quota": "37", "Completed": "", "Difference": "-37", "Difference_percent": "-100%"},
      {"Airport_Airline": "LIN - easyJet Europe", "Quota": "32", "Completed": "", "Difference": "-32", "Difference_percent": "-100%"},
      {"Airport_Airline": "BCN - Vueling Airlines", "Quota": "27", "Completed": "", "Difference": "-27", "Difference_percent": "-100%"},
      {"Airport_Airline": "SAW - Pegasus Airlines", "Quota": "26", "Completed": "1", "Difference": "-25", "Difference_percent": "-96%"},
      {"Airport_Airline": "OSL - Norwegian Air Shuttle AOC", "Quota": "25", "Completed": "", "Difference": "-25", "Difference_percent": "-100%"},
      {"Airport_Airline": "DUB - Ryanair", "Quota": "24", "Completed": "24", "Difference": "0", "Difference_percent": "1%"},
      {"Airport_Airline": "LIS - TAP Air Portugal", "Quota": "24", "Completed": "", "Difference": "-24", "Difference_percent": "-100%"},
      {"Airport_Airline": "WAW - LOT Polish Airlines", "Quota": "23", "Completed": "", "Difference": "-23", "Difference_percent": "-100%"},
      {"Airport_Airline": "BGY - Ryanair", "Quota": "22", "Completed": "7", "Difference": "-15", "Difference_percent": "-69%"},
      {"Airport_Airline": "AYT - Sun Express", "Quota": "22", "Completed": "7", "Difference": "-15", "Difference_percent": "-68%"},
      {"Airport_Airline": "DOH - Qatar Airways", "Quota": "21", "Completed": "7", "Difference": "-14", "Difference_percent": "-66%"},
      {"Airport_Airline": "AMS - easyJet Europe", "Quota": "20", "Completed": "", "Difference": "-20", "Difference_percent": "-100%"},
      {"Airport_Airline": "LUX - Luxair", "Quota": "18", "Completed": "19", "Difference": "1", "Difference_percent": "8%"},
      {"Airport_Airline": "BCN - Ryanair", "Quota": "17", "Completed": "", "Difference": "-17", "Difference_percent": "-100%"},
      {"Airport_Airline": "CPH - easyJet Europe", "Quota": "16", "Completed": "", "Difference": "-16", "Difference_percent": "-100%"},
      {"Airport_Airline": "LGW - easyJet Europe", "Quota": "16", "Completed": "", "Difference": "-16", "Difference_percent": "-100%"},
      {"Airport_Airline": "DUB - Aer Lingus", "Quota": "16", "Completed": "", "Difference": "-16", "Difference_percent": "-100%"},
      {"Airport_Airline": "ATH - Aegean Airlines", "Quota": "16", "Completed": "", "Difference": "-16", "Difference_percent": "-100%"},
      {"Airport_Airline": "MAN - Ryanair", "Quota": "16", "Completed": "5", "Difference": "-11", "Difference_percent": "-68%"},
      {"Airport_Airline": "BSL - easyJet Switzerland", "Quota": "15", "Completed": "6", "Difference": "-9", "Difference_percent": "-60%"},
      {"Airport_Airline": "SCN - Danish Air Transport", "Quota": "15", "Completed": "6", "Difference": "-9", "Difference_percent": "-60%"},
      {"Airport_Airline": "TLV - EL AL- Israel Airlines", "Quota": "15", "Completed": "", "Difference": "-15", "Difference_percent": "-100%"},
      {"Airport_Airline": "RIX - Air Baltic", "Quota": "15", "Completed": "", "Difference": "-15", "Difference_percent": "-100%"},
      {"Airport_Airline": "ORY - easyJet Europe", "Quota": "14", "Completed": "", "Difference": "-14", "Difference_percent": "-100%"},
      {"Airport_Airline": "BRU - Ryanair", "Quota": "14", "Completed": "9", "Difference": "-5", "Difference_percent": "-34%"},
      {"Airport_Airline": "SAW - Turkish Airlines", "Quota": "14", "Completed": "25", "Difference": "11", "Difference_percent": "84%"},
      {"Airport_Airline": "PMI - Ryanair", "Quota": "13", "Completed": "16", "Difference": "3", "Difference_percent": "22%"},
      {"Airport_Airline": "FCO - Ryanair", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "TLV - Ryanair", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "BUD - Ryanair", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "EWR - United Airlines", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "ARN - SAS-Scandinavian Airlines ", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "RIX - Ryanair", "Quota": "13", "Completed": "", "Difference": "-13", "Difference_percent": "-100%"},
      {"Airport_Airline": "TSF - Ryanair", "Quota": "12", "Completed": "4", "Difference": "-8", "Difference_percent": "-68%"},
      {"Airport_Airline": "ADB - Sun Express", "Quota": "12", "Completed": "2", "Difference": "-10", "Difference_percent": "-83%"},
      {"Airport_Airline": "GVA - easyJet Europe", "Quota": "12", "Completed": "", "Difference": "-12", "Difference_percent": "-100%"},
      {"Airport_Airline": "PMI - easyJet Europe", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "AGP - Ryanair", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "BEG - Air Serbia", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "CAI - Egypt Air", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "BUD - Wizz Air", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "CDG - easyJet Europe", "Quota": "11", "Completed": "", "Difference": "-11", "Difference_percent": "-100%"},
      {"Airport_Airline": "CDG - FEDEX - Federal Express", "Quota": "10", "Completed": "", "Difference": "-10", "Difference_percent": "-100%"},
      {"Airport_Airline": "TFS - Ryanair", "Quota": "10", "Completed": "", "Difference": "-10", "Difference_percent": "-100%"},
      {"Airport_Airline": "CGN - Star Air", "Quota": "10", "Completed": "", "Difference": "-10", "Difference_percent": "-100%"},
      {"Airport_Airline": "FCO - easyJet Europe", "Quota": "10", "Completed": "", "Difference": "-10", "Difference_percent": "-100%"},
      {"Airport_Airline": "MXP - Ryanair", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "ORY - Transavia France", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "KEF - Icelandair", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "BCN - easyJet Europe", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "TLV - easyJet Europe", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "LPA - Eurowings", "Quota": "9", "Completed": "13", "Difference": "4", "Difference_percent": "43%"},
      {"Airport_Airline": "ARN - Eurowings", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "PMI - Eurowings", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "LGW - easyJet UK", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "SKG - Ryanair", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "CPH - SAS-Scandinavian Airlines ", "Quota": "9", "Completed": "", "Difference": "-9", "Difference_percent": "-100%"},
      {"Airport_Airline": "TIA - Wizz Air", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "GDN - SprintAir", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "TFS - easyJet Europe", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "DUB - Zimex Aviation Austria", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "FNC - easyJet Europe", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "LIS - Ryanair", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "SZG - Eurowings", "Quota": "8", "Completed": "4", "Difference": "-4", "Difference_percent": "-48%"},
      {"Airport_Airline": "LTN - easyJet UK", "Quota": "8", "Completed": "", "Difference": "-8", "Difference_percent": "-100%"},
      {"Airport_Airline": "OTP - Ryanair", "Quota": "7", "Completed": "3", "Difference": "-4", "Difference_percent": "-59%"},
      {"Airport_Airline": "BZO - Luxwing", "Quota": "7", "Completed": "", "Difference": "-7", "Difference_percent": "-100%"},
      {"Airport_Airline": "MAN - easyJet UK", "Quota": "7", "Completed": "", "Difference": "-7", "Difference_percent": "-100%"},
      {"Airport_Airline": "EDI - Ryanair", "Quota": "7", "Completed": "", "Difference": "-7", "Difference_percent": "-100%"},
      {"Airport_Airline": "FUE - Ryanair", "Quota": "7", "Completed": "", "Difference": "-7", "Difference_percent": "-100%"},
      {"Airport_Airline": "SOF - Bulgaria Air", "Quota": "7", "Completed": "", "Difference": "-7", "Difference_percent": "-100%"},
      {"Airport_Airline": "SIN - Scoot", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "VAR - Wizz Air", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "RAK - Ryanair", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "MAD - Ryanair", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "JFK - Norse Atlantic Airways", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "ARN - easyJet Europe", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "BEY - SUNDAIR", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "CPH - Norwegian Air Sweden ", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "NAP - easyJet Europe", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "PRN - easyJet Europe", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "FLL - Norse Atlantic Airways", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "SOF - Ryanair", "Quota": "6", "Completed": "", "Difference": "-6", "Difference_percent": "-100%"},
      {"Airport_Airline": "DWC - Smartlynx Airlines SIA", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "PRN - GP Aviation", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "ARN - Norwegian Air Sweden ", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "AYT - Freebird Airlines", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "CTA - Ryanair", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "ESB - Turkish Airlines", "Quota": "5", "Completed": "3", "Difference": "-2", "Difference_percent": "-41%"},
      {"Airport_Airline": "FUE - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "VCE - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "TFS - SUNDAIR", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "BLQ - Ryanair", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "OPO - Ryanair", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "TZL - Wizz Air", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "ZRH - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "EDI - easyJet UK", "Quota": "5", "Completed": "7", "Difference": "2", "Difference_percent": "48%"},
      {"Airport_Airline": "LPA - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "BEY - Eurowings", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "HRG - Air Cairo", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "AGP - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "PSA - Ryanair", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "NCE - easyJet Europe", "Quota": "5", "Completed": "", "Difference": "-5", "Difference_percent": "-100%"},
      {"Airport_Airline": "ACE - easyJet Europe", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "LPA - SUNDAIR", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "SKP - Wizz Air", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "PMO - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "EMA - Ryanair", "Quota": "4", "Completed": "10", "Difference": "6", "Difference_percent": "132%"},
      {"Airport_Airline": "ACE - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "BRI - Ryanair", "Quota": "4", "Completed": "15", "Difference": "11", "Difference_percent": "252%"},
      {"Airport_Airline": "TFS - Eurowings", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "KUT - Wizz Air", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "VNO - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "HRG - Corendon Airlines Europe", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "HRG - easyJet Europe", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "HRG - SUNDAIR", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "VLC - easyJet Europe", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "LPA - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "GLA - easyJet UK", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "BNX - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "KRK - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "SZG - easyJet Europe", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "TRD - Norwegian Air Shuttle AOC", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "KEF - PLAY", "Quota": "4", "Completed": "4", "Difference": "0", "Difference_percent": "2%"},
      {"Airport_Airline": "KIV - Wizz Air", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "PFO - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "BGO - Norwegian Air Shuttle AOC", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "FAO - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "TGD - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "TLL - Ryanair", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "HRG - Eurowings", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "SKG - Aegean Airlines", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "BRS - easyJet UK", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "GYD - Azerbaijan Airlines", "Quota": "4", "Completed": "", "Difference": "-4", "Difference_percent": "-100%"},
      {"Airport_Airline": "CLJ - Wizz Air", "Quota": "3", "Completed": "6", "Difference": "3", "Difference_percent": "83%"},
      {"Airport_Airline": "VLC - Ryanair", "Quota": "3", "Completed": "", "Difference": "-3", "Difference_percent": "-100%"},
      {"Airport_Airline": "MRS - Ryanair", "Quota": "3", "Completed": "", "Difference": "-3", "Difference_percent": "-100%"},
      {"Airport_Airline": "ACE - Eurowings", "Quota": "3", "Completed": "", "Difference": "-3", "Difference_percent": "-100%"}
      
    ]
     
    `;
