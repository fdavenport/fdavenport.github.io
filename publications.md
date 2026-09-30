---
title: Publications
feature_text: 
feature_image: "/assets/images/feature/bangladesh.jpg"
excerpt: ""
---

*You can also find a list of publications on [Google Scholar](https://scholar.google.com/citations?user=37P41e4AAAAJ&hl=en).*

<ol reversed="reversed">
    {% for paper in site.data.publications %}
      <li>
       {% include citation.html paper=paper press=true %}

      </li>
	  <br/>
    {% endfor %}
  </ol>

## Other writing

<ul>
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
