# nlp.py
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer

def tokenize(text):
    """Tokenize the given text."""
    return word_tokenize(text)

def stem(word):
    """Stem the given word."""
    stemmer = PorterStemmer()
    return stemmer.stem(word)

def lemmatize(word):
    """Lemmatize the given word."""
    lemmatizer = WordNetLemmatizer()
    return lemmatizer.lemmatize(word)
