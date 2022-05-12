# Testing Practices

A big part of development in companies it to write tests.
Sadly you can basically only learn it on your own.
I will try to make your reading time worth it.

I will address 3 topics here unit-testing, e2e-testing and TDD.
My goal for this repo is to provide my insights that go beyond the commonly available knowledge.
But, I will at least provide you with links to what I consider commonly available knowledge.

> The main focus of this is still for the frontend, but most of it can be applied for the backend as well.

## Unit testing

Unit testing is a skill that takes time to develop.
There are more nuances to this skill than it might seem at the first glance.
I hope to simplify a bit by the code examples.

### Different unit testing test structures

I tried to map different techniques to levels of difficulty.
They depend on the previous difficulties and especially in the higher levels you can combine them together to get more complex variations.

- L0: getting familiar with test structures
- L1: depending on other classes (dependency injection)
- L2: depending on other classes which are instantiated within the unit
- L3: having a beforeEach function that requires some input to get started (like a url)
- L4: multi level describes
- L5: async tests
- L6: automate test creation with json

### Different frameworks

Now for JS unit testing there are three main frameworks for testing

- mocha
- jasmin (default angular)
- jest (default react)

As this is a long discussion on its own, here a post that outlines the differences: [Comparing the top 3 Javascript testing frameworks](https://dev.to/heroku/comparing-the-top-3-javascript-testing-frameworks-2cco#:~:text=Mocha%2C%20Jest%2C%20and%20Jasmine%20are,and%20documentation%20available%20than%20Jest.)

If you are not interested in reading the entire article, here the TLDR:

> use what ever testing framework your project comes pre equipped with as they are pretty much feature equivalent and can all do the same things.

### What parts of the code do you actually test?

- Only contracts not implementation!
  - Get away from the idea of testing functions, you should only test contract that a function should resembles.
    The contract of a function describe the rules of behavior (given input X, output Y can be expected).
    Usually results in the same tests, but its a different mindset.
  - You will not be tempted to write tests that make it hard for your code to change.
- only public members!
  - never ever make a function public to test it!!
  - never ever check if a private attribute has a specific value!!
- one context (usually one class)
  - if you split a class into sub classes, because it became to big, then thats an implementation detail and the sub classes are to be tested with the parent class!
  - this allows to refactor your code. If you do not follow this approach, you create bridle unit tests which make it hard to refactor your code

### What should you consider when creating a unit test?

- each test must be independent of each other.
  - so make sure to always clean up after each test
- it is only a unit test if it can run machine independently.
  - so no dependency to a database, file system or any other external systems
- each unit test should contain all the information needed to reason about it.
  - Unit tests are tests, but they are also the most accurate system description you have.
  So, it is important to keep all the relevant information for a given test in the test itself.
  Setting up the test is a special case, but as this is the same procedure for all tests, it is fine to have this in a separate function.
  But there are times where the setup depends on test data (see test-structure-L3)

### Interesting observations

When you write unit tests and it is complicated to even setup the test, then you know that you probably have bad design.
So, unit tests can be a measurement of you application design.
Components that are complex to prepare to test them usually are a good spot to look for refactoring opportunities.

## E2E testing

Not all scenarios can be addressed with unit tests.
In such cases E2E tests come into play (I know that there are also integration tests, but we talk about frontend here).

Now the main difference is that we are now no longer looking at isolated contexts, but rather at the entire system.
Therefore, we also depend on other systems in such test cases, like database, file system or other external systems.

### What is part of an e2e test?

- mimicking user behavior

### What should you consider when creating e2e tests?

- make sure the tests are language agnostic
- use data-test attributes in your html to decouple the tests from id and class attributes
- create page objects so that you can reuse selectors and to make your tests more readable

## Test Driven Development (TDD)

You might have heard the phrases "Write tests first and then implement it" or "Red - Green - Refactor" in combination with TDD.
Even though this sound great, what is mostly lacking is how to acquire the skill of writing a test first.
It is surprisingly hard at the start and the examples given in talks are usually fairly simple.
I really forced myself to learn it and here are some of the key insights I want to share with you to A) get into TDD and B) not make the same mistakes as I did.

### How to get started?

From a learning perspective it always makes sense to reduce the cognitive load for a given task and then continue from there.
When considering TDD, there are the following steps for one cycle:

1. come up with a scenario that you want to test
2. write a suitable test for it (Red)
3. implement it (Green)
4. make your code look nice (Refactor)

At least for me the first part was really difficult at the start.
It was even more so when the thing that I wanted to tests did not yet exist.

**My leaning to get started is**: Use Bugs to improve your TDD skill.

A bug usually has a clear context and we already know what the outcome should be.
Just pick an easy bug from your backlog that can be unit tests (not something like 'the color is wrong') and try it out.
The benefit here is that step 1 is already completed and we only need to write the test in a way that reflects what we expect.
Hence reducing the cognitive load to learn TDD.

### What should you test via TDD?

- acceptance criteria
- units (do not use integration tests as much as possible)

### What is the core benefit from my point of view?

1. you guarantee that the acceptance criteria are met
2. you have a much bigger change of designing your code in a simple way

What do I mean with the second statement?

When you think how to test a unit first, then the interface of the unit automatically is cleaner, compared to writing the tests afterwards.
The main reason being that you think of the interface first and then implement it (while normally you think of the implementation first).

### Why should you do it?

There are plenty good resources out there that explain in great detail what other benefit of TDD there is.
Therefore, I will not repeat what others explain so well.
But here are some good talks if you are interested:

- [TDD Revisited - Ian Cooper - NDC London 2021](https://www.youtube.com/watch?v=vOO3hulIcsY)
- [🚀 Does TDD Really Lead to Good Design? (Sandro Mancuso)](https://www.youtube.com/watch?v=KyFVA4Spcgg)
- [Test Driven Development in Vue with Cypress by Josh Justice](https://www.youtube.com/watch?v=MU7K_V6rFjM)

## Integration tests

You should not write integration tests (in most of the cases).
A good explanation is this: [🚀 Integrated Tests Are A Scam (J.B. Rainsberger)](https://www.youtube.com/watch?v=fhFa4tkFUFw)

**TLDW (Too Long Didn't Watch):**

- Do not rely on integration tests to check the basic correctness of your code
- use system tests (e2e) to check the system
- use micro-tests (unit) to check components

**What is my take on this**:

I believe that maintaining integration tests is a lot harder.
As they are designed to only address a certain part of the system and therefore contain pre preperception of how the system is build.

Lets imagine your work on a system with a "good" amount of tests and 100% of them pass, but you still get bugs.
Thats commonly the case if you have integration tests with preperception of how it should function, instead of really checking it (basically the same downside as with unit tests).

As there are cases where it makes sense to use unit testing to validate logic, there is also a place for integration tests.
For example you create a mock backend and test the frontend with cypress to check some behavior with multiple edge cases and that is hard to setup from the backend.
But they should be used sparely, as the degrade over time when the system evolves and you need to remember to update them (which usually does not happen).
