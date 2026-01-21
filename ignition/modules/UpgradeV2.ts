import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import Box from "./Box.js";

export default buildModule("upgradeV2Module", (m) => {
  const proxyAdminOwner = m.getAccount(0);

  const { proxyAdmin, proxy } = m.useModule(Box);

  const boxV3 = m.contract("BoxV3");

  const encodeFunctionCall = m.encodeFunctionCall(boxV3, "setValue", [10]);
  
  m.call(proxyAdmin, "upgradeAndCall", [proxy, boxV3 ,encodeFunctionCall], {
    from: proxyAdminOwner,
  });

  return { proxyAdmin, proxy };
});