 const factorial=function (x){
  if(x===0) {    // terminal case
	return 1;    // base case
  }                  
  return x*factorial(x-1);
  };
console.log(factorial(5));  // 120 recursive case

 
