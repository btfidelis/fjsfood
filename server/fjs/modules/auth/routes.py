from flask import Blueprint, jsonify, request
from .models import User

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/', methods=['GET', 'POST'])
def test():
    return 'Teste'

@bp.route('/user', methods=['GET', 'POST'])
def create_user():
    if request.method == 'POST':
        data = request.get_json()
        return data['email']
    else:
        users = [sqla2dict(u) for u in User.query.all()]
        print(users)
        return jsonify(users)
