from fastapi import FastAPI
import ssl

app = FastAPI()

ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain('cert.pem', keyfile='key.pem')

@app.get('/')
async def root():
    return {'Welcome to my HTTPS website 2. It\'s secure :)'}


