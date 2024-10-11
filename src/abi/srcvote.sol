//SPDX-License-Identifier: MIT

pragma solidity >=0.8.17;

contract voteDappContract{
    uint public total;
    uint public totalA;
    uint public totalB;
    uint public totalC;
    uint public totalD;
    address[] showAddressVote;
    error PassAParam(string);
    mapping(address => string ) userWhoVoted;
    function addVote(string memory _userChoice) external {
        require(bytes(userWhoVoted[msg.sender]).length==0, "User voted already!");
        if(keccak256(abi.encode(_userChoice))==keccak256(abi.encode("a"))){
            userWhoVoted[msg.sender]=_userChoice;
            total++;
            totalA++;
            showAddressVote.push(msg.sender);
        }
        else if(keccak256(abi.encode(_userChoice))==keccak256(abi.encode("b"))){
            userWhoVoted[msg.sender]=_userChoice;
            total++;
            totalB++;
            showAddressVote.push(msg.sender);
        }
        else if(keccak256(abi.encode(_userChoice))==keccak256(abi.encode("c"))){
            userWhoVoted[msg.sender]=_userChoice;
            total++;
            totalC++;
            showAddressVote.push(msg.sender);
        }
        else if(keccak256(abi.encode(_userChoice))==keccak256(abi.encode("d"))){
            userWhoVoted[msg.sender]=_userChoice;
            total++;
            totalD++;
            showAddressVote.push(msg.sender);
        }
        else{
            revert PassAParam("Must pass a param !");
        }
    }
    function showAddressVoteFunc() external view returns(address[] memory){
        return showAddressVote;
    }
}