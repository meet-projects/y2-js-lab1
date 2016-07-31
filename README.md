# JavaScript lab 1

In this lab, you'll write some basic JavaScript.

Start by downloading the code, either by cloning or by opening
up a zip file that you've emailed to yourself:

```
cd ~/Desktop
git clone https://github.com/meet-projects/y2-js-lab
```

In the terminal, run the code to set up Python (you need this because the web server
is a flask app):

```
wget http://tinyurl.com/MEETpythonY2
source MEETpythonY2
```

Now, run the web server. Make sure you use `cd` to move to the
`y2-js-lab` folder first!

```
python web_app.py
```

Open up the Chromium web browser (not Firefox) and navigate to
http://127.0.0.1:5000 .

# Getting started

Look at the file `index.html` in the `templates` folder. Notice how we've
included the JavaScript at the top using `url_for('static', ...)`. In the lab,
you'll be typing some of your code into the console, and putting some of it in
`static/js/script.js`.

This is the same way you should organize your code for your final projects!

# Exercise 1

Find the part of `script.js` that says `YOUR CODE FOR EXERCISE 1 GOES HERE`.
Any code you write there will run whenver you click the "exercise 1" button.

Fill in code so that if the number in the box (stored for you in the variable
`data`) is greater than 100, clicking gives you a popup saying "Too big".


# Exercise 2

Open up the JavaScript console using Ctrl+Shift+J. Type (or copy-paste) the
following lines in one by one, and explain the results to your partner.

    > var mylist = [4, 5, 'hello'];
    > mylist[0];
    > mylist[2];
    > mylist[3];
    > mylist[-1];

How are JavaScript lists different from Python lists?

# Exercise 3

Find the part of `script.js` that says `YOUR CODE FOR EXERCISE 3 GOES HERE`.
Any code you write there will run whenver you click the "exercise 3" button.

In that section, write a function called myFunction that takes in a string.
If the string starts with "meet", then you should return the string. Otherwise,
you should return "meet". For example, 

```
> myFunction('meet is awesome!')
'meet is awesome'
> myFunction('I like schnitzel')
'meet'
```

*Hint*: you can use `.startsWith(...)` to see if a string starts with another
string.
