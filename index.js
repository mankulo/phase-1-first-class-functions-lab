// Code your solution in this file!
const drivers=['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers=function(drivers){
  let newDrivers=drivers.slice(0,2);
    return newDrivers;
}
const returnLastTwoDrivers=function(drivers){
    let newDrivers=drivers.slice(2);
      return newDrivers;
  }
  let  selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

  function createFareMultiplier(integer){
    return function fareMultiplier(fare){
     let totalfare=fare*integer;
     return totalfare;
  }
    
  
}
console.log(createFareMultiplier()());
  function fareDoubler(number){
    let double=number*2; 
    return double;
  }
  console.log(fareDoubler())
  function fareTripler(number){
    let triple=number*3; 
    return triple;
  }
  console.log(fareTripler());
  
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}
  
  