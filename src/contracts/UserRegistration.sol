

pragma solidity ^0.8.0;

contract UserRegistration {
    struct User {
        string email;
        bytes32 passwordHash;
    }

    mapping(address => User) private users;

    function register(string memory email, bytes32 passwordHash) public {
        require(bytes(users[msg.sender].email).length == 0, "User already registered");
        users[msg.sender] = User(email, passwordHash);
    }

    function getUser() public view returns (string memory email) {
        return users[msg.sender].email;
    }
}




