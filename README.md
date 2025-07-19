# hel-mono
hel-mono 是一个基于 hel-micro 和 pnpm 向上提炼的微模块大仓化开发架构，该架构下沉hel-micro sdk到编译阶段，可让用户无需用户感知到微模块存在，并通过不同的命令入口，编译出一体化产物（不含微模块），分布式产物（包含微模块），让用户针对不同场景（如私有部署场景、公有云架构等）做出更灵活的选择。

## 特点
* 宿主双构建驱动，可按需选择 1 pnpm 大仓一体化构建，2 hel 微模块分布式构建
* 子模块共享灵活，支持跨仓、跨端传统的npm恭喜方式，也支持微模块快速共享方式（使用方一次导入，后续无需再构建）。
> 在本仓内可基于 pnpm workspace 协议被宿主构建，可基于微模块协议被宿舍复用代码但不参与构建， 
> 可构建发布独立的npm包，或构建包含有微模块产物的 npm包。
> 当你需要夸大仓，跨端以使用方免构建动态更新的方式来共享代码，可使用此增强构建模式，
> 以下是一个采用了微模块构建发布的npm包：
> npm 加载入口：https://app.unpkg.com/hel-demo-lib1@0.2.2/dist
> hel 加载入口：https://app.unpkg.com/hel-demo-lib1@0.2.2/hel_dist
* 基础设置统一（lint，webpack.config，public模板等...）
* 中心化配置宿主，子模块均支持别名、端口、helpack映射（微模块构建需要）等
* 同时支持一体化构建（传统模式），分布式构建（微模块模式）
* 微模块模式下，会自动分析相关依赖注入模板代码（如子模块导出，宿主注入等全程自动化）
* 提供和目录一直快捷命令行模式
* 支持扩展更多命令行（创建新的宿主，子模块等...）

## 启动与构建应用
以下命令行均在根目录执行

### 普通模式（启动与构建）

启动基座
```bash
# 会转为 pnpm --filter hub run start 来启动 hub
npm start hub
```

构建基座
```bash
# 构建基座，会转为 pnpm --filter hub run build 来构建 hub
npm start .build hub
# or
npm start hub:build
```

### 微模块模式（启动与构建）

先启动 hub 依赖的子模块，再启动 hub
```bash
# 启动子模块
npm start mono-comps

# 启动hub
npm start hub:hel
```

构建宿主、子模块
```bash
# 构建宿主，会转为 pnpm --filter hub run build:hel 执行
npm start hub:build:hel

# 构建子模块，会转为 pnpm --filter mono-comps run build:hel 执行
npm start mono-comps:build:hel
```

## 构建微模块模式npm包

```bash
npm start hel-demo-lib1:build
```
构建完毕可到 `packages/hel-demo-lib` 目录下查看到产物，`dist`为npm传统模式分发的产物，`hel_dist`为微模块模式分发的前后端产物

### 其他命令行介绍

### 创建宿主
使用 `.create` 关键字创建宿主应用

```bash
# 创建一个名为 my-app 的应用
npm start .create my-app

# 创建一个名为 my-app 的应用并启动
npm start .create-start my-app
npm start .cs my-app
```

### 初始化微模块配置
使用 `.init` 关键字为目标应用初始化微模块配置，初始化即可使用微模块方式启动
> 仅首次启动时才需执行

```bash
# 会自动分析它的孩子依赖并为孩子依赖创建微模块配置
npm start .init my-app
```

### 多路径查询&启动
支持别名、父目录/目录名、目录名、包名4种方式去命中应用并启动

```bash
npm start @mc  
npm start packages/mono-comps
npm start mono-comps
```