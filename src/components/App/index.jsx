import React, { useEffect, Suspense } from "react";

import UsersList from "../UserList";
import { Loading } from "../Loading";

import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import ErrorBoundary from "../../common/ErrorBoundary";

import  "./App.styles.scss";

export const App = () => {
  const { users, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return(
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <main className={"main"}>
      <Form id="search-form" role="search">
        <input
          id="q"
          className={searching ? "loading" : ""}
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="search_username"
          defaultValue={q}
          onChange={(event) => {
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
        />
        <div id="search-spinner" aria-hidden hidden={!searching} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
      <div>
        <Form id="search-form" type="radio">
          <input id="asc" type="submit" name="sort" value="asc" />
          <input id="desc" type="submit" name="sort" value="desc" />
        </Form>
      </div>
      <br />
      <Suspense fallback={<Loading />}>
        {/* <UsersList.component users={users} /> */}
      </Suspense>
    </main>
  </ErrorBoundary>)
};
