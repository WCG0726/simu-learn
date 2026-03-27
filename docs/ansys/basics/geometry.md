# ANSYS 几何建模

本节介绍如何在 ANSYS 中创建和处理几何模型，包括 DesignModeler 和 SpaceClaim 两种工具。

## 📐 几何建模工具

ANSYS 提供两种几何建模工具：

| 工具 | 特点 | 适用场景 |
|------|------|----------|
| **DesignModeler** | 参数化建模 | 需要参数化设计 |
| **SpaceClaim** | 直接建模 | 快速几何修改 |

## 🔧 DesignModeler 基础

### 界面布局

```
┌─────────────────────────────────────────────────────────┐
│  菜单栏  File  Create  Modify  Tools  View             │
├──────────┬──────────────────────────────┬───────────────┤
│          │                              │               │
│  模型树   │        图形窗口              │   细节面板    │
│          │                              │               │
│  📦 Part │      ┌──────────┐           │   Details     │
│    ├ XY   │      │          │           │   ┌─────────┐ │
│    ├ Sketch│      │   3D     │           │   │参数设置 │ │
│    └ Extrude│     │          │           │   └─────────┘ │
│          │      └──────────┘           │               │
│          │                              │               │
├──────────┴──────────────────────────────┴───────────────┤
│  状态栏  单位: mm  选择: 面                              │
└─────────────────────────────────────────────────────────┘
```

### 基本操作流程

1. **创建草图**
   ```
   选择平面 → 创建草图 → 绘制 2D 形状
   ```

2. **生成 3D 几何**
   ```
   选择草图 → 拉伸/旋转/扫掠 → 设置参数
   ```

3. **布尔运算**
   ```
   选择多个体 → 并集/交集/差集
   ```

### 创建基本形状

#### 长方体

1. 选择 **Create → Box**
2. 设置参数：
   ```
   Base Plane: XYPlane
   FD1, Base X: 0 mm
   FD2, Base Y: 0 mm
   FD3, Base Z: 0 mm
   FD4, Length X: 100 mm
   FD5, Width Y: 50 mm
   FD6, Height Z: 10 mm
   ```
3. 点击 **Generate**

#### 圆柱体

1. 选择 **Create → Cylinder**
2. 设置参数：
   ```
   Base Plane: XYPlane
   FD1, Axis X: 0 mm
   FD2, Axis Y: 0 mm
   FD3, Axis Z: 0 mm
   FD4, Radius: 25 mm
   FD5, Height: 50 mm
   ```
3. 点击 **Generate**

### 草图绘制

进入草图模式：

1. 选择平面（如 XYPlane）
2. 右键 → **New Sketch**
3. 选择草图工具：

| 工具 | 图标 | 功能 |
|------|------|------|
| Line | 📏 | 绘制直线 |
| Circle | ⭕ | 绘制圆 |
| Rectangle | ⬜ | 绘制矩形 |
| Arc | 🌙 | 绘制圆弧 |
| Spline | 〰️ | 绘制样条曲线 |

### 尺寸约束

```
Dimensions 工具：
├── General: 通用尺寸
├── Horizontal: 水平尺寸
├── Vertical: 垂直尺寸
├── Length: 长度尺寸
├── Radius: 半径尺寸
└── Diameter: 直径尺寸
```

### 几何操作

#### 拉伸 (Extrude)

```
Create → Extrude
├── Geometry: 选择草图
├── Direction: 拉伸方向
├── FD1, Depth: 拉伸深度
└── Operation: Add Material / Cut Material
```

#### 旋转 (Revolve)

```
Create → Revolve
├── Geometry: 选择草图
├── Axis: 旋转轴
├── FD1, Angle: 旋转角度
└── Operation: Add Material / Cut Material
```

#### 圆角 (Fillet)

```
Modify → Fixed Radius Blend
├── Edges: 选择边
├── FD1, Radius: 圆角半径
└── Generate
```

#### 倒角 (Chamfer)

```
Modify → Chamfer
├── Edges: 选择边
├── FD1, Length: 倒角长度
└── Generate
```

## 🎨 SpaceClaim 基础

### 界面特点

SpaceClaim 提供更直观的直接建模体验：

- **拖拽操作**：直接拖动几何元素
- **智能选择**：自动识别选择意图
- **实时预览**：操作前预览结果

### 基本操作

#### 创建几何

```
Design 选项卡：
├── Box: 创建长方体
├── Cylinder: 创建圆柱体
├── Sphere: 创建球体
├── Cone: 创建圆锥体
└── Torus: 创建圆环体
```

#### 编辑几何

```
编辑工具：
├── Pull: 拉伸/移动面
├── Move: 移动对象
├── Fill: 填充孔洞
├── Combine: 合并/分割
└── Shell: 抽壳
```

### 直接编辑示例

**修改圆柱直径：**

1. 选择圆柱侧面
2. 拖动尺寸手柄
3. 输入新直径值

**添加孔：**

1. 选择面
2. 选择 **Hole** 工具
3. 点击放置位置
4. 设置孔参数

## 📏 几何清理

### 常见几何问题

| 问题 | 影响 | 解决方案 |
|------|------|----------|
| 小面 | 网格困难 | 删除或合并 |
| 短边 | 网格质量差 | 合并边 |
| 尖角 | 应力集中 | 添加圆角 |
| 间隙 | 接触问题 | 缝合表面 |
| 重叠 | 网格错误 | 删除重复面 |

### 几何修复工具

**DesignModeler:**
```
Tools → Analysis Repair
├── Merge Edges: 合并边
├── Merge Faces: 合并面
├── Remove Holes: 删除孔
├── Remove Slivers: 删除碎片
└── Fix Face Normals: 修复面法向
```

**SpaceClaim:**
```
Prepare 选项卡：
├── Repair: 自动修复
├── Simplify: 简化几何
├── Extract: 提取中面
└── Midsurface: 创建中面
```

## 🔗 导入外部几何

### 支持格式

| 格式 | 说明 | 推荐 |
|------|------|------|
| STEP | 标准格式 | ✅ 首选 |
| IGES | 老式格式 | ⚠️ 可能有问题 |
| Parasolid | 高精度 | ✅ 推荐 |
| SAT | ACIS 格式 | ✅ 推荐 |
| STL | 网格格式 | ⚠️ 需清理 |

### 导入步骤

1. **File → Import External Geometry**
2. 选择文件
3. 设置导入选项：
   ```
   └── Simplify Geometry: 简化几何
   └── Heal Geometry: 修复几何
   └── Merge Faces: 合并面
   ```

## 💡 最佳实践

### 建模原则

1. **从简单开始**
   - 先创建基本形状
   - 逐步添加细节
   - 避免过度复杂

2. **利用对称性**
   - 只建模 1/2 或 1/4
   - 使用对称边界条件
   - 减少计算量

3. **参数化设计**
   - 使用参数定义尺寸
   - 便于优化和修改
   - 提高设计效率

### 常见技巧

**1. 快速创建特征**
```
Ctrl + C → Ctrl + V
复制粘贴几何特征
```

**2. 使用命名选择**
```
右键面 → Named Selection
为边界条件做准备
```

**3. 检查几何质量**
```
Tools → Analysis Tools
检查几何是否有问题
```

## 📐 实例：创建 PCB 模型

```
步骤 1: 创建基板
├── Create → Box
├── 尺寸: 100mm × 80mm × 1.6mm
└── Generate

步骤 2: 创建芯片
├── Create → Box
├── 尺寸: 10mm × 10mm × 0.5mm
├── 位置: 基板上方
└── Generate

步骤 3: 创建焊点
├── Create → Cylinder
├── 半径: 0.3mm
├── 高度: 0.2mm
├── 阵列: 10×10
└── Generate

步骤 4: 添加圆角
├── Modify → Blend
├── 选择芯片边缘
├── 半径: 0.1mm
└── Generate
```

## 🚨 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 无法拉伸 | 草图不封闭 | 检查并修复草图 |
| 布尔运算失败 | 几何不相交 | 调整几何位置 |
| 导入失败 | 文件损坏 | 尝试其他格式 |
| 网格失败 | 几何太复杂 | 简化几何 |

## 📖 下一步

- [网格划分](/ansys/basics/mesh)
- [Mechanical 基础](/ansys/basics/mechanical)
- [热仿真分析](/ansys/electronic-packaging/pcb-thermal)

---

::: tip 提示
建议先在 CAD 软件中创建复杂几何，再导入 ANSYS 进行分析。
:::

::: warning 注意
导入几何后务必检查并修复几何问题，否则会影响网格划分和求解。
:::
