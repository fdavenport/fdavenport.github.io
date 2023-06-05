---
title: Publications
feature_text: 
feature_image: "/assets/bangladesh.jpg"
excerpt: ""
---

<i>You can also find a list of publications on <a href="https://scholar.google.com/citations?user=37P41e4AAAAJ&hl=en" target="_blank">Google Scholar</a>. </i>

<ol reversed="reversed">
    {% for paper in site.data.publications %}
      <li>
       {{ paper.authors }}
		
		{% if paper.year %}
        <b>({{ paper.year }})</b>
		{% endif %}
		.
		{% if paper.DOI %}
 <a href="{{ paper.DOI }}" target='_blank'>{{ paper.title }}</a>,
 {% else %}
        {{ paper.title }},
		{% endif %}
		
        <i>{{ paper.journal }}</i>,

        	{% if paper.status %}
        <i>({{ paper.status }})</i>
		{% endif %}
		
	    {{ paper.DOI }}
       
        {% if paper.pdf %}
              |   <a  href="../assets/paper_pdfs/{{ paper.pdf }}" target='_blank'>PDF</a>
     {% endif %}
                      <br>
		      
    {% if paper.press %}
        <strong style="color:#828282">See media coverage in:  </strong>
            {% for item in site.data[paper.press] %}
                <a href="{{item.pressLink}}" target='_blank'>{{ item.press }}</a>
            {% endfor %}
	{% endif %}

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