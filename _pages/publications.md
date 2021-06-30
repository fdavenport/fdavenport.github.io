---
layout: page
permalink: /publications/
order: 0
title: publications
description: 
nav: true
---


<ol reversed="">
    {% for paper in site.data.publications %}
      <li>
        {{ paper.authors }}
        <b>({{ paper.year }})</b>.
        {{ paper.title }},
		
	    {% if paper.journalLink %}
		  <a href="{{ paper.journalLink }}" target='_blank'><i>{{paper.journal }}</i></a>,
        {% else %}
          <i>{{ paper.journal }}</i>,
        {% endif %}
		
		doi: {{ paper.DOI }}
        |
        {% if paper.pdf %}
                      <a  href="../assets/paper_pdfs/{{ paper.pdf }}" target='_blank'>PDF</a>
     {% endif %}
                      <br>
					  
    {% if paper.press %}
        <strong>See media coverage in:  </strong>
            {% for item in site.data[paper.press] %}
                <a href="{{item.pressLink}}" target='_blank'>{{ item.press }}</a>
            {% endfor %}
	{% endif %}

      </li>
	  <br/>
    {% endfor %}
  </ol>
