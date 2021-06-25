---
tags: ["web dev"]
ThumbNailUrl: "/images/iso_patience.jpg"
Images: []
PostTitle: Iso-patience
PostDescription : Undertale's minigame recreation
Author : Jaime González Fábregas
date: 2021-01-01
---

I belive to have discovered the best combination of lenguages and techniques. Right now I belive that I wont be able to find any better configuration to create apps. Let me explain myself. It recently came into my knolidege a new "concept/workflow/IHonestlyHaveNoIdeaWhatToCallIt" to boost web client performance, namely **web assembly**. This made me drop my Angular course to learn this new tecnology. It delivers what it promises. You can achieve incredible performance, close to native, just with this upgrade. But this is not all. You can combine WASM with the standar JS multithreading with web workers to get even more performance.

On other post I talked about my project "Ice-o-matic", where the main restriction is performance. This would completely fix that problem, allowing me to be more ambitious in the future.

In fact, as a prove of concept I made the following game:

The idea for the game is from [UnderTale](https://undertale.com/), it is explained on [this](https://youtu.be/v7nlXgDjCY8?t=341) gameplay segment. I would say it is one of the funnyest moments on videogame history, but without the back story of Papairus(the tall skeleton) it may not be as funny. You can judge it for yourself.

In my game instead of making a random board I create as many as I can and pick the best, wich makes it to resource heavy to run on JS. Also the next boards are being calculated on the background while you play by a web worker, that way you never have to wait. I also created a options screen to modify the dimensions of the board.



I didn't include all the colored tiles, only the ones I think make sense on a game on its own.

grey = nothing
blue = water
yellow = electric
purple = slipery
orange = orange flavour

Use the arrow keys to move. The key S will show the solution and if pressed again it will transport you to the next level (the solution sometimes desyncs, so bear that in mind).

[Link to the project I'm talking about](https://dirigity.github.io/IsoPatience/)

