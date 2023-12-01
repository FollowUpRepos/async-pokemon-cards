# Pokemon Cards

You'll find my solutions in the following branches:
* 1-live-coding    a8308c4 Data displayed for the chosen Pokemon: no styling
* 2-clean-promises 56fe41c Simplify UI; Refactor JavaScript; Add CSS
* 3-clean-await    9bb755a Use async/await instead of promises

For example, in the Terminal window, execute the line `git checkout 2-clean-promises`.

[Demo](https://followuprepos.github.io/async-pokemon-cards/)

The [live-coding branch](https://github.com/FollowUpRepos/async-pokemon-cards/tree/1-live-coding) is almost exactly what I did during our Mentoring session. The [clean-promises branch](https://github.com/FollowUpRepos/async-pokemon-cards/tree/2-clean-promises) is the same code tidied up, plus some CSS to make the card display like the poke.gif in the instructions. Both these branches explicitly use promises.  
The [branch 3-clean-await](https://github.com/FollowUpRepos/async-pokemon-cards/tree/3-clean-await) uses a different technique: async-await. You will see this method shortly. It allows you to write asynchronous code that reads almost like synchronous code, so it is easier to maintain.

Note: I did not use a text input field with a button, like the instructions requested. Instead I created a <select> element with the names of all the Pokemon in alphabetical order. I also forced the selection of Pikachu as soon as these names have been fetched from the API.


---

## Original Instructions

**This :cartwheeling: Exercise :weight_lifting: is to display a pokemon card with data retrieved via the Pokemon Api.**

[Pokemon Api](https://pokeapi.co/) 

1. The User should be able to search for different Pokemons via the input field.
2. Once the button is clicked, the data for the requested pokemon to display in your card should be fetched. Attention if the input field has no entry, but the button was already clicked, inform the user about it.
3. Display the following info for each pokemon: name, picture, stats and abilties.
4. Style to your liking.

---

As a guideline how the finished product could be looking, use the reference image below.

![](poke.gif)
