import{_ as s,o as n,c as p,ag as e}from"./chunks/framework.BVdG3tbf.js";const u=JSON.parse('{"title":"DEFORM 界面介绍","description":"","frontmatter":{},"headers":[],"relativePath":"deform/basics/interface.md","filePath":"deform/basics/interface.md","lastUpdated":null}'),t={name:"deform/basics/interface.md"};function l(i,a,o,c,r,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="deform-界面介绍" tabindex="-1">DEFORM 界面介绍 <a class="header-anchor" href="#deform-界面介绍" aria-label="Permalink to &quot;DEFORM 界面介绍&quot;">​</a></h1><p>本节介绍 DEFORM 的主要界面元素和基本操作。</p><h2 id="🖥️-主界面布局" tabindex="-1">🖥️ 主界面布局 <a class="header-anchor" href="#🖥️-主界面布局" aria-label="Permalink to &quot;🖥️ 主界面布局&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  菜单栏  File  Edit  View  Pre-Processor  Simulator  ...│</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│  工具栏  [新建] [打开] [保存] [撤销] [重做] [运行]        │</span></span>
<span class="line"><span>├──────────┬──────────────────────────────┬───────────────┤</span></span>
<span class="line"><span>│          │                              │               │</span></span>
<span class="line"><span>│  项目树   │        图形窗口              │   属性面板    │</span></span>
<span class="line"><span>│          │                              │               │</span></span>
<span class="line"><span>│  📁 项目  │      ┌──────────┐           │   对象:       │</span></span>
<span class="line"><span>│    ├ 几何 │      │          │           │   类型:       │</span></span>
<span class="line"><span>│    ├ 材料 │      │  工件/模具│           │   材料:       │</span></span>
<span class="line"><span>│    ├ 接触 │      │          │           │   温度:       │</span></span>
<span class="line"><span>│    ├ 边界 │      └──────────┘           │               │</span></span>
<span class="line"><span>│    └ 步骤 │                              │               │</span></span>
<span class="line"><span>│          │                              │               │</span></span>
<span class="line"><span>├──────────┴──────────────────────────────┴───────────────┤</span></span>
<span class="line"><span>│  状态栏  步骤: 1/100  时间: 0.001s  载荷: 1000N         │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="📋-主要组件" tabindex="-1">📋 主要组件 <a class="header-anchor" href="#📋-主要组件" aria-label="Permalink to &quot;📋 主要组件&quot;">​</a></h2><h3 id="_1-菜单栏" tabindex="-1">1. 菜单栏 <a class="header-anchor" href="#_1-菜单栏" aria-label="Permalink to &quot;1. 菜单栏&quot;">​</a></h3><table tabindex="0"><thead><tr><th>菜单</th><th>功能</th><th>说明</th></tr></thead><tbody><tr><td><strong>File</strong></td><td>文件操作</td><td>新建、打开、保存、导入/导出</td></tr><tr><td><strong>Edit</strong></td><td>编辑操作</td><td>撤销、重做、复制、粘贴</td></tr><tr><td><strong>View</strong></td><td>视图控制</td><td>显示/隐藏、缩放、旋转</td></tr><tr><td><strong>Pre-Processor</strong></td><td>前处理</td><td>几何、材料、边界条件设置</td></tr><tr><td><strong>Simulator</strong></td><td>求解器</td><td>运行计算、监控进度</td></tr><tr><td><strong>Post-Processor</strong></td><td>后处理</td><td>结果查看、数据提取</td></tr><tr><td><strong>Tools</strong></td><td>工具</td><td>选项、宏、脚本</td></tr><tr><td><strong>Help</strong></td><td>帮助</td><td>文档、关于</td></tr></tbody></table><h3 id="_2-工具栏" tabindex="-1">2. 工具栏 <a class="header-anchor" href="#_2-工具栏" aria-label="Permalink to &quot;2. 工具栏&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>常用工具栏：</span></span>
<span class="line"><span>┌────┬────┬────┬────┬────┬────┬────┬────┐</span></span>
<span class="line"><span>│ 📁 │ 💾 │ ↩️ │ ↪️ │ 🔍 │ ▶️ │ ⏸️ │ ⏹️ │</span></span>
<span class="line"><span>│新建│保存│撤销│重做│运行│暂停│停止│    │</span></span>
<span class="line"><span>└────┴────┴────┴────┴────┴────┴────┴────┘</span></span></code></pre></div><h3 id="_3-项目树" tabindex="-1">3. 项目树 <a class="header-anchor" href="#_3-项目树" aria-label="Permalink to &quot;3. 项目树&quot;">​</a></h3><p>项目树显示仿真项目的层次结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📁 Simulation Project</span></span>
<span class="line"><span>├── 📦 Geometry</span></span>
<span class="line"><span>│   ├── Workpiece (工件)</span></span>
<span class="line"><span>│   └── Die (模具)</span></span>
<span class="line"><span>├── 🧱 Material</span></span>
<span class="line"><span>│   ├── Workpiece Material</span></span>
<span class="line"><span>│   └── Die Material</span></span>
<span class="line"><span>├── 🤝 Contact</span></span>
<span class="line"><span>│   └── Workpiece-Die Contact</span></span>
<span class="line"><span>├── 🎯 Boundary Conditions</span></span>
<span class="line"><span>│   ├── Velocity/Force</span></span>
<span class="line"><span>│   └── Temperature</span></span>
<span class="line"><span>├── 🔄 Process Steps</span></span>
<span class="line"><span>│   ├── Step 1: Forging</span></span>
<span class="line"><span>│   └── Step 2: Cooling</span></span>
<span class="line"><span>└── ⚙️ Simulation Control</span></span>
<span class="line"><span>    ├── Time Step</span></span>
<span class="line"><span>    └── Solver Settings</span></span></code></pre></div><h3 id="_4-图形窗口" tabindex="-1">4. 图形窗口 <a class="header-anchor" href="#_4-图形窗口" aria-label="Permalink to &quot;4. 图形窗口&quot;">​</a></h3><p>图形窗口显示几何模型和仿真结果：</p><p><strong>视图控制：</strong></p><ul><li><strong>旋转</strong>：鼠标左键拖动</li><li><strong>缩放</strong>：鼠标滚轮</li><li><strong>平移</strong>：鼠标中键拖动</li><li><strong>适合窗口</strong>：双击中键</li></ul><p><strong>显示模式：</strong></p><ul><li><strong>线框模式</strong>：Wireframe</li><li><strong>实体模式</strong>：Solid</li><li><strong>网格模式</strong>：Mesh</li><li><strong>结果模式</strong>：Results</li></ul><h3 id="_5-属性面板" tabindex="-1">5. 属性面板 <a class="header-anchor" href="#_5-属性面板" aria-label="Permalink to &quot;5. 属性面板&quot;">​</a></h3><p>属性面板显示当前选中对象的详细参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─ 属性面板 ─────────────────┐</span></span>
<span class="line"><span>│ 对象名称: Workpiece        │</span></span>
<span class="line"><span>│ 类型: Elastoplastic        │</span></span>
<span class="line"><span>│ 材料: AISI-1045            │</span></span>
<span class="line"><span>│ 初始温度: 1100 °C          │</span></span>
<span class="line"><span>│ 初始速度: 0 mm/s           │</span></span>
<span class="line"><span>│ 摩擦系数: 0.3              │</span></span>
<span class="line"><span>│ ────────────────────────  │</span></span>
<span class="line"><span>│ [编辑] [应用] [取消]       │</span></span>
<span class="line"><span>└────────────────────────────┘</span></span></code></pre></div><h2 id="🎛️-前处理器界面" tabindex="-1">🎛️ 前处理器界面 <a class="header-anchor" href="#🎛️-前处理器界面" aria-label="Permalink to &quot;🎛️ 前处理器界面&quot;">​</a></h2><h3 id="几何导入" tabindex="-1">几何导入 <a class="header-anchor" href="#几何导入" aria-label="Permalink to &quot;几何导入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Geometry → Import</span></span>
<span class="line"><span>├── 文件类型: STL, IGES, STEP</span></span>
<span class="line"><span>├── 单位: mm, cm, m</span></span>
<span class="line"><span>└── 位置: 坐标原点或指定位置</span></span></code></pre></div><h3 id="材料设置" tabindex="-1">材料设置 <a class="header-anchor" href="#材料设置" aria-label="Permalink to &quot;材料设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Material</span></span>
<span class="line"><span>├── 从库中选择</span></span>
<span class="line"><span>│   ├── Steel (钢)</span></span>
<span class="line"><span>│   ├── Aluminum (铝)</span></span>
<span class="line"><span>│   ├── Copper (铜)</span></span>
<span class="line"><span>│   └── Titanium (钛)</span></span>
<span class="line"><span>└── 自定义材料</span></span>
<span class="line"><span>    ├── 弹性模量</span></span>
<span class="line"><span>    ├── 泊松比</span></span>
<span class="line"><span>    ├── 流变应力曲线</span></span>
<span class="line"><span>    └── 热物性参数</span></span></code></pre></div><h3 id="接触设置" tabindex="-1">接触设置 <a class="header-anchor" href="#接触设置" aria-label="Permalink to &quot;接触设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Contact</span></span>
<span class="line"><span>├── 接触类型</span></span>
<span class="line"><span>│   ├── Master-Slave</span></span>
<span class="line"><span>│   └── 自动检测</span></span>
<span class="line"><span>├── 摩擦模型</span></span>
<span class="line"><span>│   ├── Coulomb (库仑)</span></span>
<span class="line"><span>│   ├── Shear (剪切)</span></span>
<span class="line"><span>│   └── None (无摩擦)</span></span>
<span class="line"><span>└── 摩擦系数</span></span>
<span class="line"><span>    └── μ = 0.3 (典型值)</span></span></code></pre></div><h3 id="边界条件" tabindex="-1">边界条件 <a class="header-anchor" href="#边界条件" aria-label="Permalink to &quot;边界条件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Pre-Processor → Boundary Conditions</span></span>
<span class="line"><span>├── 速度边界</span></span>
<span class="line"><span>│   ├── 模具速度</span></span>
<span class="line"><span>│   └── 工件约束</span></span>
<span class="line"><span>├── 力边界</span></span>
<span class="line"><span>│   └── 载荷大小</span></span>
<span class="line"><span>├── 温度边界</span></span>
<span class="line"><span>│   ├── 初始温度</span></span>
<span class="line"><span>│   └── 对流换热</span></span>
<span class="line"><span>└── 对称边界</span></span>
<span class="line"><span>    └── 2D 或 3D 对称</span></span></code></pre></div><h2 id="⚙️-求解器界面" tabindex="-1">⚙️ 求解器界面 <a class="header-anchor" href="#⚙️-求解器界面" aria-label="Permalink to &quot;⚙️ 求解器界面&quot;">​</a></h2><h3 id="运行仿真" tabindex="-1">运行仿真 <a class="header-anchor" href="#运行仿真" aria-label="Permalink to &quot;运行仿真&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Simulator → Run</span></span>
<span class="line"><span>├── 步骤数: 100</span></span>
<span class="line"><span>├── 时间步: 自动或手动</span></span>
<span class="line"><span>├── 保存间隔: 每 10 步</span></span>
<span class="line"><span>└── 启动计算</span></span></code></pre></div><h3 id="监控进度" tabindex="-1">监控进度 <a class="header-anchor" href="#监控进度" aria-label="Permalink to &quot;监控进度&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Simulator → Monitor</span></span>
<span class="line"><span>├── 进度条: 50%</span></span>
<span class="line"><span>├── 当前步: 50/100</span></span>
<span class="line"><span>├── 计算时间: 00:05:23</span></span>
<span class="line"><span>├── 预计剩余: 00:05:23</span></span>
<span class="line"><span>└── 实时曲线</span></span>
<span class="line"><span>    ├── 载荷-位移</span></span>
<span class="line"><span>    └── 温度-时间</span></span></code></pre></div><h2 id="📊-后处理器界面" tabindex="-1">📊 后处理器界面 <a class="header-anchor" href="#📊-后处理器界面" aria-label="Permalink to &quot;📊 后处理器界面&quot;">​</a></h2><h3 id="结果查看" tabindex="-1">结果查看 <a class="header-anchor" href="#结果查看" aria-label="Permalink to &quot;结果查看&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Post-Processor → Results</span></span>
<span class="line"><span>├── 应变分布</span></span>
<span class="line"><span>│   ├── 等效应变</span></span>
<span class="line"><span>│   └── 主应变</span></span>
<span class="line"><span>├── 应力分布</span></span>
<span class="line"><span>│   ├── 等效应力</span></span>
<span class="line"><span>│   └── 主应力</span></span>
<span class="line"><span>├── 温度分布</span></span>
<span class="line"><span>│   └── 温度场</span></span>
<span class="line"><span>├── 速度分布</span></span>
<span class="line"><span>│   └── 速度场</span></span>
<span class="line"><span>└── 损伤分布</span></span>
<span class="line"><span>    └── 损伤因子</span></span></code></pre></div><h3 id="数据提取" tabindex="-1">数据提取 <a class="header-anchor" href="#数据提取" aria-label="Permalink to &quot;数据提取&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Post-Processor → Data Extraction</span></span>
<span class="line"><span>├── 点数据</span></span>
<span class="line"><span>│   └── 特定点的变量值</span></span>
<span class="line"><span>├── 线数据</span></span>
<span class="line"><span>│   └── 沿路径的变量分布</span></span>
<span class="line"><span>├── 面数据</span></span>
<span class="line"><span>│   └── 截面上的变量分布</span></span>
<span class="line"><span>└── 体数据</span></span>
<span class="line"><span>    └── 整体统计量</span></span></code></pre></div><h3 id="动画制作" tabindex="-1">动画制作 <a class="header-anchor" href="#动画制作" aria-label="Permalink to &quot;动画制作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Post-Processor → Animation</span></span>
<span class="line"><span>├── 帧范围: 0-100</span></span>
<span class="line"><span>├── 帧率: 30 fps</span></span>
<span class="line"><span>├── 输出格式: AVI, MP4, GIF</span></span>
<span class="line"><span>└── 导出动画</span></span></code></pre></div><h2 id="⌨️-快捷键" tabindex="-1">⌨️ 快捷键 <a class="header-anchor" href="#⌨️-快捷键" aria-label="Permalink to &quot;⌨️ 快捷键&quot;">​</a></h2><table tabindex="0"><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td>Ctrl+N</td><td>新建项目</td></tr><tr><td>Ctrl+O</td><td>打开项目</td></tr><tr><td>Ctrl+S</td><td>保存项目</td></tr><tr><td>Ctrl+Z</td><td>撤销</td></tr><tr><td>Ctrl+Y</td><td>重做</td></tr><tr><td>F5</td><td>刷新</td></tr><tr><td>F7</td><td>运行仿真</td></tr><tr><td>F8</td><td>暂停仿真</td></tr><tr><td>F9</td><td>停止仿真</td></tr></tbody></table><h2 id="📖-下一步" tabindex="-1">📖 下一步 <a class="header-anchor" href="#📖-下一步" aria-label="Permalink to &quot;📖 下一步&quot;">​</a></h2><ul><li><a href="/simu-learn/deform/basics/operations.html">基本操作</a></li><li><a href="/simu-learn/deform/applications/hot-forging.html">热锻仿真</a></li></ul><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>建议先熟悉项目树的结构，这是 DEFORM 操作的核心。</p></div>`,48)])])}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
