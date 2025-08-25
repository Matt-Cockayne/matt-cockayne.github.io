---
layout: page
title: "Publications"
---

# Publications

<ul class="pub-list">
  {% for pub in site.publications %}
    <li>
      <strong>{{ pub.title }}</strong><br>
      <span>{{ pub.authors }}</span><br>
      <span>{{ pub.journal }}, {{ pub.year }}</span><br>
      {% if pub.doi %}<a href="{{ pub.doi }}">DOI</a>{% endif %}
      {% if pub.pdf %}| <a href="{{ pub.pdf }}">PDF</a>{% endif %}
      {% if pub.tags %}<span class="tags">({{ pub.tags | join: ', ' }})</span>{% endif %}
    </li>
  {% endfor %}
</ul>
