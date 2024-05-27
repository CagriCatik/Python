# main.py
from flask import *
from utility import *

# Oops! Both `render_template` and `helper_function` are imported.
# This might lead to conflicts and unexpected behavior.


# main.py
from flask import Flask, render_template
from utility import helper_function
