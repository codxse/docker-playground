FROM python:3.8.2

WORKDIR /app

COPY . /app/

CMD ["python3", "bmi.py"]

# 1
# docker build . -t bmi:version-1

# 2
# docker run --interactive --tty --name bmi bmi:version-1
# docker stop bmi

# 3
# docker start --attach --interactive bmi
# docker stop bmi

# 4
# docker rm bmi
# docker rmi bmi:version-1

# 6
# docker build . -t bmi:version-1
# docker run --rm --interactive --tty --name bmi bmi:version-1