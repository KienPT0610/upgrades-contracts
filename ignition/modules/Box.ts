import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("BoxModule", (m) => {
  const proxyAdminOwner = m.getAccount(0);
  const box = m.contract("Box");

  const proxy = m.contract("TransparentUpgradeableProxy", [
    box,
    proxyAdminOwner, // admin
    "0x", // empty data
  ]);

  const proxyAdminAddress = m.readEventArgument(
    proxy,
    "AdminChanged",
    "newAdmin"
  );

  const proxyAdmin = m.contractAt("ProxyAdmin", proxyAdminAddress);
  return { proxyAdmin, proxy };
});