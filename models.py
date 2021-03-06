from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DB_STRING",'postgres://postgres:password@localhost:5432/acnh')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class Villagers(db.Model):
    """
    Villagers have the following attributes
    name        (the villager's name)
    personality (the villager's personality affecting their dialogue)
    birthday    (the villager's date of birth)
    species     (the villager's animal type)
    gender      (the villager's gender)
    catchPhrase (the vilager's greeting to the player)
    image       (the villager's photo)
    icon        (the villager's face)
    id          (the id of the villager in the database)
    """
    __tablename__ = 'villagers'

    name = db.Column(db.String(64), nullable = False)
    personality = db.Column(db.String(64), nullable = False)
    birthday = db.Column(db.String(64), nullable = False)
    birthdayString = db.Column(db.String(64), nullable = False)
    species = db.Column(db.String(64), nullable = False)
    gender = db.Column(db.String(64), nullable = False)
    catchPhrase = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    icon = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Songs(db.Model):
    """
    Songs have the following attributes
    name        (the song's name)
    buyPrice    (the song's price from store)
    sellPrice   (the song's sell price at store)
    isOrderable (boolean determining if song can be bought)
    image       (the song cover photo)
    music       (link to the song)
    id          (the id of the song in the database)
    """
    __tablename__= 'songs'
    
    name = db.Column(db.String(64), nullable = False)
    buyPrice = db.Column(db.Integer, nullable = False)
    sellPrice = db.Column(db.Integer, nullable = False)
    isOrderable = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    music = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Sea(db.Model):
    '''
    Sea have the following attributes
    name        (the sea creature's name)
    monthNorth  (what months the sea creature is available in the Northern Hemisphere)
    monthSouth  (what months the sea creature is available in the Southern Hemisphere)
    time        (what time the sea creature can be found)
    speed       (how fast the sea creature swims)
    shadow      (size of sea creature shadow)
    price       (bells acquired from selling sea creature at Nook's Cranny)
    catchPhrase (game phrase when you acquired this sea creature)
    museumPhrase(museum plack describing sea creature)
    image       (URL to image of sea creature)
    icon        (URL to image of sea creature in your inventory)
    id          (the id of the sea creature in the database)
    '''
    __tablename__= 'sea'
    
    name = db.Column(db.String(64), nullable = False)
    monthNorth = db.Column(db.String(64), nullable = False)
    monthSouth = db.Column(db.String(64), nullable = False)
    time = db.Column(db.String(64), nullable = False)
    speed = db.Column(db.String(64), nullable = False)
    shadow = db.Column(db.String(64), nullable = False)
    price = db.Column(db.Integer, nullable = False)
    catchPhrase = db.Column(db.String(256), nullable = False)
    museumPhrase = db.Column(db.String(8192), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    icon = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Recipes(db.Model):
    __tablename__ = 'recipes'
    
    name = db.Column(db.String(64), nullable = False)
    buyPrice = db.Column(db.String(64), nullable = False)
    sellPrice = db.Column(db.Integer, nullable = False)
    source = db.Column(db.String(128), nullable = False)
    recipesToUnlock = db.Column(db.Integer, nullable = False)
    category = db.Column(db.String(128), nullable = False)
    cardColor = db.Column(db.String(64), nullable = False)
    materials = db.Column(db.String(128), nullable = False)
    sourceNotes = db.Column(db.String(256), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Items(db.Model):
    __tablename__= 'items'
    
    name = db.Column(db.String(64), nullable = False)
    kitCost = db.Column(db.String(64), nullable = True)
    size = db.Column(db.String(64), nullable = False)
    source = db.Column(db.String(64), nullable = False)
    isInteractive = db.Column(db.Boolean, nullable = False)
    name = db.Column(db.String(64), nullable = False)
    buyPrice = db.Column(db.Integer, nullable = True)
    sellPrice = db.Column(db.Integer, nullable = True)
    image = db.Column(db.String(8192), nullable = False)
    category = db.Column(db.String(64), nullable = False)
    variant = db.Column(db.String(1024), nullable = False)
    pattern = db.Column(db.String(1024), nullable = False)
    typeof = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)

    
class Fossils(db.Model):
    '''
    Fossils has the following attributes
    name            (the fossil's name)
    price           (the sale price of the fossil at Nook's Cranny)
    museumphrase    (the museum description of the fossil)
    image           (picture of the fossil)
    id              (id of the fossil)
    '''
    __tablename__ = 'fossils'
    
    name = db.Column(db.String(64), nullable = False)
    price = db.Column(db.Integer, nullable = False)
    museumPhrase = db.Column(db.String(8192), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Fishes(db.Model):
    '''
    Fishes have the following attributes
    name        (the fish's name)
    monthNorth  (what months the fish is available in the Northern Hemisphere)
    monthSouth  (what months the fish is available in the Southern Hemisphere)
    time        (what time fish can be found)
    location    (where the fish can be found)
    rarity      (how often you can find the fish)
    shadow      (size of fish shadow)
    price       (bells acquired from selling fish at Nook's Cranny)
    catchPhrase (game phrase when you catch this fish)
    museumPhrase(museum plack describing fish)
    image       (URL to image of fish)
    icon        (URL to image of fishin your inventory)
    id          (the id of the fish in the database)
    '''
    __tablename__ = 'fishes'
    
    name = db.Column(db.String(64), nullable = False)
    monthNorth = db.Column(db.String(64), nullable = False)
    monthSouth = db.Column(db.String(64), nullable = False)
    time = db.Column(db.String(64), nullable = False)
    location = db.Column(db.String(64), nullable = False)
    rarity = db.Column(db.String(64), nullable = False)
    shadow = db.Column(db.String(64), nullable = False)
    price = db.Column(db.Integer, nullable = False)
    catchPhrase = db.Column(db.String(256), nullable = False)
    museumPhrase = db.Column(db.String(8192), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    icon = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Bugs(db.Model):
    '''
    Bugs have the following attributes
    name        (the bug's name)
    monthNorth  (what months the bug is available in the Northern Hemisphere)
    monthSouth  (what months the bug is available in the Southern Hemisphere)
    time        (what time bug can be found)
    location    (where the bug can be found)
    rarity      (how often you can find the bug)
    price       (bells acquired from selling bug at Nook's Cranny)
    catchPhrase (game phrase when you catch this bug)
    museumPhrase(museum plack describing bug)
    image       (URL to image of bug)
    icon        (URL to image of bug in your inventory)
    id          (the id of the bug in the database)
    '''
    __tablename__ = 'bugs'
    
    name = db.Column(db.String(64), nullable = False)
    monthNorth = db.Column(db.String(64), nullable = False)
    monthSouth = db.Column(db.String(64), nullable = False)
    time = db.Column(db.String(64), nullable = False)
    location = db.Column(db.String(64), nullable = False)
    rarity = db.Column(db.String(64), nullable = False)
    price = db.Column(db.Integer, nullable = False)
    catchPhrase = db.Column(db.String(256), nullable = False)
    museumPhrase = db.Column(db.String(8192), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    icon = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)

class Arts(db.Model):

    __tablename__ = 'arts'
    
    name = db.Column(db.String(64), nullable = False)
    hasFake = db.Column(db.Boolean, nullable = False)
    buyPrice = db.Column(db.Integer, nullable = False)
    sellPrice = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(64), nullable = False)
    museum = db.Column(db.String(8192), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Construction(db.Model):
    
    __tablename__ = 'construction'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(128), nullable = False)
    buyPrice = db.Column(db.Integer, nullable = False)
    source = db.Column(db.String(64), nullable = False)
    category = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Reactions(db.Model):
    __tablename__ = 'reactions'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(64), nullable = False)
    source = db.Column(db.String(64), nullable = False)
    sourceNotes = db.Column(db.String(128), nullable = True)
    id = db.Column(db.Integer, primary_key = True)
    
class Clothes(db.Model):
    __tablename__ = 'clothes'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(8192), nullable = False)
    sourceSheet = db.Column(db.String(64), nullable = False)
    buy = db.Column(db.Integer, nullable = False)
    sell = db.Column(db.Integer, nullable = False)
    source = db.Column(db.String(256), nullable = False)
    seasonal = db.Column(db.String(64), nullable = False)
    villager = db.Column(db.Boolean, nullable = False)
    themes = db.Column(db.String(256), nullable = False)
    variations = db.Column(db.String(256), nullable = True)
    id = db.Column(db.Integer, primary_key = True)
    
class Tools(db.Model):
    __tablename__ = 'tools'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(8192), nullable = False)
    variations = db.Column(db.String(256), nullable = False)
    diy = db.Column(db.String(256), nullable = False)
    kitcost = db.Column(db.Integer, nullable = False)
    uses = db.Column(db.Integer, nullable = False)
    stacksize = db.Column(db.Integer, nullable = False)
    buy = db.Column(db.Integer, nullable = False)
    sell = db.Column(db.Integer, nullable = False)
    source = db.Column(db.String(256), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Floors(db.Model):
    __tablename__ = 'floors'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(128), nullable = False)
    vfx = db.Column(db.Boolean, nullable = False)
    buy = db.Column(db.Integer, nullable = False)
    sell = db.Column(db.Integer, nullable = False)
    color = db.Column(db.String(64), nullable = False)
    source = db.Column(db.String(256), nullable = False)
    points = db.Column(db.Integer, nullable = False)
    series = db.Column(db.String(64), nullable = False)
    concepts = db.Column(db.String(64), nullable = False)
    tag = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Wallpapers(db.Model):
    __tablename__ = 'wallpapers'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(128), nullable = False)
    vfxtype = db.Column(db.String(64), nullable = False)
    buy = db.Column(db.Integer, nullable = False)
    sell = db.Column(db.Integer, nullable = False)
    color = db.Column(db.String(64), nullable = False)
    source = db.Column(db.String(256), nullable = False)
    windowtype = db.Column(db.String(64), nullable = False)
    ceilingtype = db.Column(db.String(64), nullable = False)
    curtaintype = db.Column(db.String(64), nullable = False)
    points = db.Column(db.Integer, nullable = False)
    series = db.Column(db.String(64), nullable = False)
    concepts = db.Column(db.String(64), nullable = False)
    tag = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    
class Rugs(db.Model):
    __tablename__ = 'rugs'
    
    name = db.Column(db.String(64), nullable = False)
    image = db.Column(db.String(128), nullable = False)
    buy = db.Column(db.Integer, nullable = False)
    sell = db.Column(db.Integer, nullable = False)
    color = db.Column(db.String(64), nullable = False)
    size = db.Column(db.String(64), nullable = False)
    sizecategory = db.Column(db.String(64), nullable = False)
    source = db.Column(db.String(256), nullable = False)
    points = db.Column(db.Integer, nullable = False)
    series = db.Column(db.String(64), nullable = False)
    concepts = db.Column(db.String(64), nullable = False)
    tag = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, primary_key = True)
    

class Search(db.Model):
    __tablename__ = 'search'
    
    name = db.Column(db.String(64), nullable = False)
    category = db.Column(db.String(64), nullable = False)
    id = db.Column(db.Integer, nullable = False)
    searchID = db.Column(db.Integer, primary_key = True)
    

    
db.create_all()
