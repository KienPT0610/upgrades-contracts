import hre from "hardhat";
import LogicV1 from "../../ignition/modules/test/LogicV1.js";

async function main() {
  console.log("Deploying contracts...");
  const connect = await hre.network.connect();
  const initValue = 11;

  const {proxy, proxyAdmin} = await connect.ignition.deploy(LogicV1, {
    parameters: {
      LogicV1: { initValue },
    }
  });

  console.log("Contracts deployed:");
  console.log("Proxy address: ", await proxy.getAddress());
  console.log("ProxyAdmin address: ", await proxyAdmin.getAddress());
}

main().catch(console.error);