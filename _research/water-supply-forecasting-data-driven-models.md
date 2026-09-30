---
title: Using data-driven models to improve forecasts of growing-season water supply in Colorado
status: ongoing
last_updated: 2025-05-13

thumbnail: /assets/images/research/snow_melt_by_thesleepyrabbit.jpg
thumbnail_alt: "A small stream surrounded by melting snow. Attribution: https://www.deviantart.com/thesleepyrabbit/art/Snow-Melt-519165575"
thumbnail_caption: Snow melting in Roosevelt National Forest.
summary: We are developing Long Short-Term Memory (LSTM) neural networks trained on watersheds across the Western U.S. to improve seasonal forecasts of growing-season water supply in Colorado, and exploring whether moisture recycling patterns can add forecast skill.

feature_image: /assets/images/feature/mountains_winter.jpg

members: [Mike Talbot, Frances Davenport]
study_areas: [Western U.S., Colorado]
funding:
  - name: Colorado Agricultural Experiment Station
    url: https://aes.colostate.edu/about-us/
---

![Infographic: major sources and uses of water in the West](/assets/images/research/2022Snowpack_Info_en_title_lg.jpg)
*Source: [Climate Central](https://www.climatecentral.org/graphic/water-in-the-west?graphicSet=Water%20in%20the%20West)*

## Water supply forecasting in Colorado is getting harder

Water supply forecasting is a critical task in Colorado, where the $40+ billion agricultural sector—which consumes around 86% of the state’s water supply each year—depends heavily on irrigation water sourced largely from snowmelt. But accurately predicting annual water supply has become increasingly challenging. Colorado faces high interannual precipitation variability, prolonged droughts, and warming temperatures—all of which are contributing to declining streamflows and shrinking snowpack. Climate change is amplifying these challenges, bringing more frequent and severe wet and dry years. These shifting conditions demand new forecasting tools that can capture complex watershed processes, including the roles of soil moisture and evapotranspiration (ET) in modulating runoff.

## Can AI help?

Traditionally, water supply forecasting has relied on process-based hydrologic models. These models are grounded in first principles and simulate watershed behavior by explicitly representing physical processes. While valuable, they are often calibrated for individual, gauged watersheds and struggle to predict system responses to conditions outside the historical record—particularly those driven by climate change.

Data-driven approaches like Long Short-Term Memory (LSTM) neural networks offer a promising alternative. LSTMs learn patterns directly from large datasets, allowing them to implicitly capture relationships between climate inputs and streamflow responses. These models have shown strong performance in both gauged and ungauged watersheds when tasked with either hindcasting (simulating hydrologic events that happened in the past) or forecasting (simulating how hydrologic events might unfold in the near future).

Our project, *Using data-driven models to improve forecasts of growing-season water supply in Colorado under a changing climate*, is leveraging cutting-edge AI tools—specifically LSTM neural networks—to improve seasonal water supply forecasts. We are developing customized LSTM models trained on historical streamflow data from watersheds across the Western U.S., integrating key variables like precipitation, temperature, snow cover, soil moisture, and watershed characteristics.

Beyond developing and benchmarking the LSTM models, the project will explore another critical avenue for improving forecasts: investigating the role of moisture recycling in growing-season precipitation. While historical streamflow variability is influenced by soil moisture and ET, spring and summer precipitation forecast error is a known limitation for water supply prediction. Leveraging recent advances in subseasonal-to-seasonal prediction, we will analyze the historical importance of local atmospheric moisture recycling and remote evapotranspiration patterns as potential predictors for growing season precipitation and water supply. By analyzing historical moisture sources and testing whether early-season moisture recycling patterns can improve predictions, either through analog forecasting or by including this information as additional inputs to our LSTM models, we aim to enhance forecast skill, particularly during the growing season.

![Map of the Western U.S. showing change in timing of peak snowpack since 1982](/assets/images/research/2022Snowpack_Peak_en_title_lg.jpg)
*Source: [Climate Central](https://www.climatecentral.org/graphic/water-in-the-west?graphicSet=Snowpack%20melting%20earlier)*

## Potential impact

Beyond technical model development, our project seeks to deepen understanding of complex hydrologic processes in Colorado and the Western U.S. We are committed to making our research accessible by developing an interactive online dashboard showcasing seasonal forecasts, uncertainty ranges, and performance metrics at key locations.

This work seeks to help water managers, agricultural producers, and decision-makers better navigate an increasingly uncertain future. This project is led by Dr. Frances V. Davenport and PhD student Michael Talbot, in collaboration with Dr. Russ Schumacher (user engagement) and Dr. Pat Keys (moisture recycling analysis). The research supports broader goals in sustainable water management and climate resilience and will lay the groundwork for future studies across the Western U.S.
