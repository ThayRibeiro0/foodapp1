## FOODSAPP1 with React, Typescript, Next.js, Tailwind Css.

### Installation

To start the program I used at April, 2024(This it was valid at this time - Verify updates): 
- 'npx create-next-app@latest 'foodapp1'

## It ask some questions: 

- Ok to proceed? (y)
- Would you like to use TypeScript? … Yes
- Would you like to use ESLint? … Yes
- Would you like to use Tailwind CSS? … Yes
- Would you like to use `src/` directory? … No
- Would you like to use App Router? (recommended) … Yes
- Would you like to customize the default import alias (@/*)? … No


Open the 'code foodapp1' that is the name of this project. To test if the project works I used 'npm install' and 'npm run dev' and it will open at the 'http://localhost:3000/' the link with the weblik.

## Nextjs:
All the folder that have inside app and this folder(about) have the file with name page.tsx this page will treated like a route to acess at the http://localhost:3000/foldername after test delete folder(about): Install the extension: Simple React Snippets that help with the shortcuts and run:
- 'sfc'
And it create a function to you automatically.
Layouts: It is around all the application exemple If up the name {children} at the body I write 'layout' it will appear in all the pages of the project remember the header.
All the components running for the server components its rederized of the side of the servidor, where I can't have a useState for exemple if u want add interactivity to the application and the state its a activity Inter that we need put and import 'useclient' and you dont have u dont put. 

### Figma
To the project it was created with a figma design based in the iFood: https://www.figma.com/

### Diagrams
A diagram made to do the database used the site to draw how will be the database and the datas that we could have: https://app.diagrams.net/: 
<!-- Restaurant: ID [PK], Name, Image URL, Delivery Fee, Delivery Time;
Restaurant Category: ID [PK], Restaurant ID [FK], Category ID [FK];
Category: ID[PK], Name, Image URL;
Products: ID [PK], Restaurant ID [FK], Category: ID [PK], Name, Image URL, Description, Price, Discount Percentage;
Order Product: ID [PK], Products ID [PK], Order ID [PK], User ID [PK], Email, Password;   
Order: ID [PK], User ID [PK], Email, Password; 
User: ID [PK], Name, Email, Password; (Google Authentication based at the User database)
User WishList: ID [PK], User ID [PK], Restaurant ID [FK]; -->

### Prisma
After see the base of how will be the app and do the database base I start to do the setup of the Next.Js with Prisma: https://www.prisma.io/docs/getting-started/quickstart

1. Then, install the Prisma CLI as a development dependency in the project::
   - 'npm install prisma --save-dev'
3. Finally, set up Prisma ORM with the init command of the Prisma CLI
   - 'npx prisma init --datasource-provider database'
In this case will be postgresql
  - 'npx prisma init --datasource-provider postgresql'
That will create a schema to all database and there can start to create the databse based with the data above. The file

- File name: .env

have the url of the database and it will be used for the prisma but need to put it at the

- File name: .gitignore.
  
Made this commit the project using the best practices where you give name to you commits: https://www.conventionalcommits.org/en/v1.0.0/
Here is a setup of the app then can use 'chore' to do this commit:
  - 'git init'
  - 'git add .'
  - 'git commit -m "chore: ⚙ add initial prisma schema"'

After this we need upload the database and we can use docker or neondb: https://neon.tech/ signup and get start using the name of your project(Food App1) and create a project and it create a Connection string and show it a pop up screen and you copy and paste at the 

- File name: .env

without the '?sslmode=require' 

and also put to see the owner and at the terminal run: 

  - 'npx prisma migrate dev --name init_database' 

and run. This will create a migration at your database from a state X(empty) to other(with data). After run this at will create a folder 

- File name: migrations

at the project and at the website where you have the login https://neon.tech/ it will create the database to you and u commit again: 

- chore: ⚙ add first migration.

### docker-compose up
with docker you can create the docker.compose.yaml and type that settings and put also at the 

- File name: .env

after this run it:

  - 'https://hub.docker.com/_/postgres/'

at the terminal you run a new docker 

  - 'docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 -v \Users\username\Downloads\postgres:/var/lib/postgresql/data -d postgres'

and 
  - 'docker ps'

at the 'DBenver: 'https://dbeaver.io/download/' you can see if it is working only put the password, test the connection and finish and you can see the folders. Direct at the VSCode I create the document docker.compose.yaml and pass that information inside after at the terminal 

  - 'docker-compose up -d'.

### ... Continue prisma
To populate the database you can create a file inside of the prisma called 

- File name: seed.ts

after this go to 

- File name: package.json

and put after scripts 
  - "prisma": {"seed": "ts-node ./prisma/seed.ts"},

And after this you can install 

  - 'npm install -D ts-node'

that is a dependence to development of this application, after 

  - 'npx prisma db seed'

where will make our data works creating them, to check if works look for https://neon.tech/ website in your project and tables, you can see the data of there that you create and remember the 

- File name: .env

will delete this file to the github then you will need add again to run 

  - '.env and inside 'DATABASE_URL=" " 

until neondb to work and you can find this URL at you dashboard in connection string https://neon.tech/.

## Lib Shadcn Ui:
This lib install a folder lib and the file utils.ts at the project and at the Webiste: https://ui.shadcn.com/ we can use a lot of components from there and to this need to install each components that I want but the first to start use it run the shadcn-ui init command to setup your project: 'npx shadcn-ui@latest init'. After answer the questions:

 - Ok to proceed? (y)
 - Which style would you like to use? › Default
 - Which color would you like to use as base color? › Slate
 - Would you like to use CSS variables for colors? › no / yes
   
After if I want to add a card: https://ui.shadcn.com/docs/components/card. I will need to install it: 
  - 'npx shadcn-ui@latest add card'

and this will create a new component to me that call ui card and I can edit it at the code.
We can change the documents to the folder app(components and lib) this dont have nothing of page.tsx this dont will be a route and update the 

- File name: components.json

to

  - "aliases": {"components": "@/app/_components","utils": "@/app/_lib/utils"}

and put _ at the components like _components and _lib to be clear that this its not a route. then to see if it works we can install other components from this lib like button: 

  - 'npx shadcn-ui@latest add button'
  - 'npx shadcn-ui@latest add input'

if it put inside the folder components/ui it works. Also update the globals.css with new colors because what have its this lib that bring to us and we want the colors of the project that is being created then take off and create the new colors. Also good remember this lib also use Tailwind Css.

Have other option like shadcn ui like material ui but maybe is not the best: https://mui.com/material-ui/

### Tailwind CSS
Website: https://tailwindcss.com/docs/installation
It's a framework that help us to style our application using 'classes' and to use it install the: 

  - Extension: 'Tailwind CSS IntelliSense'

after this you can start use it and all the doc bring how use it put className="" and the configurantion that you need that the tailwind bring to us. 

### Prettier - Automatic Class Sorting to the Tailwind
And also to use this framework is good to have a ordination default to this classes be better to look it at the website: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier we have more about it also to do this we install this command 
  
  - 'npm install -D prettier prettier-plugin-tailwindcss'

and then add the plugin to your Prettier configuration file with the name of 

- File name: '.prettierrc'

and inside you pasta this configuration: '{ "plugins": ["prettier-plugin-tailwindcss"]} and it formmat the taildwind code, also install the extension at the vscode 

  - Extension: 'Prettier - Code formatter'.

This file 

- File name: _.eslintrc.json_

also help us to standardize files principal if you need to work with a group of people like the prettier.

### Git Hooks
But if the new person at the group dont have it? We can use the git hook: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks this way we can put that the prettier and the .eslintrc.json need to be executed before each commits. To this we can use the tool that call Husky.

### Husky
This Lib that will run that automatically is the website with this tool https://www.npmjs.com/package/husky. To install it we can put like a development's dependence because we dont need it at production: 
  - 'npm install -D husky lint-staged'

To setup we can go at their documentation: https://typicode.github.io/husky/get-started.html and install:

  - 'npx husky init'

and it create a folder at the project .husky > pre-commit being necessary run the 

  - 'npx eslint --fix /app'

but if run this will run and all the project but for dont be a trouble at a big project we can do for doc edited before the commit 

  - 'npx lint-staged'

from the stage that the project it was edited. After this create a file 

- File name: 'lintstagedrc.json'

and inside we insert the data: 
  - {
  "*.ts?(x)": [
    "eslint --fix",
    "prettier --write"
  ]
}

    
Then this we get all the files of the commit and run what its necessary before it. To test it we can create a variable to the page.tsx to the eslint show a error because of this, after at the eslint file add rules: 

- File name: .eslintrc.json

   - {
  "extends": "next/core-web-vitals",
  "rules": {
    "no-unused-vars": "error"
           }
   }

and also have the extension of the eslint 

- Extension: 'ESLint'

installed at the vsCode and it will show the error.

### Conventional Commits
Website: https://www.conventionalcommits.org/en/v1.0.0/
We can create a git hook to verify if the message of the commit its compatible with this conventional commits to do this we can use the lib _git-commit-msg-linter_ that will make this verification automatically and to install we use: 

- 'npm i git-commit-msg-linter'
- 'npm list eslint'

and to use it we need to get crtl + f to find at the page _Work With Husky 5_ and copy and pasta at a file at the husky folder together with pre-commit called 

- File name: 'commit-msg'

the code: 

- #!/bin/sh
. "$(dirname "$0")/_/husky.sh"

.git/hooks/commit-msg $1


### Others

To commit first you can move the files to the staged changes and check at the terminal the status of each documents with:
  - 'git status'

fixing the utfs.io:
- /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io'],
    },
  };
export default nextConfig;
  

Command identification:
- Windows: Shift + Alt + F
- On Mac: Shift + Option + F
- Linux: Ctrl + Shift + i

Generated Columns: A column that depends of other columns(price.ts have the exemple that is made at the code but have other way to do it): https://www.postgresql.org/docs/current/ddl-generated-columns.html

HSL Color - HSL Calculator: https://www.w3schools.com/colors/colors_hsl.asp

select item + command + d + command + d and type to write the same thing to the same words

Link and Router: The Link have the tool to pre-facting when the Next see that have a icon that go take a user to the page2 at make it to be more smood the change.
userRouter only to client component

1 rem === 6 px 
16 / 6 = 0.375rem

command + . === delete all unused imports
