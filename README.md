# IaC Monorepo 教学项目 / IaC Monorepo Tutorial Project

<details>
<summary>🇨🇳 中文版 (点击展开)</summary>

## 🏗️ 项目概述

一个全面的基础设施即代码（Infrastructure as Code）monorepo 教学项目，展示现代云原生应用开发的最佳实践。从基础的静态网站托管到复杂的 AI 应用，涵盖了完整的云原生开发流程。

## 📋 目录结构

```
.
├── .github/workflows/          # GitHub Actions CI/CD 流水线
├── backend/                    # Serverless FastAPI 后端
├── frontend/                   # React 前端应用
├── infrastructure/             # IaC 配置文件 (Terraform/CDK)
├── .DS_Store                  # 系统文件
├── .gitignore                 # Git 忽略文件
├── .pre-commit-config.yaml    # 预提交钩子配置
├── poetry.lock                # Python 依赖锁定文件
└── pyproject.toml             # Python 项目配置
```

## 🚀 已实现功能

### ✅ 核心基础设施
- **GitHub Actions CI/CD**: 自动化构建、测试和部署流水线
- **AWS 自动部署**: 基于 IaC 的云资源自动化部署
- **S3 静态托管**: 高可用的静态网站托管服务
- **Serverless FastAPI**: 基于 AWS Lambda 的无服务器后端 API
- **React 前端**: 现代化的单页面应用程序

### 🔧 开发工具
- **Poetry**: Python 依赖管理和虚拟环境
- **Pre-commit 钩子**: 代码质量检查和格式化
- **Monorepo 架构**: 统一的代码库管理

## 🔮 规划中的功能

### 📊 监控与可视化
- **CloudWatch 日志**: 集中化日志管理和监控
- **Grafana 可视化**: 实时指标仪表板和告警系统
- **分布式追踪**: 应用性能监控 (APM)

### 🤖 AI/ML 集成
- **RAG 应用**: 检索增强生成 (Retrieval-Augmented Generation)
- **LangChain 集成**: 大语言模型应用开发框架
- **LangGraph 工作流**: 复杂 AI 应用的工作流编排

### 🌐 高级功能
- **多环境部署**: 开发、测试、生产环境隔离
- **容器化部署**: Docker 和 Kubernetes 支持
- **API 网关**: 统一的 API 管理和安全控制
- **数据库集成**: RDS、DynamoDB 等数据存储解决方案

## 🎯 学习目标

通过这个项目，你将学习到：

1. **基础设施即代码 (IaC)** 的核心概念和实践
2. **云原生架构** 的设计模式和最佳实践
3. **CI/CD 流水线** 的构建和优化
4. **无服务器架构** 的开发和部署
5. **监控和可观测性** 的实施策略
6. **AI/ML 应用** 的集成和部署

## 🚦 快速开始

### 前置要求
- Node.js 18+
- Python 3.9+
- AWS CLI 配置
- Terraform 或 AWS CDK

### 安装依赖
```bash
# 安装 Python 依赖
poetry install

# 安装前端依赖
cd frontend && npm install

# 安装预提交钩子
pre-commit install
```

### 本地开发
```bash
# 启动后端服务
cd backend && poetry run uvicorn main:app --reload

# 启动前端服务
cd frontend && npm start
```

### 部署到 AWS
```bash
# 部署基础设施
cd infrastructure && terraform init && terraform apply

# 部署应用
./deploy.sh
```

## 📚 教程指南

### 基础教程
1. [设置开发环境](./docs/setup.md)
2. [理解项目结构](./docs/architecture.md)
3. [配置 AWS 资源](./docs/aws-setup.md)
4. [设置 CI/CD 流水线](./docs/cicd.md)

### 进阶教程
1. [实现监控和日志](./docs/monitoring.md)
2. [添加 Grafana 仪表板](./docs/grafana.md)
3. [集成 AI/ML 功能](./docs/ai-integration.md)
4. [性能优化技巧](./docs/performance.md)

## 🤝 贡献指南

欢迎贡献代码、文档或提出改进建议！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有贡献者和开源社区的支持！

---

</details>

<details>
<summary>🇺🇸 English Version (Click to Expand)</summary>

## 🏗️ Project Overview

A comprehensive Infrastructure as Code (IaC) monorepo tutorial project showcasing modern cloud-native application development best practices. From basic static website hosting to complex AI applications, covering the complete cloud-native development workflow.

## 📋 Directory Structure

```
.
├── .github/workflows/          # GitHub Actions CI/CD pipelines
├── backend/                    # Serverless FastAPI backend
├── frontend/                   # React frontend application
├── infrastructure/             # IaC configuration files (Terraform/CDK)
├── .DS_Store                  # System files
├── .gitignore                 # Git ignore file
├── .pre-commit-config.yaml    # Pre-commit hooks configuration
├── poetry.lock                # Python dependency lock file
└── pyproject.toml             # Python project configuration
```

## 🚀 Implemented Features

### ✅ Core Infrastructure
- **GitHub Actions CI/CD**: Automated build, test, and deployment pipelines
- **AWS Auto Deployment**: IaC-based automated cloud resource deployment
- **S3 Static Hosting**: High-availability static website hosting
- **Serverless FastAPI**: AWS Lambda-based serverless backend API
- **React Frontend**: Modern single-page application

### 🔧 Development Tools
- **Poetry**: Python dependency management and virtual environment
- **Pre-commit Hooks**: Code quality checks and formatting
- **Monorepo Architecture**: Unified codebase management

## 🔮 Planned Features

### 📊 Monitoring & Visualization
- **CloudWatch Logs**: Centralized log management and monitoring
- **Grafana Visualization**: Real-time metrics dashboards and alerting
- **Distributed Tracing**: Application Performance Monitoring (APM)

### 🤖 AI/ML Integration
- **RAG Applications**: Retrieval-Augmented Generation
- **LangChain Integration**: Large Language Model application development framework
- **LangGraph Workflows**: Complex AI application workflow orchestration

### 🌐 Advanced Features
- **Multi-environment Deployment**: Development, testing, production environment isolation
- **Containerized Deployment**: Docker and Kubernetes support
- **API Gateway**: Unified API management and security control
- **Database Integration**: RDS, DynamoDB, and other data storage solutions

## 🎯 Learning Objectives

Through this project, you will learn:

1. **Infrastructure as Code (IaC)** core concepts and practices
2. **Cloud-native architecture** design patterns and best practices
3. **CI/CD pipeline** construction and optimization
4. **Serverless architecture** development and deployment
5. **Monitoring and observability** implementation strategies
6. **AI/ML application** integration and deployment

## 🚦 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- AWS CLI configured
- Terraform or AWS CDK

### Install Dependencies
```bash
# Install Python dependencies
poetry install

# Install frontend dependencies
cd frontend && npm install

# Install pre-commit hooks
pre-commit install
```

### Local Development
```bash
# Start backend service
cd backend && poetry run uvicorn main:app --reload

# Start frontend service
cd frontend && npm start
```

### Deploy to AWS
```bash
# Deploy infrastructure
cd infrastructure && terraform init && terraform apply

# Deploy application
./deploy.sh
```

## 📚 Tutorial Guide

### Basic Tutorials
1. [Setup Development Environment](./docs/setup.md)
2. [Understanding Project Structure](./docs/architecture.md)
3. [Configuring AWS Resources](./docs/aws-setup.md)
4. [Setting up CI/CD Pipeline](./docs/cicd.md)

### Advanced Tutorials
1. [Implementing Monitoring and Logging](./docs/monitoring.md)
2. [Adding Grafana Dashboard](./docs/grafana.md)
3. [Integrating AI/ML Features](./docs/ai-integration.md)
4. [Performance Optimization Tips](./docs/performance.md)

## 🤝 Contributing

Contributions, documentation, and suggestions for improvement are welcome!

1. Fork this project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all contributors and the open-source community for their support!

</details>

## 🔗 Quick Links

- [🚀 Getting Started](#-quick-start)
- [📖 Documentation](./docs/)
- [🐛 Issue Tracker](../../issues)
- [💡 Feature Requests](../../issues/new?template=feature_request.md)
- [🤝 Contributing Guidelines](#-contributing)

## 📊 Project Status

| Component | Status | Version |
|-----------|--------|---------|
| Frontend | ✅ Active | v1.0.0 |
| Backend | ✅ Active | v1.0.0 |
| Infrastructure | ✅ Active | v1.0.0 |
| CI/CD | ✅ Active | v1.0.0 |
| Monitoring | 🔄 In Progress | v0.1.0 |
| AI/ML | 📋 Planned | v0.0.0 |

---

> 💡 **Tip**: This project is designed for educational purposes. Feel free to use it as a reference for your own projects!

**Star ⭐ this repository if you find it helpful!*
