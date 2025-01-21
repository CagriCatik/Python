students_info = {
    'Alice': {
        'grades': {'math': 90, 'english': 85, 'history': 92},
        'attendance': {'total_classes': 50, 'classes_attended': 45}
    },
    'Bob': {
        'grades': {'math': 78, 'english': 92, 'history': 88},
        'attendance': {'total_classes': 50, 'classes_attended': 40}
    },
    'Charlie': {
        'grades': {'math': 95, 'english': 89, 'history': 94},
        'attendance': {'total_classes': 50, 'classes_attended': 48}
    }
}

# Accessing and printing information for Bob
print("Bob's grades in English:", students_info['Bob']['grades']['english'])
print("Bob's attendance percentage:",
      (students_info['Bob']['attendance']['classes_attended'] / students_info['Bob']['attendance']['total_classes']) * 100)



app_config = {
    'general': {
        'app_name': 'MyApp',
        'version': '1.0'
    },
    'database': {
        'host': 'localhost',
        'port': 5432,
        'credentials': {
            'username': 'admin',
            'password': 'securepass'
        }
    },
    'logging': {
        'log_level': 'DEBUG',
        'log_file': 'app.log',
        'modules': ['module1', 'module2']
    }
}

# Accessing and printing database configuration
print("Database host:", app_config['database']['host'])
print("Database credentials:", app_config['database']['credentials']['username'])


library_catalog = {
    'books': {
        '978-3-16-148410-0': {
            'title': 'Python Cookbook',
            'author': 'David Beazley',
            'genre': 'Programming',
            'copies_available': 5
        },
        '978-0-13-235088-4': {
            'title': 'Clean Code',
            'author': 'Robert C. Martin',
            'genre': 'Programming',
            'copies_available': 3
        },
        '978-1-59327-603-4': {
            'title': 'Automate the Boring Stuff with Python',
            'author': 'Al Sweigart',
            'genre': 'Programming',
            'copies_available': 8
        },
    },
    'members': {
        '001': {'name': 'Alice', 'books_checked_out': ['978-0-13-235088-4', '978-1-59327-603-4']},
        '002': {'name': 'Bob', 'books_checked_out': ['978-3-16-148410-0']}
    }
}

# Accessing and updating library information
print("Available copies of 'Clean Code':", library_catalog['books']['978-0-13-235088-4']['copies_available'])
library_catalog['books']['978-0-13-235088-4']['copies_available'] -= 1
print("After checkout, available copies of 'Clean Code':",
      library_catalog['books']['978-0-13-235088-4']['copies_available'])
