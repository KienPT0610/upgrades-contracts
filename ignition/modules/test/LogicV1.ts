import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("LogicV1", (m) => {
  const admin = m.getAccount(0);
  const initValue = m.getParameter("initValue", 22);
  const logicV1 = m.contract("LogicV1");

  const initData = m.encodeFunctionCall(logicV1, "initialize", [initValue]);

  const proxy = m.contract("TransparentUpgradeableProxy", [
    logicV1,
    admin, // admin
    initData, // encoded initialize data
  ]);

  const proxyAdminAddress = m.readEventArgument(
    proxy,
    "AdminChanged", // first occurrence
    "newAdmin",
  );

  const proxyAdmin = m.contractAt("ProxyAdmin", proxyAdminAddress);
  return { proxyAdmin, proxy, logicV1 };
});
