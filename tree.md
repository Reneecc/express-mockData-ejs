.
├── app.js                        启动文件（入口文件），应用的核心配置文件，加载初始化依赖模块
├── bin                           存放可执行文件，如默认端口3000
│   └── www                       www是node脚本，用于分离配置和启动程序
├── package-lock.json 
├── package.json                  存储工程的信息即及模块依赖，npm i ,下载dependencies中的所有依赖,scripts属性用于定 义操作命令
├── public                        存放image、css、js等文件
│   ├── images
│   ├── javascripts
│   ├── mydata
│   │   └── carData.json
│   └── stylesheets
│       └── style.css
├── routes                        存放路由文件
│   ├── index.js
│   ├── lagou.js
│   ├── localData.js
│   ├── shopcar.js
│   └── users.js
├── tree.md                       树形输出图文件
└── views                         存放视图（模版文件）
    ├── error.ejs
    ├── index.ejs
    ├── lagouData.ejs
    ├── localData.ejs
    └── testcar.ejs

8 directories, 17 files
