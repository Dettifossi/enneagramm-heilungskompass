import os, http.server, socketserver
os.chdir(os.path.dirname(os.path.abspath(__file__)))
handler = http.server.SimpleHTTPRequestHandler
handler.log_message = lambda *a: None
with socketserver.TCPServer(("", 8005), handler) as httpd:
    httpd.serve_forever()
