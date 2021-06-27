---
tags: ["web dev","phisics"]
ThumbNailUrl: "/images/2D_Shadows.jpg"
Images: ["/images/2D_Shadows1.jpg"]
PostTitle: 2D lights
PostDescription : Inspired on AmongUs visibility dynamics
Author : Jaime González Fábregas
date: 2021-06-25
---

Hi there! Today im presenting one project of mine about light. Ive done raytracing before, but this time I didn't want to take the easy way out. I figured out there had to be a more elegant way to aproach the problem, and there is. 

The algorithm I've designed will draw the shadow of each wall independently, wich makes it decently fast I guess. Notice that the shadow gets less sharp when it gets away from the surface that casts it.

[Link to the project I'm talking about](https://dirigity.github.io/htmlProyects/2D_Lights/)

The above project is just a demo. This then was funther developed in this other game of mine. It is not a static webpage, it is a multiplayer game, so the link takes you to the Github repo. First download it and launch the server.js (mind the dependencies) and connect to the port 8000 from any computer nearby. 

The game is a 2D shooter, there are no score mechanics, it is just a fun lil' thing I did to entratain myself. :sweat_smile:

The assets where taken from the internet, but i may or may not have kind of forgoten from where, so look into the .ZIPs in the repo to find further information

WASD to move, click to shoot, if you die you will respawn swiftly

I hope you have fun or learn something!! 

[Link to the other project I'm talking about](https://github.com/dirigity/htmlProyects/tree/master/2dShooter)