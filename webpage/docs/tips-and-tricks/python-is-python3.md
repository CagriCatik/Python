# Python not found, WTF

The error message indicates that the `python` command is not found, which means the Python interpreter is not installed or not properly linked to the `python` command. Here's how you can resolve this issue on Ubuntu:

1. **Check if Python is installed**:
   Ubuntu uses `python3` as the default Python interpreter. You can check if it's installed by running:

   ```bash
   python3 --version
   ```

   If Python 3 is installed, this command will show the version number.

2. **Install Python if not installed**:
   If `python3` is not installed, you can install it by running:

   ```bash
   sudo apt update
   sudo apt install python3
   ```

3. **Create a symbolic link for `python`**:
   If you want to use the `python` command to run Python 3, you can create a symbolic link:

   ```bash
   sudo ln -s /usr/bin/python3 /usr/bin/python
   ```

   This command creates a symbolic link from `python3` to `python`, so that you can use the `python` command to run Python 3.

4. **Install `python-is-python3` package**:
   Alternatively, you can install the `python-is-python3` package, which automatically sets up the symbolic link:

   ```bash
   sudo apt install python-is-python3
   ```

After following these steps, you should be able to run your Python script using the `python` command:

```bash
python example.py
```
