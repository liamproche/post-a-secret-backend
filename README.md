# post-secret-backend
APP DESCRIPTION
Inspired by Frank Warren's post-secret project, this app will ask users to enter a secret they have not divulged to anyone. Once submitted the app will provide the user with 5 random secrets submitted by other users. Users will have the option to change the juiciness-level of the secret, or permanently delete a viewed secret



MODELS
Secret{
    title: String
    body: String
    juicinessLevel: Number
    timestamps: True
}


STRETCH GOALS