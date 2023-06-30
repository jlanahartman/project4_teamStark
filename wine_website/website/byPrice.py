
from flask import Blueprint
from flask import render_template

by_Price = Blueprint('byPrice', __name__) 


@by_Price.route('/byPrice/')
def home():
    return render_template("byPrice.html")