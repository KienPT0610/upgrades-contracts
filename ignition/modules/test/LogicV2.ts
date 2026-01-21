import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import LogicV1 from "./LogicV1.js";

export default buildModule("LogicV2", (m) => {
  const admin = m.getAccount(0);
  const { proxy, proxyAdmin } = m.useModule(LogicV1);
  const logicV2 = m.contract("LogicV2");

  m.call(proxyAdmin, "upgradeAndCall", [proxy, logicV2, "0x"], {
    from: admin,
  });

  return { proxy, proxyAdmin, logicV2 };
});
