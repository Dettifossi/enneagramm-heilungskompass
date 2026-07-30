#!/usr/bin/env python3
import os, socketserver, http.server

PORT = int(os.environ.get("PORT", 8005))
os.chdir("/Users/detlefrathmer/enneagramm-heilungskompass")

class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    def send_header(self, keyword, value):
        if keyword.lower() == 'content-type':
            if 'javascript' in value and 'charset' not in value:
                value = value + '; charset=utf-8'
            elif 'html' in value and 'charset' not in value:
                value = value + '; charset=utf-8'
        super().send_header(keyword, value)
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()
    def log_message(self, format, *args):
        pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), UTF8Handler) as httpd:
    httpd.serve_forever()
