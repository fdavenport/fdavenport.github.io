---
layout: page
title: People
feature_text:
feature_image: "/assets/images/feature/mountains.jpg"
excerpt: ""
---

{%- comment -%} Each card is built from a file in _people/, sorted by its "order" setting. {%- endcomment -%}
{%- assign people = site.people | sort: "order" -%}

<div class="people-list">
{% for person in people %}
    {%- comment -%} Put the bold name and pronouns at the start of the bio's first paragraph {%- endcomment -%}
    {%- capture bio_start -%}<p><b>{% if person.prefix %}{{ person.prefix }} {% endif %}{{ person.name }}{% if person.pronouns %} ({{ person.pronouns }}){% endif %}</b> {% endcapture -%}
    <article class="card card--person">
        <img src="{{ person.photo }}" class="card__image" alt="Photo of {{ person.name }}">
        <div class="card__body card__bio">
            {{ person.content | replace_first: "<p>", bio_start }}
        </div>
    </article>
{% endfor %}
</div>
