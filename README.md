# Netflix (Clone)

## Summary

We are creating a Netflix clone that utilizes Javascript, Typescript, React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth, and Vercel.

## Sections

### Auth

Implementing responsive sites with Tailwind is simple. For the Auth site: we are utilizing the following combination of tags: - bg-black - lg:bg-opacity-50
To create a responsive parent Div. Essentially, the background image will have a black overlay of 50 on large screens. Once we shrink the site into a smaller size, the overlay disappears and we move into a black screen, giving us the illusion of responsiveness (illusion?).

We are utilizing a useCallback() hook to change the page elements from a Login to a Register. This changes key text and populates a username input field.

Finally, we created a React Component called Input to populate each of our necessary inputs. We created a cool translate and hover effect utilizing the peer Tailwind syntax to have two items (the label and input) determine each other's state based on focus. Check it out!
