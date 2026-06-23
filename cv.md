---
layout: default
title: "Curriculum Vitae - Matthew Cockayne"
description: "For specific inquiries about my background or experience, feel free to contact me."
full_width: true
---

<div class="cv-embed">
  <div class="cv-actions" style="margin-bottom: 2rem; text-align: center;">
    <a href="{{ site.cv_pdf }}" class="btn btn-primary" target="_blank">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7,10 12,15 17,10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download PDF Version
    </a>
  </div>
  
  <!-- Embedded PDF Viewer -->
  <iframe 
    src="{{ site.cv_pdf }}" 
    class="cv-iframe"
    title="Matthew Cockayne - Curriculum Vitae">
    <p>Your browser does not support PDF viewing. Please <a href="{{ site.cv_pdf }}">download the CV</a> to view it.</p>
  </iframe>
</div>

<div class="cv-overview" markdown="1">

## Quick Overview
PhD researcher in safe and responsible AI, working on making AI systems interpretable, robust, and equitable. My work includes detecting and mitigating bias, stress-testing models under real-world distribution shift, and building interpretable-by-design architectures that are human-in-the-loop. Applied primarily to skin cancer detection, my methods have delivered state-of-the-art, fairness-improved, and clinically auditable models, published across journals and conferences including an early-accepted (top 9%) MICCAI 2026 paper. I am currently extending this work to cardiac vision-language models and validating clinically. I bring hands-on experience translating research into reproducible, well-documented tools and training materials for interdisciplinary researchers.


### Education
- **PhD in Computer Science** (2023-2026 Expected)  
  *{{ site.institution }}* - Competition-funded Department Studentship  
  Thesis: *Responsible AI for Healthcare: Robustness, Interpretability, and Fairness in Skin Lesion Recognition*  
  Viva: Scheduled 3rd July 2026  
  2 first-author publications (PAA 2025, AIiH 2025 Oral), 1 first-author paper early accepted (Top 9%) at MICCAI 2026, 1 first-author paper under review (Image and Vision Computing), 2 co-authored accepted papers
  
- **MSc in Artificial Intelligence and Data Science** (2021-2022)  
  *{{ site.institution }}* - **Distinction**  
  Data Analyst Internship, Turing Network Development Research Associate
  
- **BSc in Physics** (2018-2021)  
  *{{ site.institution }}* - **First Class Honours**

### Key Research Projects
- **DermFormer**: Transformer-based multi-modal architecture for robust skin cancer detection with state-of-the-art performance on Derm7pt dataset
- **FairCBM**: Fairness-aware curriculum learning for Concept Bottleneck Models, reducing demographic performance disparities by 44% and improving lowest-group outcomes by 63% (Early Accepted, MICCAI 2026)
- **SCAN-CBM**: Sparse pairwise polynomial classifier capturing concept absence patterns for interpretable diagnostic reasoning (Under Review, Image and Vision Computing)
- **Zero-Shot Segmentation**: CAM-guided foundation models (SAM/MedSAM) for automated dermoscopy analysis on ISIC datasets (35k+ images)
- **SimDrift**: Educational platform for visualising ML model drift across 24+ pre-trained models and 15+ realistic drift scenarios on MedMNIST
- **Bias Mitigation**: Cardiovascular disease mortality prediction fairness analysis using multi-center MINAP dataset (400k+ patients)

### Publications
- **2 Published First-Author Papers**: Pattern Analysis and Applications (2025), AIiH 2025 Conference (Oral Presentation)
- **1 First-Author Paper**: Early Accepted (Top 9%) at MICCAI 2026 — Fair Curriculum Learning for CBMs in Dermatology
- **1 First-Author Paper**: Under Review — Image and Vision Computing (SCAN-CBM)
- **2 Co-Authored Accepted Papers**: Discover Computing, Springer Nature; AIiH 2026 (ClinAuditAI)
- **1 Co-Authored Paper Under Review**: Machine Vision and Applications (Zero-Shot Crack Segmentation)

### Technical Skills
- **Programming**: Python, LaTeX, R, SQL
- **ML Frameworks**: PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face
- **Frontier Models**: Segment Anything Model (SAM/MedSAM), vision-language models (VLMs), zero-shot transfer evaluation
- **Computer Vision**: OpenCV, torchvision, TIMM
- **Explainable AI**: CAM, GradCAM, Integrated Gradients, attention visualisation, SHAP, concept bottleneck models
- **Fairness & Bias**: Aequitas, Fairlearn, demographic parity, equalized odds, adversarial debiasing, fairness benchmarking
- **Medical Imaging**: MONAI, SimpleITK, dermoscopy analysis, clinical validation
- **Development**: Git/GitHub, Jupyter, Weights & Biases, HPC cluster management, SLURM
- **Certifications**: BlueDot Technical AI Safety Course

### Professional Service
- **Programme Committee**: International Conference on AI in Healthcare (AIiH) 2026
- **Special Session Organiser**: Co-organising session on Explainability & Accountability at AIiH 2026
- **Peer Review**: Engineering Applications of Artificial Intelligence (2024–Present); 1st International Workshop on AI Safety and Security (AI-SS) 2026
- **Leadership**: PGR Representative (3 years), Student Representative (3 years)
- **Teaching**: Module Lead — Level 7 NHS Apprenticeship, Image Processing (2026–Present); Laboratory Demonstrator (4 years); Guest Lecturer on Deep Learning & Responsible AI

---

*For the most up-to-date version of my CV, please download the PDF above. For specific inquiries about my background or experience, feel free to [contact me](/#contact).*

</div>
