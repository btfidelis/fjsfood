from ...orm import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    login_token = db.Column(db.String(255), unique=True)

    def __repr__(self):
        return '<User %r>' % self.username


