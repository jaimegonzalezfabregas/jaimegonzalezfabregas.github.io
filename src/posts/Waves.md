---
tags: ["web dev", "physics"]
ThumbNailUrl: "/images/Ondas.jpg"
Images: ["/images/Ondas1.jpg","/images/Ondas2.jpg","/images/Ondas3.jpg"]
PostTitle: Waves
PostDescription : A celular automata aproach to physic simulation
Author : Jaime González Fábregas
---

This phenomena that I have simulated is a very complex one, therefore to wrap my head arround it I started with a lilte 1D project.

1D usage:
- click whereever to force the level on that x position to the height of your mouse. 
- release click and watch
- you can click at any moment anywhere

[1D version](https://dirigity.github.io/htmlProyects/ondas/1d.html)

Once I properly understood the simulation I developed a new 2D version

2D usage:
- left click will create a dip that will evolve into a wave.
- right click will switch between shaded mode and depth mode:
    - **shaded**: darker tiles mean that their are looking away from the light source.
    - **depth mode**: black = 0, green = valey, red = mountain.  

You will be able to see that the 2d version doesnt have perfect circular waves, they have a octogonal shape to them. This is because the celular automata part. As my cells are squared you get octagons. I'm planing a fix for this in the future, but for the moment I'm happy with what I learned.

[2D version](https://dirigity.github.io/htmlProyects/ondas/2d2d.html)