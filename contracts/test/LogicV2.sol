// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "./LogicV1.sol";

contract LogicV2 is LogicV1 {
  function increment(uint256 _value) public {
    value = value + _value;
  }
}