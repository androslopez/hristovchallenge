# hristovchallenge
Challenge for Jr tech support 

The challenge was use HTML, CSS, JS and the Cylindo HD 360 Viewer Library, which will be the tools you will be working with to provide support to Cylindo users.

The solution was the next:

Using visual studio code as HTML editor I created 5 files:

- home.html
- mystyle.css
- companyStyle.css
- myscript.js
- companyScript.js

The home.html page has all the basic implementation, in it has the calls to the external files like Bootstrap library, javascript for the company controls, Cylindo viewer handler, cylindo css style, CSS styles for the features selector and the javascript that reacts to those features (like color of the fabrics and material used for the legs)

In this version all javascript is on the HEAD section of the HTML page, the problem in the previous commit about the need of it to be below the BODY section was solved with the "Document ready" function

The example salso add a reference to the JQuery library to avoid an error the example has, it means there is a section that the web browsers are unable to handle without the proper jQuery functions.

That was all.

Thanks!!
