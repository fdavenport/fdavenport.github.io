---
layout: page
title: People
feature_text:
feature_image: "/assets/images/feature/mountains.jpg"
excerpt: ""
---

{% for person in site.data.people %}
<div class="col-12">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-3">
                <img src="{{ person.photo }}" class="img-fluid img-profile" alt="">
            </div>
            <div class="col-md-9">
                <div class="card-body profile-body">
                    <p class="card-text profile-text" style="line-height: normal"><b>{{ person.title }} {{ person.name }} {% if person.pronouns %}({{ person.pronouns }}) {% endif %}</b> {{ person.profile }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
{% endfor %}
