
def sqla2dict(model):
    """ Declarative Base model to dict """
    return {c.name: getattr(model, c.name) for c in model.__table__.columns}
