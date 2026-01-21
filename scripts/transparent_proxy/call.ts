import hre from "hardhat";

async function main() {
  const connection = await hre.network.connect();
  const demo = await connection.ethers.getContractAt(
    "BoxV3",
    process.env.PROXY_ADDRESS as `0x${string}`
  );

  console.log("Demo contract deployed at:", await demo.getAddress());

  const value = await demo.value();
  const name = await demo.name();
  const version = await demo.version();

  console.log("Demo Contract Version:", version);
  console.log("Demo Contract Name:", name);
  console.log("Box Value:", value.toString());

  // set a new value
  const newValueTx = await demo.setValue(42);
  await newValueTx.wait();
  const updatedValue = await demo.value();
  console.log("Updated Box Value:", updatedValue.toString());
}

main().catch(console.error);