from website import create_app

app = create_app() 

if __name__ == '__main__': # only if we run this file - we will execute 
    app.run(debug=True) # this -- allows us to automatically run the server



