# EasyCut Pro 前端项目

## 启动方式

### 方法1：直接用浏览器打开
双击 `index.html` 文件即可在浏览器中打开。

### 方法2：使用Python启动本地服务器（推荐）
如果您的电脑已安装Python，在项目目录下执行：

```bash
# Python 3
python -m http.server 8000

# 或 Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问：`http://localhost:8000`

### 方法3：使用Node.js启动
如果您的电脑已安装Node.js，可以安装http-server：

```bash
# 全局安装http-server（只需安装一次）
npm install -g http-server

# 在项目目录下启动
http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

### 方法4：使用VS Code的Live Server扩展
1. 在VS Code中安装"Live Server"扩展
2. 右键点击 `index.html` 文件
3. 选择"Open with Live Server"

## 项目结构

```
easycutpro/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript文件
├── easycutpro/         # 图片目录
│   ├── 0.png
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   └── 5.png
└── README.md           # 说明文档
```

