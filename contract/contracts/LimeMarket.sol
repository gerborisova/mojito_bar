//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LimeMarket {
    string private limes;

    constructor(string memory _limes) {
        console.log("Deploying a LimeMarket with limes:", _limes);
        limes = _limes;
    }

    function getLimes() public view returns (string memory) {
        return limes;
    }

    function setLimes(string memory _limes) public {
        console.log("Changing greeting from '%s' to '%s'", limes, _limes);
        limes = _limes;
    }

}