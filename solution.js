function solution(A, D) {
    const payment = new Array(12).fill(0); // total card payments per month
    const transfer = new Array(12).fill(0); // total incoming transfer per month
    const count = new Array(12).fill(0); // number of payments per month

    for (let i = 0; i < A.length; i++) {
        const date = D[i].split("-", 3);
        const year = parseInt(date[0]);
        const month = parseInt(date[1]);
        
        // Check if the transaction occurred in the year 2020

        if (year === 2020) {
             // Update the transfer,payment and count arrays based on the transaction type

            if (A[i] < 0) {
                payment[month - 1] -= A[i];
                count[month - 1]++;
            } else {
                transfer[month - 1] += A[i];
            }
        }
    }

    // Initialize account balance at the beginning of the year which is empty
    let balance = 0;
    // Iterate through each month to calculate the balance

    for (let i = 0; i < 12; i++) {
                // you  Update the balance based on transfers and payments for each month here 

        balance += transfer[i] - payment[i];


        // Here is where you Apply a fee deduction if conditions are met (less than 3 payments or total cost less than 100)

        if (count[i] < 3 || payment[i] < 100) {
            // if <3 payments or <100 total cost
            balance -= 5; // fee deduction
        }
    }

    return balance;
}


// // // 1. Given A = [100, 100, 100, −10] and D = ["2020−12−31", "2020−12−22", "2020−12−03", "2020−12−29"], the function should return 230. Total income was equal to 100 + 100 + 100 − 10 = 290 and the fee was paid every month, so 290 - (5 * 12) = 230.

const A = [100, 100, 100, -10];

const D = ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"];

// // Call  now the solution function with example arrays A and D

const result = solution(A, D);
// // Log the result to the console (output will be the calculated balance below)

console.log(result);  



// 2. Given A = [180, -50, -25, -25] and D = ["2020−01−01", "2020−01−01", "2020−01−01", "2020−01−31"], the function should return 25. The income was equal to 180, the expenditure was equal to 100 and the fee was applied in every month except January: 180 - 100 - (5 * 11) = 25.

// const A=[180,-50,-25,-25];
// const D=["2020-01-01","2020-01-01","2020-01-01","2020-01-31"];
// const result = solution(A, D);
// console.log(result);  


// 3. Given A = [1, -1, 0, -105, 1] and D = ["2020−12−31", "2020−04−04", "2020−04−04", "2020−04−14", "2020−07−12"], the function should return -164. The fee is paid every month. 1 - 1 + 0 - 105 + 1 - (5 * 12) = -164. Note that in April, even though the total cost of card payments was 106 (more than 100), there were only two payments made by card, so the fee was still applied. A transaction of value 0 is considered a positive, incoming transfer.

// const A =[1,-1,0,-105,1];
// const D = ["2020-12-31", "2020-04-04", "2020-04-04", "2020-04-14", "2020-07-12"];
// const result = solution(A,D);
// console.log(result);



// 4. Given A = [100, 100, -10, -20, -30] and D = ["2020−01−01", "2020−02−01", "2020−02−11", "2020−02−05", "2020−02−08"], the function should return 80.

// const A = [100,100,-10,-20,-30];
// const D = ["2020-01-01", "2020-02-01", "2020-02-11", "2020-02-05", "2020-02-08"];
// const result = solution(A,D);
// console.log(result);



// 5. Given A = [-60, 60, -40, -20] and D = ["2020−10−01", "2020−02−02", "2020−10−10", "2020−10−30"], the function should return −115.
// Assume that:
// N is an integer within the range [1..100];
// each element of array A is an integer within the range [−1,000..1,000];
// D contains strings in YYYY−MM−DD format, representing dates in the range 2020−01−01 to 2020−12−31.

// const A = [-60,60,-40,-20];
// const D = ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"];
// const result = solution(A,D);
// console.log(result);