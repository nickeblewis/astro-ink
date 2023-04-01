---
layout: $/layouts/post.astro
title: Jungle Drums, Tidal Cycles and IPFS 
date: 2023-04-01T14:26:31.210Z
image: ../../images/_DSC1844.jpeg
author: Nick Lewis
authorTwitter: nicklewis
category: music
description: Tidal cycles is great, just great for creating all sorts of musical patterns
tags:
  - music
---

```
let
setbpm x = setcps (x/60/4)
_add :: Time -> Pattern a -> Pattern a -> Pattern a
_add t value pat = slow (pure $ 1+t) $ timeCat [(shift,pat),(1-shift, value)]
                where shift = 1 / (t + 1)
add :: Pattern Time -> Pattern a -> Pattern a -> Pattern a
add pt x y = innerJoin $ fmap (\t -> _add t x y) pt

setbpm 160

all $ timeLoop 4 . (rotL 4)

all $ id

d1
$ while "t(4,16)" (|+ krush 1)
$ while "[0 | 1]*16" (superimpose (plyWith 4 (|* speed 1.25) . slow 2))
$ layer [id
        ,\x -> degradeBy (segment 16 perlin)
            $ slow 2
            $ x
            # speed 0.75
            # shape 0.1
        ,\x -> add "[0.5 | 0.25]*4" (s "jungbass:1" # speed 0.8 # shape 0.2 # krush 2)
            $ x # speed "[2 | -2]*8"
        ]
$ s "[drum drum:1 [~ drum] drum:1, drum:3*[[8 | 16]*4]]"
# krush 2

hush
```

Tidal Cycles is back as some people were asking about it and today’s example makes use of some cool syntax, that I am going to walk you through in a future post,

<audio controls>
  <source src="https://ipfs.io/ipfs/QmXJiUdMxqcZc4prxKweGKxfPxa7dsNf3SJXkMLw1TkFYZ?filename=SC_230331_222907.wav" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>