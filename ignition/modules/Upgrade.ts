import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import Box from "./Box.js";

const upgradeModule = buildModule("UpgradeModule", (m) => {
  const proxyAdminOwner = m.getAccount(0);

  const { proxyAdmin, proxy } = m.useModule(Box);

  const boxV2 = m.contract("BoxV2");
  

  m.call(proxyAdmin, "upgradeAndCall", [proxy, boxV2 ,'0x'], {
    from: proxyAdminOwner,
  });

  return { proxyAdmin, proxy };
});

export default upgradeModule;