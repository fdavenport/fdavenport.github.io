---
layout: research
title: Research Areas
feature_text: 
feature_image: "/assets/earth.jpg"
excerpt: ""
---

<div class="row">
<!-- add one bootstrap card for each research project -->
    {% for project in site.data.research %}
    <div class="col-12">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="{{ project.figure }}" class="img-fluid rounded-topleft" alt="{{ project.alt-text }}">
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
    {% endfor %}
</div>