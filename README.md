# DISC 性格测评工具

基于React + Tailwind CSS构建的现代化DISC性格测评应用。

## 功能特性

- 📋 **完整问卷**：包含10道精心设计的测评题目
- 🎯 **智能评分**：自动计算D/I/S/C四个维度分数
- 📊 **可视化结果**：美观的条形图展示测评结果
- 🎨 **现代UI**：使用Tailwind CSS设计的响应式界面
- 📱 **移动友好**：完美适配各种设备尺寸
- 🖨️ **打印支持**：支持打印测评结果

## 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **开发语言**：JavaScript (JSX)

## 快速开始

### 环境要求

- Node.js (版本 16+)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `dist` 目录中。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── components/           # React组件
│   ├── DISCQuestionnaire.jsx   # 主问卷组件
│   ├── QuestionCard.jsx        # 单题卡片组件
│   ├── ProgressBar.jsx         # 进度条组件
│   └── ResultsDisplay.jsx      # 结果展示组件
├── data/
│   └── discQuestions.js        # 问卷题目数据
├── utils/
│   └── discCalculator.js       # DISC评分计算工具
├── App.jsx              # 主应用组件
├── main.jsx            # 应用入口
└── index.css           # 全局样式
```

## DISC类型说明

### D型 - 支配型 (Dominance)
- **特征**：果断、直接、结果导向
- **优势**：决策迅速、目标明确、领导能力强
- **发展建议**：提升人际敏感度、学会耐心倾听

### I型 - 影响型 (Influence)
- **特征**：外向、乐观、善于激励
- **优势**：沟通能力强、团队协作、富有感染力
- **发展建议**：提高执行力、加强时间管理

### S型 - 稳定型 (Steadiness)
- **特征**：稳重、耐心、团队合作
- **优势**：稳定可靠、善于倾听、忠诚度高
- **发展建议**：增强决断力、主动表达想法

### C型 - 谨慎型 (Compliance)
- **特征**：分析、准确、注重质量
- **优势**：分析能力强、注重细节、系统思维
- **发展建议**：提升沟通技巧、提高决策速度

## 自定义扩展

### 添加新题目

编辑 `src/data/discQuestions.js` 文件：

```javascript
export const discQuestions = [
  // ...现有题目
  {
    id: 11,
    question: "你的新问题",
    options: [
      { type: 'D', text: 'D类型选项' },
      { type: 'I', text: 'I类型选项' },
      { type: 'S', text: 'S类型选项' },
      { type: 'C', text: 'C类型选项' }
    ]
  }
];
```

### 自定义评分算法

修改 `src/utils/discCalculator.js` 中的 `calculateDISC` 函数来实现自定义评分逻辑。

### 主题定制

在 `tailwind.config.js` 中修改颜色主题：

```javascript
theme: {
  extend: {
    colors: {
      'disc-d': '#your-color',
      'disc-i': '#your-color',
      'disc-s': '#your-color',
      'disc-c': '#your-color'
    }
  }
}
```

## 部署

### 静态部署

构建完成后，将 `dist` 目录部署到任何静态文件服务器。

### Netlify 部署

1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`dist`

### Vercel 部署

1. 导入项目到Vercel
2. Vercel会自动检测Vite项目并配置构建设置

## 许可证

本项目仅供教育和发展目的使用。

## 贡献

欢迎提交 Issue 和 Pull Request 来改善这个项目。 