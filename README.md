Demonstrates that axios creates additional event listeners when calling a fetch. To repro:

1. Run `yarn start`
2. Open chrome devtools
3. Click `\`` to pull up the console.
4. Click the vertical hamburger menu at the top left of the console panel
5. Select "Performance monitor" and make sure that "JS event listeners" is selected
6. Wait for the number to stabilize, then click one of the buttons. You should see that the axios fetch causes the listener count to go up by twice as much as the vanilla fetch call