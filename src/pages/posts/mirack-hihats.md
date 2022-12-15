---
layout: ../../layouts/post.astro
title: Modular Synths, just one concept at a time
description: I am looking at building up my music “studio’ further in the future but what will it look like? What do I want to get out of it? What do I want to learn and discover?
image: /images/4e7dfe3d-fd4f-4167-ac53-61b62565a968_2388x1668.png
date: 2022-09-05T10:23:31.210Z
tags: 
- music
- modular
top: true
video: https://youtu.be/oOrdDuySLXg
---

I enjoy learning and then teaching other people both my old and new knowledge with some interesting responses along the way. Many old colleagues of mine know I like to learn, sometimes through trial and error. After all that’s what programming is all about, whether I’m writing JavaScript code or messing around with modular synths, which I’m delighted to say is the focus of this newsletter issue today.

I will talk more about the studio at the end, but first, I’ll talk you through how I built the patch in the video, plus some ideas for how it could be evolved.

## What the Bernoulli?
The video above, you may have already watched it or perhaps you prefer to read the text first, video after; demonstrates how you can take a hi-hat pattern (rhythm) and create a tool to vary it.

So I fired up MiRack on the iPad which is based on the Eurorack modular systems you can physically build, you will have seen these in performances and concerts, if you are anything like me, an EDM geek!

The software (virtual) equivalent of the hardware is stupidly cheap at £12, whereas to build a physical version it can cost thousands! So it’s great that I can experiment freely in the virtual environment without worrying about spending a lot of money on real modules. I hope to buy the real thing though but the plan is to gain an understanding in software first, to establish which modules I’d buy and that I’ve got some template patches to use as reference points.

For the video; My aim was to create a closed hi-hat pattern with a bit of variation to it and I used a Bernoulli Gate for the task and ended up chaining 3 of them together.

Let’s zoom in on these, here is a picture of what they look like:

![](/images/4e7dfe3d-fd4f-4167-ac53-61b62565a968_2388x1668.png)
There are 3 above, each has an input, two outputs and a rotary dial. So what I’ve done here is to feed my sequencer’s output into the first Bernoulli and the dial has determined that output A will be more likely, not much, than the B output. These two outputs feed into the other two gates which in turn work in the same way.

All of the gates are connected to the four drum modules, so what happens is they all play in time but with each hit, the sound is randomised. So one moment we hear an 808 beat, then a 909 or we can play the same sound each time but with a different level output, yo provide a humanised velocity across all notes played.

The outcome being a more interesting hi-hat pattern. I demonstrate in the video how these parameters could be tweaked in a performance to create lots of interesting outcomes in the music but they could be programmed too. I shall get on to that in future newsletters.

We could of course take this concept even further by building up the system to include other sound generators, effects and a whole lot more. So we shall come back to this to share some more ideas.

## Studio building
I want to keep it small because my office will double up as the studio, so most of the gear needs to be desktop sized. If needs be I would look at swapping my desk for something different, to accommodate a larger number of instruments plus my regular computer setup for work.

### What do I have right now?
My MacBook Pro, this iPad from which I’m writing this newsletter and an old Yamaha Keyboard. I plan to sell the Yamaha and replace it with an Arturia Keystep Pro which right now will work with the iPad and Mac via a MIDI connection. Then I will start expanding from there with an Audio Interface, monitor speakers and my first piece of modular/semi-modular hardware but what will that be? That’s the question!