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
// for my testing purpose
const A = [50, -100, 200, -150];
const D = ["2020-01-01", "2020-02-15", "2020-05-20", "2020-08-10"];

// Call  now the solution function with example arrays A and D

const result = solution(A, D);
// Log the result to the console (output will be the calculated balance below)

console.log(result);  