---
layout: research
title: Research Areas
feature_text: 
feature_image: "/assets/earth.jpg"
excerpt: ""
---

<!-- add one bootstrap card for each research project -->
<div class="row">
    <!-- ongoing research section -->
    <h2>Ongoing Research</h2>
    {% for project in site.data.research %}
        {% unless project.title == "Nothing" %}
            {% if project.status == "Ongoing" %}
                <div class="col-12">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <a href="{{ project.url }}" class="stretched-link">
                                    <img src="{{ project.figure }}" class="img-fluid rounded-topleft" alt="{{ project.alt-text }}">
                                </a>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                    <p class="card-text">{{ project.short-desc }}</p>
                                    <p class="card-text card-text-bottom"><small class="text-muted">Last Updated: {{ project.last-updated }}</small></p>
                                </div>
                            </div>
                        <span class="card-footer text-wrap">Image: {{ project.caption }}</span>
                    </div>
                </div>
            {% endif %}            
        {% else %}
            <h5>Coming soon!</h5>
        {% endunless %}
    {% endfor %}
    <!-- previous research section -->
</div>
<hr>
<div class="row">
    <h2>Previous Research</h2>
    {% for project in site.data.research %}
        {% unless project.title == "Nothing" %}
            {% if project.status == "Previous" %}
                <div class="col-4">
                    <div class="card mb-3">
                        <a href="#" class="stretched-link">
                            <img src="{{ project.figure }}" class="card-img-top" alt="{{ project.alt-text}}">
                        </a>
                        <div class="card-body">
                            <p class="card-text">{{ project.title }}</p>
                        </div>
                    </div>                
                </div>
            {% endif %}            
        {% endunless %}
    {% endfor %}
</div>