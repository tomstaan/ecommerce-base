import requests

response = requests.get("https://jsonplaceholder.typicode.com/todos")
print(response.json())
