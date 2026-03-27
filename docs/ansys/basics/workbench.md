# ANSYS Workbench 界面介绍

ANSYS Workbench 是 ANSYS 的统一仿真平台，提供图形化界面进行各种仿真分析。

## 🖥️ 主界面布局

```
┌─────────────────────────────────────────────────────────┐
│  菜单栏  File  View  Tools  Help                        │
├──────────┬──────────────────────────────┬───────────────┤
│          │                              │               │
│  工具箱   │       项目原理图             │   属性面板    │
│          │                              │               │
│  分析系统 │      A: Static Structural    │   Details     │
│  ├ 结构   │      ├ Engineering Data     │   ┌─────────┐ │
│  ├ 流体   │      ├ Geometry             │   │参数设置 │ │
│  ├ 电磁   │      ├ Model                │   │材料选择 │ │
│  └ 耦合   │      ├ Setup                │   │边界条件 │ │
│          │      ├ Solution             │   └─────────┘ │
│  组件系统 │      └ Results             │               │
│          │                              │               │
├──────────┴──────────────────────────────┴───────────────┤
│  信息窗口 / 进程窗口                                     │
└─────────────────────────────────────────────────────────┘
```

## 📋 主要组件

### 1. 工具箱 (Toolbox)

工具箱包含所有可用的分析系统和组件：

**分析系统 (Analysis Systems)**
- **Static Structural** - 静态结构分析
- **Transient Structural** - 瞬态结构分析
- **Steady-State Thermal** - 稳态热分析
- **Transient Thermal** - 瞬态热分析
- **Electric** - 电场分析
- **Fluent** - 流体动力学
- **Icepak** - 电子热管理

**组件系统 (Component Systems)**
- **Engineering Data** - 材料数据
- **Geometry** - 几何建模
- **Model** - 模型设置
- **Mesh** - 网格划分
- **Setup** - 分析设置
- **Solution** - 求解
- **Results** - 后处理

### 2. 项目原理图 (Project Schematic)

项目原理图显示分析流程和数据流：

```
A: Static Structural
├── A1: Engineering Data    ← 定义材料
├── A2: Geometry            ← 导入/创建几何
├── A3: Model               ← 网格和接触设置
├── A4: Setup               ← 边界条件和载荷
├── A5: Solution            ← 求解计算
└── A6: Results             ← 后处理分析
```

**数据传递**
- 从上到下传递数据
- 可以连接多个分析系统
- 支持参数化设计

### 3. 属性面板 (Details View)

属性面板显示当前选中项的详细参数：

```
Details of "Static Structural"
├── Definition
│   ├── Analysis Type: Static
│   └── Solver Type: Direct
├── Initial Conditions
│   └── Temperature: 22°C
├── Step Controls
│   ├── Auto Time Stepping: On
│   └── Define By: Substeps
└── Solver Controls
    └── Large Deflection: Off
```

## 🎯 工作流程

### 步骤 1：创建项目

1. 从工具箱拖动分析系统到项目原理图
2. 或双击分析系统自动创建

### 步骤 2：定义材料

```
双击 "Engineering Data"
├── 添加材料
│   ├── 从库中选择
│   │   ├── Structural Steel
│   │   ├── Aluminum Alloy
│   │   └── Copper Alloy
│   └── 或创建新材料
└── 定义材料属性
    ├── Density (密度)
    ├── Young's Modulus (弹性模量)
    ├── Poisson's Ratio (泊松比)
    └── Thermal Conductivity (热导率)
```

### 步骤 3：创建/导入几何

```
双击 "Geometry"
├── 打开 DesignModeler 或 SpaceClaim
├── 创建几何
│   ├── 基本形状 (Box, Cylinder, Sphere)
│   ├── 拉伸/旋转
│   └── 布尔运算
└── 保存并关闭
```

### 步骤 4：网格划分

```
双击 "Model"
├── 网格设置
│   ├── 全局网格尺寸
│   ├── 局部网格加密
│   └── 网格类型选择
├── 网格质量检查
│   ├── Element Quality
│   ├── Aspect Ratio
│   └── Jacobian Ratio
└── 生成网格
```

### 步骤 5：设置边界条件

```
双击 "Setup"
├── 边界条件
│   ├── 固定约束 (Fixed Support)
│   ├── 位移约束 (Displacement)
│   ├── 力载荷 (Force)
│   └── 压力载荷 (Pressure)
├── 接触设置
│   ├── Bonded (绑定)
│   ├── No Separation (不分离)
│   └── Frictional (摩擦)
└── 分析设置
    ├── 时间步控制
    └── 求解器选项
```

### 步骤 6：求解

```
右键 "Solution" → Solve
├── 检查求解状态
│   ├── 进度条
│   └── 收敛曲线
└── 查看警告/错误
```

### 步骤 7：后处理

```
双击 "Results"
├── 添加结果
│   ├── Total Deformation (总变形)
│   ├── Equivalent Stress (等效应力)
│   ├── Equivalent Strain (等效应变)
│   └── Temperature (温度)
├── 生成图表
└── 导出报告
```

## 🔧 常用设置

### 并行计算设置

```
Tools → Options → Analysis Settings and Solution
├── 并行求解器: 启用
├── CPU 数量: 根据系统设置
└── GPU 加速: 如果有专业显卡
```

### 内存设置

```
Tools → Options → Memory
├── 最大内存使用: 80%
└── 临时文件目录: SSD 路径
```

### 单位设置

```
Tools → Units
├── Metric (mm, kg, s) - 公制
├── Metric (m, kg, s) - 国际单位制
└── U.S. Customary (in, lbm, s) - 英制
```

## ⌨️ 快捷键

| 快捷键 | 功能 |
|--------|------|
| Ctrl+S | 保存项目 |
| Ctrl+Z | 撤销 |
| Ctrl+Y | 重做 |
| F5 | 刷新图形 |
| Ctrl+滚轮 | 缩放 |
| Ctrl+A | 全选 |

## 🚨 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 无法连接几何 | 几何文件被占用 | 关闭 CAD 软件 |
| 网格划分失败 | 几何有问题 | 修复几何或使用虚拟拓扑 |
| 求解不收敛 | 边界条件不当 | 调整载荷步或边界条件 |
| 内存不足 | 模型太大 | 增加内存或简化模型 |

## 📖 下一步

- [几何建模](/ansys/basics/geometry)
- [网格划分](/ansys/basics/mesh)
- [Mechanical 基础](/ansys/basics/mechanical)

---

::: tip 提示
Workbench 的核心是项目原理图，理解数据流是掌握 ANSYS 的关键。
:::

::: warning 注意
建议先从简单模型开始，逐步熟悉各模块的功能。
:::
