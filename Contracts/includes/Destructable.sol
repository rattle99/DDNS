pragma solidity >=0.4.22 <0.6.0;

import "./Ownable.sol";

contract Destructible is Ownable {

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }

    function destroyAndSend(address _recipient) public onlyOwner {
        selfdestruct(_recipient);
    }
}