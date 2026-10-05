---
title: Publications
feature_text: 
feature_image: "/assets/images/feature/bangladesh.jpg"
excerpt: ""
---

*You can also find a list of publications on [Google Scholar](https://scholar.google.com/citations?user=37P41e4AAAAJ&hl=en).*

{% assign submitted = site.data.publications | where: "status", "submitted" %}
{% assign published = site.data.publications | where_exp: "paper", "paper.status != 'submitted'" %}

{% if submitted.size > 0 %}
## Submitted
{: .publication-heading}

<ul class="publication-list">
    {% for paper in submitted %}
      <li>
       {% include citation.html paper=paper press=true %}

      </li>
	  <br/>
    {% endfor %}
  </ul>
{% endif %}

{% assign paper_number = published.size %}
{% assign papers_by_year = published | group_by: "year" %}
{% for year in papers_by_year %}
## {{ year.name }}
{: .publication-heading}

<ol class="publication-list" reversed="reversed" start="{{ paper_number }}">
    {% for paper in year.items %}
      <li>
       {% include citation.html paper=paper press=true %}

      </li>
	  <br/>
    {% endfor %}
  </ol>
{% assign paper_number = paper_number | minus: year.size %}
{% endfor %}

## Other writing
{: .publication-heading}

<ul class="publication-list">
{% for item in site.data.writing %}

      <li>

	{% if item.URL %}
 <a href="{{ item.URL }}" target='_blank'>{{ item.title }}</a>,
 {% else %}
        {{ item.title }},
		{% endif %}

{% if item.authors %}
   {{ item.authors }},
    {% endif %}
    
    <i>{{ item.outlet }}</i>,
   
        {{ item.date }}.
	  </li>	
		
{% endfor %}

</ul>
