"""

Script I used to scrape relatedwords.org

"""


import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


"""
url = 'https://relatedwords.org/relatedto/nursing'

driver = webdriver.Chrome('./chromedriver') 
driver.get(url) 

time.sleep(5) 

html = driver.page_source

soup = BeautifulSoup(html, "html.parser")


words = [word.get_text() for word in soup.find_all('a', {'class': 'item'})]
#print(words)


if os.path.exists('words.txt'):
   with open('words.txt', 'w') as f:
    for word in words:
        f.write(f'{word}\n') 

driver.close()
"""


'''

The following code removes words with spaces

characters = [' ', '-']
with open('words.txt', 'r') as f:
    words = f.readlines()
    print(len(words))


with open('words_final.txt', 'w') as f:
    for word in words:
        if len(word.split(' ')) > 1 or len(word.split('-')) > 1:
            continue
        f.write(word)
'''
with open('words_final.txt', 'r') as f:
    words = f.read().splitlines()
    print(words)
    