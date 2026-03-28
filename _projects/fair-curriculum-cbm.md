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

## Paper Details

**Fair Curriculum Learning for Concept Bottleneck Models in Dermatology**

**Authors:** M.J. Cockayne, M. Ortolani, B. Al-Bander

**Venue:** *MICCAI 2026* — **Submitted**

---

## Abstract

Black box deep learning models for dermatology show performance disparities across skin types, with darker-skinned patients experiencing lower diagnostic performance. Concept Bottleneck Models (CBMs) offer interpretability through intermediate concept predictions but lack explicit fairness mechanisms. We introduce Fair Curriculum CBM, a four-phase curriculum learning approach for in-training bias mitigation that, instead of relying on concept difficulty, orders training by fairness objectives, including balanced foundation, demographic parity, equalized odds, and performance parity. This progressive structure trains all concepts jointly while gradually introducing fairness constraints and adversarial debiasing directly, rather than treating fairness as a post-hoc adjustment. On SkinCon (3230 images, 6 Fitzpatrick types), Fair Curriculum CBM improves lowest-group F1 by 63% (0.270 to 0.441, p<0.001) and reduces performance gaps by 44% (0.361 to 0.203, p=0.003) compared to difficulty-based curriculum learning, with simultaneous 5.3% overall F1 gain (p<0.001). Paired t-tests comparing fairness-first to difficulty-based curriculum approaches show significant improvements on diverse skin types (Types II, V, VI: p<=0.005) without degradation on lighter types. Results from 100 independent runs per model validate that fairness curriculum learning improves rather than constrains performance. Full code and models will be made available.

---

## Code Availability

Full code and trained models will be made available upon paper acceptance.
