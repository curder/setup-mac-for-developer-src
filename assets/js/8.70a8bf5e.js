(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{346:function(e,r,s){e.exports=s.p+"assets/img/composer-repository-manager-info.9aa5ac0d.png"},347:function(e,r,s){e.exports=s.p+"assets/img/composer-repository-manager-select-aliyun.9e9ee35f.png"},384:function(e,r,s){"use strict";s.r(r);var a=s(41),t=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"配置-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-composer"}},[e._v("#")]),e._v(" 配置 Composer")]),e._v(" "),a("h3",{attrs:{id:"composer-源管理工具-crm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-源管理工具-crm"}},[e._v("#")]),e._v(" Composer 源管理工具 "),a("a",{attrs:{href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRM"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer global require slince/composer-registry-manager\n")])])]),a("ul",[a("li",[a("p",[e._v("如果在安装的时候比较慢，可以使用命令临时使用 aliyun 镜像来安装。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer config -g repos.packagist composer https://mirrors.aliyun.com/composer\n")])])])]),e._v(" "),a("li",[a("p",[e._v("如果需要还原镜像使用命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer config -g repo.packagist composer https://packagist.org\n")])])])])]),e._v(" "),a("p",[e._v("通过上面的命令，可以得到命令 "),a("code",[e._v("composer repo")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(346),alt:""}})]),e._v(" "),a("h4",{attrs:{id:"配置-crm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-crm"}},[e._v("#")]),e._v(" 配置 "),a("a",{attrs:{href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRM"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer repo:use aliyun\n")])])]),a("blockquote",[a("p",[e._v("通过上面的命令配置镜像地址为 "),a("code",[e._v("aliyun")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer repo:ls # 查看所有镜像地址\n\ncomposer repo:use $Mirror # 在列表中选择镜像地址，其中 $Mirror 为列表项\n")])])]),a("p",[a("img",{attrs:{src:s(347),alt:""}})]),e._v(" "),a("p",[e._v("至此，"),a("a",{attrs:{href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRM"),a("OutboundLink")],1),e._v(" 安装完毕。")]),e._v(" "),a("h4",{attrs:{id:"安装报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装报错"}},[e._v("#")]),e._v(" 安装报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Peer's certificate issuer has been marked as not trusted by the user.\n")])])]),a("p",[e._v("在安装的过程中 报错："),a("a",{attrs:{href:"https://discuss.devopscube.com/t/solved-git-github-peers-certificate-issuer-has-been-marked-as-not-trusted-by-the-user/474",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peer's certificate issuer has been marked as not trusted by the user."),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git config --global http.sslVerify false\n")])])]),a("blockquote",[a("p",[e._v("通过设置上面的 git 配置，可以忽略 ssl 的检查。")])]),e._v(" "),a("h3",{attrs:{id:"多线程下载-hirak-prestissimo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程下载-hirak-prestissimo"}},[e._v("#")]),e._v(" 多线程下载 "),a("a",{attrs:{href:"https://github.com/hirak/prestissimo",target:"_blank",rel:"noopener noreferrer"}},[e._v("hirak/prestissimo"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer global require hirak/prestissimo\n")])])]),a("h3",{attrs:{id:"自动部署工具-deployer-deployer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动部署工具-deployer-deployer"}},[e._v("#")]),e._v(" 自动部署工具 "),a("a",{attrs:{href:"https://github.com/deployphp/deployer",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployer/deployer"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer global require deployer/deployer deployer/recipes curder/deployphp-recipes --no-progress --profile --prefer-dist\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer global require phpunit/phpunit laravel/installer friendsofphp/php-cs-fixer squizlabs/php_codesniffer --no-progress --profile --prefer-dist\n")])])]),a("h3",{attrs:{id:"下载全局命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载全局命令"}},[e._v("#")]),e._v(" 下载全局命令")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer global require laravel/installer -vvv\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);