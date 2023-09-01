# Akio-SelfWebsite.

\[ [zh_CN](./readme-zh_CN.md) | [en_US](./readme.md) \]

## 简介：

这是我蓄谋已久的网页项目！前项目为 PostCard - furrycreakler.github.io (现：FurryKamenomi.github.io，可在往期提交见原先版本！)

这个项目从我小学六年级写到现在，因为当时技术能力不够以至于项目重建又重建，来来回回弄了五回，现在算是我较成功的前端静态项目了。（跌跌撞撞走到现在，卑微）

这个项目我正在尝试使用模块化，减少全局变量污染问题。

## 项目依赖：

1. [UAParser](https://github.com/faisalman/ua-parser-js) - MIT

2. [Typescript](https://github.com/microsoft/TypeScript) - Apache2.0

3. [Material Design icons](https://github.com/google/material-design-icons) - Apache2.0

## 项目使用：

### 页面插入

可在 ``/script/src/pages/`` 目录下创建你的新页面！

在页面跳转时，主脚本会根据 location.search 以及你所定义的 ``<FolderName>``（无大小写检查）进行导入其页面数据。

模板结构如下：

````
Tree - Pages
	┗ <FolderName>
		┗ index.html             /* Your pages data. */
		┗ <ScriptName>.ts(x)     /* *Optional. */
		┗ <StyleName>.less/css   /* *Optional, Less will be complied. */
````

在 index.html 文件当中，你可不必重复声明 \<doctype html>、\<html>、\<body> 等，直接插入\<div>等。

### 库声明添加

若添加新的库声明，请按一下操作，否则将出现像依赖 NodeJS 警示或找不到文件。

1. 在 ``/script/def/`` 当中创建文件夹以 所依赖库的名称 命名。

2. 之后在其文件夹下导入库的声明文件
3. 最后在 ``/script/def/index.d.ts`` 中添加以下内容：

> ``/// <reference path="库的主声明文件(相对定位)" />`` （记得替换！）

4. 在你依赖此的脚本文件下测试！如果无法正常解析，请适当修改库声明文件。（实在没办法请提交 issue）

## 关于

> Powered By FurryCreakler.
>
> Thanks For GoogleFont!