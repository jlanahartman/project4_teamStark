from flask import Blueprint
from flask import render_template
from flask import request 

by_Varietal = Blueprint('byVarietal', __name__) 
possible_combos = ['byVarietal','']

@by_Varietal.route('/byVarietal/',methods=['GET','POST'])  # GET request -> retrieving info.. POST request -> updating/creating something // going to url -> GET request.. clicking submit -> POST request
def byVarietal():
    if request.method == 'POST':
        grapeType = request.form.get('Desired Type')
        roll = request.form.get('Roll Count')
        kept1 = request.form.get('Kept Die 1')
        kept2 = request.form.get('Kept Die 2')
        kept3 = request.form.get('Kept Die 3')
        kept4 = request.form.get('Kept Die 4')
        kept5 = request.form.get('Kept Die 5')


            #if combo != 


  
    return render_template("byVarietal.html",boolean=True)

