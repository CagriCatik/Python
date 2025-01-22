import nlp

text = "The quick brown fox jumps over the lazy dog."

# Tokenize text
tokens = nlp.tokenize(text)
print(tokens)  # Output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', '.']

# Stemming
stemmed_words = [nlp.stem(token) for token in tokens]
print(stemmed_words)  # Output: ['the', 'quick', 'brown', 'fox', 'jump', 'over', 'the', 'lazi', 'dog', '.']

# Lemmatization
lemmatized_words = [nlp.lemmatize(token) for token in tokens]
print(lemmatized_words)  # Output: ['The', 'quick', 'brown', 'fox', 'jump', 'over', 'the', 'lazy', 'dog', '.']
