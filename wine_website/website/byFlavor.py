
from flask import Blueprint
from flask import render_template

by_Flavor = Blueprint('byFlavor', __name__) 


@by_Flavor.route('/byFlavor/')
def home():
    return render_template("byFlavor.html")