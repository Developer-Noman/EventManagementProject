import Head from "next/head";

import EventList from "../components/events/events-list";
import { getFeaturedEvents } from "../helpers/api-util";

function homePage(props) {
  return (
    <div>
      <Head>
        <title>events project</title>
        <meta name="descrption" content="I am description" />
      </Head>

      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default homePage;
