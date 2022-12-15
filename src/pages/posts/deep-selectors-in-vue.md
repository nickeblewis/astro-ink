---
layout: ../../layouts/post.astro
title: Deep Selectors in Vue
description: What are deep selectors and how to use them in Vue scoped SASS
image: /images/vuejs-logo.png
date: 2022-09-09T10:23:31.210Z
tags: 
- Vue
- CSS
- SASS
top: false
draft: false
---

I wanted to write a few really brief posts where I pick just one subject about Vue or other similar topics. Let's start with Deep Selectors and how they work in the Vue framework.

Let's say you wanted to write a CSS selector to effect child components, you'd write something like this:

```css
<style scoped>
.a >>> .b { /* ... */ }
</style>
```
Which is compiled as:
```css
.a[data-v-f3f3eg9] .b { /* ... */ }
```

However ``scoped`` SASS isn't able to interpret this syntax, so in Vue there is an alias you can use:

```css
<style scoped>
.a::v-deep .b { /* ... */ }
</style>
```

Or alternatively you can use, based on your preference

```css
<style scoped>
.a /deep/ .b { /* ... */ }
</style>
```

