# React Lifecycle Method Bug

This repository demonstrates a common bug in React components related to updating state based on props. The original code uses the deprecated `componentWillReceiveProps` lifecycle method, which is prone to errors. The solution shows how to correctly update state using `getDerivedStateFromProps`.

## Bug
The bug is in the `MyComponent` component. It incorrectly uses `componentWillReceiveProps` to update the state based on changes in the `myProp` prop. This can lead to unexpected behavior and inconsistencies.

## Solution
The solution replaces `componentWillReceiveProps` with `getDerivedStateFromProps`. This ensures the state is correctly updated and the component behaves as expected.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the inconsistent behavior of the component.