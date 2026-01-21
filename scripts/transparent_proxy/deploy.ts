import hre from "hardhat";
import Box from "../../ignition/modules/Box.js";

async function main() {
  const connect = await hre.network.connect();

  const { proxyAdmin, proxy } = await connect.ignition.deploy(Box);
  console.log("Proxy Admin Address:", proxyAdmin.address);
  console.log("Proxy Address:", proxy.address);
}

main().catch(console.error);
