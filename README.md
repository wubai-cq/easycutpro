# EasyCut Pro 前端项目

## 🌐 GitHub Pages 部署

本项目已配置自动部署到 GitHub Pages。部署后的访问地址为：`https://[你的用户名].github.io/easycutpro`

### 部署步骤：

1. **确保仓库名为 `easycutpro`**
   - 在 GitHub 上创建名为 `easycutpro` 的仓库
   - 或者将现有仓库重命名为 `easycutpro`

2. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[你的用户名]/easycutpro.git
   git push -u origin master
   ```

3. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

4. **自动部署**
   - 每次推送到 `master` 或 `main` 分支时，GitHub Actions 会自动部署
   - 也可以手动触发：Actions → Deploy to GitHub Pages → Run workflow

5. **访问网站**
   - 部署完成后，访问：`https://[你的用户名].github.io/easycutpro`
   - 首次部署可能需要几分钟时间

## 本地启动方式

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

