// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract LPABSTRACT{
    function addToPool()virtual external;
    function removeFromPool() virtual external;
    function buyETH2() virtual external;
    function price() virtual external view returns(uint256);
}


contract LPTOKEN is ERC20, Ownable{
    uint256 token0; // 1
    uint256 token1;// 3500


 constructor(address initialOwner)ERC20("LPTOKEN", "LP")Ownable(initialOwner){

}
  function price() virtual external view returns(uint256){
        return(token1/token0);
  }
   /* function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }*/
}