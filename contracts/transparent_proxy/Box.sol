// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract Box {
  uint256 private value;
  
  function version() public pure returns (string memory) {
    return "1.0.0"; 
  }

  function setValue(uint256 newValue) public {
    value = newValue;
  }

  function getValue() public view returns (uint256) {
    return value;
  }
}