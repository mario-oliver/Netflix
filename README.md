# Netflix (Clone)

## Summary

We are creating a Netflix clone that utilizes Javascript, Typescript, React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth, and Vercel.

## Sections

### Auth

Implementing responsive sites with Tailwind is simple. For the Auth site: we are utilizing the following combination of tags: - bg-black - lg:bg-opacity-50
To create a responsive parent Div. Essentially, the background image will have a black overlay of 50 on large screens. Once we shrink the site into a smaller size, the overlay disappears and we move into a black screen, giving us the illusion of responsiveness (illusion?).

We are utilizing a useCallback() hook to change the page elements from a Login to a Register. This changes key text and populates a username input field.

Finally, we created a React Component called Input to populate each of our necessary inputs. We created a cool translate and hover effect utilizing the peer Tailwind syntax to have two items (the label and input) determine each other's state based on focus. Check it out!

### Installing and Configuring Prisma, MongoDB, and NextAuth

Running the following commands:

- `npm install -D prisma`
- `npx prisma init`

Creates our /prisma folder with the schema.prisma. We changed our config to be MongoDB. This changes our .env to now point to a placeholder mongoDB URL

We then utilize Prisma Client. However, to get it to run correctly we utilize lib/prismadb.ts & global.d.ts. The implementation functions normal for production, but prevents the spinning up of a ton of prisma instances during hot reloading of next.js. _Note, we ran into some issues with prisma client. Instead I ran 'npm install prisma --save-dev' and that corrected our environment issues._

- `npm install @prisma/client`

Once the models are created run the below command to create your collections using the corresponding models.

- 'npx prisma db push"
