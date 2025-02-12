from turtle import left,right,forward, exitonclick
import math

distance = 200

#zelva jde

left(90)
forward(distance)
right(45)
forward(math.sqrt(math.pow(distance,2)*2)/2)
right(90)
forward(math.sqrt(math.pow(distance,2)*2)/2)
right(135)
forward(distance)
left(135)
forward(math.sqrt(math.pow(distance,2)*2))
left(135)
forward(distance)
left(135)
forward(math.sqrt(math.pow(distance,2)*2))
left(135)
forward(distance)

exitonclick()

