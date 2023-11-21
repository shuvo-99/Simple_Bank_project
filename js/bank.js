document.getElementById("btn_deposit").addEventListener("click", function () {
  const deposit_text = document.getElementById("deposit_num").value;
  const deposit_amount = parseInt(deposit_text);
  document.getElementById("deposit_num").value = " ";

  // DEPOSIT CALCULATION
  const total_depoText = document.getElementById("total_deposit").innerText;
  const total_depo = parseInt(total_depoText);

  const new_total_depo = total_depo + deposit_amount;
  document.getElementById("total_deposit").innerText = new_total_depo;

  // BALANCE CALCULATION
  balance(deposit_amount, "positive");
});

document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdraw_text = document.getElementById("withdraw_num").value;
  const withdraw_amount = parseInt(withdraw_text);
  document.getElementById("withdraw_num").value = " ";

  // WITHDRAW CALCULATION
  const total_withdrawText =
    document.getElementById("total_withdraw").innerText;
  const total_withdraw = parseInt(total_withdrawText);

  const new_total_withdraw = total_withdraw + withdraw_amount;
  document.getElementById("total_withdraw").innerText = new_total_withdraw;

  // BALANCE CALCULATION
  balance(withdraw_amount, "negative");
});

function balance(amount, sign) {
  const total_balanceText = document.getElementById("total_balance").innerText;
  const total_balance = parseInt(total_balanceText);
  let new_total_balance = 0;
  if (sign === "positive") {
    new_total_balance = total_balance + amount;
  } else {
    new_total_balance = total_balance - amount;
  }

  document.getElementById("total_balance").innerText = new_total_balance;
}
