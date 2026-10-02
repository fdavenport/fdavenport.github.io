---
layout: page
title: People
feature_text:
feature_image: "/assets/images/feature/mountains.jpg"
excerpt: ""
---

{%- comment -%}
  Cards are built from the files in _people/, sorted by their "order" setting.
  Alumni are listed in _people/alumni.md, which is left out of the cards.
{%- endcomment -%}
{%- assign people = site.people | where_exp: "person", "person.alumni == nil" | sort: "order" -%}
{%- assign alumni = site.people | where_exp: "person", "person.alumni" | map: "alumni" | first -%}

<section class="page-section people-list">
{% for person in people %}
    {% include person-card.html person=person %}
{% endfor %}
</section>

{% if alumni.size > 0 %}
<hr>
<section class="page-section">
    <h4>Alumni</h4>
    <ul class="alumni-list">
    {%- for person in alumni %}
        <li>
            <b>{{ person.name }}</b>{% if person.position %}, {{ person.position }}{% endif %}{% if person.years %} ({{ person.years }}){% endif %}
            {%- if person.details %}. {{ person.details | markdownify | remove: "<p>" | remove: "</p>" | strip }}{% endif %}
        </li>
    {%- endfor %}
    </ul>
</section>
{% endif %}
