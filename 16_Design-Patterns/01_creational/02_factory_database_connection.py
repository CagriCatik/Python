from abc import ABC, abstractmethod
import mysql.connector
import psycopg2
import pymongo

class DatabaseConnection(ABC):
    @abstractmethod
    def execute_query(self, query):
        pass

class MySQLConnection(DatabaseConnection):
    def __init__(self, host, user, password, database):
        self.connection = mysql.connector.connect(
            host=host, user=user, password=password, database=database
        )

    def execute_query(self, query):
        cursor = self.connection.cursor()
        cursor.execute(query)
        return cursor.fetchall()

class PostgreSQLConnection(DatabaseConnection):
    def __init__(self, host, user, password, database):
        self.connection = psycopg2.connect(
            host=host, user=user, password=password, database=database
        )

    def execute_query(self, query):
        cursor = self.connection.cursor()
        cursor.execute(query)
        return cursor.fetchall()

class MongoDBConnection(DatabaseConnection):
    def __init__(self, host, user, password, database):
        self.client = pymongo.MongoClient(
            f"mongodb://{user}:{password}@{host}/{database}"
        )
        self.db = self.client[database]

    def execute_query(self, query):
        # Implement MongoDB query execution logic
        pass

class DatabaseConnectionFactory:
    @staticmethod
    def get_connection(database_type, **kwargs):
        if database_type == "mysql":
            return MySQLConnection(**kwargs)
        elif database_type == "postgresql":
            return PostgreSQLConnection(**kwargs)
        elif database_type == "mongodb":
            return MongoDBConnection(**kwargs)
        else:
            raise ValueError(f"Unsupported database type: {database_type}")

# Usage
mysql_connection = DatabaseConnectionFactory.get_connection(
    "mysql", host="localhost", user="root", password="password", database="mydb"
)
result = mysql_connection.execute_query("SELECT * FROM users")
print(result)