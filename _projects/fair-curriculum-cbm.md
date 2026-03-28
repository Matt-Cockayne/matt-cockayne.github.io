---
title: "Fair Curriculum CBM: Fairness-Aware Curriculum Learning for Concept Bottleneck Models"
duration: "2025 - 2026"
role: "Lead Researcher & Developer"
status: "Submitted - MICCAI 2026"
description: "A four-phase curriculum learning approach for in-training bias mitigation in Concept Bottleneck Models, ordering training by fairness objectives to reduce performance disparities across skin types."
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
  - name: "Code (Coming Soon)"
    url: "#"
tags: ["Fairness", "Concept Bottleneck Models", "Curriculum Learning", "Medical Imaging", "Dermatology", "Responsible AI"]
---

## Overview

**Fair Curriculum CBM** addresses a critical gap in interpretable medical AI: while Concept Bottleneck Models offer transparency through intermediate concept predictions, they lack explicit fairness mechanisms. Black-box deep learning models for dermatology show significant performance disparities across skin types, with darker-skinned patients experiencing lower diagnostic performance.

Rather than treating fairness as a post-hoc adjustment, we propose ordering the training curriculum by fairness objectives, progressively introducing constraints that ensure equitable performance across all demographic groups.

---

## The Problem

Standard dermatology AI models exhibit significant performance gaps across Fitzpatrick skin types:

- **Darker skin types** (IV-VI) consistently receive lower diagnostic accuracy
- Concept Bottleneck Models, despite their interpretability, inherit these biases
- Existing curriculum learning approaches order by *concept difficulty*, not fairness
- Post-hoc debiasing methods cannot fully compensate for biases learned during training

---

## Approach: Four-Phase Fairness Curriculum

Instead of relying on concept difficulty, Fair Curriculum CBM orders training through four progressive phases:

| Phase | Objective | Strategy |
|-------|-----------|----------|
| **Phase 1** | Balanced Foundation | Stratified sampling across all skin types |
| **Phase 2** | Demographic Parity | Equalise prediction rates across groups |
| **Phase 3** | Equalised Odds | Equalise true/false positive rates across groups |
| **Phase 4** | Performance Parity | Minimise inter-group performance gaps |

This progressive structure trains all concepts jointly while gradually introducing fairness constraints and adversarial debiasing directly into the learning process.

---

## Key Results

Evaluated on **SkinCon** (3230 images, 6 Fitzpatrick types) across **100 independent runs**:

| Metric | Difficulty Curriculum | Fair Curriculum | Improvement |
|--------|----------------------|-----------------|-------------|
| Lowest-Group F1 | 0.270 | 0.441 | +63% (p<0.001) |
| Performance Gap | 0.361 | 0.203 | -44% (p=0.003) |
| Overall F1 | Baseline | +5.3% | (p<0.001) |

Significant improvements on diverse skin types (Types II, V, VI: p<=0.005) without degradation on lighter types, validating that fairness curriculum learning **improves rather than constrains** overall performance.

---

## Code Availability

Full code and trained models will be made available upon paper acceptance.

---

## Publication

This work has been submitted to **MICCAI 2026** and is currently under review.
