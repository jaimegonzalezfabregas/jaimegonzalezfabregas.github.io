---
tags: ["web dev"]
ThumbNailUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Sherlock_Holmes_Portrait_Paget.jpg"
Images: [""]
PostTitle: Word predictor
PostDescription : Based on some random S. Holmes book found on P.Guttemberg
Author : Jaime González Fábregas
---

There is this thing with mobile phone's keyboards wich is preaty neat. They will try to guess what word comes next. That is not only a concerning provacy flaw, but also good inspiration for a lilte program. The premise is that you write in a text input and the program tries to guess what key you will press next. 

On load my program will read and analize the whole book and create a probability map for every leter convination, this will lag mayorly when the page loads, you have been warned. The book used was a random Serlock Holmes book form [project guttemberg](http://www.gutenberg.org/)(wich btw is in English).

This is a web version of a c++ program I made that works with prebaked reguexes that goes much faster. That other program works with full words instead of individual leters using data from multiple books. The web version uses only one book and is based on leters, this means that there are many cases it doesn't know what to say.

Just an explanation on what you will see: In my program you can see bellow the input the prediction. '#' means that it has no idea what you are talking about.Anything else is a prediction. My program also only looks for the last few leters (the ones underlined), so don't even think about coherency. 

**WARNING: SPECT GIGONOURMUS LAG SPIKE ON LOAD**

[link to the project I'm talking about](https://dirigity.github.io/htmlProyects/Predictor%20de%20latras/)
