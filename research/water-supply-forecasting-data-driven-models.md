---
layout: page
title: Using data-driven models to improve forecasts of growing-season water supply in Colorado
feature_text: 
feature_image: "/assets/images/feature/mountains_winter.jpg"
excerpt: ""
---

<div class="row">
    <!-- Funding section on the left -->
    <div class="col-md-4">
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Project Members</b><br>
            <small>Mike Talbot, Frances Davenport</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Study Areas</b><br>
            <small>Western U.S., Colorado</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Funding Source</b><br>
            <small><a href="https://aes.colostate.edu/about-us/" target="_blank">Colorado Agricultural Experiment Station</a></small>
        </p>
    </div>
    <!-- Image on the right -->
    <div class="col-md-8">
        <div class="border border-1 p-1">
            <img src="/assets/images/research/2022Snowpack_Info_en_title_lg.jpg" width="100%" class="m-0 p-0">
            <p class="m-0 p-0"><small class="m-0 p-0">Source: <a href='https://www.climatecentral.org/graphic/water-in-the-west?graphicSet=Water%20in%20the%20West'>Climate Central</a></small></p>
        </div>
    </div>
</div>

<div class="row">
    <!-- example of a full-width text -->
    <div class="col">
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Water supply forecasting in Colorado is getting harder</b>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>Water supply forecasting is a critical task in Colorado, where the $40+ billion agricultural sector—which consumes around 86% of the state’s water supply each year—depends heavily on irrigation water sourced largely from snowmelt. But accurately predicting annual water supply has become increasingly challenging. Colorado faces high interannual precipitation variability, prolonged droughts, and warming temperatures—all of which are contributing to declining streamflows and shrinking snowpack. Climate change is amplifying these challenges, bringing more frequent and severe wet and dry years. These shifting conditions demand new forecasting tools that can capture complex watershed processes, including the roles of soil moisture and evapotranspiration (ET) in modulating runoff.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Can AI help?</b>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>Traditionally, water supply forecasting has relied on process-based hydrologic models. These models are grounded in first principles and simulate watershed behavior by explicitly representing physical processes. While valuable, they are often calibrated for individual, gauged watersheds and struggle to predict system responses to conditions outside the historical record—particularly those driven by climate change.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>In contrast, data-driven approaches like Long Short-Term Memory (LSTM) neural networks offer a promising alternative. LSTMs learn patterns directly from large datasets, allowing them to implicitly capture relationships between climate inputs and streamflow responses. These models have shown strong performance in both gauged and ungauged watersheds when tasked with either hindcasting (simulating hydrologic events that happened in the past) or forecasting (simulating how hydrologic events might unfold in the near future).</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>Our project, <i>Using data-driven models to improve forecasts of growing-season water supply in Colorado under a changing climate</i>, is leveraging cutting-edge AI tools—specifically LSTM neural networks—to improve seasonal water supply forecasts. We are developing customized LSTM models trained on historical streamflow data from watersheds across the Western U.S., integrating key variables like precipitation, temperature, snow cover, soil moisture, and watershed characteristics.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>Beyond developing and benchmarking the LSTM models, the project will explore another critical avenue for improving forecasts: investigating the role of moisture recycling in growing-season precipitation. While historical streamflow variability is influenced by soil moisture and ET, spring and summer precipitation forecast error is a known limitation for water supply prediction. Leveraging recent advances in subseasonal-to-seasonal prediction, we will analyze the historical importance of local atmospheric moisture recycling and remote evapotranspiration patterns as potential predictors for growing season precipitation and water supply. By analyzing historical moisture sources and testing whether early-season moisture recycling patterns can improve predictions, either through analog forecasting or by including this information as additional inputs to our LSTM models, we aim to enhance forecast skill, particularly during the growing season.</small>
        </p>
        <div class="border border-1 p-1" style="position: relative;">
            <img src="/assets/images/research/2022Snowpack_Peak_en_title_lg.jpg"
                style="transform: scale(1) translateY(0%); transform-origin: center; display: block; z-index: 0; position: relative;"
                class="m-0 p-0">
            <p class="m-0 p-0" style="position: relative; z-index: 1;"><small class="m-0 p-0">Source: <a href='https://www.climatecentral.org/graphic/water-in-the-west?graphicSet=Snowpack%20melting%20earlier'>Climate Central</a></small></p>
        </div>
        <p style="line-height: normal" class="m-0 pb-1">
            <b>How well can LSTM models perform under climate extremes?</b>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>A key focus of our work is rigorously benchmarking LSTM model performance. We will compare their forecasts against observed data, existing operational systems (like the SAC-SMA model), and alternative machine learning methods such as Random Forests. Special attention will be given to evaluating skill under extreme conditions—very warm, wet, or dry years—which are becoming more common in Colorado’s changing climate. Understanding model reliability during these critical periods will help assess the real-world utility of LSTM forecasts.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>In addition to LSTM development, our project explores a second critical avenue: the role of moisture recycling in growing season precipitation. Spring and summer precipitation forecast error remains a major limitation for water supply prediction. By leveraging recent advances in subseasonal-to-seasonal forecasting and analyzing historical atmospheric moisture recycling patterns—including local and remote evapotranspiration sources—we will investigate whether this information can improve predictions.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <b>Potential impact</b>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>Beyond technical model development, our project seeks to deepen understanding of complex hydrologic processes in Colorado and the Western U.S. We are committed to making our research accessible by developing an interactive online dashboard showcasing seasonal forecasts, uncertainty ranges, and performance metrics at key locations.</small>
        </p>
        <p style="line-height: normal" class="m-0 pb-1">
            <small>This work seeks to help water managers, agricultural producers, and decision-makers better navigate an increasingly uncertain future. This project is led by Dr. Frances V. Davenport and PhD student Michael Talbot, in collaboration with Dr. Russ Schumacher (user engagement) and Dr. Pat Keys (moisture recycling analysis). The research supports broader goals in sustainable water management and climate resilience and will lay the groundwork for future studies across the Western U.S.</small>
        </p>
    </div>
</div>


<small class="float-end"><a href="../">Back to Research Projects</a></small>
