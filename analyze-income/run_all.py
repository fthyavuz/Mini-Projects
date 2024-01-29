# run_all.py
import subprocess

commands = [
    "python uploadToDb.py",
    "python analytic.py",
    "python visualization.py",
]

for command in commands:
    subprocess.run(command, shell=True)
