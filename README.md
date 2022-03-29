# post-secret-backend
APP DESCRIPTION
Inspired by Frank Warren's post-secret project, this app will ask users to enter a secret they have not divulged to anyone. Once submitted the app will provide the user with 5 random secrets submitted by other users. Users will have the option to change the juiciness-level of the secret, or permanently delete a viewed secret


USER STORIES
-When a user first accesses the site they should see:
    -enter a secret message, 
    -text input field to enter a secret (placeholder "Enter a secret")
    -button to submit secret
-When a user enters a secret and hits the submit button
    -Button, text input field and message disappear
    -5 secrets from the database apear each with
        -Rating component
            -Current rating
            -Way to change rating
        -Delete secret forever button
-When user clicks way to change rating (thinking a tags numbered 1-10)
    -Displayed rating updates on the page
-When user clicks delete secret button
    -Secret is deleted from database and disappears from page
-Nav button to take user back to enter a secret page?


MODELS
    #Secret{
        #body: String (min-length 4 required true )
        #juicinessLevel: Number (required true min 0 default 0)
        #timestamps: True
    }


MVP CHECK
#-Working fullstack application using the MERN stack
#-Adhere to MVC file structure ()views in React
#-At least one model with full CRUD
#-At least 3 react components defined in their own file structure (outside of #app.js)
-Be deployed online and accessible to the public via heroku
#-2 git repos (front-end & back-end) *at least one push per day
-A readme file with
    -Explination of the technologies used
    -Approach taken
    -Unsolved problems
    -User stories
    -Notes to myself


STRETCH GOALS
-Background Art option
    -When submitting a secret user has option to upload background art that will appear behind text
    -User model
    -Sessions
    -Modals for user login/create --> Bootstrap for react
    -User should be stored inside of secret model for accessibility 
-Create public API (This may be super-easy)
-User can login to view all the secrets they have created (This is good practice, but horrible idea for app functioning (anonimity))