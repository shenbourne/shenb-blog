import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as l,c as g,a as e,b as n,d as t,f as a}from"./app-rVjbYVtW.js";const c={},s=e("blockquote",null,[e("p",null,"作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。"),e("p",null,"然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。"),e("p",null,"为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Action 将国外的 Docker 镜像转存到阿里云私有仓库，以提供给国内服务器使用，免费且易于使用。"),e("p",null,"今天我们就介绍下如何将国外的docker镜像转存到自己的阿里云镜像仓库。")],-1),p=e("h2",{id:"一、配置阿里云docker镜像仓库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、配置阿里云docker镜像仓库"},[e("span",null,"一、配置阿里云docker镜像仓库")])],-1),h=e("h3",{id:"_1-登录阿里云容器镜像服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-登录阿里云容器镜像服务"},[e("span",null,"1. 登录阿里云容器镜像服务")])],-1),d={href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},m=a('<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>个人实例可以免费创建3个命名空间，300个镜像，对于我们个人来说已经足够了。</p><h3 id="_2-创建命令空间" tabindex="-1"><a class="header-anchor" href="#_2-创建命令空间"><span>2. 创建命令空间</span></a></h3><p>在个人实例下创建一个命名空间，我们需要记住此处创建的命令空间，后边会用到。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040212712.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-设置凭证" tabindex="-1"><a class="header-anchor" href="#_3-设置凭证"><span>3. 设置凭证</span></a></h3><p>在访问凭证中设置固定密码，我们需要记住密码，以及此处的用户名和仓库地址，后边会用到。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040213516.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="二、docker-image-pusher-配置" tabindex="-1"><a class="header-anchor" href="#二、docker-image-pusher-配置"><span>二、docker_image_pusher 配置</span></a></h2><h3 id="_1-项目简介" tabindex="-1"><a class="header-anchor" href="#_1-项目简介"><span>1. 项目简介</span></a></h3>',10),u={href:"https://github.com/tech-shrimp/docker_image_pusher",target:"_blank",rel:"noopener noreferrer"},b=a('<p>使用Github Action将国外的Docker镜像转存到阿里云私有仓库，供国内服务器使用，免费易用</p><ul><li>支持DockerHub, gcr.io, k8s.io, ghcr.io等任意仓库</li><li>支持最大40GB的大型镜像</li><li>使用阿里云的官方线路，速度快</li></ul><h3 id="_2-fork项目" tabindex="-1"><a class="header-anchor" href="#_2-fork项目"><span>2. Fork项目</span></a></h3><p>登录Github，Fork项目</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040216184.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-配置环境变量"><span>3. 配置环境变量</span></a></h3><p>点击 <code>Settings</code> -&gt; <code>Secret and variables</code> -&gt; <code>Actions</code> -&gt; <code>New Repository secret</code>，依次将我们之前配置的阿里云容器镜像服务的值配置到此处：</p><ul><li><p><code>ALIYUN_NAME_SPACE</code>: 命名空间</p></li><li><p><code>ALIYUN_REGISTRY</code>: 仓库地址</p></li><li><p><code>ALIYUN_REGISTRY_PASSWORD</code>: 密码</p></li><li><p><code> ALIYUN_REGISTRY_USER</code>: 用户名</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040219290.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li></ul><h3 id="_4-转存镜像" tabindex="-1"><a class="header-anchor" href="#_4-转存镜像"><span>4. 转存镜像</span></a></h3><p>配置完成后修改项目的images.txt文件，将我们要转存的镜像添加上去，提交代码。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221090.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>提交之后会自动进入Github Action构建，如下图所示则为构建成功了。</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221821.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_5-获取镜像名称" tabindex="-1"><a class="header-anchor" href="#_5-获取镜像名称"><span>5. 获取镜像名称</span></a></h3><p>Docker存在名称相同，但是属于不同命名空间的情况。 如果存在，应当把命名空间作为前缀加在镜像名称前。</p>',15),_={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"下面是一个例子：",-1),k=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040253833.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),v=e("h3",{id:"_6-查看镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-查看镜像"},[e("span",null,"6. 查看镜像")])],-1),y={href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},S=a('<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040223973.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>点击镜像名称就可以看到我们的镜像地址和基本信息了：</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040254072.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="三、1panel-使用阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#三、1panel-使用阿里云镜像仓库"><span>三、1Panel 使用阿里云镜像仓库</span></a></h2><h3 id="_1-添加阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#_1-添加阿里云镜像仓库"><span>1. 添加阿里云镜像仓库</span></a></h3><p>打开 1Panel 容器 - 仓库界面，点击&quot;添加仓库&quot;，输入信息</p><ul><li>用户名：你的账号名称</li><li>密码：在“访问凭证”中设置的密码</li><li>下载地址：registry.cn-hangzhou.aliyuncs.com/[你的命名空间名称]</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040230685.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_2-解决应用商店下载应用443-i-o-timeout的错误" tabindex="-1"><a class="header-anchor" href="#_2-解决应用商店下载应用443-i-o-timeout的错误"><span>2. 解决应用商店下载应用<code>443: i/o timeout</code>的错误</span></a></h3><p>在Github仓库的<code>images.txt</code>填写对应镜像后，原本下载时显示<code>443: i/o timeout</code>的软件就能正常下载了</p><h3 id="_3-1panel-推送镜像" tabindex="-1"><a class="header-anchor" href="#_3-1panel-推送镜像"><span>3. 1Panel 推送镜像</span></a></h3><p>推送镜像到阿里云镜像仓库</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244141.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>查看镜像推送成功</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244052.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>',15);function I(x,H){const i=r("ExternalLinkIcon");return l(),g("div",null,[s,p,h,e("p",null,[n("首先我们需要登录到阿里云容器镜像服务"),e("a",d,[n("cr.console.aliyun.com"),t(i)])]),m,e("p",null,[n("项目地址："),e("a",u,[n("github.com/tech-shrimp/docker_image_pusher"),t(i)])]),b,e("p",null,[n("通过 "),e("a",_,[n("hub.docker.com"),t(i)]),n(" 可以查询命名空间。一般选择下载量和 Star 数最多的结果。")]),f,k,v,e("p",null,[n("转存成功后我们在阿里云容器镜像服务"),e("a",y,[n("cr.console.aliyun.com"),t(i)]),n("中就可以看到我们转存的镜像了")]),S])}const D=o(c,[["render",I],["__file","Aliyun-Docker-Image-with-GitHub-Action.html.vue"]]),G=JSON.parse('{"path":"/cloud/Aliyun-Docker-Image-with-GitHub-Action.html","title":"使用Github Action将Docker镜像转存到阿里云私有仓库","lang":"zh-CN","frontmatter":{"title":"使用Github Action将Docker镜像转存到阿里云私有仓库","icon":"docker","order":2,"category":["安装教程"],"tag":["GitHub","Aliyun","Docker","1Panel"],"description":" 作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。 然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。 为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Ac...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/cloud/Aliyun-Docker-Image-with-GitHub-Action.html"}],["meta",{"property":"og:site_name","content":"ShenBourne"}],["meta",{"property":"og:title","content":"使用Github Action将Docker镜像转存到阿里云私有仓库"}],["meta",{"property":"og:description","content":" 作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。 然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。 为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Ac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-12T15:55:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"使用Github Action将Docker镜像转存到阿里云私有仓库"}],["meta",{"property":"article:author","content":"ShenBourne"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:tag","content":"Aliyun"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"1Panel"}],["meta",{"property":"article:modified_time","content":"2024-10-12T15:55:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Github Action将Docker镜像转存到阿里云私有仓库\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040210385.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040212712.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040213516.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040216184.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040219290.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221090.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040221821.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040253833.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040223973.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040254072.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040230685.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244141.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407040244052.png\\"],\\"dateModified\\":\\"2024-10-12T15:55:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ShenBourne\\",\\"url\\":\\"https://blog.shenbourne.com\\"}]}"]]},"headers":[{"level":2,"title":"一、配置阿里云docker镜像仓库","slug":"一、配置阿里云docker镜像仓库","link":"#一、配置阿里云docker镜像仓库","children":[{"level":3,"title":"1. 登录阿里云容器镜像服务","slug":"_1-登录阿里云容器镜像服务","link":"#_1-登录阿里云容器镜像服务","children":[]},{"level":3,"title":"2. 创建命令空间","slug":"_2-创建命令空间","link":"#_2-创建命令空间","children":[]},{"level":3,"title":"3. 设置凭证","slug":"_3-设置凭证","link":"#_3-设置凭证","children":[]}]},{"level":2,"title":"二、docker_image_pusher 配置","slug":"二、docker-image-pusher-配置","link":"#二、docker-image-pusher-配置","children":[{"level":3,"title":"1. 项目简介","slug":"_1-项目简介","link":"#_1-项目简介","children":[]},{"level":3,"title":"2. Fork项目","slug":"_2-fork项目","link":"#_2-fork项目","children":[]},{"level":3,"title":"3. 配置环境变量","slug":"_3-配置环境变量","link":"#_3-配置环境变量","children":[]},{"level":3,"title":"4. 转存镜像","slug":"_4-转存镜像","link":"#_4-转存镜像","children":[]},{"level":3,"title":"5. 获取镜像名称","slug":"_5-获取镜像名称","link":"#_5-获取镜像名称","children":[]},{"level":3,"title":"6. 查看镜像","slug":"_6-查看镜像","link":"#_6-查看镜像","children":[]}]},{"level":2,"title":"三、1Panel 使用阿里云镜像仓库","slug":"三、1panel-使用阿里云镜像仓库","link":"#三、1panel-使用阿里云镜像仓库","children":[{"level":3,"title":"1. 添加阿里云镜像仓库","slug":"_1-添加阿里云镜像仓库","link":"#_1-添加阿里云镜像仓库","children":[]},{"level":3,"title":"2. 解决应用商店下载应用443: i/o timeout的错误","slug":"_2-解决应用商店下载应用443-i-o-timeout的错误","link":"#_2-解决应用商店下载应用443-i-o-timeout的错误","children":[]},{"level":3,"title":"3. 1Panel 推送镜像","slug":"_3-1panel-推送镜像","link":"#_3-1panel-推送镜像","children":[]}]}],"git":{"createdTime":1728748527000,"updatedTime":1728748527000,"contributors":[{"name":"shenbourne","email":"shenbourne@163.com","commits":1}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"cloud/Aliyun-Docker-Image-with-GitHub-Action.md","localizedDate":"2024年10月12日","excerpt":"<blockquote>\\n<p>作者注：在当今软件开发的世界中，Docker 技术已经成为了不可或缺的一部分。</p>\\n<p>然而，最近由于ZC的原因，国内的知名公开镜像源失效了，许多开发者在使用 Docker 镜像时常常面临一个问题：镜像拉取速度往往较慢，有些镜像无法拉取。</p>\\n<p>为了解决这一问题，大佬技术爬爬虾写了名为 docker_image_pusher 的开源项目，它利用 Github Action 将国外的 Docker 镜像转存到阿里云私有仓库，以提供给国内服务器使用，免费且易于使用。</p>\\n<p>今天我们就介绍下如何将国外的docker镜像转存到自己的阿里云镜像仓库。</p>\\n</blockquote>","autoDesc":true}');export{D as comp,G as data};
