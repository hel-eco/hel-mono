
# dev 目录说明

`config`, `public`, `scripts` 是 [react-create-app](https://facebook.github.io/create-react-app/docs/getting-started) 命令行
创建的应用并弹射出去后的文件，迁移到 hel-mono 顶层做进一步定制。

`root-scripts` 是 hel-mono 根目录 `package.json` 运行各种 npm 命令需要的脚本

`doc` 是记录一些关键问题的文档目录


# 其他

## 只构建 npm 包和 hel 浏览器包

在 `package.json` 的 `scripts` 如下语句：

```ts
"build:nb": "pnpm run build:hel && pnpm run build:npm",
"build:nbm": "cross-env-shell \"pnpm run build:nb && pnpm run build:meta\"",
```

`build:nbm` 表示除了构建包体，还要生成 meta

> 注意：build:hel 和 build:npm 顺序不可调换


## 只构建 npm 包和 hel 服务端包

在 `package.json` 的 `scripts` 如下语句

```ts
"build:ns": "pnpm run build:hels && pnpm run build:npm",
"build:nsm": "cross-env-shell \"pnpm run build:ns && pnpm run build:meta\"",
```

`build:nsm` 表示除了构建包体，还要生成 meta

> 注意：build:hels 和 build:npm 顺序不可调换
