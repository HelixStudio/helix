import { createRouteData, useRouteData } from "solid-start";
import { db } from "~/db";

export function routeData() {
  return createRouteData(async () => {
    const users = await db.user.findMany({});
    return JSON.stringify(users);
  });
}

export default function Home() {
  const user = useRouteData<typeof routeData>();

  return (
    <main>
      <h1>Hello {user()}!</h1>
    </main>
  );
}
