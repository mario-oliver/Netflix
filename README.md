# Netflix (Clone)

## Summary

We are creating a Netflix clone that utilizes Javascript, Typescript, React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth, and Vercel.

## Sections

### Authentication Page

Implementing responsive sites with Tailwind is simple. For the Auth site: we are utilizing the following combination of tags: - bg-black - lg:bg-opacity-50
To create a responsive parent Div. Essentially, the background image will have a black overlay of 50 on large screens. Once we shrink the site into a smaller size, the overlay disappears and we move into a black screen, giving us the illusion of responsiveness (illusion?).

We are utilizing a useCallback() hook to change the page elements from a Login to a Register. This changes key text and populates a username input field.

Finally, we created a React Component called Input to populate each of our necessary inputs. We created a cool translate and hover effect utilizing the peer Tailwind syntax to have two items (the label and input) determine each other's state based on focus. Check it out!

To keep our pages safe, we are using JWT. The lib/serverAuth.ts contains the controller code for our session (JWT and session info with proper validation). Our app knows it's using JWT thanks to our [..nextauth] strategy.session.jwt object that we created.

### Installing and Configuring Prisma, MongoDB, and NextAuth

#### Prisma and MongoDB

Running the following commands:

- `npm install prisma --save-dev`
- `npx prisma init`

Creates our /prisma folder with the schema.prisma. We changed our config to be MongoDB. This changes our .env to now point to a placeholder mongoDB URL

We then utilize Prisma Client. However, to get it to run correctly we utilize lib/prismadb.ts & global.d.ts. The implementation functions normal for production, but prevents the spinning up of a ton of prisma instances during hot reloading of next.js.

Once the models are created run the below command to create your collections using the corresponding models.

- 'npx prisma db push"

#### NextAuth

Install:

- npm install next-auth
- npm install bcrypt
- npm i -D @types/bcrypt

Create the [...nextauth].ts file in api/ folder. Here we create a host of things, including the logic for Credentials and how we authorize credentials, finding unique user, validating proper email and password inputs, and return that user. We also include important Jason Web Token logic and provide new env variables for secrets.

This page will have three providers:

- Credentials -> our custom password and email provider that will be connected to the /auth page via a register api endpoint and a next-auth signIn() method
- GoogleProvider
- GithubProvider

The third-party federation will utilize next-auth/providers import and a next-auth/prisma adapter.

`npm install @next-auth/prisma-adapter`

To get the clientId and clientSecret for Github visit github > settings > developer settings (at the bottom) > Oath Apps. Create the app. For running in development, have the URL's point to http://localhost:3000. This will have to change in production. Then create a front-end function that calls signIn() and passes in the 'github' credentials.

For Google, go to Google Developer Console > Create New project > Create. Now go into the project > Search Bar > API & Services > Oath Consent Screen > External > Create. Now input the fields (only the required and just save and continue). Go to Credentials > Create Credentials > Oath client Id > Web Applicaiton and then input only the Authorized redirect URLs > Add URI > and in URL -> http://localhost:3000/api/auth/callback/google > Create and input the Client secret and Id into .env
