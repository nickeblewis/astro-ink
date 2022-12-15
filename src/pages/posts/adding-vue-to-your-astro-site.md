---
layout: ../../layouts/post.astro
title: Adding Vue to your Astro based site
description: Learn how to add more than one framework to your Astro site as I needed to do just this recently
image: /images/vuejs-logo.png
date: 2022-09-06T10:23:31.210Z
tags: 
- astro
- Vue
- programming
---
One of the super-powers that Astro has, apart from being super fast in it's rendering, is the ability to mix front-end frameworks. Many of it's rivals, only allow the use of one framework at a time and for me that was getting a bit tough, as in my line of work, I get to work with various frameworks. I am working with Vue nowadays more than any other but Gridsome, a great project in it's own right, isn't moving forwards. Gatsby is incredible but that is tied to React.

So I was very excited when Astro came along and here we are, I've chosen it as the backbone of this website.

## Lets add Vue
```bash
yarn astro add vue
```

Modify your ``astro.config.js`` file

```js
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';
import lit from '@astrojs/lit';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [react(), preact(), svelte(), vue(), solid(), lit(), alpine()],
});
```
The above is an example and you'll only need to add the ```import``` directive for Vue, followed by the ```vue()``` reference in your integrations. leaving your config file as it is otherwise.

Now to test that this new integration works.

## Build a Vue component
I decided to add a new component to my components folder called ```Test.vue```, which looks like this.

```js
<script>
  export default {
    data () {
      return {
        count: 100,
        name: 'Test',            }
      }
  };
</script>

<template>
    <p>We have {{count}} biscuits left</p>
</template>

```
## Add a new page
Then I created a new page called ```testpage.astro```, which looks like this

Next we want to add this to an existing page, such as one of my posts, which are under ```post.astro```

```js
---
import Test from '../components/Test.vue';
---

<Test />
```

I've pushed my example up to the server, so click on [this link](https://nicklewis.blog/testpage) and you'll see it. A simple example but now, I can write components for this site using Vue which is essential, as I will be writing about it a lot here and want to share some examples!

## Where from here?
Well, the sky is the limit, I would like to build some components, some specifically for this site and others that you could use.

I want to add a sound component for playing audio files which will include a transport, a track position slider and some other features. That I can build using Vue and then can import it wherever it's needed in the content.