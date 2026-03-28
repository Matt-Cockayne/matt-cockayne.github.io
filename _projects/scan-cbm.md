---
title: "SCAN-CBM: Sparse Concept Absence Network for Concept Bottleneck Models"
duration: "2025 - 2026"
role: "Lead Researcher & Developer"
status: "Submitted - Image and Vision Computing (Elsevier)"
description: "A sparse pairwise polynomial classifier that replaces standard linear heads in Concept Bottleneck Models, capturing concept absence patterns central to diagnostic reasoning while preserving interpretability."
keywords: "SCAN-CBM, concept bottleneck models, interpretable deep learning, explainable AI, medical image analysis, polynomial classifiers, concept interactions, sparse learning"
author: "Matthew J. Cockayne"
technologies:
  - "PyTorch"
  - "Interpretable AI"
  - "Polynomial Classifiers"
  - "Medical AI"
  - "Concept Bottleneck Models"
  - "Python"
collaborators:
  - "Dr. Marco Ortolani (Supervisor)"
  - "Dr. Baidaa Al-Bander (Supervisor)"
links:
  - name: "Code (Coming Soon)"
    url: "#"
tags: ["Concept Bottleneck Models", "Interpretable Deep Learning", "Explainable AI", "Medical Image Analysis", "Polynomial Classifiers"]
---

## Overview

**SCAN-CBM** (Sparse Concept Absence Network) addresses a fundamental limitation of Concept Bottleneck Models: their linear classifier heads assume concept independence, preventing them from capturing the concept interactions that underpin real clinical reasoning. Through information-theoretic decomposition, we demonstrate that individual concept contributions are insufficient relative to their joint predictive information, motivating an architecture that explicitly models pairwise concept interactions.

---

## The Problem

Standard CBMs use linear classifiers over predicted concepts:

```
Concepts [c1, c2, ..., cn] → Linear Layer → Diagnosis
```

This assumes each concept contributes independently to the diagnosis. However, clinical reasoning relies heavily on **differential patterns** — the *absence* of expected features is often as diagnostically meaningful as their presence:

- A lesion with irregular borders **but without** blue-white veil suggests a different diagnosis
- The combination of asymmetry **with absence** of multiple colours changes the risk profile
- Linear heads cannot capture these asymmetric interaction patterns

---

## Approach: Sparse Pairwise Polynomial Classification

SCAN-CBM replaces the linear head with a sparse pairwise polynomial classifier:

**Key architectural features:**

- **Sparse pairwise interactions** (k=2) with hierarchical regularisation
- **Explicit asymmetric terms** c_i(1-c_j) that parameterise concept absence patterns
- **Raw probability semantics** with no geometric rescaling
- **Three-stage sparsification** to identify high-impact interactions

The asymmetric absence terms are central to the design, encoding the clinical intuition that "feature X present while feature Y is absent" carries different diagnostic weight than either feature alone.

---

## Key Results

Evaluated across **100 independent training runs** with three-stage sparsification:

| Metric | Linear CBM | SCAN-CBM | Improvement |
|--------|-----------|----------|-------------|
| Binary Prediction F1 | 0.566 +/- 0.070 | 0.597 +/- 0.057 | +5.5% |
| Concept Learning (Macro F1) | 0.697 +/- 0.061 | 0.759 +/- 0.017 | +8.9% |

High-impact interactions are predominantly **asymmetric absence patterns**, demonstrating the inductive bias for differential diagnostic reasoning aligns with clinical practice.

---

## Code Availability

Full code and trained models will be made available upon paper acceptance.

---

## Publication

This work has been submitted to **Image and Vision Computing** (Elsevier) and is currently under review.
