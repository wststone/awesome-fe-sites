import { component$ } from '@builder.io/qwik';
import SiteTitle from "~/components/SiteTitle";
import List from './card-mode/List';
import HotSites from "~/components/hot-sites";


export default component$(() => {
  return (
    <div class='dark:bg-#28282a p-20px'>
      <SiteTitle></SiteTitle>
      <HotSites></HotSites>
      <List></List>
    </div>
  )
});
