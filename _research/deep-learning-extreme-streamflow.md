---
title: Improving deep learning predictions of extreme streamflow
status: ongoing
last_updated: 2026-10-05

thumbnail: /assets/images/research/deep-learning-extreme-streamflow/st_john_river_flood_2008_usgs.jpg
thumbnail_alt: "A green steel truss bridge with muddy floodwater rushing just beneath its deck. Credit: M. Huard, USGS (public domain)"
thumbnail_caption: The St. John River at Fort Kent, Maine, during the 2008 flood, the highest flow recorded at this USGS streamgage. (Photo by M. Huard, USGS)
summary: Deep learning models predict streamflow remarkably well on average, but struggle with the rare extremes that matter most. We are investigating why, and how to close the gap.

feature_image: /assets/images/feature/st_louis_flood_1993_nasa.jpg

members: [Mike Talbot, Frances Davenport]
study_areas: [Contiguous U.S.]
---

## Can better training data help deep learning models predict the largest floods?

Deep learning models, particularly Long Short-Term Memory (LSTM) neural networks, have become some of the most accurate tools available for predicting streamflow. But they systematically underestimate the largest flows, and the problem gets worse as floods get rarer. In this project, we ask whether this can be improved by changing the data a model learns from, rather than the model itself.

## Why is this important?

The largest floods are the rarest events in the streamflow record, and they are also the ones that matter most for protecting people and infrastructure. As deep learning models are increasingly used for flood prediction, a model that performs well on average but falls short during the biggest events can give a false sense of confidence. Understanding where that shortfall comes from is a necessary step toward models that can be trusted when the stakes are highest.

## How are we answering this question?

We train LSTM models on daily streamflow from hundreds of watersheds across the contiguous U.S. and compare how well they predict peak flows under different training strategies. We focus on two possible causes of the problem. The first is that large floods are rare, so a model sees few examples of them during training; we test whether giving those examples more weight helps. The second is that averaging precipitation over a whole watershed can hide the intense, localized rainfall that drives many floods; we test whether more detailed precipitation information helps.
