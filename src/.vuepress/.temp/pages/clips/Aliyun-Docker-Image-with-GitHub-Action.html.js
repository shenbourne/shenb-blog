import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/clips/Aliyun-Docker-Image-with-GitHub-Action.html.vue"
const data = JSON.parse("{\"path\":\"/clips/Aliyun-Docker-Image-with-GitHub-Action.html\",\"title\":\"使用Github Action将Docker镜像转存到阿里云私有仓库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"使用Github Action将Docker镜像转存到阿里云私有仓库\",\"icon\":\"docker\",\"order\":2,\"category\":[\"安装教程\"],\"tag\":[\"GitHub\",\"Aliyun\",\"Docker\",\"1Panel\"],\"description\":\" 作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。 然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。 为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Ac...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/clips/Aliyun-Docker-Image-with-GitHub-Action.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ShenBourne\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"使用Github Action将Docker镜像转存到阿里云私有仓库\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\" 作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。 然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。 为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Ac...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"使用Github Action将Docker镜像转存到阿里云私有仓库\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ShenBourne\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"GitHub\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Aliyun\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Docker\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"1Panel\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"使用Github Action将Docker镜像转存到阿里云私有仓库\\\",\\\"image\\\":[\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040212712.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040213516.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040216184.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040219290.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221090.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221821.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040253833.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040223973.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040254072.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040230685.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244141.png\\\",\\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244052.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ShenBourne\\\",\\\"url\\\":\\\"https://blog.shenbourne.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"一、配置阿里云docker镜像仓库\",\"slug\":\"一、配置阿里云docker镜像仓库\",\"link\":\"#一、配置阿里云docker镜像仓库\",\"children\":[{\"level\":3,\"title\":\"1. 登录阿里云容器镜像服务\",\"slug\":\"_1-登录阿里云容器镜像服务\",\"link\":\"#_1-登录阿里云容器镜像服务\",\"children\":[]},{\"level\":3,\"title\":\"2. 创建命令空间\",\"slug\":\"_2-创建命令空间\",\"link\":\"#_2-创建命令空间\",\"children\":[]},{\"level\":3,\"title\":\"3. 设置凭证\",\"slug\":\"_3-设置凭证\",\"link\":\"#_3-设置凭证\",\"children\":[]}]},{\"level\":2,\"title\":\"二、docker_image_pusher 配置\",\"slug\":\"二、docker-image-pusher-配置\",\"link\":\"#二、docker-image-pusher-配置\",\"children\":[{\"level\":3,\"title\":\"1. 项目简介\",\"slug\":\"_1-项目简介\",\"link\":\"#_1-项目简介\",\"children\":[]},{\"level\":3,\"title\":\"2. Fork项目\",\"slug\":\"_2-fork项目\",\"link\":\"#_2-fork项目\",\"children\":[]},{\"level\":3,\"title\":\"3. 配置环境变量\",\"slug\":\"_3-配置环境变量\",\"link\":\"#_3-配置环境变量\",\"children\":[]},{\"level\":3,\"title\":\"4. 转存镜像\",\"slug\":\"_4-转存镜像\",\"link\":\"#_4-转存镜像\",\"children\":[]},{\"level\":3,\"title\":\"5. 获取镜像名称\",\"slug\":\"_5-获取镜像名称\",\"link\":\"#_5-获取镜像名称\",\"children\":[]},{\"level\":3,\"title\":\"6. 查看镜像\",\"slug\":\"_6-查看镜像\",\"link\":\"#_6-查看镜像\",\"children\":[]}]},{\"level\":2,\"title\":\"三、1Panel 使用阿里云镜像仓库\",\"slug\":\"三、1panel-使用阿里云镜像仓库\",\"link\":\"#三、1panel-使用阿里云镜像仓库\",\"children\":[{\"level\":3,\"title\":\"1. 添加阿里云镜像仓库\",\"slug\":\"_1-添加阿里云镜像仓库\",\"link\":\"#_1-添加阿里云镜像仓库\",\"children\":[]},{\"level\":3,\"title\":\"2. 解决应用商店下载应用443: i/o timeout的错误\",\"slug\":\"_2-解决应用商店下载应用443-i-o-timeout的错误\",\"link\":\"#_2-解决应用商店下载应用443-i-o-timeout的错误\",\"children\":[]},{\"level\":3,\"title\":\"3. 1Panel 推送镜像\",\"slug\":\"_3-1panel-推送镜像\",\"link\":\"#_3-1panel-推送镜像\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.2,\"words\":959},\"filePathRelative\":\"clips/Aliyun-Docker-Image-with-GitHub-Action.md\",\"excerpt\":\"<blockquote>\\n<p>作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。</p>\\n<p>然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。</p>\\n<p>为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Action 将国外的 Docker 镜像转存到阿里云私有仓库，以提供给国内服务器使用，免费且易于使用。</p>\\n<p>今天我们就介绍下如何将国外的docker镜像转存到自己的阿里云镜像仓库。</p>\\n</blockquote>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}