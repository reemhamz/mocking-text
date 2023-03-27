[![Netlify Status](https://api.netlify.com/api/v1/badges/dc4a78c5-447c-4850-8299-c0d855a3501f/deploy-status)](https://app.netlify.com/sites/gpt-mocking-text/deploys)

# Mocking Text 🗣
Convert your text into mocking text `tHaT LoOkS LiKe tHiS`


🌎 Deploy: https://gpt-mocking-text.netlify.app/

![Screen Shot 2023-03-27 at 5 21 11 PM](https://user-images.githubusercontent.com/42309026/227857075-f6cff06f-e878-45f2-ad74-8896ea328e1d.png)


## About 📖
Wanted to play around with ChatGPT's coding capabilities to create a mocking text app just for fun!


The entire site has been developed with ChatGPT's capabilities. I just went in to make the following changes:
- Wrapped `label`, `input`, and `button` elements in a `form` tag
- Changed CSS code to remove GPT's `text-transform: uppercase` rule from the `input` element

## Findings 🧐
It really lacked in writing accessible code, both in HTML and CSS. It did not wrap our `input` and `button` elements in a `form` element, which is very anti-pattern and can become inaccessible when using the web, and it also separated the `input` and `button` elements into different `divs`:
```
<div class="container">
  <h1 class="title">Mocking Text Generator</h1>
  <div class="form-group">
    <label for="input-text">Enter your text:</label>
    <input type="text" id="input-text">
  </div>
  <div class="form-group">
    <button id="convert-button">Convert to Mocking Text</button>
  </div>
  <div class="form-group">
    <label for="converted-text">Mocking Text:</label>
    <p id="converted-text"></p>
  </div>
</div>
```

Its CSS accessibility also wasn't the greatest. I had to go in at one point and edit the CSS even after I asked it to make the font text accessible:

![Screen Shot 2023-03-27 at 6 38 29 PM](https://user-images.githubusercontent.com/42309026/227873203-8f9c69ea-2f49-4186-a5f8-523d337b15ab.png)

![Screen Shot 2023-03-27 at 6 39 47 PM](https://user-images.githubusercontent.com/42309026/227873499-84ff8d0f-617b-4ad8-95b7-b865ba1fd6e7.png)

It's obviously not ideal, and not a tool I would ever use to actually write up my websites. However, the JavaScript functions were much better than its HTML and CSS counterparts. I can see myself using ChatGPT to help me with working around JS problems than I would other languages.


## How to use 🪜
Simply type whatever you'd like to convert into the input field, and press the 'Submit' button to see the converted text.


## Interaction:
```
User: what do you call it when sOmEoNe TyPeS lIkE tHiS?
ChatGPT: That's called "Mocking Text" or "Mocking SpongeBob" text.

User: can you write this sentence in mocking text
ChatGPT: sUre, I CaN wRitE tHis SeNteNce In MocKing TeXT!

User: write me a vanilla javascript code that takes user input from the HTML and converts that text to mocking text
ChatGPT: Sure, here's an example code: [JavaScript code provided]

User: Can you design the mocking text app to have a neo-brutalism design on CSS?
ChatGPT: Sure, here's an example CSS code with neo-brutalist design: [CSS code provided]

User: Can you make the CSS more colorful, blocky, and have more interesting fonts?
ChatGPT: Sure, here's an example CSS code with colorful, blocky design and interesting fonts: [CSS code provided]

User: Can you make the design more bubbly, eccentric, and have more neon colors with black borders? Use as many free system fonts as you want.
ChatGPT: Sure, here's an example CSS code with bubbly, eccentric design and neon colors with black borders: [CSS code provided]

User: Can you make the colors more accessible? Can the app also be made to be mobile friendly? Can you use the following colors: #1C67F1, #3DA480, #F19A3E, and #403233
ChatGPT: Sure, here's an updated CSS code with accessible colors and mobile-friendly design: [CSS code provided]

User: Use these colors instead: #335c67, #fff3b0, #e09f3e, #9e2a2b, and #540b0e. Please also place a border around the input field, to create better visual accessibility. Also, change the fonts to comic sans.
ChatGPT: Sure, here's an updated CSS code with the requested colors, border around the input field, and Comic Sans font: [CSS code provided]

User: Can I get a transcript of our interaction?
ChatGPT: Sure, here's a transcript of our interaction.
```
