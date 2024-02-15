// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract SolidityDataTypes {
    uint256 balance;
    address owner;
    mapping(string => string) accounts;

    constructor() {
        balance = 10000;
        owner = address(0);
        accounts["theblokc"] = "999999";
        
        console.log(msg.sender);
    }
}