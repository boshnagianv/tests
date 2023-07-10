# tests
JavaScript that reads a text document, separates the texts and numbers, and stores them in a JavaScript object
we use the Node.js fs module to read the text document synchronously. You need to have the text document in the same directory as your script and specify its filename or provide the full path to the document.

The parseTextDocument function takes the file path as a parameter, reads the file's content, and then separates the texts and numbers using regular expressions. It uses the match method to find all the occurrences of alphabetic characters ([a-zA-Z]+) for texts and all occurrences of numbers with optional decimal points ([0-9.]+) for numbers. We convert the number strings to actual numbers using map(Number).

Finally, we create a JavaScript object named data with the texts and numbers arrays as properties, and return this object.

You can replace 'example.txt' with the actual filename or path to your text document. The resulting JavaScript object will contain separate arrays for texts and numbers, which you can access and manipulate as needed.
