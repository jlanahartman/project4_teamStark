# set up flask application 

from flask import Flask


# used to initialize flask 
def create_app():
    app = Flask(__name__) #name is the name of the file.. 
    app.config['SECRET_KEY'] = 'Last Chance to Evacuate Planet Earth'

    from .views import views
    from .byFlavor import by_Flavor
    from .byPairing import by_Pairing
    from .byPrice import by_Price
    from .byRating import by_Rating
    from .byVarietal import by_Varietal
    from .contributors import contribs




 
    

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(by_Flavor, url_prefix='/')
    app.register_blueprint(by_Pairing, url_prefix='/')
    app.register_blueprint(by_Price, url_prefix='/')
    app.register_blueprint(by_Rating, url_prefix='/')
    app.register_blueprint(by_Varietal, url_prefix='/')
    app.register_blueprint(contribs, url_prefix='/')
  


    
    return app





