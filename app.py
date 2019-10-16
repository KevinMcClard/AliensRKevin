import pandas as pd
import sqlalchemy
import pprint  as pp
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import csv, json
import gzip
import shutil
import os
from geojson import Feature, FeatureCollection, Point
listofshapes=[]
listofstates=[]

engine =create_engine('sqlite:///UFO_db')
 
 ## Preparation Routines
def initFile1():
    if not os.path.isfile('nuforc_reports.gz'):
        with open('c:\\users\\kevin\\desktop\\nuforc_reports.csv','rb') as f_in:

            with gzip.open('nuforc_reports.gz','wb') as f_out:
                        shutil.copyfileobj(f_in ,f_out)

def uncompressfile(fname):  
    with gzip.open(fname+'.gz','rb') as f_in: 
        filecontent= f_in.read()
        with open(fname+'.csv','wb') as f_out:
            f_out.write(filecontent)

def readnuforc(fname):
    df = pd.read_csv()
    dfuret=df.dropna()
    return dfuret
# initFile1()    
# uncompressfile('nufor_reports')
# dfu=readnuforc('nuforc_reports.csv')
dfc=pd.read_csv('UFO_Narratives.csv')
@app.route('/')
def init():
    dfc=pd.read_csv('UFO_Narratives.csv')
    
# Returns
@app.route('/api_getUFOText_v1.1 <index>')
def getUFOText(index):
    return dfc[index]['text']
 