const {ethers} = require("hardhat");

async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  console.log(`Contract deployed to: ${simpleStorage.target}`)
  
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is:  ${currentValue}`)

  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`Updated value is: ${updatedValue}`)

}

main()
  .then(()=>process.exit(0))
  .catch((error) =>{
    console.error(error);
    process.exit(1);
  })