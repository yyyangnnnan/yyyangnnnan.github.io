import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
//常用命令
const cyml = defineNoteConfig({
  dir: '命令查询',
  link: '/命令查询',
  //sidebar: 'auto'
  sidebar: [
    { text: '命令查询', link: 'README.md' },
    { text: 'Linux常用命令', link: 'Linux常用命令.md' },
    { text: 'Linux命令速查', link: 'Linux命令速查.md' }
  ],
})

export const notes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [cyml],
})
