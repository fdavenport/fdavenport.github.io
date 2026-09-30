---
layout: page
title: People
feature_text:
feature_image: "/assets/images/feature/mountains.jpg"
excerpt: ""
---

{%- comment -%} Cards are built from the files in _people/, sorted by their "order" setting. {%- endcomment -%}
{%- assign people = site.people | sort: "order" -%}
{%- assign current = people | where_exp: "person", "person.status != 'alumni'" -%}
{%- assign alumni = people | where: "status", "alumni" -%}

<section class="page-section people-list">
{% for person in current %}
    {% include person-card.html person=person %}
{% endfor %}
</section>

{% if alumni.size > 0 %}
<hr>
<section class="page-section">
    <h4>Alumni</h4>
    <div class="alumni-grid">
    {% for person in alumni %}
        {% include alumni-card.html person=person %}
    {% endfor %}
    </div>
</section>
{% endif %}
