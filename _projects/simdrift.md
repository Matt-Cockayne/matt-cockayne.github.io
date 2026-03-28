---
title: "SimDrift: Simulation-Based Model Drift Detection for Medical Imaging"
duration: "2024 - Present"
role: "Lead Developer"
status: "Alpha Release (v0.1.0)"
description: "An educational, production-ready platform for visualising and understanding ML model drift in medical imaging, with interactive Streamlit dashboard, 5 statistical detection methods, and 15+ realistic drift scenarios."
keywords: "SimDrift, model drift, MLOps, medical imaging, drift detection, MedMNIST, monitoring, concept drift, data drift, Streamlit, population stability index, model monitoring"
author: "Matthew J. Cockayne"
technologies:
  - "PyTorch"
  - "Streamlit"
  - "MLOps"
  - "Medical Imaging"
  - "Statistical Testing"
  - "Python"
links:
  - name: "GitHub Repository"
    url: "https://github.com/Matt-Cockayne/SimDrift"
  - name: "Live Demo"
    url: "https://simdrift.streamlit.app"
tags: ["MLOps", "Model Drift", "Medical Imaging", "Monitoring", "Statistical Testing", "Streamlit"]
---

## Overview

**SimDrift** is an educational, production-ready platform for visualising and understanding ML model drift in medical imaging. It addresses a critical gap in ML education: making monitoring and drift detection concepts tangible and interactive, without requiring access to actual production systems.

Medical imaging provides an ideal domain for drift simulation because drift is prevalent (equipment aging, protocol changes, demographic shifts), the stakes are high (diagnostic accuracy matters), and excellent benchmark datasets are available.

---

## Key Features

### Pre-trained Model Zoo
- **24+ models** across multiple architectures (SimpleCNN, ResNet18/34, EfficientNet B0/B1, Vision Transformer)
- Trained on **8 MedMNIST datasets**: PathMNIST, DermaMNIST, RetinaMNIST, BloodMNIST, PneumoniaMNIST, BreastMNIST, OCTMNIST, TissueMNIST
- Full metadata logging with checkpoints for reproducibility

### Drift Simulation Engine
- **15+ realistic degradation types** covering visual and concept drift
- **Gradual drift**: brightness, contrast, blur, noise, motion blur, JPEG compression, occlusion, zoom, vignette, colour temperature, saturation
- **Abrupt drift**: scanner replacement, new hospital, protocol changes
- **Concept drift**: demographic shifts, prevalence changes, label shifts

### Statistical Detection Methods

| Method | Type | Strength |
|--------|------|----------|
| **PSI** (Population Stability Index) | Univariate | Fast, production-standard |
| **KS Test** (Kolmogorov-Smirnov) | Statistical | Rigorous hypothesis testing |
| **Chi-square** | Categorical | Feature distribution testing |
| **MMD** (Maximum Mean Discrepancy) | Multivariate | Captures complex patterns |
| **Wasserstein Distance** | Geometric | Interpretable distance metric |

### Interactive Dashboard
Multi-page Streamlit interface with 5 views:
- **Home**: Real-time drift simulation with live visualisation
- **Model Zoo**: Compare trained models and view performance metrics
- **Drift Lab**: Create and customise drift scenarios
- **Analytics**: Deep metrics analysis and performance tracking
- **Tutorial**: Interactive learning modules for MLOps concepts

### Monitoring and Alerting
- Multi-severity alerts (INFO / WARNING / CRITICAL) with remediation recommendations
- Performance tracking: accuracy, F1, precision, recall, calibration (ECE/MCE), fairness metrics
- Prediction distribution monitoring and confidence score analysis

---

## Realistic Drift Scenarios

SimDrift includes pre-configured scenarios modelled on real-world deployment challenges:

| Scenario | Type | Severity | Description |
|----------|------|----------|-------------|
| Equipment Aging | Gradual | Moderate | Sensor degradation over 6 months |
| Lens Degradation | Gradual | Moderate | Progressive optical blur |
| Demographic Shift | Gradual | Severe | Population characteristic changes |
| Electronic Noise | Gradual | Moderate | Increasing sensor noise |
| Scanner Replacement | Abrupt | High | New imaging equipment |
| Hospital Transfer | Abrupt | High | Different environment and population |
| Protocol Changes | Abrupt | Moderate | Imaging procedure modifications |
| Seasonal Variations | Periodic | Variable | Temporal patterns in data |

---

## Architecture

The platform is organised into five layers with clear separation of concerns:

```
SimDrift/
├── data/              # Data loading and drift simulation engine
├── models/            # Model zoo with training infrastructure
├── monitoring/        # Drift detection, performance tracking, alerting
├── simulations/       # Pre-configured realistic scenarios
└── dashboard/         # Multi-page Streamlit interface
```

**Data Layer** handles unified loading across 8 MedMNIST datasets and drift generation with configurable severity curves.

**Model Layer** provides a model zoo with factory functions for 6 architectures, training loops with validation and checkpointing, and model comparison leaderboards.

**Monitoring Layer** implements 5 statistical detection methods, comprehensive performance metrics (classification, calibration, fairness), and a multi-level alert system with remediation recommendations.

**Simulation Layer** defines parametric drift scenarios with realistic temporal profiles.

**Dashboard Layer** provides the interactive Streamlit frontend with dark-themed visualisations using Plotly.

---

## Technologies

| Category | Stack |
|----------|-------|
| Deep Learning | PyTorch 2.0+, torchvision, timm |
| Data | MedMNIST, NumPy, Pandas, SciPy |
| Statistical Methods | scikit-learn, scipy.stats |
| Visualisation | Streamlit, Plotly, Matplotlib, Seaborn |
| Image Processing | OpenCV, Pillow |
| DevOps | Docker (.devcontainer support) |

---

## Getting Started

```bash
# Clone and setup
git clone https://github.com/Matt-Cockayne/SimDrift.git
cd SimDrift && ./setup.sh

# Launch dashboard
streamlit run dashboard/Home.py --server.port 8503
```

Or try the [live demo](https://simdrift.streamlit.app) directly.

---

## Status

SimDrift is in **alpha release** (v0.1.0) and under active development. The dashboard and pre-trained model zoo are fully functional for educational and demonstration purposes.
