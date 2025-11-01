@echo off
echo 正在启动 EasyCut Pro 项目...
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo 检测到Python，使用Python HTTP服务器启动...
    echo 请在浏览器中访问: http://localhost:8000
    echo 按 Ctrl+C 停止服务器
    echo.
    python -m http.server 8000
) else (
    echo 未检测到Python，尝试直接打开HTML文件...
    start index.html
    echo.
    echo 提示：为了更好的体验，建议安装Python后使用本地服务器启动
    pause
)

