(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{353:function(s,t,a){s.exports=a.p+"assets/img/show-composer-install-info.60a09fbd.png"},371:function(s,t,a){"use strict";a.r(t);var e=a(41),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"安装-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-composer"}},[s._v("#")]),s._v(" 安装 Composer")]),s._v(" "),e("h2",{attrs:{id:"安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[s._v("#")]),s._v(" 安装命令")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("php -r "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"copy('https://getcomposer.org/installer', 'composer-setup.php');\"")]),s._v("\nphp composer-setup.php\nphp -r "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"unlink('composer-setup.php');\"")]),s._v("\n")])])]),e("blockquote",[e("p",[s._v("See: "),e("a",{attrs:{href:"https://getcomposer.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("getcompose v1.10.7"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"移动到全局-bin-路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动到全局-bin-路径"}},[s._v("#")]),s._v(" 移动到全局 bin 路径")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" composer.phar /usr/local/bin/composer\n")])])]),e("blockquote",[e("p",[s._v("通过上面的命令将可执行文件 composer 移动到全局 bin 路径")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(353),alt:""}})]),s._v(" "),e("p",[s._v("默认情况下安装的 composer 为 2.0.11 的版本。切换到 1.10.20")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update --1\n")])])]),e("p",[s._v("检查并确定下版本")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" -V\n")])])]),e("h2",{attrs:{id:"将-composer-包关联的命令添加到-bin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-composer-包关联的命令添加到-bin"}},[s._v("#")]),s._v(" 将 Composer 包关联的命令添加到 bin")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.composer/vendor/bin"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MacOSX 配置")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\""),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.config/composer/vendor/bin\"'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 配置")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);