# setup.py

from setuptools import setup, find_packages

setup(
    name='gadget_store',
    version='1.0.0',
    author='Jane Doe',
    author_email='jane.doe@example.com',
    description='A package for managing a gadget store',
    packages=find_packages(),
    install_requires=[
        'requests',
    ],
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
)
