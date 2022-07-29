# social-network
Mini social network with the ability to upload photos, like, see views, write comments and see feed. 
You can also register via Google and other social networks

## Starting:
### 1. Create venv
> python -m venv venv

### 2. Launch the virtual environment
> .\venv\Scripts\activate
>
> cd bookmarks
  
### 3. Install packages from requirements.txt
> pip install -r requirements.txt

### 4. Get authorization keys in the networks you want to use for registration

### 5. Create .env file in root dir and write down the following environment variables with your data there:
- SECRET_KEY
- SOCIAL_AUTH_FACEBOOK_KEY
- SOCIAL_AUTH_FACEBOOK_SECRET
- SOCIAL_AUTH_GOOGLE_OAUTH2_KEY
- SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET

### 6. Start the server
> python manage.py runserver

### 7. Create superuser, some users. Add them avatars add download some photos, make some comments and likes
