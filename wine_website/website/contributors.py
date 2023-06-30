
from flask import Blueprint
from flask import render_template

contribs = Blueprint('contributors', __name__) 


@contribs.route('/contributors/')
def home():
    return render_template("contributors.html")