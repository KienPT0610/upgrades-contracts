// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import  "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract LogicV1 is Initializable {
  uint256 public value;
  function initialize(uint256 _value) public initializer {
    value = _value;
  }

  function setValue(uint256 _value) public {
    value = _value;
  }
}