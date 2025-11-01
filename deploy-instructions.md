# 手动触发 GitHub Pages 部署

如果代码已经推送到 GitHub，但部署工作流没有自动运行，可以手动触发：

## 方法 1：通过 GitHub 网页手动触发（推荐）

1. 打开浏览器，访问：`https://github.com/wubai-cq/easycutpro`

2. 点击仓库顶部的 **Actions** 标签

3. 在左侧工作流列表中找到 **Deploy to GitHub Pages**

4. 点击 **Deploy to GitHub Pages** 工作流

5. 在右侧点击 **Run workflow** 按钮（蓝色按钮）

6. 选择分支（通常是 `master`），然后点击绿色的 **Run workflow** 按钮

7. 等待部署完成（通常需要 2-5 分钟）

## 方法 2：确保 GitHub Pages 已启用

在推送代码后，还需要确保 GitHub Pages 已正确配置：

1. 访问：`https://github.com/wubai-cq/easycutpro/settings/pages`

2. 在 **Source** 部分，选择 **GitHub Actions**

3. 保存设置

4. 如果之前选择的是 "Deploy from a branch"，需要改为 "GitHub Actions"

## 检查部署状态

部署完成后，网站访问地址：
```
https://wubai-cq.github.io/easycutpro
```

## 如果部署失败

1. 检查 **Actions** 标签页中的错误信息
2. 确保仓库是公开的（Public）
3. 确保有 `master` 或 `main` 分支
4. 检查 `.github/workflows/deploy.yml` 文件是否存在

