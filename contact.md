---
layout: default
title: "Contact"
description: "Get in touch with Matthew Cockayne for research collaborations, academic opportunities, or professional inquiries."
---

<div class="section-header">
  <p class="section-description">
    I'm always interested in discussing research collaborations, academic opportunities, and innovative projects in AI and machine learning. Feel free to reach out!
  </p>
</div>

## Get in Touch

<div class="contact-grid">
  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">Email</h3>
    <p class="contact-value">
      <a href="mailto:{{ site.email }}">{{ site.email }}</a>
    </p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">Primary contact method</p>
  </div>

  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">Institution</h3>
    <p class="contact-value">{{ site.institution }}</p>
    <p class="contact-value">{{ site.department }}</p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">Campus office hours available</p>
  </div>

  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">LinkedIn</h3>
    <p class="contact-value">
      <a href="{{ site.linkedin }}" target="_blank">Professional Profile</a>
    </p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">Connect for networking</p>
  </div>

  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">Google Scholar</h3>
    <p class="contact-value">
      <a href="{{ site.google_scholar }}" target="_blank">Research Profile</a>
    </p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">View publications & citations</p>
  </div>

  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">GitHub</h3>
    <p class="contact-value">
      <a href="https://github.com/{{ site.github_username }}" target="_blank">@{{ site.github_username }}</a>
    </p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">Open source contributions</p>
  </div>

  <div class="contact-item animate-on-scroll">
    <div class="contact-icon"></div>
    <h3 class="contact-label">ORCID</h3>
    <p class="contact-value">
      <a href="{{ site.orcid }}" target="_blank">Academic ID</a>
    </p>
    <p style="font-size: 0.9rem; color: var(--text-muted);">Researcher identifier</p>
  </div>
</div>

---

<div style="text-align: center; padding: 2rem; background: var(--bg-primary); border-radius: var(--radius-lg); margin-top: 3rem;">
  <h3>Ready to Connect?</h3>
  <p style="margin-bottom: 1.5rem;">Whether you're interested in research collaboration, have questions about my work, or want to explore new opportunities, I'd love to hear from you.</p>
  <a href="mailto:{{ site.email }}" class="btn btn-primary">
    Send Me an Email
  </a>
</div>