from random import randint

min_number = int(input("Enter the minimum number: "))
max_number = int(input("Enter the maximum number: "))

if (max_number < min_number):
  print("The maximum number must be greater than the minimum number.")
  exit()
else:
  rnd_number = randint(min_number, max_number)
  print("The random number is: " + str(rnd_number))