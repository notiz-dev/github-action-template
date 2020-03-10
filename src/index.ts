import * as core from '@actions/core'

function run() {
  const name: string = core.getInput('my-input');
  if (name) {
    core.debug(`Hello ${name}!`)
    return core.setOutput('my-output', `Hello ${name}!`)
  }
  core.setFailed('my-input not specified!')
}

run()
