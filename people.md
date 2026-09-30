---
layout: page
title: People
feature_text:
feature_image: "/assets/images/feature/mountains.jpg"
excerpt: ""
---

<div class="people-list">
{% for person in site.data.people %}
    <article class="card card--person">
        <img src="{{ person.photo }}" class="card__image" alt="Photo of {{ person.name }}">
        <div class="card__body">
            <p class="card__text"><b>{{ person.title }} {{ person.name }} {% if person.pronouns %}({{ person.pronouns }}) {% endif %}</b> {{ person.profile }}</p>
        </div>
    </article>
{% endfor %}
</div>
