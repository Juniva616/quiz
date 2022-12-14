# Flora and Fauna Quiz

 ![The quiz screenshot](https://juniva616.github.io/quiz/readme-files/md-quiz.png)

This site is an online quiz devoted to the interesting facts about animals and plants. The purpose of the quiz is to entertain and educate children and adults loving nature of our Mother Earth.
 
## Features
- Responsive on all device sizes
- Interactive elements
- Easy navigation
- An array of 22 statements that can be evaluated as true or false (more can easily be added)
- A feedback after each answered question
- The correct answer is displayed
- Number of correct and incorrect answers
- Congratulations at the end of the quiz

## Existing features
  
![The header screenshot](https://juniva616.github.io/quiz/readme-files/md-header.png)

### The header and the title

The quiz takes one page with the background image which covers the header and footer and the bright title of the quiz  "Flora & Fauna", which attracts the attention of the user and gives a clear idea of the site's purpose.

### The game area

 ![The gamearea screenshot](https://juniva616.github.io/quiz/readme-files/md-gamearea.png)

The main part of the viewport takes the game area with are images to the left and to the right and a central question area with the text.

On the smaller screens only the left image and the question area are visible.

 ![The screenshot for screens less than 768px](https://juniva616.github.io/quiz/readme-files/md-768px.png)

The quiz starts with the welcoming message with explanations of the rules. It makes the users comfortable and gives clear and understandable directions what they should do to start the quiz.

 ![The screenshot with the rules](https://juniva616.github.io/quiz/readme-files/md-rules.png)

When the button START is pressed the statement with an interesting and little known fact about a plant or an animal appears in the central part of the page and the photo of the mentioned creature appears to the left. It makes a pleasant visual impression to the user.

 Below  the statement there are two buttons: "Agree" and "Disagree". The user reads the statement and presses the according button.  Then the text changes to the correct answer with a feedback saying "You are right!" or "You are wrong!" on the top. It lets the user know if he/she gave a correct or wrong answer and inspires to continue the quiz. 

 After clicking the button NEXT the left photo moves to the right and on its place a new photo appears depicting the hero of the next statement. It is very comfortable for the user - to see the animal or a plant and answer the question about it.

When the quiz comes to the end the user is greeted by the message with the number of correct answers, which leaves the user with a pleasant impression that he/she is a winner.

 ### Footer area

![The screenshot for the footer](https://juniva616.github.io/quiz/readme-files/md-footer.png)

 After each user's answer the score of the correct/wrong answers increases. This way the user can see the total number of the correct and wrong answers.

### Navigation

The navigation on the site is represented by the buttons START, AGREE, DISAGREE and NEXT which is easy and intuitive. 

## Technologies Used
### Languages Used
- HTML5
- CSS3
- JavaScript ES6

### Sites & Programs Used
- **VSCode:**
VSCode was used for editing the code, commiting and pushing it to GitHub.

- **Google Fonts:**
Google fonts were used to import the 'Source Sans Pro' and 'Ubuntu' fonts into the style.css file which is used on all pages throughout the project.

- **favicon:**
favicon.ico allowed to place the tab icon of the site. The icon image is created by the developer. 

- **Git:**
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- **GitHub:**
GitHub is used to store the projects code after being pushed from Git and to deploy the project to GitHub Pages.

- **Paint and Photos:**
Paint and Photos were used to create the logo, resizing images and editing photos for the website.

- **The site https://ui.dev/amiresponsive :**  
The site allowed to get a nice picture demonstrating how my site will look on different devices.

- **Google Translate:**
https://translate.google.com/  

## User Stories  
**As a First Time Visitor,** I want to easily understand the main purpose of the site and check my knowledge of flora and fauna of the Earth.
- Upon entering the site, the user sees an nice green image with horses on the meadow stretching from the top to the bottom of the page and a clear information on how to start the quiz. 
- The user  presses the button START and enjoys the quiz.
- An interesting and little known fact on the screen makes the user to analize his knowledge 
and take a decision if this fact is true and then press the button AGREE or this fact is false and press the button DISAGREE, then to find out if the answer was correct or not.


**As a First Time Visitor,** I want to be able to easily navigate through the quiz.
- The site has been designed to be intuitive and easy to use. Each page has a very simple navigation: only one button to proceed to the next question or two buttons to choose the right answer to the question, which automatically
leads to the next page. 
 
**As a First Time Visitor,** I want to get a feedback after each my reply to the question to find out if I gave a correct answer.

- The message "You are right!" or "You are wrong!" appears on the top of each page with the correct answer, which immidiately gives the user a feedback to his action. Also a detailed correct answer widens the knowledge of the user about flora and fauna.
 
 **As a First Time Visitor,** passing the quiz, I want to feel myself a winner.
 - When the user answers all the questions the message appears: "Congratulations! You answered % out of % questions correctly! Well done!",   "Thank you for your time!", which leaves the user with a pleasant impression that he/she is a winner, he/she is valued and appreciated.

# Testing
- The site has been tested in Chrome, Edge, Firefox and Opera and it works correctly in all browsers, all buttons work as intended.
- The site is adapted to different screen sizes which is tested with DevTools (Responsive) and with a real notebook, smartphones and a tablet by me and my friends. 

![The screenshot for different screen sizes](https://juniva616.github.io/quiz/readme-files/md-respons.png)

- On large screens the site is displayed as is, on devices with screens smaller than 828 pixels the font is reduced and the left image and question area are displayed and the right image is not.

![The screenshot for screens less than 828px](https://juniva616.github.io/quiz/readme-files/md-768px.png)

- On mobile phones and smartphones the order of images and videos changes from row to column, allowing the user to see them clearly on one screen without scrolling.

 ![The screenshot for mobile phones 640px wide and less](https://juniva616.github.io/quiz/readme-files/md-412.png)

- All changing pages of the site look good and readable on all types of devices.

## Validation
### JSHinter validation
JavaScript code has passed through a linter (Jshint implemented to VSCode) with no errors and warnings.

The following Metrics were returned by https://jshint.com:

 * There are 9 functions in this file.

 * Function with the largest signature take 1 arguments, while the median is 0.

* Largest function has 10 statements in it, while the median is 3.

* The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### HTML validation
The site has passed validation on https://validator.w3.org/ without any errors or warnings to show.

### CSS validation
The CSS code has passed validation on https://jigsaw.w3.org/css-validator/ without any warnings or errors.


### Lighthouse reports
I have tested the site with LightHouse and here is the results.

![The screenshot for Lighthouse report](https://juniva616.github.io/quiz/readme-files/md-litehouse.png)

The site Accessibility is 100, the same good results are for Performance, Best Practices and CEO.

 ### Unfixed bugs
No unfixed bugs.

## Deployment
The site was deployed to Pages on GitHub with the following steps:
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section on the left side.
4. Under "Source" chose the option "Branch: main", confirm  it with clicking the button "Save".
5. The page will automatically refresh. If it does not, refresh the page.
6. The link to just published site will appear on the blue field.

The URL on GitHub with my project is https://github.com/Juniva616/quiz

The live link to my project is https://juniva616.github.io/quiz/

## Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.

` $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY `

7. Press Enter. Your local clone will be created.

## Credits
### Code
The minor fragments of CSS code was taken as a sample (with further adjustmens to the project's needs) from different educational sites, tutorials and developer community sites, which is commented in the code.
I express my gratitude to the following sites and people who offered the solutions to the problems I faced during the project making:

https://www.w3schools.com/

https://www.freecodecamp.org/news/css-flexbox-and-grid-tutorial/

https://stackoverflow.com/

https://developer.mozilla.org/
 
## Content
- The text content was taken from open sources on the following sites:

 https://crazycrittersinc.com/over-50-amazing-plant-facts/     

 https://animalmedical.org/fun-facts   

 https://bestlifeonline.com/animal-facts/ 

 https://www.floweraura.com/blog/amazing-funny-interesting-facts-about-plants
     
- The free images were taken from:

 https://www.pexels.com/

 https://www.wikipedia.org/

## Acknowledgements

My Mentor for continuous helpful feedback.

Code Institute for their perfect detailed lessons and support.

 