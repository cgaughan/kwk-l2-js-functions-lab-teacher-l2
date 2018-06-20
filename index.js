function distanceFromHqInBlocks(input) {
  let block =  input;
  blockNumber = Math.abs(input - 42);
  return blockNumber;
}

function distanceFromHqInFeet(input) {
  let block = input;
  blockNumber = Math.abs(input -42)*264;
  return blockNumber;
}

function distanceTravelledInFeet (input1, input2) {
  let block1 = input1;
  let block2 = input2;
  betweenBlocks = Math.abs(input1 - input2)*264;
  return betweenBlocks;
}

function calculatesFarePrice(input1, input2) {
  let cost;
  calculatedFeet = distanceTravelledInFeet(input1, input2);
  if (calculatedFeet <= 400){
      cost = 0;
  }



}
}
