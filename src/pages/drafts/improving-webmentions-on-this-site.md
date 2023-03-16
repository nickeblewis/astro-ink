---
layout: ../../layouts/post.astro
title: Improving webmentions on this site
description: I spotted an amusing bug with my webmentions on the site, where a person appears to be doubling up
image: /images/double-david.png
date: 2022-09-09T10:23:31.210Z
tags: 
- astro
top: false
draft: true
cover: true
---

It looks like David has liked my article twice which is not possible, you can only like a tweet or a post on this site once. In reality what is happening here is that it's picking up a like and a reply. So some changes are needed.

I want to show likes in this format but I want to add replies as messages displayed below, ideally in a chat style, errr, style. So here is a bit of background on how webmentions work and how I ended up solving this problem.