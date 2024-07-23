# Calculator Project 🧮

## Use Cases (Abilities Your Project Needs to Have)

Your calculator should contain functions for all the basic math operations typically found on calculators. Start by creating functions for the following items and testing them in your browser’s console:

- ➕ **Add**
- ➖ **Subtract**
- ✖️ **Multiply**
- ➗ **Divide**

### Steps to Build the Calculator

1. **Calculator Operation Variables**:

   - A calculator operation will consist of a number, an operator, and another number.
   - Create three variables for each part of a calculator operation:
     - `firstNumber`
     - `operator`
     - `secondNumber`
   - You’ll use these variables to update your display later.

2. **Function to Operate**:

   - Create a new function `operate` that takes an operator and 2 numbers, then calls one of the above functions on the numbers.

3. **HTML Calculator**:

   - Create a basic HTML calculator with buttons for each digit, each of the above functions, and an “Equals” key.
   - Do not worry about wiring up the JS just yet.
   - There should also be a display for the calculator. Fill it with some dummy numbers so it looks correct.
   - Add a “clear” button.

4. **Populate Display**:

   - Create the functions that populate the display when you click the number buttons.
   - Store the ‘display value’ in a variable somewhere for use in the next step.

5. **Make the Calculator Work**:

   - Store the first number and second number input into the calculator.
   - Utilize the operator that the user selects.
   - Use the `operate` function on the two numbers when the user presses the “=” key.
   - Update the display with the ‘solution’ to the operation.

   **This is the hardest part of the project**. You need to figure out how to store all the values and call the `operate` function with them. Don’t feel bad if it takes you a while to figure out the logic.

### Gotchas (Bugs to Watch Out For)

- Your calculator should not evaluate more than a single pair of numbers at a time.
  - Example: You press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then:
    1. Evaluate the first pair of numbers (12 + 7).
    2. Display the result of that calculation (19).
    3. Use that result (19) as the first number in your new calculation, along with the next operator (-).
- Round answers with long decimals so that they don’t overflow the screen.
- Pressing = before entering all of the numbers or an operator could cause problems!
- Pressing “clear” should wipe out any existing data. Ensure the user is really starting fresh after pressing “clear”.
- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

### Extra Credit

- Users can get floating-point numbers if they do the math required to get one, but they can’t type them in yet. Add a `.` button and let users input decimals!
  - Make sure you don’t let them type more than one though: `12.3.56.5` is hard to do math on. (disable the decimal button if there’s already one in the display)
- **Make it look nice!** This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
- Add a “backspace” button so the user can undo if they click the wrong number.
- Add keyboard support!
