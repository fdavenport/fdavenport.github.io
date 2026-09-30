---
layout: page
title: Research Projects
feature_text: 
feature_image: "/assets/images/feature/earth2.jpg"
excerpt: ""
---

{%- comment -%} Cards are built from the front matter of each project file in _research/. {%- endcomment -%}
{%- assign ongoing = site.research | where: "status", "ongoing" | sort: "last_updated", "first" | reverse -%}
{%- assign previous = site.research | where: "status", "previous" | sort: "title" -%}

<!-- ongoing research section -->
<section class="project-section">
    <h4>Ongoing Research</h4>
    {% for project in ongoing %}
        <article class="card card--project">
            <img src="{{ project.thumbnail }}" class="card__image" alt="{{ project.thumbnail_alt }}">
            <div class="card__body">
                <h5 class="card__title"><a href="{{ project.url }}" class="card__link">{{ project.title }}</a></h5>
                <p class="card__text">{{ project.summary }}</p>
                {% if project.last_updated %}<p class="card__meta">Last Updated: {{ project.last_updated | date: "%B %-d, %Y" }}</p>{% endif %}
            </div>
            {% if project.thumbnail_caption %}<p class="card__footer">Image: {{ project.thumbnail_caption }}</p>{% endif %}
        </article>
    {% else %}
        <h5>Coming soon!</h5>
    {% endfor %}
</section>
<hr>
<!-- previous research section -->
<section class="project-section">
    <h4>Previous Research</h4>
    <div class="card-grid">
    {% for project in previous %}
        <article class="card card--project-small">
            <img src="{{ project.thumbnail }}" class="card__image" alt="{{ project.thumbnail_alt }}">
            <div class="card__body">
                <p class="card__text"><a href="{{ project.url }}" class="card__link">{{ project.title }}</a></p>
            </div>
        </article>
    {% endfor %}
    </div>
</section>
