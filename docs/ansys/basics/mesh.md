# ANSYS 网格划分

网格划分是有限元分析的关键步骤，直接影响计算精度和效率。

## 📋 网格类型

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| **四面体** | 最通用 | 复杂几何 |
| **六面体** | 精度高 | 规则几何 |
| **棱柱** | 边界层 | 流体分析 |
| **金字塔** | 过渡网格 | 混合网格 |

## 🔧 网格划分工具

### Mechanical 网格划分

```
Model → Mesh
├── 全局设置
│   ├── Defaults
│   │   ├── Physics Preference: Mechanical
│   │   └── Element Order: Linear / Quadratic
│   └── Sizing
│       ├── Relevance Center: Coarse / Medium / Fine
│       └── Element Size: 自动 / 手动
├── 局部设置
│   ├── Method: 网格方法
│   ├── Sizing: 局部尺寸
│   ├── Refinement: 网格加密
│   └── Mapped Face Meshing: 映射网格
└── 生成网格
```

### 网格方法选择

```
Mesh → Insert → Method
├── Automatic: 自动选择
├── Tetrahedrons: 四面体
│   ├── Patch Conforming: 补丁一致
│   └── Patch Independent: 补丁独立
├── Hex Dominant: 六面体主导
├── Sweep: 扫掠
└── MultiZone: 多区域
```

## 📊 网格质量标准

### 质量指标

| 指标 | 范围 | 说明 |
|------|------|------|
| **Element Quality** | 0-1 | 越接近1越好 |
| **Aspect Ratio** | 1-∞ | 越接近1越好 |
| **Jacobian Ratio** | 0-1 | 越接近1越好 |
| **Warping Factor** | 0-1 | 越接近0越好 |
| **Parallel Deviation** | 0-90° | 越接近0越好 |
| **Maximum Corner Angle** | 0-180° | 接近60°(三角)或90°(四边形) |

### 质量检查

```
Mesh → Quality
├── Element Quality: 单元质量
├── Aspect Ratio: 长宽比
├── Jacobian Ratio: 雅可比比
└── 查看分布图
```

## ⚙️ 全局网格设置

### 基本设置

```
Mesh → Details
├── Defaults
│   ├── Physics Preference: 物理偏好
│   │   ├── Mechanical: 结构分析
│   │   ├── CFD: 流体分析
│   │   └── Electromagnetics: 电磁分析
│   └── Element Order: 单元阶次
│       ├── Linear: 线性（快）
│       └── Quadratic: 二次（精确）
├── Sizing
│   ├── Relevance Center: 相关性中心
│   │   ├── Coarse: 粗糙
│   │   ├── Medium: 中等
│   │   └── Fine: 精细
│   ├── Element Size: 单元尺寸
│   └── Growth Rate: 增长率
└── Inflation: 边界层
    ├── Use Automatic Inflation: 自动
    └── Inflation Option: 选项
```

### 单元尺寸建议

| 几何尺寸 | 推荐单元数 | 单元尺寸 |
|----------|------------|----------|
| 1 mm | 5-10 | 0.1-0.2 mm |
| 10 mm | 10-20 | 0.5-1 mm |
| 100 mm | 20-50 | 2-5 mm |
| 1000 mm | 50-100 | 10-20 mm |

## 🎯 局部网格控制

### 局部尺寸

```
Mesh → Insert → Sizing
├── Geometry: 选择几何
├── Type: 尺寸类型
│   ├── Element Size: 单元尺寸
│   ├── Number of Divisions: 分割数
│   └── Sphere of Influence: 球形影响
└── Size: 设置尺寸
```

### 网格加密

```
Mesh → Insert → Refinement
├── Geometry: 选择几何
├── Refinement Level: 加密级别
│   ├── 1: 轻微加密
│   ├── 2: 中等加密
│   └── 3: 强烈加密
└── 生成
```

### 接触区域加密

```
Mesh → Insert → Contact Sizing
├── Contact Region: 选择接触区域
├── Type: 尺寸类型
│   ├── Element Size: 单元尺寸
│   └── Relevance: 相关性
└── Size: 设置尺寸
```

## 📐 映射网格

### 适用条件

- 几何必须是规则的
- 面必须是四边形或可以分割为四边形
- 适合六面体网格

### 设置方法

```
Mesh → Insert → Mapped Face Meshing
├── Geometry: 选择面
├── Method: Hex Dominant
└── 生成
```

## 🌊 边界层网格

### 流体分析边界层

```
Mesh → Insert → Inflation
├── Boundary: 选择边界
├── Inflation Option: 边界层选项
│   ├── Total Thickness: 总厚度
│   ├── First Layer Height: 第一层高度
│   └── Maximum Layers: 最大层数
└── 生成
```

### 参数建议

| 参数 | 推荐值 | 说明 |
|------|--------|------|
| First Layer Height | 根据 y+ 计算 | 保证 y+ 在目标范围 |
| Growth Rate | 1.2 | 逐渐增大 |
| Maximum Layers | 5-10 | 足够覆盖边界层 |
| Total Thickness | 10-20% 特征长度 | 覆盖边界层 |

## 📊 网格收敛性

### 收敛性测试

1. **初始粗网格**
   ```
   Element Size = 较大值
   求解并记录结果
   ```

2. **逐步加密**
   ```
   每次减小单元尺寸 50%
   求解并记录结果
   ```

3. **判断收敛**
   ```
   当结果变化 < 5% 时收敛
   ```

### 收敛性验证脚本

```python
# Python 脚本：网格收敛性测试
mesh_sizes = [1.0, 0.5, 0.25, 0.125]  # mm
results = []

for size in mesh_sizes:
    # 设置网格尺寸
    mesh.ElementSize = size
    # 求解
    solution.Solve()
    # 提取结果
    stress = result.MaxEquivalentStress
    results.append(stress)
    
# 判断收敛
for i in range(1, len(results)):
    change = abs(results[i] - results[i-1]) / results[i-1] * 100
    print(f"变化: {change:.2f}%")
```

## 💡 最佳实践

### 网格质量优化

1. **检查并修复几何**
   - 删除小特征
   - 合并共面
   - 修复间隙

2. **合理设置尺寸**
   - 应力集中区域加密
   - 远离关注区域粗化
   - 保持尺寸过渡平滑

3. **选择合适方法**
   - 规则几何用六面体
   - 复杂几何用四面体
   - 薄壁结构用壳单元

### 网格划分步骤

```
1. 检查几何质量
   └── 修复几何问题

2. 设置全局网格
   └── 选择物理偏好和单元阶次

3. 添加局部控制
   └── 关键区域加密

4. 生成网格
   └── 检查网格质量

5. 验证收敛性
   └── 必要时重新划分
```

## 🚨 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 网格划分失败 | 几何有问题 | 修复几何 |
| 网格质量差 | 单元尺寸不当 | 调整尺寸或方法 |
| 单元数量过多 | 尺寸太小 | 增大单元尺寸 |
| 求解不收敛 | 网格太粗 | 加密网格 |
| 内存不足 | 网格太多 | 减少单元数量 |

## 📐 实例：芯片封装网格划分

```
步骤 1: 全局设置
├── Physics: Mechanical
├── Element Order: Quadratic
└── Relevance Center: Medium

步骤 2: 芯片加密
├── Insert → Sizing
├── Geometry: 芯片
├── Element Size: 0.1 mm
└── Generate

步骤 3: 焊点加密
├── Insert → Sizing
├── Geometry: 焊点
├── Element Size: 0.05 mm
└── Generate

步骤 4: 接触区域加密
├── Insert → Contact Sizing
├── Contact: 芯片-焊点
├── Element Size: 0.08 mm
└── Generate

步骤 5: 检查质量
├── Mesh → Quality
├── Element Quality > 0.3
└── Aspect Ratio < 10
```

## 📖 下一步

- [Mechanical 基础](/ansys/basics/mechanical)
- [Fluent 基础](/ansys/basics/fluent)
- [热仿真分析](/ansys/electronic-packaging/pcb-thermal)

---

::: tip 提示
网格质量直接影响计算精度，建议在求解前仔细检查网格质量。
:::

::: warning 注意
过度加密会增加计算时间，需要在精度和效率之间平衡。
:::
