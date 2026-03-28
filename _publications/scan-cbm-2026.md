---
title: "Sparse Concept Absence Network for Concept Bottleneck Models"
authors: "M.J. Cockayne, M. Ortolani, B. Al-Bander"
venue: "Image and Vision Computing"
year: 2026
tags:
  - "Concept Bottleneck Models"
  - "Interpretable Deep Learning"
  - "Explainable AI"
  - "Medical Image Analysis"
  - "Polynomial Classifiers"
links:
  - name: "Code"
    url: "#"
citation: |
  @article{cockayne2026scancbm,
    title={Sparse Concept Absence Network for Concept Bottleneck Models},
    author={Cockayne, Matthew J. and Ortolani, Marco and Al-Bander, Baidaa},
    journal={Image and Vision Computing},
    year={2026},
    publisher={Elsevier}
  }
---

## Abstract

Concept Bottleneck Models (CBMs) increase interpretability by predicting the target classification from intermediate concepts, but the linear classifier heads assume concept independence, limiting clinical utility where diagnosis relies on differential patterns and concept interactions. Through information-theoretic decomposition of binary malignancy predictions, we show that individual concept contributions appear insufficient relative to their joint predictive information, indicating that linear architectures are insufficient. We introduce **SCAN-CBM** (Sparse Concept Absence Network), a sparse pairwise polynomial classifier that replaces standard linear heads while preserving concept bottleneck interpretability. SCAN-CBM learns sparse pairwise interactions (k=2) with hierarchical regularisation, explicit asymmetric terms c_i(1-c_j) that parameterise concept absence patterns, central to diagnostic reasoning, and raw probability semantics with no geometric rescaling. Across 100 independent training runs with three-stage sparsification, high-impact interactions are predominantly asymmetric absence patterns, demonstrating the inductive bias for differential diagnostic reasoning. Compared with the standard linear CBM baseline, SCAN-CBM improves binary prediction (F1 0.597 +/- 0.057 vs 0.566 +/- 0.070) and concept learning (macro F1 0.759 +/- 0.017 vs 0.697 +/- 0.061) through architectural inductive bias that aligns with clinical reasoning. Full code and models will be made available.

## Status

This paper has been submitted to **Image and Vision Computing** (Elsevier) and is currently under review.

Code and models will be released upon acceptance.
