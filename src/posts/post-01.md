---
tags: ["web dev","11ty"]
ThumbNailUrl: "/images/EleventyLogo.png"
Images: []
PostTitle: My first blog post
PostDescription : This is my first post in my blog
Author : Jaime González Fábregas
---

I've finaly decided to create my very own blog. I plan to post the little thinks I do from now on, but I`ll probably also update it with the thigs I've done in the past. 

This blog is "powered" by eleventh (11th), which is a template engine designed for static webpages. I've just started using it, so i'm not an expert yet. So far I've had to solve some interesting problems. I'll name them here and coment on my solution so that new people can get inspired for their own projects:

The galery on your screen is kind of a big achievement. 11th comes with its own template language( wich would be lauched on build time), but i was not able to find enought documentation to get a simple for loop going. This is why I had to resort to client side javascript to dinamicaly build the galery in the browser from the data that I'm able to extract from 11th.

11ty comes out of the box with a watchdog type server that will detect changes on the source files and will rebuild your files. The problem with it is that it will only update when some specific files were changed (namely .html, .md, .liquid). Specificaly .css were left out. It was a real pain to have to go to other file, save it, and then go to see how the css had changed the web page. The build times are very very fast, so changing of file was 50% of the proces. To fix this I now use some code really similar to the following:

```
find . -path ./src/node_modules -prune -o -print | entr sh 'npx eleventy';
```
I'm not gonna expain what it does, but it is just a line of code, I trust you can handle it.

I also needed to use a server to host localy my page because i'm working inside wsl, but that is maybe to specific and will not apply to your case.

As a conclusion I'd like to stress how much i do recomend eleventy. I've read about other static page generators (jekill, hugo, orgmode and such...) but as far as I know eleventy is better than all of them in build speed (maybe not better than hugo, but I haven't done any testing) , wich is an incredible adventage when messing around with css of third party code you may or may not understand. 