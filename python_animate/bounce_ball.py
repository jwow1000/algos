import time
import os
import random

gridX = 10
gridY = 10

ball = [0,0]
xStep = 1
yStep = 1

xDir = 1
yDir = 1

## print grid
def printGrid():
    for i in range(gridX):
        s = ' '
        for j in range(gridY):
            if i == ball[0] and j == ball[1]:
                s += ' poop '
            else:
                s += ' _ '
        print(s)


while True:
    ## mopve the ball
    ball[0] = ball[0] + (xStep * xDir)
    ball[1] = ball[1] + (yStep * yDir)
    
    # test location
    if ball[0] >= gridX-1:
        xStep = random.randint(0,2)
        xDir = -1
        ball[0] = gridX-1
    elif ball[0] <= 0:
        xStep = random.randint(0,2)
        xDir = 1
        ball[0] = 0
    if ball[1] >= gridY-1:
        yStep = random.randint(0,2)
        yDir = -1
        ball[1] = gridY-1
    elif ball[1] <= 0:
        yStep = random.randint(0,2)
        yDir = 1
        ball[1] = 0
    

   
    os.system('clear')
    printGrid()
    time.sleep(0.5)

