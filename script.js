// 图片加载函数
function loadImages() {
    const gallery = document.getElementById('gallery');
    const imageCount = 6; // 0.png 到 5.png 共6张图片
    
    // 按名称顺序加载图片
    for (let i = 0; i < imageCount; i++) {
        const img = document.createElement('img');
        img.src = `easycutpro/${i}.png`;
        img.alt = `EasyCut Pro 截图 ${i + 1}`;
        img.loading = 'lazy'; // 懒加载优化
        
        // 图片加载错误处理
        img.onerror = function() {
            console.warn(`图片 ${i}.png 加载失败`);
            this.style.display = 'none';
        };
        
        gallery.appendChild(img);
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    
    // 二维码弹窗功能
    const showQRCodeBtn = document.getElementById('showQRCodeBtn');
    const qrCodeModal = document.getElementById('qrCodeModal');
    const closeBtn = document.querySelector('.close');
    
    // 显示二维码弹窗
    if (showQRCodeBtn) {
        showQRCodeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (qrCodeModal) {
                qrCodeModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    }
    
    // 关闭弹窗
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (qrCodeModal) {
                qrCodeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // 点击弹窗外部区域关闭
    if (qrCodeModal) {
        qrCodeModal.addEventListener('click', function(e) {
            if (e.target === qrCodeModal) {
                qrCodeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && qrCodeModal && qrCodeModal.style.display === 'block') {
            qrCodeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

