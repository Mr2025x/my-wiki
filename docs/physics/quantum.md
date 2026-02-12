# 薛定谔方程

这是一个关于**量子力学**的测试页面。

## 核心公式

时间依赖的薛定谔方程 (Time-dependent Schrödinger equation):

$$
i\hbar\frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \hat{H} \Psi(\mathbf{r},t)
$$

其中：
* $i$ 是虚数单位
* $\hbar$ 是约化普朗克常数
* $\hat{H}$ 是哈密顿算符

## 代码示例 (Python)

```python
import numpy as np

def calculate_energy(mass, velocity):
    """计算动能"""
    return 0.5 * mass * velocity**2

测试样例