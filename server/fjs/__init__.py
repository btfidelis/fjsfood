from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from fjs.modules.auth.routes import bp as auth_routes
from fjs.orm import db

def create_app(config=None):
    app = Flask(__name__)

    if config:
        app.config.from_pyfile(config)
    else:
        app.config.from_envvar('APP_SETTINGS')

    app.register_blueprint(auth_routes)
    db.init_app(app)
    
    return app
