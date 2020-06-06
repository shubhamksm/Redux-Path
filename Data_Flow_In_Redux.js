/*
Redux architecture revolves around a strict unidirectional data flow.

Data in an application follows the same lifecycle pattern, making the logic of the app predictable and easy to understand.
It also encourages data normalization, thus avoiding multiple, independent copies of the same data that are unaware of one another.
*/

// Data Lifecycle
/*
The data lifecycle in any Redux app follows four steps:

Call store.dispatch(action)
Redux store calls the reducer function
The root reducer may combine the output of multiple reducers into a single state tree.
The Redux store saves the complete state tree returned by the root reducer.
This new tree is the next state of the ap.! Every listener registered with store.subscribe(listener) will be invoked.

Listeners may call store.getState() to get the current state.
*/
