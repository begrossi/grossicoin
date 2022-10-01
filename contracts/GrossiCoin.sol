// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GrossiCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("GrossiCoin", "GRSS") {
        _mint(msg.sender, initialSupply);
    }
}
