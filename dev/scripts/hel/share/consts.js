
exports.FN_TRIGGER_NAMES = {
  /**
   * 以一个独立的目录来启动项目对应的 external 静态资源服务
   */
  startAloneEXServer: ['exs', 'start-exs'],
  buildAloneEXServer: ['bexs', 'build-exs'],
  buildAloneEXServerMeta: ['bexsm', 'build-exs-meta'],
  /** TODO: 待实现 */
  startInAppEXServer: ['iaexs', 'start-in-app-exs'],
  /** TODO: 待实现 */
  buildInAppEXServer: ['biaexs', 'build-in-app-exs'],
  /**
   * TODO: 待实现，提取在 app 里直接构建的 external 产物的 meta
   */
  buildInAppEXServerMeta: ['biaexsm', 'build-in-app-exs-meta'],
  /**
   * hel micro-module 微模块方式启动，自动启动对应 external 服务
   * TODO: 待实现，目前可通过 pnpm start hub:for exs 来单独启动对应的 external 服务
   */
  startHelModUnderEXMode: ['ex', 'start:ex', 'start-ex'],
  /** TODO: 待实现 */
  buildHelModUnderEXMode: ['build-ex', 'build:ex'],
  startAndWaitLocalDeps: ['hwl', 'start:hwl'],
  startWithRemoteDeps: ['hwr', 'start:hwr'],
  startLocalDeps: ['deps', 'start:deps'],
  startMainAndLocalDeps: ['hel', 'start:hel'],
  startHelLegacyAllInOneMode: ['all', 'start:all'],
  startRawLegacyAllInOneMode: ['raw', 'start:raw'],
  buildHelMod: ['bhel', 'build-hel', 'build:hel'],
  buildHelModAll: ['ball', 'build-all', 'build:all'],
  buildHelBrowserAndServerMod: ['bhelbs', 'build-helbs', 'build:helbs'],
};
