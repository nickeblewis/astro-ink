---
layout: ../../layouts/post.astro
title: 'Javascript - Removing duplicates in an array'
description: "Recently I came across a situation where this was necessary. The data being pulled in from the API contained a lot of duplicates."
image: /images/js.png
date: 2022-08-06T11:37:00.000Z
top: true
tags:
  - javascript
---

Recently I came across a situation where this was necessary. The data being pulled in from the API contained a lot of duplicates. So to give you an example:

```js
[{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]

```

There are two items in the above array that are the same, my data was worse than this with many duplicates, so came up with the function that looked like this:

```js
const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]

const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))

console.log(filtered)
```

This can be adapted as needed but it would return, a reduced array with just one of each item, not multiple copies of them.