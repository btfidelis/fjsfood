from .entities import User as UserEntity
import random

class User(object):
    def __init__(self):
        self.user_entity = UserEntity()

    def login(self, user, password):
        user = self.user_entity.st({'user': user})
        if not user:
            raise ValueError('Usuário não existe')
        
        if user['password'] == password:
            return random.getrandbits(128)
        else: 
            raise ValueError('Password')




