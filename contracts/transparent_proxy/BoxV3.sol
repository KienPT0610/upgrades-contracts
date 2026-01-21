// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./BoxV2.sol";

contract BoxV3 is BoxV2 {
  // storage layout must be preserved
  uint256 public value;
  function version() public pure override returns (string memory) {
    return "3.0.0"; 
  }
  function setValue(uint256 newValue) public {
    value = newValue;
  }
}