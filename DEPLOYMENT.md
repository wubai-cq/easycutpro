# GitHub Pages 部署指南

## 快速部署步骤

### 1. 确保仓库名称为 `easycutpro`

在 GitHub 上创建或重命名仓库为 `easycutpro`，这样访问地址将是：
```
https://[你的用户名].github.io/easycutpro
```

### 2. 配置 GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 在左侧菜单找到 **Pages**
3. 在 **Source** 部分选择 **GitHub Actions**
4. 保存设置

### 3. 推送代码

```bash
# 如果还没有初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit for GitHub Pages deployment"

# 添加远程仓库（替换 [你的用户名] 为你的 GitHub 用户名）
git remote add origin https://github.com/[你的用户名]/easycutpro.git

# 推送到 GitHub
git push -u origin master
```

### 4. 等待自动部署

- 推送代码后，GitHub Actions 会自动触发部署
- 可以在 **Actions** 标签页查看部署进度
- 首次部署可能需要 2-5 分钟

### 5. 访问网站

部署成功后，访问：
```
https://[你的用户名].github.io/easycutpro
```

## 自动部署

每次推送到 `master` 或 `main` 分支时，GitHub Actions 会自动重新部署网站。

## 手动触发部署

如果需要手动触发部署：
1. 进入仓库的 **Actions** 标签页
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** 按钮

## 注意事项

- 确保仓库是公开的（Public），除非你使用的是 GitHub Pro 账户
- 部署后可能需要等待几分钟才能访问
- 如果资源加载失败，检查文件路径是否正确
- 所有相对路径（如 `easycutpro/0.png`）在 GitHub Pages 上都能正常工作

