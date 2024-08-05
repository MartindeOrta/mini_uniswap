// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Theter is ERC20{
    constructor(address initialOwner)ERC20("theter2", "USDT2"){}

    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }
}