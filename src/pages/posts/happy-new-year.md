---
layout: $/layouts/post.astro
title: An intro to Livecoding
date: 2022-12-31T10:23:31.210Z
image: ../../images/_DSC1844.jpeg
author: Nick Lewis
authorTwitter: nicklewis
category: livecoding
description: My first major topic of the year, livecoding, what is it, how can you get into it?
tags:
  - livecoding
  - coding
---
Happy New Year everyone! Hope you all had a lovely Christmas and have recovered from your NY celebrations?

![Follow the road!](../../images/_DSC2131-2.jpg)
One of my favourite photos from last year, was the one above. It was taken deep in the Surrey Hills as Autumn kicked in. I had to take it quite quickly, as I was either going to be run over by a bunch of thirsty cyclists or something else. They are lethal those cyclists!

I'll do a retrospective post soon of photography, so I shall come back to that suject another time.

Anyway, let's dive into the main subject!

Let's get down to it! Let's kick off the new year :-)

This year, I am going to write more about coding covering both visual and audio topics. So for today I want to introduce you to "livecoding" which in essence is the concept of coding on-the-fly, and quite often to share the experience with others. Just imagine writing code live on stage to perform music. Kind of DJ meets programmer, well that is literally what it is.

So far I've been learning about 2 different applications, Sonic-Pi and Tidal Cycles, the latter runs off another product called Supercollider.
## Sonic Pi
I'll leave this bit to Underjord and in future posts, I wlll jam for you ;-)

I love Sonic-Pi and I recently wrote about it on Substack but let me share what I wrote over there:

I feel as if I’ve been sitting under a rock for a decade. I’m a highly experienced software engineer/programmer/developer with a wealth of experience spanning pretty much close to three decades. Now that is a scary thought. I thought I knew about many things coding wise, well I clearly don’t. How on earth have I never come across SonicPi!

Turns out there are a whole host of other products much like it and I’ll come back to those.

SonicPi was created by Sam Aaron, who wanted to create a musical programming tool that would help teach school children and beyond. It’s now used by 1.5 million people from school age and professional artists alike.

I came across this tool via my Mastodon account, yes like many people, I have jumped ship from Twitter, though I’ve not shut down the latter. One of the people mentioned it and so off I trotted to YouTube, where I found a bunch of videos recorded by Sam and one or two professional performers who use SonicPi on stage.

<iframe width="560" height="315" src="https://www.youtube.com/embed/suH_goWVBeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/OLLwG_SN8oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/YvsoWehBbec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As you can see there are a lot of resources online for you if you want to get into it. However I want to give it a go, get my teeth properly into it.

### Lets give it a go
The first thing I did was to download SonicPi for my Mac, it came out on Linux originally but quite recently was released on Mac and Windows.

So I grabbed a copy from

https://sonic-pi.net/

Somehow after following the excellent tutorial, I created this:

```
use_bpm 60

live_loop :kick do
  sample :bd_haus, rate: 1
  sleep 0.5
end

live_loop :snare do
  sleep 0.5
  sample :sn_dolf
  sleep 0.5
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end

live_loop :bass do
  use_synth :prophet
  play :E1, release: 3
  sleep 2
end

live_loop :bleep do
  use_random_seed 123
  4.times do |i|
    16.times do
      use_synth :beep
      play chord(:E3, :minor).choose, attack: 0, release: 0.1, cutoff: rrand_i(50, 90) + i * 10
      sleep 0.125
    end
  end
end

live_loop :chords do
  use_synth :blade
  [1, 3, 6, 4].each do |d|
    (range -2, 2).each do |i|
      play_chord (chord_degree d, :e, :minor, 3, invert: i)
      sleep 2
    end
  end
end
```

In the above example we’ve 6 loops/tracks running in parallel, if you look at the start of each “live_loop”, they are assigned with a name and then within either use a synth or a sample and either slice elements of a sample or play a series of chords.

It gets very clever when you change the parameters for any of the above instruments in the code, to tweak the knobs on the synth. I noticed in some of Sam’s videos he’s connected controllers and external instruments such as a Moog or some DAW software to play virtual instruments you already own. Now that is worth exploring, as I’ve tonnes of those.

### Randomisation in music
One of the beauties of programming is that you can iterate (loop) through a series of values, you can randomise, you can mathematically adjust parameters, such as cutoff frequencies over a period of time. It’s a perfect marriage.

Here is another example:

```
live_loop :multi_beat do
  use_random_seed 2000
  8.times do
    c = rrand(70, 130)
    n = (scale :e1, :minor_pentatonic).take(3).choose
    synth :tb303, note: n, release: 0.1, cutoff: c if rand < 0.9
    sample :elec_hi_snare if one_in(6)
    sample :drum_cymbal_closed if one_in(2)
    sample :drum_cymbal_pedal if one_in(3)
    sample :bd_haus, amp: 1.5 if one_in(4)
    sleep 0.125
  end
end
```

## Tidal Cycles
<iframe width="560" height="315" src="https://www.youtube.com/embed/ji0OS9VqfU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Installation Supercollider and then Tidal Cycles
Setting up Tidal Cycles is beyond the scope of this post, it wasn't too difficult to set up, I managed it in the end! The following guide worked for me:

https://tidalcycles.org/docs/getting-started/macos_install/

It's worth noting that I already had Supercollider installed but the above script will install it.

The Atom editor has recently been sunset by GitHub, a new fork called Pulsar has been initiated but for me, I prefer to use Visual Studio Code but the choice is yours.

If you do decide on VSC, you'll need to install the extension for it, which you'll find via the etensions panel in VSC.

So there is a bit of pain involved here in terms of set up but it's worth it in the end.

Let's get the whole thing up and running!

### Step 1 - Running Supercollider
Having started Supercollider, you'll need to launch Superdirt the sound module that Tidal mostly uses, though it's possible to use others I believe, I haven't progressed that far yet.

Type the following in, to launch it:

```
SuperDirt.start;
```


### Step 2 - Launch VSC and create a Tidal file

```
d1 $ s "bd sd"
```
Place the cursoe on the first of the above lines and press CMD+Enter and you should hear a beat playing.
Then to stop it, place the cursor over hush and CMD+Enter to silence it.
Launch the music!

Something more complex


```
do
  d1
    $every 4 (rev)
    $sometimesBy 0.2 (slow 2)
    $sometimesBy 0.8 (jux (iter 8))
    $stack
    [
      sound "ifdrums(3, 8, 0)",
      sound "bd(3, 8, 3)",
      sound "glitch(2, 8)"
    ]
    #n (irand 64)
    #pan (rand)
    #lpf (rangex 800 18000 $slow 4 $sine) #resonance "0.2"
    #delay "0.3" #delaytime "1.125" #delayfeedback "0.5" #lock 1
    #gain "1.3"
  d2
    $sometimesBy 0.3 (jux (rev))
    $sometimesBy 0.2 (slow 2)
    $s "supersaw(3, 8)"
    #note "c4'sus4"
    |+| note "[0, 7][7, 14][14, 21][7, 0]"
    |+| note "[0, 7, 12]"
    |+| note "0"
    #lpf (range 1000 8000 $rand) #resonance "0.2"
    #sustain "0.08"
    #gain "1.0"
    #room "0.1" #size "0.4"

    hush
```
### Recording music to audio files
### Some examples to whet our appetites
The simplest example, is a drum pattern comprising of bass and snare drums.

### Mutable Instruments
I was sad to learn that MI are going to close down as a business, for they make a range of Eurorack modules that have been popular with many people. I've been using the software versions with VCV Rack. Recently they've been open-sourced by the founder of MI, so it's possible to use them in conjunction with Supercollider (and by definition, Tidal Cycles). The following Soundcloud embed is courtesy of Volker Bohm and demonstrates what's possible.

<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1036454155&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/geplanteobsoleszenz" title="Volker Böhm" target="_blank" style="color: #cccccc; text-decoration: none;">Volker Böhm</a> · <a href="https://soundcloud.com/geplanteobsoleszenz/sets/mi-ugens" title="mi-UGens" target="_blank" style="color: #cccccc; text-decoration: none;">mi-UGens</a></div>

I've tried installing the plugins but have had no success yet, something to come back to when I've a little more time.