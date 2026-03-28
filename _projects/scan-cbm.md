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

## Paper Details

**Sparse Concept Absence Network for Concept Bottleneck Models**

**Authors:** M.J. Cockayne, M. Ortolani, B. Al-Bander

**Venue:** *Image and Vision Computing*, Elsevier — **Submitted**

---

## Abstract

Concept Bottleneck Models (CBMs) increase interpretability by predicting the target classification from intermediate concepts, but the linear classifier heads assume concept independence, limiting clinical utility where diagnosis relies on differential patterns and concept interactions. Through information-theoretic decomposition of binary malignancy predictions, we show that individual concept contributions appear insufficient relative to their joint predictive information, indicating that linear architectures are insufficient. We introduce **SCAN-CBM** (Sparse Concept Absence Network), a sparse pairwise polynomial classifier that replaces standard linear heads while preserving concept bottleneck interpretability. SCAN-CBM learns sparse pairwise interactions (k=2) with hierarchical regularisation, explicit asymmetric terms c_i(1-c_j) that parameterise concept absence patterns, central to diagnostic reasoning, and raw probability semantics with no geometric rescaling. Across 100 independent training runs with three-stage sparsification, high-impact interactions are predominantly asymmetric absence patterns, demonstrating the inductive bias for differential diagnostic reasoning. Compared with the standard linear CBM baseline, SCAN-CBM improves binary prediction (F1 0.597 +/- 0.057 vs 0.566 +/- 0.070) and concept learning (macro F1 0.759 +/- 0.017 vs 0.697 +/- 0.061) through architectural inductive bias that aligns with clinical reasoning. Full code and models will be made available.

---

## Code Availability

Full code and trained models will be made available upon paper acceptance.
