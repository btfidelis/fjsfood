from flask import Blueprint, jsonify
from .models import User

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/', methods=['GET'])
def test():
    return 'Teste'

@bp.route('/user', methods=['GET'])
def create_user():
    users = [sqla2dict(u) for u in User.query.all()]
    print(users)
    return jsonify(users)


