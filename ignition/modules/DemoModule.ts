import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DemoModule", (m) => {
  const proxyAddress = process.env.PROXY_ADDRESS as `0x${string}`;

  const demo = m.contractAt("BoxV3", proxyAddress);

  return { demo };
});