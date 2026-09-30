---
layout: page
title: Research Projects
feature_text: 
feature_image: "/assets/images/feature/earth2.jpg"
excerpt: ""
---

<!-- ongoing research section -->
<section class="project-section">
    <h4>Ongoing Research</h4>
    {% for project in site.data.research %}
        {% unless project.title == "Nothing" %}
            {% if project.status == "Ongoing" %}
                <article class="card card--project">
                    <img src="{{ project.figure }}" class="card__image" alt="{{ project.alt-text }}">
                    <div class="card__body">
                        <h5 class="card__title"><a href="{{ project.url }}" class="card__link">{{ project.title }}</a></h5>
                        <p class="card__text">{{ project.short-desc }}</p>
                        <p class="card__meta">Last Updated: {{ project.last-updated }}</p>
                    </div>
                    <p class="card__footer">Image: {{ project.caption }}</p>
                </article>
            {% endif %}
        {% else %}
            <h5>Coming soon!</h5>
        {% endunless %}
    {% endfor %}
</section>
<hr>
<!-- previous research section -->
<section class="project-section">
    <h4>Previous Research</h4>
    <div class="card-grid">
    {% for project in site.data.research %}
        {% unless project.title == "Nothing" %}
            {% if project.status == "Previous" %}
                <article class="card card--project-small">
                    <img src="{{ project.figure }}" class="card__image" alt="{{ project.alt-text }}">
                    <div class="card__body">
                        <p class="card__text"><a href="{{ project.url }}" class="card__link">{{ project.title }}</a></p>
                    </div>
                </article>
            {% endif %}
        {% endunless %}
    {% endfor %}
    </div>
</section>
