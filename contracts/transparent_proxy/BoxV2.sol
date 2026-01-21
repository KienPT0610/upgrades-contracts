// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract BoxV2 {
  string public name;

  function version() public pure virtual returns (string memory) {
    return "2.0.0"; 
  }

  function setName(string memory newName) public {
    name = newName;
  }
}