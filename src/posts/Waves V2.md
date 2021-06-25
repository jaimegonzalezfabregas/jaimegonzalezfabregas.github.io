---
tags: ["web dev","phisics"]
ThumbNailUrl: "/images/OndasV2.jpg"
Images: ["/images/OndasV2_1.jpg","/images/OndasV2_2.jpg","/images/cropedFluidSimLoRes.gif"]
PostTitle: Waves V2
PostDescription : Improved gas like simulation
Author : Jaime González Fábregas
date: 2021-06-25
---

This is the continuation to my other fluid dinamics automata simulator. The other project was based on a grid structue, what caused problems with the shape of the waves, the best I managed to do was to make them octagonal. The new fluid engine instead of using just a grid it uses particles. The particles live in a grid, that way we can aproximate calculations by considering every particle in each cell to be the same particle. You'll see what I mean just in a second:

Phenomena It can simulate:

- Viscosity (internal drag): Each simulation tick I calculate the overall speed of a certain cell, then I modify the speeds of the individual particles in that cell and the cells near it to match the overall tendency. That way particles "stick" to each other.
- External drag: This is the easiest phenomena to simulate, just take every velocity and bring it down slightly per simulation tick
- Preasure: To simulate small scale preasure I introduce brownian movement. At a big scale I calculate the preasure per cell, if it is bigger that what it should be I apply at outwards force to all the particles of this cell and its sourroundings, if it is lower I do the oposite. 

I am aware that this way of computing is far from reality, but this technics allows me to easily run on realtime while still getting a somewhat realistic resoult  

I also would like to note that the grid thing creates artefacts when left untoched for a long time. This is due to a miscalculation of presure, where i spect to there be a lower amount of particles at the borders. A photo of the artefacts is up in the galery and you can see them for your self if you click the link below.

[Link to the project I'm talking about](https://dirigity.github.io/fluidSim/)

