# 微信聊天助手

一个基于Web的微信聊天记录查询和AI摘要工具，帮助你更高效地管理和总结微信聊天内容。

## 📑 功能特点

- **聊天记录搜索**: 便捷搜索联系人或群聊，按时间范围查询聊天记录
- **AI智能摘要**: 自动提取聊天记录中的重点、日程和待办事项
- **多消息类型支持**: 支持文本、图片、链接、引用等多种消息类型的显示
- **聊天记录可视化**: 直观美观的聊天界面，区分自己和他人的消息
- **快捷日期选择**: 内置今天、昨天、本周等快捷日期选项
- **完整API集成**: 基于chatlog API，完整支持微信聊天记录接口
- **多AI模型支持**: 支持OpenAI和Google Gemini AI模型

## 🚀 快速开始

### 前提条件

- 已安装并运行 [chatlog](https://github.com/sjzar/chatlog) 服务
- Node.js (推荐v14以上版本)
- 现代Web浏览器

### 安装步骤

1. 克隆本项目到本地
```bash
git clone https://github.com/yourusername/wechat-record-manager.git
cd wechat-record-manager
```

2. 安装依赖
```bash
npm install
```

3. 启动服务
```bash
node server.js
```

4. 打开浏览器访问 http://localhost:3000 (端口可能会有所不同，请查看控制台输出)

## 🔧 配置说明

### API设置

本项目默认连接到本地运行的chatlog API（ http://127.0.0.1:5030 ）。如需修改API地址，请编辑`server.js`文件。

### AI设置

支持两种AI提供商进行聊天摘要生成：

1. **OpenAI**
   - 需要OpenAI API密钥
   - 使用GPT-3.5-turbo模型

2. **Google Gemini**
   - 需要Google Gemini API密钥
   - 使用gemini-2.0-flash模型

AI设置可在应用界面中的"设置"页面进行配置。

## 📱 使用指南

### 查询聊天记录

1. 在"选择聊天对象"区域，切换"联系人"或"群聊"标签
2. 搜索并选择目标联系人或群聊
3. 使用日期快捷按钮或手动选择日期范围
4. 点击"查询聊天记录"按钮获取结果

### 生成AI摘要

1. 加载聊天记录后，点击"生成AI摘要"按钮
2. 系统将自动分析聊天内容并生成重点摘要
3. 可以使用"复制"按钮复制摘要内容

## 📷 界面预览

*建议添加应用界面的截图*

## 🔍 技术实现

- 前端: HTML5, CSS3, JavaScript, Bootstrap 5
- API集成: Fetch API
- AI接口: OpenAI API, Google Gemini API
- 服务端: Node.js

## 📋 待办事项

- [ ] 支持更多聊天记录的导出格式
- [ ] 添加聊天记录关键词搜索功能
- [ ] 支持更多的AI模型选择
- [ ] 增加聊天统计分析功能
- [ ] 添加消息朗读功能

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 进行许可

## 🙏 致谢

- [chatlog](https://github.com/sjzar/chatlog) - 提供微信聊天记录API
- [Bootstrap](https://getbootstrap.com/) - 前端UI框架
- [OpenAI](https://openai.com/) & [Google Gemini](https://ai.google.dev/) - AI接口支持

---

如有问题或建议，欢迎提出 Issue 或 PR！ 