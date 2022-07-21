// // Array of Numbers
// const currentScore = [80, 90, 70, 60, 50]

// const studentNames =["Oluwakemi",]

// //  Array of Objects
const studentActivities = [
    {
    id: 1,
    description: "Having the induction session",
    isDone: true,
},
{
    id: 2,
    description: "Starting the javascript, HTML, CSS classes",
    isDone: false,
},
{
    id: 3,
    description: "Starting the C# and .net classes",
    isDone: false,
},
];

// const customerAccountInfo = [
//     {
//         id: 1,
//         accountNumber: "123456789",
//         fullName: "Oluwakemi Ogunjobi",
//         address: "25 segun oshin close, christ avenue",
//         canDebit: true,
//     },
//     {
//         id: 2,
//         accountNumber: "1334555678",
//         fullName: "Prince Jackson",
//         address: "Jackson Lane off admiralty way",
//         canDebit: false,
//     },
//     {
//         id: 3,
//         accountNumber: "1234556777",
//         fullName: "Abraham Ogunjobi",
//         address: "30 Hamsat Awolowo road",
//         canDebit: false,
//     },
// ];
// // Converting the array of objects to JSON format
// const studentActivitiesJSON = JSON.stringify(studentActivities)

// // Accessing the array elements
// console.log(currentScore[2]);
// console.log(studentActivities[2].description);
// console.log(studentActivities[1].isDone);
// console.log(studentActivitiesJSON);
// // High order array functions
// // map()

// const studentActivitiesDescription = studentActivities.map((activity) => activity.description);
// const studentActivitiesId = studentActivities.map((activity) => activity.id)

// console.log(studentActivitiesDescription);
// console.log(studentActivitiesId);


// const customerAccountInfoJSON = JSON.stringify(customerAccountInfo)
// console.log(customerAccountInfoJSON);

// const customerAccountName = customerAccountInfo.map(function(acctName){
//     return acctName.fullName
// });
// console.log(customerAccountName);


// const customerAccountNumber = customerAccountInfo.map(function(acctNumber){
//     return acctNumber.accountNumber
// });
// console.log(customerAccountNumber);


// const customerAddress = customerAccountInfo.map(function(address){
//     return address.address
// });
// console.log(customerAddress);

// const customerDebitStatus = customerAccountInfo.map(function(debit){
//     return debit.canDebit
// });
// console.log(customerDebitStatus);


// let newScore = currentScore.map(function(score){
//     multipliedNum = score * 2;
//     return `The number ${score} multiplied by 2 is ${multipliedNum}`
// });

// console.log(newScore);

// filter()
const studentActivitiesDone = studentActivities.filter((activity) => activity.isDone)
const studentActivitiesNotDone = studentActivities.filter((activity) => !activity.isDone)

// console.log(studentActivitiesDone);
// console.log(studentActivitiesNotDone);

const studentActivities3 = studentActivities.filter((activity) => activity.id === 3);

console.log(studentActivities3);




