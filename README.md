# sgt-react
The Student Grade Table is a dynamic web application for teachers who want to record the grades of their students.
# Technologies Used
* React.js
* Node.js
* PostgreSQL
* Express
* Webpack 4
* HTML 5
* CSS 3
* Bootstrap 4
* AWS EC2
# Live Demo
Link: https://grade-table.masonkeiser.com/
# Features
* User can view all grades from database in table format
* User can view the average of all the available grades
* User can input a new grade info into the database through form submission
* User can delete grades from the database
# Development
## System Requirements
* Node.js 10 or higher
* NPM 6 or higher
* PostgreSQL 10 or higher
# Getting Started
1. Clone this repository:
```
git clone https://github.com/mason-keiser/sgt-react.git
```
2. Locate cloned repository: 
```
cd sgt-react
```
3. Install all dependencies with NPM:
```
npm install
```
4. Start postgreSQL server in terminal:
```
sudo service posgresql start
``` 
5. Create database that you will be using for the site:
```
createdb studentGradeTable
```
6. Import database to PostgreSQL:
```
npm run db:import
```
7. Open a second terminal; navigate to project directory, start pgweb:
```
pgweb --db=studentGradeTable
```
8. Start the project (in another terminal). You can view the application by opening http://localhost:3000 in your browser:
```
npm run dev
```
