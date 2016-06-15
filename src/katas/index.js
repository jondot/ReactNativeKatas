import React from 'react'
import { Runner } from '@/runner'
import bundle from './bundle'

// For tinkerers (or if you completed everything):
// Set this to a number from 0 to bundle.length to
// forcefully start at a kata you want. Every kata
// that is fulfilled will be advanced automatically.
const index = 0

export default ()=> <Runner {...{bundle, index}} />
