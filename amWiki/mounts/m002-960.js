if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m002']=[{"name":"001-感悟.md","path":"002-git/001-感悟.md","content":"# 关于git的一点感悟\n\n我要用git做什么？版本控制\n\n我该怎么用?\n\n## 修改文件提交\n\n```\ngit add -A\n```\n一次性添加所有的已修改文件，包括重命名、删除、增添、修改\n\n```\ngit commit -m \"一些提示信息\"\n```\n提交修改到git仓库\n\n## 生成静态html文件\n我常用的是amwiki和hexo，因此对于他们都有各自的方法\n1. amwiki\n```\namwiki -u\n```\n2. hexo\n```\nhexo g\n```\n\n## 推送到远程仓库\n\n已经部署好了免密推送\n\n```\ngit push\n```\n\n**注意**：hexo自有deploy方案，把生成的 public 文件夹推送到远程的 github 仓库。\n```\nhexo d\n```\n\n[^此处应该分开写的]\n\nhexo 并未用到 git 来提交。\n","timestamp":1576119531979},{"name":"002-npm离线安装.md","path":"002-git/002-npm离线安装.md","content":"# \n\n对 amwiki 源码进行修改之后，直接用 npm 安装会覆盖我的修改，找到[几种方法](https://jingsam.github.io/2018/11/24/npm-package-offline-install.html)，我采用了以下方法解决了问题。\n\n```\n$ cd /usr/lib/node_modules\n$ git clone git@github.com:magic-moon/amWiki.git\n$ cd amWiki\n$ npm install -g\n```\n完成了离线全局安装\n","timestamp":1576119531979}]