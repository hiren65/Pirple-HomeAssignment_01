///installation og GIT////////////////////
Go to site https://git-scm.com/download/win
Select download for window or whatever OS
In winow installation choose option added git bash along with window shaell editor.
/////git commands in git bash//////////
create folder for the project.
select folder and right click and choose git bash terminal to start with.
//To iitialize git//
$ git init
//if it is web page project
//create files
$ touch index.html
$ touch style.css
$ touch script.js
//check status
$ git status
// To add file to git
$ git add <file Name>
// To add all files in the directory
$ git add .
// To add specific extention files
$ git add *.<extention>
//To commit file if any change
$ git commit
//And editor open up. press "i"  or "a" to enter edit mode. Press ESC button to exit edit mode.
//To Save   press SHIFT + Z SHIFT + Z (i.e. zz with shift before it)
// to check all commits
$ git log
//To commit specific file if you don`t use perameter -m than editor will popup.
$ git commit  <file name> -m "commmited message"


//from git-hub
…or create a new repository on the command line
echo "# pirple" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:hiren65/pirple.git
git push -u origin master
////////////////
…or push an existing repository from the command line
git remote add origin git@github.com:hiren65/pirple.git
git push -u origin master

//for authentication problem
Open Git Bash.

///Paste the text below, substituting in your GitHub email address.

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
///This creates a new ssh key, using the provided email as a label.

///Generating public/private rsa key pair.
When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

 Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]

///Add your SSH private key to the ssh-agent. If you created your key with a different name,
///or if you are adding an existing key that has a different name, replace id_rsa
//in the command with the name of your private key file.

ssh-add ~/.ssh/id_rsa

/////Copy the SSH key to your clipboard.//////

////If your SSH key file has a different name than the example code, modify the filename to match your
////current setup. When copying your key, don't add any newlines or whitespace.

clip < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
/// ### Adding a new SSH key to your GitHub account
In the upper-right corner of any page, click your profile photo, then click Settings.

Authentication keysIn the user settings sidebar, click SSH and GPG keys.

SSH Key buttonClick New SSH key or Add SSH key.

In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
The key fieldPaste your key into the "Key" field.
The Add key buttonClick Add SSH key.
Sudo mode dialogIf prompted, confirm your GitHub password.


///// to ignore file in git /////////
-create .gitignore file first
-edit file above and add <filename>/
-file name should be without extention
