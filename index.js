function distanceFromHqInBlocks(input) {
  let block =  input;
  if (input >= 42){
    blockNumber = (input - 42);
    return blockNumber;
  }
  else (input < 42) {
    blockNumber = (42 - input);
    return blockNumber;
  }
}
