---
tags: ["web dev","3D"]
ThumbNailUrl: "/images/Molecube.jpg"
Images: []
PostTitle: Molecube
PostDescription : My first "3d" engine
Author : Jaime González Fábregas
---

The molecube is a puzzle that could be mistaken for a rubik cube but in fact the goal of it it completly the oposite. The goal for this fiddle is to make every color apear only once per face. At first my plan was to create a program to wich you could input your configuration and it would resolve it for you, buy that plan was to ambitious. After I was done with the interface I gave up on the logic. Any way I belive that the interface was a full project on each own. 

At the time I made this I had just started with 3D. Something I'am really proud of about the graphics is that I was the one to program the full 3D engine. I had to came up with the trigonometry and such with just a piece of paper and with some asumptions I made up about how light works (of course no hardware acceleration is used, just old trusty circles in a canvas). That is enough explanation, lets get to the "fun" stuff: 

How to navigate the cube:
- Arrow keys to rotate
- Click a ball to select
    - If the ball is in the middle use A-D to turn that face
    - If the ball is not the middle use A-D to change its color
- W-S to move forward and backwards
- X will reset the camara with the sickest of animations

That is basicaly it, feel free to dive into my code (wich is inside the html file) to see it for your self.

[link to the project I'm talking about](https://dirigity.github.io/htmlProyects/Molecube/)

My father, after seeing what I was after, progamed his own thing (wich may or may not be much better than mine😅)

[My father's proyect](https://alvarogonzalezsotillo.github.io/blog/resolver-molecube-en-prolog/)
