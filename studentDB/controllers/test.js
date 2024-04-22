function onEdit(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  Logger.log(sheet.getDataRange());
  for (var i = 1; i < data.length; i++) {
    let {
      balance,
      savingsHBDBalance: savingsHBDBalance,
      hiveBalance,
    } = callApi(data[i][0]);
    Logger.log("UserName : " + data[i][0]);
    Logger.log(
      "Hive Balance : " +
        balance +
        " | HBDBalance : " +
        savingsHBDBalance +
        " | HiveBalance : " +
        hiveBalance
    );
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.getRange(`B${i + 1}`).setValue(balance);
    sheet.getRange(`C${i + 1}`).setValue(savingsHBDBalance);
    sheet.getRange(`D${i + 1}`).setValue(hiveBalance);
  }
}

function callApi(userName) {
  var url = "https://api.hive.blog/";
  var payload = {
    id: 2,
    jsonrpc: "2.0",
    method: "condenser_api.get_accounts",
    params: [[userName]],
  };
  var options = {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language":
        "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6,nl;q=0.5",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
    },
    referrerPolicy: "no-referrer",
    method: "POST",
    mode: "cors",
    credentials: "omit",
    payload: JSON.stringify(payload),
  };
  var responseString = UrlFetchApp.fetch(url, options);
  var response = JSON.parse(responseString.getContentText());
  var balanceAmount = response.result?.[0]?.balance;
  balanceAmount = balanceAmount ? balanceAmount : "balance unavailable";
  // Logger.log(response);
  var hbdBalance = response.result[0]?.["savings_hbd_balance"];
  hbdBalance = hbdBalance ? hbdBalance : "hbdBalance unavailable";

  var hiveBalance = response.result[0]?.["savings_balance"];
  hiveBalance = hiveBalance ? hiveBalance : "Hive Balance Unavailable";
  return {
    balance: balanceAmount,
    savingsHBDBalance: hbdBalance,
    hiveBalance: hiveBalance,
  };
}
