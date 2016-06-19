# Kata Builders

Making a kata can be easy and fun. It consists of two steps:

1. Come up with an idea, and draw an invisible thread for the student to
   follow
2. Technically make the kata

## Kata Think

A few pointers to guide you for creating a fun kata:

1. There will be a moment when you think "Is this too easy?", err on the safe side, better too easy than too hard
2. It is not only OK to repeat subjects practiced in previous kata, it's recommended since it promotes [spaced repitition](https://en.wikipedia.org/wiki/Spaced_repetition).
3. Use `// TODO: ` as a virtual breadcrumb for the student to follow when needed.
4. Don't be cheap on hints (see (1)).
5. And finally don't make a kata too long :)

## Creating a Kata

RNK comes with a generator for katas. To make a new one run:

```
$ scripts/new-kata
Usage: new-kata SUBJECT NAME COLOR-INDEX
Example: new-kata flex AlignAllLeft 7
```
The color index is just a number smaller than 12 (because that's the pool of hand-selected background
color we have). Just pick a number you didn't previously pick so that when katas run it will be cheerful.

After you've run the generator, you will want to use the kata (you'll get the following output help text):

```
// in src/katas/bundle:

const bundle = [
  [
    kata(FillAllTest, FillAll),
    kata(${name}Test, ${name}),
    // ^--- add this
  ],
...

import {${name}Test, ${name}} from './${subject}/${name}'
//^--- add this import
```

The file you will edit is [src/katas/bundle](../src/katas/bundle). The bundle
is simply the central file in which all practical katas are imported into,
and also holds the ordered array of katas.

The `kata` function is a utility function for sprinkling the magic sauce that
makes katas validate if they match or not.


To make kata development much easier, you'll want to do two things:

1. Initially add it as the first kata. This way you don't have to go
through all others before hitting yours.
2. Build the solution first, then invert. If your kata is named "Spacing":

```
  // Test should come first, but for working on the kata, invert:
  kata(Spacing, SpacingTest),
```

When done:

1. Move the kata to where you want it in the bundle
2. Properly order the test and katas:

```
  // Test should come first, but for working on the kata, invert:
  kata(SpacingTest, Spacing),
```

That should be it. Happy kata building!


## Adding Katas to RNK

If you're asking yourself about where to put your newly created katas,
then you're more than welcome to push it into React Native Katas - submit
a pull request.

If you're having trouble adding katas, please [open an issue](https://github.com/jondot/ReactNativeKatas/issues) and I'll make sure to pass that hurdle along with you.



