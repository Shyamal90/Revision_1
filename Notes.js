/*                        What is Redux?
                          --------------
    *Redux:- Redux is pattern and library for managing and updating applicaiton state, using events called "actions". 


    It serves as a centralized store for state that needs to used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
*/


/*
                        Why should I use Redux?
                       -------------------------

    Redux helps us to manage global state across my hole application.
*/


/*
                      When should I use Redux?
                      ------------------------
     1. In large application where we needed state in many places in the app.
     2. When we need to update the state frequently.
*/

/*
                           Redux Store
                           -----------
    A store is a container that holds our application's global state.

    1. Store is javaScript object.

    a. We can't directly modify the state inside the redux store.
    b. For updating the state we need dispatch the action 
*/


/*
                           Redux Reducer
                           -------------
        A reducer is a function that receives the current state and action object , and it decrescibe how to update the state if necessary.


        reducer as an event listener which handles events based on the received action(event)
    
*/