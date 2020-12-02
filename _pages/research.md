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
impacts of natural hazards like flooding. The overarching questions
that I am interested in include:

* *How is climate
change affecting hydrologic extremes like extreme precipitation,
flooding, and drought?*
* *How can we improve
our understanding and prediction of low-probability, high-impact events
(e.g. '100-year floods') to reduce the risk from
these events?*
* *What are the
economic, social, and environmental costs of extreme events (such as
floods and droughts), and how will these costs change in the future?*
* *In addition to
global warming, what other human activities like land use
change and infrastructure construction (i.e. dams, levees) increase
or decrease exposure and vulnerability to natural hazards such as flooding?*

I take an interdisciplinary
approach to answer these questions, using methods
from geosciences (including hydrology and climate science), data
science, engineering and econometrics. I also use a combination of observational and remote sensing data and model
simulations. In addition to furthering our scientific understanding of
extreme climate events, I hope my research can provide useful
information for policy makers, engineers/practitioners, and the public. I am always
interested to hear ideas for research that can serve a larger
audience beyond the scientific community. 

Below are a few of my current or recent research projects: 
<br/><br/>
<hr/>

{% for project in site.data.research %}

<div style="line-height:50%;"> <br></div>
<p align="left" style="font-size:16pt"><b>{{project.title}}</b></p>
<div style="line-height:50%;"> <br></div>
<div class="row">
<div class="column">
 <br/>
   <figure>
  <img src="{{ project.figure }}" style="width:100%">
  <figcaption style="font-size:10pt"><br/>{{ project.caption }}</figcaption>
 </figure> 
  </div>
  <div class="column">
  <p align="center"
  style="font-size:14pt"><i>{{project.question}}</i></p>
  <p style="margin-left:5%; width:95%">
  {{project.description}}
  </p>
  
  </div>
</div> 
<hr/>

{% endfor %}
