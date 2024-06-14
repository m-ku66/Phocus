export default function Home() {
  return (
    <>
      <div className="container max-w-full h-screen flex flex-col px-8 bg-transparent">
        Hello world. This is the home page.
      </div>
    </>
  );
}

/**
 * Resource for Next.js authentification: https://next-auth.js.org/configuration/initialization#route-handlers-app
 * Google authentification for Next.js resource: https://next-auth.js.org/providers/google
 *
 * Next, you have to create a project on the google cloud platform in order
 * to gain  access to a client key and client secret. Create the project then
 * navigate to APIs & Services
 * (free users get 12 projects for free)
 * Google client key and secret resource: https://cloud.google.com/
 *
 * After generating a client key and secret and implementing them into the
 * project, you need to create a session provider: https://next-auth.js.org/getting-started/example
 *
 * Go to layout and then wrap this provider component around your header and
 * children react nodes
 *
 * NOTE: the current security rules in firebase allow any authenticated user read and write
 * access to all docs in the db as long as the request is made after a timestamp(today).
 * This is highly insecure and only suitable for testing purposes, but I haven't found
 * any solution towards tightening security without getting insuffecient permission errors,
 * so we'll role with the current rules for now...
 */
