import socket
import ssl
import base64
import os

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
SERVER_ADDR = "smtp.gmail.com" # Gmail Server Address
SERVER_PORT = 587
IP_ADDR = "192.168.56.1"

EMAIL = os.getenv("SMTP_EMAIL")
PASSWORD = os.getenv("SMTP_PASSWORD")

FROM = ""
TO = ""
SUBJECT = "Test Email"
BODY = "This is a test email sent using socket programming"

client_socket.connect((SERVER_ADDR, SERVER_PORT))
print("R : ",client_socket.recv(1024).decode())

client_socket.send(b"EHLO 192.168.56.1\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(b"STARTTLS\r\n")
print("R : ",client_socket.recv(1024).decode())

context = ssl.create_default_context()
client_socket = context.wrap_socket(client_socket, server_hostname=SERVER_ADDR)

client_socket.send(b"EHLO 192.168.56.1\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(b"AUTH LOGIN\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(base64.b64encode(EMAIL.encode()) + b"\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(base64.b64encode(PASSWORD.encode()) + b"\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(f"MAIL FROM:<{FROM}>\r\n".encode())
print("R : ",client_socket.recv(1024).decode())

client_socket.send(f"RCPT TO:<{TO}>\r\n".encode())
print("R : ",client_socket.recv(1024).decode())

client_socket.send(b"DATA\r\n")
print("R : ",client_socket.recv(1024).decode())

client_socket.send(f"Subject : {SUBJECT} \r\n\r\n {BODY}\r\n.\r\n".encode())
print("R : ",client_socket.recv(1024).decode())

client_socket.send(b"QUIT\r\n")
print("R : ",client_socket.recv(1024).decode())