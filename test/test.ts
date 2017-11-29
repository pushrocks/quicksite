import { tap, expect } from 'tapbundle'

// import the module to test
import * as quicksite from '../ts/index'

import * as path from 'path'
let testprojectDir = path.join(process.cwd(), './test/testproject/')
let testDocsBinder: quicksite.DocsBinder

tap.test('should create a valid DocsBinder', async () => {
  testDocsBinder = new quicksite.DocsBinder()
  expect(testDocsBinder).to.be.instanceOf(quicksite.DocsBinder)
})

tap.test('should read a directory of docs', async () => {
  await testDocsBinder.readHandlebarMarkdownFromDir(testprojectDir)
})

tap.start()
