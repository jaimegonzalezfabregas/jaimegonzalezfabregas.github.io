---
tags: ["web dev"]
ThumbNailUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.mirror.co.uk%2Fincoming%2Farticle7377328.ece%2FALTERNATES%2Fs615b%2FEnigma-machine.jpg&f=1&nofb=1"
Images: []
PostTitle: Decoder
PostDescription : Enigma's lil brother
Author : Jaime González Fábregas
---

Im sure you've hear about [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher), but you can go one step further. Instead of relating each letter with other one with a given offset you can scramble the abecedary to get a harder encription.

| Abecesary       | Caesar 3    | Scrambled    |
| :------------: | :----------: | :----------: |
| a | d | q |
| b | e | w |
| c | f | e |
| d | g | r |
| e | h | t |
| f | i | y |
| g | j | u |
| h | k | i |
| i | l | o |
| j | m | p |
| k | n | a |
| l | o | s |
| m | p | d |
| n | q | f |
| o | r | g |
| p | s | h |
| q | t | j |
| r | u | k |
| s | v | l |
| t | w | z |
| u | x | x |
| v | y | c |
| w | z | v |
| x | a | n |
| y | b | m |
| z | c | b |

(btw, the resulting encryption is very week for modern standars)

To try to crack these types of encryption, it is used a fequency analysis, wich is what my algorithm does, so if you want you can go to an online encryptor, get a encrypted book and put my system to the test. 

(It will probably not work without big chunks of text)

[Link to the project I'm talking about](https://dirigity.github.io/htmlProyects/decoder/)

