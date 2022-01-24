const accountTypeChecker = (accountBalanceHistory) => {
  let isAmountDifferenceSame = true;
  if (
    accountBalanceHistory &&
    Array?.isArray(accountBalanceHistory) == true &&
    accountBalanceHistory?.length > 1
  ) {
    // sort the array in ascending order
    accountBalanceHistory.sort(function (a, b) {
      return a?.monthNumber - b?.monthNumber;
    });
    // remove the repeated  element from the array
    const arr = accountBalanceHistory?.filter(
      (item, index, inputArray) =>
        index ===
        inputArray.findIndex(
          (account) => account?.monthNumber === item?.monthNumber
        )
    );
    // check if the difference of the amount is same for all the months
    var differentAmount =
      arr[1]?.account?.balance?.amount - arr[0]?.account?.balance?.amount;
    let accountBalanceHistoryLength = arr?.length;
    Array.from(Array(accountBalanceHistoryLength).keys()).forEach((index) => {
      let diffAmount =
        arr[index]?.account?.balance?.amount -
        arr[index - 1]?.account?.balance?.amount;
      if (diffAmount === differentAmount) {
        isAmountDifferenceSame = true;
      } else {
        isAmountDifferenceSame = false;
        return;
      }
    });
  } else {
    isAmountDifferenceSame = false;
  }
  return isAmountDifferenceSame === true ? "B" : "A";
};
const accountBalanceHistory1 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
];
const accountBalanceHistory2 = [];
const accountBalanceHistory3 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 3, // three months ago
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 4, // four months ago
    account: {
      balance: { amount: 400 },
    },
  },
  {
    monthNumber: 5, // five months ago
    account: {
      balance: { amount: 500 },
    },
  },
  {
    monthNumber: 6, // six months ago
    account: {
      balance: { amount: 600 },
    },
  },
  {
    monthNumber: 7, // seven months ago
    account: {
      balance: { amount: 700 },
    },
  },
  {
    monthNumber: 8, // eight months ago
    account: {
      balance: { amount: 800 },
    },
  },
];
const accountBalanceHistory4 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 50 },
    },
  },
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 150 },
    },
  },
];
const accountBalanceHistory5 = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 50 },
    },
  },
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 50 },
    },
  },
  {
    monthNumber: 1, // last months ago
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 150 },
    },
  },
];
console.log("case 1 ===>");
accountBalanceHistory1?.map((acDetail) => console.log(acDetail));
let accountTypeCheckerResult1 = accountTypeChecker(accountBalanceHistory1);
console.log("accountTypeCheckerResult1", accountTypeCheckerResult1, "\n");
console.log("case 2 ===>");
accountBalanceHistory2?.map((acDetail) => console.log(acDetail));
let accountTypeCheckerResult2 = accountTypeChecker(accountBalanceHistory2);
console.log("accountTypeCheckerResult2", accountTypeCheckerResult2, "\n");
console.log("case 3 ===>");
accountBalanceHistory3?.map((acDetail) => console.log(acDetail));
let accountTypeCheckerResult3 = accountTypeChecker(accountBalanceHistory3);
console.log("accountTypeCheckerResult3", accountTypeCheckerResult3, "\n");
console.log("case 4 ===>");
accountBalanceHistory1?.map((acDetail) => console.log(acDetail));
let accountTypeCheckerResult4 = accountTypeChecker(accountBalanceHistory4);
console.log("accountTypeCheckerResult4", accountTypeCheckerResult4, "\n");
console.log("case 5 ===>");
accountBalanceHistory5?.map((acDetail) => console.log(acDetail));
let accountTypeCheckerResult5 = accountTypeChecker(accountBalanceHistory5);
console.log("accountTypeCheckerResult5", accountTypeCheckerResult5, "\n");
