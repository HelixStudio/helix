// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
  useRouteData,
} from "solid-start";
import Router from "./components/Router";
import "./root.scss";
import { loadTheme, userData } from "./routes/settings";
import { isClient } from "./utils/db";
import { useUserSessionOrFail } from "./utils/auth";

export default function Root() {
  // const user = useUserSessionOrFail();
  // if (isClient() && user() != null && user() != undefined) {
  // loadTheme(user()?.theme!);
  // alert(user()?.theme);
  // }
  return (
    <Html lang="en" class="zinc-bg green-fg">
      <Head>
        <Title>Helix</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading</div>}>
            <Router />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
