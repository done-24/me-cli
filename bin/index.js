#! /usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
const argv = require('minimist')(process.argv.slice(2), {string: ['_']})
const prompts = require('prompts')
const { yellow, red } = require('kolorist')

const cwd = process.cwd()

async function init() {
  let result = {}

  try {
    result = await prompts([
      {
        type: 'text',
        name: 'meaning',
        message: 'What is the meaning of life?'
      },
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        }
      }
    ])
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  console.log(result)
}

init().catch(e => {
  console.error(e)
})