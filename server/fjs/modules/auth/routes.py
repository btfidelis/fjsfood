from flask import Blueprint, jsonify, request
from .models import User

import json

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/', methods=['GET', 'POST'])
def test():
    return 'Teste'

@bp.route('/user', methods=['POST'])
def create_user():
    if request.method == 'POST':
        data = request.get_json()
        user_model = User()
        try:
            token = user_model.login(data['user'], data['pass'])
            return json.dumps({ 'data': str(token) }, ensure_ascii=False)
        except:
            return json.dumps({ 'error': 'Senha ou usuário incorreto(s)'})
        
    
