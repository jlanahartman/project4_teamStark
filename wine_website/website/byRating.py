
from flask import Blueprint
from flask import render_template

by_Rating = Blueprint('byRating', __name__) 


@by_Rating.route('/byRating/')
def home():
    return render_template("byRating.html")