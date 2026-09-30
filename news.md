---
layout: page
title: News
feature_image: "/assets/images/feature/lakepowell_crop.jpg"
excerpt: ""
---

{%- comment -%} All items from _data/news.yml, newest first, grouped by year. (Reversing before sorting keeps same-date items in file order.) {%- endcomment -%}
{%- assign news = site.data.news | reverse | sort: "date" | reverse -%}
{%- assign years = news | group_by_exp: "item", "item.date | date: '%Y'" -%}

{% for year in years %}
<section class="page-section">
    <h4>{{ year.name }}</h4>
{% include news-list.html items=year.items %}
</section>
{% endfor %}
