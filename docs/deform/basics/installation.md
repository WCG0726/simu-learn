# DEFORM 安装与配置

本教程介绍 DEFORM 软件的安装和基本配置方法。

## 📋 系统要求

### 硬件要求

| 配置 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **操作系统** | Windows 10 (64位) | Windows 10/11 (64位) |
| **处理器** | Intel/AMD 多核 | Intel i7/i9 或 AMD Ryzen 7/9 |
| **内存** | 8 GB | 32 GB 或更高 |
| **硬盘** | 20 GB | SSD 100 GB+ |
| **显卡** | 支持 OpenGL | 独立显卡（推荐 NVIDIA） |

### 软件要求
- Windows 10/11 (64位)
- Microsoft Visual C++ Redistributable
- .NET Framework 4.7 或更高

## 🔧 安装步骤

### 步骤 1：获取安装包

1. 从 SFTC 获取 DEFORM 安装包
2. 通常为 `DEFORM_v14.x.exe` 或类似文件名

### 步骤 2：运行安装程序

```
双击 DEFORM_v14.x.exe
→ 选择安装语言
→ 接受许可协议
→ 选择安装目录（建议：C:\DEFORM）
→ 选择组件（推荐全部安装）
→ 等待安装完成
```

### 步骤 3：配置许可证

**单机许可证：**
1. 将许可证文件复制到安装目录
2. 或设置环境变量 `DEFORM_LICENSE_FILE`

**网络许可证：**
1. 设置许可证服务器地址
2. 环境变量：`DEFORM_LICENSE_FILE=port@server`

### 步骤 4：验证安装

1. 启动 DEFORM
2. 检查是否能正常打开
3. 运行示例文件验证

## ⚙️ 基本配置

### 工作目录设置

```
Tools → Options → General
→ Working Directory: D:\DEFORM_Projects
→ Temporary Directory: D:\DEFORM_Temp
```

### 显示设置

```
Tools → Options → Display
→ Background Color: White 或 Gray
→ Anti-aliasing: 4x 或更高
→ Font Size: 根据屏幕调整
```

### 计算设置

```
Tools → Options → Solver
→ Default Solver: Direct 或 Iterative
→ Number of CPU Cores: 根据系统设置
→ Memory Limit: 根据系统内存设置
```

## 📁 项目结构

### 典型项目目录

```
DEFORM_Project/
├── *.DB                    # DEFORM 数据库文件
├── *.KEY                   # 关键字文件
├── *.msg                   # 消息文件
├── *.plt                   # 后处理文件
├── STL/                    # STL 几何文件
│   ├── billet.stl
│   └── die.stl
├── Material/               # 材料数据
│   └── AISI-1045.def
└── Results/                # 计算结果
    ├── *.out
    └── *.log
```

### 文件类型说明

| 扩展名 | 文件类型 | 说明 |
|--------|----------|------|
| `.DB` | 数据库文件 | 包含所有仿真设置 |
| `.KEY` | 关键字文件 | 前处理器输入 |
| `.msg` | 消息文件 | 计算过程信息 |
| `.plt` | 后处理文件 | 结果数据 |
| `.stl` | 几何文件 | CAD 模型 |

## 🔍 常见问题

### 安装问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 安装失败 | 权限不足 | 以管理员身份运行 |
| 找不到许可证 | 许可证配置错误 | 检查许可证文件路径 |
| 启动崩溃 | 显卡驱动问题 | 更新显卡驱动 |

### 运行问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 计算很慢 | CPU 核心设置不当 | 调整并行计算设置 |
| 内存不足 | 模型太大 | 增加内存或简化模型 |
| 显示异常 | OpenGL 问题 | 更新显卡驱动 |

## 📖 下一步

安装完成后，建议继续学习：
- [界面介绍](/deform/basics/interface)
- [基本操作](/deform/basics/operations)

---

::: tip 提示
建议将工作目录设置在 SSD 硬盘上，可以显著提升计算和读写速度。
:::

::: warning 注意
DEFORM 是商业软件，请确保使用正版授权。
:::
