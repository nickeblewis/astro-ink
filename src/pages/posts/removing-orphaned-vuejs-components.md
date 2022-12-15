---
layout: ../../layouts/post.astro
title: 'VueJS - Removing dead code from your VueJS project'
description: "VueJS projects grow over time and more often than not we end up with old component files that are no longer needed. How can we identify them in one go?"
image: /images/pierre-bamin-5h9f1dqE8XM-unsplash.jpg
date: 2022-08-23T10:23:31.210Z
tags:
  - javascript
  - vuejs
---

Whilst refactoring a VueJS project today, I became aware that we've got quite a lot of component files, knowing that some are no longer needed, surplus to our needs. The thing is, how could I identify them? I could go through each file, scroll down to the imports section and find out that way, but to be honest, what a long winded way of going about it, especially in a project of this size. 

I had a look around and came across a handy NPM tool that you can install globally.

```bash
npm install vue-unused-components-checker -g

```

Then navigate to the folder where your project resides and issue the following command:

```bash
check-unused-comp .
```

Low and behold it listed the files I probably needed to delete from my project or refactor in some way.

You can also search specific directories within your project and limit the output to a certain number etc.

[Install the tool via NPM](https://www.npmjs.com/package/vue-unused-components-checker)

[Cover image courtesy of pierre-bamin via unsplash](https://unsplash.com/photos/5h9f1dqE8XM)