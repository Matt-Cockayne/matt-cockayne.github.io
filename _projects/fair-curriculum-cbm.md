---
title: "Fair Curriculum CBM: Fairness-Aware Curriculum Learning for Concept Bottleneck Models"
duration: "2025 - 2026"
role: "Lead Researcher & Developer"
status: "Early Accepted (Top 9%) — MICCAI 2026"
description: "A four-phase curriculum learning approach for in-training bias mitigation in Concept Bottleneck Models, ordering training by fairness objectives to reduce performance disparities across Fitzpatrick skin types."
keywords: "fairness, concept bottleneck models, curriculum learning, medical imaging, dermatology, responsible AI, bias mitigation, skin type equity, Fitzpatrick scale"
author: "Matthew J. Cockayne"
technologies:
  - "PyTorch"
  - "Fairness in AI"
  - "Curriculum Learning"
  - "Medical AI"
  - "Concept Bottleneck Models"
  - "Python"
collaborators:
  - "Dr. Marco Ortolani (Supervisor)"
  - "Dr. Baidaa Al-Bander (Supervisor)"
links:
  - name: "GitHub (Code)"
    url: "https://github.com/Matt-Cockayne/FairCBM"
tags: ["Fairness", "Concept Bottleneck Models", "Curriculum Learning", "Medical Imaging", "Dermatology", "Responsible AI"]
---

## Paper Details

**Fair Curriculum Learning for Concept Bottleneck Models in Dermatology**

**Authors:** M.J. Cockayne, M. Ortolani, B. Al-Bander

**Venue:** *MICCAI 2026* — **Early Accepted (Top 9%)**

---

## Overview

Deep learning models for dermatology exhibit systematic performance disparities across skin types, with darker-skinned patients experiencing significantly lower diagnostic accuracy. These disparities arise from dataset imbalance (medical imaging datasets over-represent Fitzpatrick types I–III), biased feature extraction, and evaluation practices that report aggregate rather than per-group performance. Concept Bottleneck Models (CBMs) address interpretability by routing predictions through an intermediate layer of human-interpretable concepts, but lack explicit fairness mechanisms.

**FairCBM** introduces a four-phase fairness-first curriculum for CBMs that reframes curriculum learning from task-difficulty ordering to fairness-objective ordering. Rather than progressing from easy to hard concepts, training is structured across four successive phases: balanced foundation, demographic parity, equalized odds, and performance parity. All 23 morphological concepts are trained jointly throughout; only the fairness loss composition, sampling strategy, and adversarial debiasing weight change between phases. This progressive structure stabilises adversarial debiasing by introducing fairness constraints incrementally rather than simultaneously.

On SkinCon (3,230 dermatological images, six Fitzpatrick types), FairCBM achieves:
- **44% reduction** in performance gap between skin types (0.361 → 0.203, *p* = 0.003)
- **63% improvement** in lowest-group F1 (0.270 → 0.441, *p* < 0.001)
- **5.3% gain** in overall F1 (0.580 → 0.611, *p* < 0.001)

Results are validated across **100 independent runs** per model.

---

## Architecture & Method

![FairCBM Architecture and Four-Phase Curriculum](/assets/projects/faircbm/Faircbm.png)
*Figure 1: FairCBM model architecture and four-phase curriculum structure.*

FairCBM partitions training into four phases by epoch fraction. All 23 morphological concepts are trained jointly throughout; only the fairness loss composition and sampling strategy change between phases.

| Phase | Epoch fraction | Fairness loss | Sampling | Adversarial λ |
|---|---|---|---|---|
| 1 — Balanced foundation | 0–25% | None | Equal per Fitzpatrick type | 0 |
| 2 — Demographic parity | 25–50% | *L*<sub>DP</sub> | Equal per Fitzpatrick type | 0 |
| 3 — Equalized odds | 50–75% | 0.3 *L*<sub>DP</sub> + 0.7 *L*<sub>EO</sub> | Stratified by (group × label) | 0 → 0.01 (warmup) |
| 4 — Performance parity | 75–100% | ⅓(*L*<sub>DP</sub> + *L*<sub>EO</sub> + *L*<sub>PG</sub>) | Error-driven (oversample low-F1 groups) | 0.01 |

**Total loss:**

$$\mathcal{L} = \mathcal{L}_\text{concept} + \mathcal{L}_\text{binary} + \lambda_\text{fair}(t)\,\mathcal{L}_\text{fairness}(t) + \lambda_\text{adv}(t)\,\mathcal{L}_\text{adversarial}$$

Phase transitions are computed automatically from `epoch / total_epochs`; no manual configuration is required.

---

## Results

![Main Results: Per-Skin-Type F1 and Multi-Objective Comparison](/assets/projects/faircbm/faircbm_main_results_figure.png)
*Figure 2: Per-skin-type F1 scores and multi-objective fairness comparison across all five models.*

Reported values are means ± standard deviation over **100 independent runs**.

| Model | F1 | Recall | Lowest-group F1 | Performance gap | DP disparity |
|---|---|---|---|---|---|
| Direct | 0.539 ± 0.081 | 0.495 ± 0.103 | 0.322 ± 0.044 | 0.267 ± 0.046 | 0.138 ± 0.042 |
| Standard CBM | 0.561 ± 0.076 | 0.504 ± 0.103 | 0.257 ± 0.042 | 0.379 ± 0.044 | 0.136 ± 0.036 |
| Curriculum CBM | 0.580 ± 0.074 | 0.538 ± 0.100 | 0.270 ± 0.043 | 0.361 ± 0.045 | 0.143 ± 0.039 |
| Fair Standard CBM | 0.576 ± 0.071 | 0.534 ± 0.109 | 0.253 ± 0.040 | 0.388 ± 0.043 | 0.140 ± 0.046 |
| **Fair Curriculum CBM** | **0.611 ± 0.088** | **0.625 ± 0.123** | **0.441 ± 0.046** | **0.203 ± 0.048** | 0.142 ± 0.050 |

All improvements of Fair Curriculum CBM over Curriculum CBM on F1, recall, lowest-group F1, and performance gap are statistically significant (paired t-test, *p* ≤ 0.003). DP disparity is unchanged (*p* = 0.86).

---

## Baseline Comparison

| Model | Interpretable | Curriculum | Fairness constraints |
|---|---|---|---|
| Direct | No | — | None |
| Standard CBM | Yes | None | None |
| Curriculum CBM | Yes | Concept difficulty (easy→hard) | None |
| Fair Standard CBM | Yes | None | Static (*L*<sub>DP</sub> + *L*<sub>EO</sub>) |
| **Fair Curriculum CBM** | **Yes** | **Fairness-first (four phases)** | **Dynamic, phased** |

---

## Clinical Interpretability

![Clinical CBM Example](/assets/projects/faircbm/faircbm_plot1_clinical_CBM.png)
*Figure 3: Clinical CBM example showing concept bottleneck predictions and final diagnosis. The intermediate concept layer enables clinicians to inspect and correct model reasoning.*

---

## Dataset

![SkinCon Dataset Imbalance Across Fitzpatrick Skin Types](/assets/projects/faircbm/faircbm_plot2_dataset_imbalance.png)
*Figure 4: SkinCon dataset imbalance across Fitzpatrick skin types, motivating the fairness-first curriculum design.*

Experiments use **SkinCon** (3,230 dermatological images, six Fitzpatrick skin type labels, binary malignancy labels, 23 binary morphological concept annotations). The dataset is available via [SkinCAP on Hugging Face](https://huggingface.co/datasets/joshuachou/SkinCAP).

---

## Fairness Metrics

| Metric | Definition |
|---|---|
| Lowest-group F1 (LG-F1) | min<sub>g</sub> F1<sub>g</sub> across Fitzpatrick types I–VI |
| Performance Gap | max<sub>g</sub> F1<sub>g</sub> − min<sub>g</sub> F1<sub>g</sub> |
| DP Disparity | max<sub>a</sub> P(Ŷ=1 \| A=a) − min<sub>a</sub> P(Ŷ=1 \| A=a) |

---

## Citation

```bibtex
@inproceedings{cockayne2026faircbm,
  title     = {Fair Curriculum Learning for Concept Bottleneck Models in Dermatology},
  author    = {Cockayne, Matthew J. and Ortolani, Marco and Al-Bander, Baidaa},
  booktitle = {Medical Image Computing and Computer Assisted Intervention (MICCAI)},
  year      = {2026}
}
```
