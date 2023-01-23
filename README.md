# kudos-board
work in progress 

Created the UI: 
- the navbar: leads to the board page which will evenetually show all the retrieved messages from the database 
- the header: leads to the home page which loads the form 
- the form: a submit button, the textarea, and a enter name 

Created the board DB: 
kudos table 
- primary key = ID (auto increment, not null, int) 
- name (varchar(100), not null) 
- message (varchar(255), not null) 

Working on Connecting the DB: 
- figuring out how to connect the DB successfully 
-  some bugs: error when connecting, error -2 and or econ refused, 

NEXT GOALS: 
- writing out the onSubmit function to insert into the DB 
- creating a retrieve all messages function to query the DB 
- hook the backend to the front-end 
