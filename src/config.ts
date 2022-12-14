import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/posts',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Nick Lewis',
    title: 'Nick Lewis - Developer',
    description: 'Javascript, Pixels, MIDI',
    url: 'https://nicklewis.blog',
    githubUrl: 'https://github.com/nickeblewis/astro-ink',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
