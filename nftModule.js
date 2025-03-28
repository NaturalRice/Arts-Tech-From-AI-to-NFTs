<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>灵机修真传</title>
    <style>
        body { 
            font-family: 'Pixel', sans-serif;
            background: #0f0f23;
            color: #00ff00;
            text-align: center;
            margin-top: 50px;
        }
        #game-container {
            width: 320px;
            height: 480px;
            margin: 0 auto;
            border: 2px solid #00ff00;
            position: relative;
        }
    </style>
</head>
<body>
    <h1>灵机修真传</h1>
    <div id="game-container">
        <!-- 游戏画布将通过JS动态加载 -->
        <p id="loading">游戏加载中...</p>
    </div>

    <script type="module">
        // 动态加载核心模块
        import { GameEngine } from './scripts/game-engine.js';
        import { UserManager } from './scripts/user-manager.js';
        
        // 初始化游戏
        GameEngine.init('game-container');
        UserManager.init();
        
        // 隐藏加载提示
        document.getElementById('loading').textContent = '按空格键开始';
    </script>
</body>
</html>
