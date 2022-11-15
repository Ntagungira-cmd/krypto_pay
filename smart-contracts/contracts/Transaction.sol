// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Transactions {

    uint256 transactionCount;

    event transfer(address from , address reciever , uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address from;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable reciever, uint amount, string memory message, string memory keyword) public {
        transactionCount+=1;
        transactions.push(TransferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }

    function getAllTransfers() public view returns (TransferStruct[] memory) {
        //return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}
