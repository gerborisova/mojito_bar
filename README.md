This is a project that gives you the ability to:

- connect with your MetaMask wallet
- see your balance
- create smart contract for LemonMarket with which you can keep track and manage lemons
- you can buy lemons with crypto through your metamask wallet 

Technologies used: 
- hardhat 
- ether.js
- metamask

How to run the project: 

// TO SETUP THE SMART CONTRACT
- go to /contract 
- run npm i 
- npx hardhat compile // (if you've made changes to your contract you also have to go to the artifacts/contracts/{yourfileName}/{yourfilename.json} and copy the abi array and paste it in client/src/utils.js --> abi)
- npx hardhat node // to get a test account with eth, then connect it to your metamask wallet
- npx hardhat run scripts/deploy.js --network localhost // to deploy smartcontract on localhost
- on the terminal you are going to see the contractAddress, take it and replace it in client/src/utils.js --> contractAddress

//TO SETUP CLIENT
- go to /client
- npm i 
- npm run start

ENJOY THE MOJITO BAR
