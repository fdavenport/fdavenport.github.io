---
layout: page
order: 1
title: research
permalink: /research/
description: 
nav: true
---

I am broadly interested in climate change, extreme weather events, and
the hydrologic cycle. My research also focuses on the socio-economic
impacts of natural hazards like flooding. The overarching questions I
am interested in include:

* *How are hydrologic extremes like severe precipitation, flooding, and
drought affected by climate change?*
* *How can we improve our understanding and prediction of
low-probability, high-impact events (e.g. '100-year floods') to reduce
the risk from these events?*
* *What are the economic, social, and environmental costs of extreme
events (such as floods and droughts), and how will these costs change
in the future?*
* *In addition to global warming, how do other human activities like
land use change and infrastructure construction (i.e. dams, levees)
increase or decrease exposure and vulnerability to natural hazards
such as flooding?*

You can read more about my research on these topics:
<p style="margin-left:5%; font-size:12pt">
{% for project in site.data.research %}
<a href="#{{project.title}}">{{project.title}}</a> <br/>
{% endfor %}
</p>

I approach these questions from an interdisciplinary perspective,
using methods from climate science, hydrology, data science,
engineering and econometrics. I also use a combination of
observational and remote sensing data and model simulations. In
addition to furthering our scientific understanding of extreme climate
events, I hope my research can provide useful information for policy
makers, engineers, and the public. I am always
interested to hear ideas for research that can benefit an audience
beyond the scientific community.


<br/>
## projects 
<br/>
{% for project in site.data.research %}
<a name="{{project.title}}" style="padding-top: 45px; margin-top: -45px;"></a> 

<div style="line-height:50%;"> <br></div>
<p align="center"
style="font-size:20pt"><b>
{{project.title}}</b></p>
<div style="line-height:50%;"> <br></div>
<div class="row">
<div class="column" align="center">
 <br/>
   <figure>
  <img src="{{ project.figure }}" style="width:80%">
 </figure> 
  <p style="margin-left:5%; width:90%; font-size:10pt;">
  <i>{{project.caption}}</i>
  </p>
  </div>
  <div class="column">
  {% for question in project.questions%}
  <p style="margin-left:5%; width:90%;font-size:11pt; font-weight:bold">{{question.q}}</p>
  <p style="margin-left:5%; width:90%; font-size:11pt">
  {{question.description}}
  </p>
  {% endfor %}
  
  {% if project.pubs %}
  <p style="margin-left:5%; width:90%;font-size:11pt">
  <b>Related Publications:</b>
  {% for pub in project.pubs %}
  <a href="{{pub.link}}" target='_blank'>{{pub.name}}</a>
  {% endfor %}
  </p>
  {% endif %}
  {% if project.media %}
  <p style="margin-left:5%; width:90%;font-size:11pt">
  <b>Related Media Coverage:</b>
  {% for media in project.media %}
  <a href="{{media.link}}" target='_blank'>{{media.name}}</a>
  {% endfor %}
  </p>
  {% endif %}

  
  
  </div>
</div>
<br/>
<hr/>
<br/>
{% endfor %}
