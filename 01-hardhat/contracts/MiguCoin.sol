// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MiguCoin is ERC20 {
    
    //SYMBOL: MIGU
    //Initial Supply: 1000000000000000000000000
    constructor() ERC20("Migu Coin Forev","MIGU"){
        _mint(msg.sender, 1000000000000000000000000);
    }
}