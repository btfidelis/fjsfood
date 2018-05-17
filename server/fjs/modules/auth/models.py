from .entities import User as UserEntity

class User(object):

    def register_user(username, email, phone, password):
        pass

    def __repr__(self):
        return '<User %r>' % self.username


