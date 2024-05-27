# tests/test_user_module.py
import pytest
from user_module import User, UserManager

@pytest.fixture
def user_manager():
    """Fixture to create a UserManager instance."""
    return UserManager()

@pytest.fixture
def sample_users():
    """Fixture to provide a list of sample users."""
    return [
        User(user_id=1, username='alice'),
        User(user_id=2, username='bob'),
        User(user_id=3, username='carol')
    ]

@pytest.fixture
def populated_user_manager(user_manager, sample_users):
    """Fixture to populate UserManager with sample users."""
    for user in sample_users:
        user_manager.add_user(user)
    return user_manager

def test_add_user(user_manager):
    user = User(user_id=4, username='dave')
    user_manager.add_user(user)
    assert user_manager.get_user(4) == user

def test_remove_user(populated_user_manager):
    populated_user_manager.remove_user(2)
    assert populated_user_manager.get_user(2) is None
    assert len(populated_user_manager.get_all_users()) == 2

def test_get_user(populated_user_manager):
    user = populated_user_manager.get_user(1)
    assert user is not None
    assert user.username == 'alice'

def test_get_all_users(populated_user_manager):
    users = populated_user_manager.get_all_users()
    assert len(users) == 3


if __name__ == "__main__":
    pytest.main()