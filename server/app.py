import os
from fjs import create_app

config_file_path = os.environ.get('APP_CONFIG', None)
app = create_app(config_file_path)

if __name__ == '__main__':
    app.run()