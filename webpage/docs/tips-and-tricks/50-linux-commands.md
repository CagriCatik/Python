# 50 Linux Terminal Commands

## 1. `whoami`
**Description:** Displays the username of the current user.

```bash
whoami
```
**Example:**
Running `whoami` will display the username currently logged into the terminal. This can be useful to confirm that you have the proper permissions or that you are in the correct user session.

**Output Example:**
```
username
```

---

## 2. `man`
**Description:** Displays the manual for a command, which includes the description, options, and examples for using the command.

```bash
man ls
```
**Example:**
To learn about all the options available for the `ls` command, use `man ls`. The manual pages (or "man pages") are an essential resource for understanding the functionality of Linux commands.

**Tip:** Use the arrow keys to navigate, and press `q` to quit the manual.

---

## 3. `clear`
**Description:** Clears the terminal screen for a cleaner workspace.

```bash
clear
```
**Example:**
After running many commands, the terminal can become cluttered with outputs. Running `clear` will wipe the screen and make it easier to work with subsequent commands.

---

## 4. Intro to Options
**Description:** Many commands can be extended with options to provide more specific functionality. 

### List files with options (`ls -l`)
```bash
ls -l
```
**Example:**
Using `-l` with `ls` will list files in a detailed format including permissions, number of links, owner, group, size, and the last modification date of each file or directory.

**Output Example:**
```
drwxr-xr-x  5 user group 4096 Oct  7 10:00 Documents
-rw-r--r--  1 user group  123 Oct  7 11:00 file.txt
```

---

## 5. `pwd`
**Description:** Prints the full path of the current working directory.

```bash
pwd
```
**Example:**
Running `pwd` helps you confirm where you are within the filesystem hierarchy, which is particularly helpful when navigating deeply nested directories.

**Output Example:**
```
/home/username/Documents
```

---

## 6. `ls`
**Description:** Lists the contents of a directory.

```bash
ls
```
**Options:**
- `-a` - Includes hidden files (files beginning with `.`).
- `-l` - Shows detailed information about each file.
- `-h` - Makes file sizes human-readable (e.g., `1K`, `234M`).

**Example:**
To list all files, including hidden ones, in the home directory:
```bash
ls -a ~
```

---

## 7. `cd`
**Description:** Changes the current directory.

```bash
cd Documents
```
**Options:**
- `cd ~` - Changes to the home directory.
- `cd ..` - Moves up one directory level.
- `cd /path/to/directory` - Changes to a specific directory.

**Example:**
Navigate up one level from the current directory:
```bash
cd ..
```

---

## 8. `mkdir`
**Description:** Creates a new directory.

```bash
mkdir new_folder
```
**Options:**
- `-p` - Creates parent directories if they do not exist.

**Example:**
Create multiple nested directories in one go:
```bash
mkdir -p projects/2024/webdev
```

---

## 9. `touch`
**Description:** Creates an empty file or updates the timestamp of an existing file.

```bash
touch file.txt
```
**Example:**
To create multiple files at once:
```bash
touch file1.txt file2.txt file3.txt
```

---

## 10. `rmdir`
**Description:** Removes an empty directory.

```bash
rmdir old_folder
```
**Note:**
`rmdir` only works on empty directories. To remove non-empty directories, use `rm -r`.

**Example:**
Attempt to remove a directory called `backup`, but only if it's empty:
```bash
rmdir backup
```

---

## 11. `rm`
**Description:** Removes files or directories.

```bash
rm file.txt
```
**Options:**
- `-r` - Recursively remove a directory and its contents.
- `-f` - Force removal without prompting.

**Example:**
Remove a directory and all its contents without confirmation:
```bash
rm -rf unwanted_folder
```

---

## 12. `open` (macOS only)
**Description:** Opens a file or directory with the default application.

```bash
open file.txt
```
**Example:**
To open the current directory in Finder:
```bash
open .
```

---

## 13. `mv`
**Description:** Moves or renames files and directories.

```bash
mv old_name.txt new_name.txt
```
**Options:**
- Moving a file to a different directory:
  ```bash
  mv file.txt /path/to/destination/
  ```

**Example:**
Rename a directory:
```bash
mv old_folder_name new_folder_name
```

---

## 14. `cp`
**Description:** Copies files or directories.

```bash
cp source.txt destination.txt
```
**Options:**
- `-r` - Copy directories recursively.
- `-i` - Prompt before overwriting existing files.

**Example:**
Copy a folder and its contents to another location:
```bash
cp -r folder/ backup/
```

---

## 15. `head`
**Description:** Displays the first 10 lines of a file by default.

```bash
head file.txt
```
**Options:**
- `-n` - Specify the number of lines to display.

**Example:**
Show the first 5 lines of a file:
```bash
head -n 5 file.txt
```

---

## 16. `tail`
**Description:** Displays the last 10 lines of a file by default.

```bash
tail file.txt
```
**Options:**
- `-n` - Specify the number of lines to display.
- `-f` - Follow the file as new content is added (useful for log files).

**Example:**
Monitor a log file in real-time:
```bash
tail -f /var/log/syslog
```

---

## 17. `date`
**Description:** Displays the current date and time.

```bash
date
```
**Example:**
Format the date in a custom way:
```bash
date "+%Y-%m-%d %H:%M:%S"
```

---

## 18. Redirecting Standard Output
**Description:** Redirects the output of a command to a file.

```bash
ls > file_list.txt
```
**Options:**
- `>` - Overwrite the file with the output.
- `>>` - Append the output to the file.

**Example:**
Append the list of current files to `file_list.txt`:
```bash
ls >> file_list.txt
```

---

## 19. `cat`
**Description:** Concatenates and displays the content of files.

```bash
cat file.txt
```
**Options:**
- `> newfile` - Redirect output to create a new file.

**Example:**
Combine two files into a new file:
```bash
cat file1.txt file2.txt > combined.txt
```

---

## 20. `less`
**Description:** Allows you to view a file one page at a time, providing better navigation than `cat`.

```bash
less file.txt
```
**Controls:**
- Use `Space` to scroll down, `b` to scroll up, and `q` to quit.

**Example:**
View a large log file with `less` to navigate efficiently.

---

## 21. `echo`
**Description:** Prints a message or value to the terminal.

```bash
echo "Hello, World!"
```
**Example:**
Display the value of an environment variable:
```bash
echo $HOME
```

---

## 22. `wc`
**Description:** Counts lines, words, and characters in a file.

```bash
wc file.txt
```
**Options:**
- `-l` - Count lines.
- `-w` - Count words.
- `-c` - Count characters.

**Example:**
Count the number of lines in a file:
```bash
wc -l file.txt
```

---

## 23. Piping (`|`)
**Description:** Combines two or more commands, using the output of one command as input to another.

```bash
ls | wc -l
```
**Example:**
Find the number of `.txt` files in the current directory:
```bash
ls *.txt | wc -l
```

---

## 24. `sort`
**Description:** Sorts the lines of a file or input.

```bash
sort file.txt
```
**Options:**
- `-r` - Reverse the sort order.
- `-n` - Sort numerically.

**Example:**
Sort a file in descending order:
```bash
sort -r file.txt
```

---

## 25. `uniq`
**Description:** Filters out repeated lines in a file, typically used in combination with `sort`.

```bash
uniq duplicate_lines.txt
```
**Options:**
- `-c` - Prefix each line with the count of occurrences.

**Example:**
Count the number of unique lines in a sorted file:
```bash
sort file.txt | uniq -c
```

---

## 26. Expansions
**Description:** Uses wildcard characters to perform operations on multiple files.

```bash
echo *.txt
```
**Example:**
Delete all `.tmp` files in the current directory:
```bash
rm *.tmp
```

---

## 27. `diff`
**Description:** Compares two files line by line.

```bash
diff file1.txt file2.txt
```
**Options:**
- `-u` - Unified output format (useful for patching).

**Example:**
Show the differences between two configuration files:
```bash
diff -u config_old.txt config_new.txt
```

---

## 28. `find`
**Description:** Searches for files and directories based on criteria.

```bash
find . -name "example.txt"
```
**Options:**
- `-type d` - Search for directories.
- `-type f` - Search for files.

**Example:**
Find all `.log` files modified in the last 7 days:
```bash
find /var/log -name "*.log" -mtime -7
```

---

## 29. `grep`
**Description:** Searches for a pattern within files.

```bash
grep "search_term" file.txt
```
**Options:**
- `-i` - Ignore case.
- `-r` - Search recursively in directories.
- `-n` - Show line numbers.

**Example:**
Find all occurrences of "error" in log files:
```bash
grep -i "error" /var/log/*.log
```

---

## 30. `du`
**Description:** Estimates file space usage of a directory.

```bash
du -h
```
**Options:**
- `-s` - Summarize total.

**Example:**
Display the total size of the `Documents` directory:
```bash
du -sh Documents/
```

---

## 31. `df`
**Description:** Displays file system disk space usage.

```bash
df -h
```
**Options:**
- `-h` - Human-readable output.
- `-T` - Show filesystem type.

**Example:**
View available disk space on all mounted filesystems:
```bash
df -Th
```

---

## 32. `history`
**Description:** Shows a list of previously executed commands.

```bash
history
```
**Options:**
- `!<number>` - Run the command associated with the specified history number.

**Example:**
Run the 50th command in the history list:
```bash
!50
```

---

## 33. `ps`
**Description:** Displays information about running processes.

```bash
ps
```
**Options:**
- `-e` - Show all processes.
- `-f` - Full format listing.

**Example:**
List all processes in a detailed format:
```bash
ps -ef
```

---

## 34. `top`
**Description:** Displays real-time information about system processes, including CPU and memory usage.

```bash
top
```
**Note:**
Press `q` to quit `top`.

**Example:**
To sort processes by memory usage, press `M` while in `top`.

---

## 35. `kill`
**Description:** Kills a process by its Process ID (PID).

```bash
kill 1234
```
**Example:**
To kill a process forcefully:
```bash
kill -9 1234
```

---

## 36. `killall`
**Description:** Kills all processes by name.

```bash
killall firefox
```
**Options:**
- `-9` - Force kill.

**Example:**
Forcefully terminate all instances of Chrome:
```bash
killall -9 chrome
```

---

## 37. `jobs`, `bg`, and `fg`
**Description:** Manages background jobs.

```bash
jobs
bg %1
fg %1
```
**Example:**
List current jobs:
```bash
jobs
```
Move the first job to the background:
```bash
bg %1
```
Bring the first job back to the foreground:
```bash
fg %1
```

---

## 38. `gzip`
**Description:** Compresses files using the gzip format.

```bash
gzip file.txt
```
**Options:**
- `-d` - Decompress a `.gz` file.

**Example:**
Compress multiple text files:
```bash
gzip file1.txt file2.txt
```

---

## 39. `gunzip`
**Description:** Decompresses `.gz` files.

```bash
gunzip file.txt.gz
```
**Example:**
To decompress multiple `.gz` files:
```bash
gunzip *.gz
```

---

## 40. `tar`
**Description:** Creates or extracts tar archives.

**Create an archive:**
```bash
tar -cvf archive.tar directory/
```
**Extract an archive:**
```bash
tar -xvf archive.tar
```
**Options:**
- `-z` - Compress or decompress using gzip.

**Example:**
Create a compressed `.tar.gz` archive:
```bash
tar -czvf archive.tar.gz directory/
```

---

## 41. `nano`
**Description:** Opens the `nano` text editor to edit files.

```bash
nano file.txt
```
**Note:**
Use `CTRL + X` to exit, `Y` to save changes, or `N` to discard changes.

**Example:**
To edit a configuration file:
```bash
sudo nano /etc/hosts
```

---

## 42. `alias`
**Description:** Creates an alias for a command.

```bash
alias ll='ls -la'
```
**Example:**
To make `rm` always prompt before deletion:
```bash
alias rm='rm -i'
```

---

## 43. `xargs`
**Description:** Constructs arguments for a command using input from another command.

```bash
cat files.txt | xargs rm
```
**Example:**
Find all `.txt` files and remove them:
```bash
find . -name "*.txt" | xargs rm
```

---

## 44. `ln`
**Description:** Creates links between files.

**Symbolic link:**
```bash
ln -s /path/to/original /path/to/link
```
**Example:**
Create a symbolic link for a configuration file:
```bash
ln -s /etc/nginx/nginx.conf ~/nginx.conf
```

---

## 45. `who`
**Description:** Shows who is currently logged in to the system.

```bash
who
```
**Example:**
Check who else is logged into the system alongside you:
```bash
who
```

---

## 46. `su`
**Description:** Switches to another user account.

```bash
su username
```
**Example:**
Switch to the root user:
```bash
su -
```

---

## 47. `sudo`
**Description:** Executes a command as the superuser or another user.

```bash
sudo apt-get update
```
**Note:**
Requires the current user to be in the `sudoers` file.

**Example:**
Edit a protected file:
```bash
sudo nano /etc/fstab
```

---

## 48. `passwd`
**Description:** Changes the password for a user.

```bash
passwd
```
**Example:**
Change another user's password (requires superuser privileges):
```bash
sudo passwd username
```

---

## 49. `chown`
**Description:** Changes file or directory ownership.

```bash
chown user:group file.txt
```
**Options:**
- `-R` - Recursively change ownership for a directory and its contents.

**Example:**
Change the owner of all files in a directory:
```bash
chown -R user:group /path/to/directory
```

---

## 50. `chmod`
**Description:** Changes file or directory permissions.

```bash
chmod 755 script.sh
```
**Options:**
- `u` - User permissions.
- `g` - Group permissions.
- `o` - Others' permissions.

**Example:**
Make a file readable and writable only by the owner:
```bash
chmod 600 private.txt
```

---