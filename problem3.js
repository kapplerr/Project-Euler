/* 
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? 
*/

function largestPrimeFactor(number) {
  var largest = 1;
  //get condition where number === 2 out of the way
  if(number === 2) {
    return 2;
  } 
    //now can iterate starting at 3 and check only odds
    else {
  for(var prime = 3; prime <= number; prime += 2) {
    if(number % prime === 0) {
        largest = prime;
        number = number / prime;
    } 
  } return largest;
}
}